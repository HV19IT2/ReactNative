import React, { useState,useEffect } from 'react';
import { Text, View,Image, ScrollView, TouchableOpacity, ToastAndroid, } from 'react-native';
import { Icon, Divider, Avatar } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { Textarea } from 'native-base';
// import { Rating } from 'react-native-elements';
import { Rating } from 'react-native-ratings';
import callApi from '../../api/axios';
import styles from '../../styles/detailPrd';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/vi';
const DetailPrd = (props) => {
    const route =props.route
    const id = route.params.id
    const navi = props.navigation;
    const [flower, setflower] = useState({});
    const [cmts, setcmts] = useState([]);
    const [user, setuser] = useState({});
    const [delcmt, setdelcmt] = useState(0);
    const [addCmt, setaddCmt] = useState(0);
    const [vote, setvote] = useState(2.5);
    const [star, setstar] =useState({});
    const [available, setavailable] = useState(false);
    const { handleSubmit, control } = useForm();
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    useEffect(() => {
        navi.addListener("focus", () =>{
            async function checkUserSignedIn(){
                try {
                   let value = await AsyncStorage.getItem('auth');
                   if (value != null){
                    setavailable(true) 
                   }
                   else {
                    setavailable(false) 
                  }
                } catch (error) {
                  // Error retrieving data
                }
            }
            checkUserSignedIn()
            })
    },[])
    useEffect(() => {
        navi.addListener("focus", () =>{
            callApi.get("/user_tmp.php")
            .then(
                e=>{
                        setuser(e.data);
                    })
            .catch(err=>{
                // ToastAndroid.show(err.response.data.mess, 
                // ToastAndroid.SHORT
                // );
            })
        })
    }, []);
    const delcomment =(id_cmt) =>{
        callApi.get("/delcomment_tmp.php?id_cmt="+id_cmt)
        .then((e) =>{
            setdelcmt( delcmt + 1);
        })
    }
    useEffect(() => {
        callApi.get("/index_tmp.php?id_prd="+id).then((response) =>{
            setflower(response.data)
        })  
    }, []);
    useEffect(() => {
        callApi.get("/vote_tmp.php?id_prd="+id).then((response) =>{
            setstar(response.data)
        }
      )  
    }, [delcmt,addCmt]);
    const addCart = (id) => {
        callApi.post("/addcart_tmp.php",(id))
        .then(
            res => {
                    ToastAndroid.show("Giỏ hàng: +1", 
                    ToastAndroid.SHORT
                    );
                })
        .catch(err=>{
            ToastAndroid.show(err.response.data.mess, 
            ToastAndroid.SHORT
            );

        })
            };
    const ratingCompleted =(rating)=> {
        setvote(rating)
    }
    const addComment = (data) =>{
        callApi.post("/addcmt_tmp.php",{id, vote, data})
        .then(
            res => {
                setaddCmt(addCmt + 1);
            })
        }      
    useEffect(() => {
        callApi.get("/comment_tmp.php?id_prd="+id).then((response) =>{
            setcmts(response.data)
        })  
    }, [user,delcmt,addCmt]);
return (
    <ScrollView style={styles.container} >
        <View style={styles.headerDiv}>
        {  flower.discount_prd != 0 &&
            <View style={styles.itemDs}>
            <Text style={styles.disc}>
              {Intl.NumberFormat("en-US", {
                  style: "percent",
                  signDisplay: "exceptZero"
              }).format(-flower.discount_prd/100)}</Text>
          </View>
          }
            <Text style={styles.nameTx}>{flower.name_prd}</Text>
            <View style={styles.leftDiv}>
                <Text style={styles.label}>Giá: <Text style={styles.priceATx}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(flower.price_prd)}</Text></Text>
                <Text style={styles.priceTx}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((flower.price_prd*(100-flower.discount_prd))/100)}</Text>
                <Text style={styles.label}>Số lượng</Text>
                <Text style={styles.amountTx}>{flower.amount_prd}</Text>
                <Rating
                type='custom'
                style={{
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
                 }}>{Intl.NumberFormat('en-US',{ maximumFractionDigits: 1 }).format(star.star)} ({star.tt} Đánh giá)</Text>
                <View>
                    <Icon
                    raised
                    name='cart-plus'
                    type='font-awesome'
                    color='#4e9f65'
                    onPress={() =>addCart(id) }
                    />
                </View>
                
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
        </View>
        <Divider style={{ width: "100%"}} />
        <View style={styles.comment}>
            <View style={styles.inCmt}>
            <Text style={styles.cmtTx}>Bình luận</Text>
            { available &&
                <View>
                    <View style={styles.ava}>
                    <Avatar
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                        size="small"
                        containerStyle={{ backgroundColor:"#ddd", marginRight:10 }}
                        />
                        <Text style={styles.username}>{user?.username}</Text>
                    </View>
                    <Controller
                        control={control}
                        render={({field: { onChange, onBlur, value }}) => (
                                <Textarea
                                    style={styles.input}
                                    placeholder="Nhập bình luận ..."
                                    keyboardType="default"
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                />
                                )}
                        name="cmt_dt"
                        rules={{ required: true }}
                        defaultValue=""
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
                        // paddingVertical:5,
                        width: "30%",
                        marginLeft:"40%"
                        }}
                    onPress={handleSubmit(addComment)} 
                   // onPress={()=> reset({ cmt_dt: " " })}
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
            }
            </View>  
         {Object.keys(cmts)?.map((k)=>{
            return (
            <View key={k} style={{ marginBottom:10 }}>
                <View style={styles.Cmtdetail}>
                     { cmts[k].id_user==user?.id_user && available &&
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
