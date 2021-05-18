import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Text, View,Image, ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';
import config from '../../api/config';
import styles from '../../styles/detailPrd';
import { Icon } from 'react-native-elements';
import { Rating } from 'react-native-elements';
const DetailPrd = (props) => {
    const route =props.route
    const id = route.params.id
    const [flower, setflower] = useState({});
    const [cmts, setcmts] = useState([]);
    
    useEffect(() => {
        axios.get(config.api+"/index_tmp.php?id_prd="+id).then((response) =>{
           setflower(response.data)
        }
     )  
    }, []);
    useEffect(() => {
        axios.get(config.api+"/comment_tmp.php?id_prd="+id).then((response) =>{
            setcmts(response.data)
            console.log(response.data);
        }
     )  
    }, []);
    const [star, setstar] =useState({});
    useEffect(() => {
        axios.get(config.api+"/vote_tmp.php?id_prd="+id).then((response) =>{
            setstar(response.data)
        }
      )  
    }, []);
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
                    left:"-10",
                    marginTop:"5px",
                    marginBottom:"5px",
                    border: 0 
                }}
                tintColor={"#4e9f65"}
                ratingBackgroundColor="#969696"
                imageSize={25} 
                readonly 
                startingValue={star.star} />
                <Text style={{ 
                    fontSize:"15px",
                    color: "white",
                    position:"relative",
                    marginBottom:"20px"
                 }}>({star.tt} Đánh giá)</Text>
                <Icon
                    reverse
                    name='cart-plus'
                    type='font-awesome'
                    color='#000'
                    onPress={() => console.log('hello')} />
            </View>
                <Image style={styles.img}
                source={{
                uri: flower.image_prd,
                }}/>
        </View>
        <ScrollView style={styles.bottomDiv}>
            <Text style={styles.descTx}>Mô tả</Text>
            <Text style={styles.detailDes}>{flower.desc_prd}</Text>
        </ScrollView>
        <View style={styles.comment}>
        <Text style={styles.descTx}>Bình luận</Text>
                    <Text style={styles.username}>Huy</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập bình luận ..."
                        keyboardType="default"
                    />
                    <TouchableOpacity
                style={{ 
                    backgroundColor: "#4e9f65",
                    borderRadius: 7,
                    width: "15%",
                    position:"absolute",
                    top:"130px",
                    left:"81%",
                 }}
                //  onPress={handleSubmit(onSubmit)}
                >
                    <Text
                    style={{
                        fontSize:18,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#fff",
                        marginTop:8,
                        marginBottom:8,
                    }}
                    >
                        Send
                    </Text>
                </TouchableOpacity>
                <View>
                   
                    {Object.keys(cmts)?.map((k)=>{
                        return (<View key={k}>
                            <Text style={styles.username}>{cmts[k].username}</Text>
                            <Text style={styles.cmt}>{cmts[k].detail_cmt}</Text>
                            <Text style={styles.time}>{cmts[k].created_at}</Text>
                            {cmts[k]['cmt_child']?.map((reply,index2)=>{
                                return (
                                    <View key={index2}>
                                    <Text style={styles.Rusername}>{reply.username}</Text>
                                    <Text style={styles.Rcmt}>{reply.detail_cmt}</Text>
                                    <Text style={styles.Rtime}>{reply.created_at}</Text>
                                   </View>
                                )
                            })}
                        </View>)
                    })}
                    
                </View>
        </View>
        </ScrollView>
    );
}
export default DetailPrd;
