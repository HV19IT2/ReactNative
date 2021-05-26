import React, { useState,useEffect } from 'react';
import { Text, View,Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../styles/detailPrd';
import { Icon, Divider, Avatar } from 'react-native-elements';
import { Rating } from 'react-native-elements';
import callApi from '../../api/axios';
import 'intl';
import 'intl/locale-data/jsonp/vi';
import { Textarea } from 'native-base';
const DetailPrd = (props) => {
    const route =props.route
    const id = route.params.id
    const [flower, setflower] = useState({});
    const [cmts, setcmts] = useState([]);
    const [user, setuser] = useState({});
    const navi = props.navigation;
    const [delcmt, setdelcmt] = useState(0);
    useEffect(() => {
        navi.addListener("focus", () =>{
            callApi.get("/user_tmp.php")
                    .then(
                        e=>{
                                setuser(e.data);
                            },
                    )
        })
    }, []);
    useEffect(() => {
        callApi.get("/comment_tmp.php?id_prd="+id).then((response) =>{
            setcmts(response.data)
            // console.log(response.data);
        }
     )  
    }, [user]);
    const delcomment =(id_cmt) =>{
        callApi.get("/delcomment_tmp.php?id_cmt="+id_cmt)
        .then((e) =>{
            // console.log(e.data);
            setdelcmt( delcmt + 1);
        })
    }
    useEffect(() => {
        callApi.get("/comment_tmp.php?id_prd="+id).then((response) =>{
            setcmts(response.data)
        }
     )  
    }, [delcmt]);
    useEffect(() => {
        callApi.get("/index_tmp.php?id_prd="+id).then((response) =>{
           setflower(response.data)
        }
     )  
    }, []);
    const [star, setstar] =useState({});
    useEffect(() => {
        callApi.get("/vote_tmp.php?id_prd="+id).then((response) =>{
            setstar(response.data)
        }
      )  
    }, []);
    const addCart = (id) => {
          callApi.post("/addcart_tmp.php?id_prd="+id)
          .then(
                res => {
                    console.log("add cart success");
                },
          )
         
        };
    const ratingCompleted =(rating)=> {
            console.log("Rating is: " + rating)
          }
    return (
        <ScrollView style={styles.container} >
        <View style={styles.headerDiv}>
            <Text style={styles.nameTx}>{flower.name_prd}</Text>
            <View style={styles.leftDiv}>
                <Text style={styles.label}>Giá: <Text style={styles.priceATx}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(flower.price_prd)}</Text></Text>
                <Text style={styles.priceTx}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((flower.price_prd*(100-flower.discount_prd))/100)}</Text>
                <Text style={styles.label}>Số lượng</Text>
                <Text style={styles.amountTx}>{flower.amount_prd}</Text>
                <Rating
                type='custom'
                style={{
                    left:-10,
                    marginTop:5,
                    marginBottom:5,
                    position:"relative",
                }}
                tintColor={"#4e9f65"}
                ratingBackgroundColor="#969696"
                imageSize={25} 
                readonly 
                startingValue={star.star} />
                <Text style={{ 
                    fontSize:15,
                    color: "white",
                    position:"relative",
                    marginBottom:20
                 }}>({star.tt} Đánh giá)</Text>
                <Icon
                    raised
                    name='cart-plus'
                    type='font-awesome'
                    color='#4e9f65'
                    onPress={() =>addCart(id)}
                    />
            </View>
                <Image style={styles.img}
                source={{
                uri: flower.image_prd,
                }}/>
        </View>
        <View style={styles.bottomDivV}>
        <View style={styles.bottomDiv}>
            <Text style={styles.descTx}>Mô tả</Text>
            <Text style={styles.detailDes}>{flower.desc_prd}</Text>
            
        </View>
        <Divider style={{ width: "100%"}} />
        </View>
        <View style={styles.comment}>
         <View style={styles.inCmt}>
         <Text style={styles.cmtTx}>Bình luận</Text>
         <View style={styles.ava}>
         <Avatar
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            size="small"
            containerStyle={{ backgroundColor:"#ddd", marginRight:10 }}
            />
            <Text style={styles.username}>{user?.username}</Text>
         </View>
          <Textarea
                        style={styles.input}
                        placeholder="Nhập bình luận ..."
                        keyboardType="default"
                    />
            <View style={styles.botCmtIn}>
                <Rating
                type='custom'
                tintColor={"#f0f0f0"}
                ratingCount={5}
                imageSize={20}
                onFinishRating={ratingCompleted}
                style={{ 
                    width:"30%",
                }}
                />  
                 <TouchableOpacity
                style={{ 
                    backgroundColor: "#4e9f65",
                    borderRadius: 7,
                    width: "14%",
                    marginTop:-5,
                    marginLeft:"56%"
                 }}
                //  onPress={handleSubmit(onSubmit)}
                >
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#fff'
                        size={30}
                        />
                </TouchableOpacity>
            </View>
         </View>  
         {Object.keys(cmts)?.map((k)=>{
            return (
            <View key={k} style={{ marginBottom:10 }}>
                <View style={styles.Cmtdetail}>
                     { cmts[k].id_user==user?.id_user &&
                       
                             <Icon
                            raised
                            containerStyle={{ position:"absolute", right:0 }}
                            size={15}
                            name='trash'
                            type='font-awesome'
                            color='red'
                            onPress={()=>delcomment(cmts[k].id_cmt)}
                            />
                    
                    }
                        <View style={styles.ava}>
                        <Avatar
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        size="small"
                        containerStyle={{ backgroundColor:"#ddd", marginRight:10 }}
                        />
                        <Text style={styles.username}>{cmts[k].username}</Text>
                       
                    </View>
                    <Text style={styles.Dcmt}>{cmts[k].detail_cmt}</Text>
                    <View style={styles.Rdate}>
                        <Rating
                            type='star'
                            readonly
                            ratingCount={5}
                            imageSize={14}
                            tintColor={"#f0f0f0"}
                            startingValue={cmts[k].vote_prd}
                            style={{ 
                                width: "18%"
                            }}
                            />
                        <Text style={styles.time}>
                        {cmts[k].created_at}
                        </Text>
                    </View>
                </View>
                    {cmts[k]['cmt_child']?.map((reply,index2)=>{
                        return (
                                    <View style={styles.CmtdetailR} key={index2}>
                                        <View style={styles.ava}>
                                            <Avatar
                                            rounded
                                            icon={{name: 'user-circle', type: 'font-awesome'}}
                                            size="small"
                                            containerStyle={{ backgroundColor:"#ddd", marginRight:10 }}
                                            />
                                            <Text style={styles.username}>{reply.username}</Text>
                                        </View>
                                        <Text style={styles.DcmtR}>{reply.detail_cmt}</Text>
                                            <Text style={styles.timeR}>
                                            {reply.created_at}
                                            </Text>
                                    </View>
                                    )
                    })}
            </View>)
            })}         
        </View>
        </ScrollView>
    );
}
export default DetailPrd;
