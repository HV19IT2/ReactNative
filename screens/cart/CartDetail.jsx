import React from 'react';
import { Text, View, Image,ScrollView, TouchableOpacity, TouchableHighlight, ToastAndroid, LogBox } from 'react-native';
import {useState,useEffect} from 'react';
import { Icon } from "react-native-elements";
import InputSpinner from "react-native-input-spinner";
import AsyncStorage from '@react-native-async-storage/async-storage';
import callApi from '../../api/axios';
import styles from '../../styles/cartIndex';
import 'intl';
import 'intl/locale-data/jsonp/vi';
const CartDetail = (props) => {
    const navi = props.navigation
    const [cart, setcart] = useState([]);
    const [delitem, setdelitem] = useState(0);
    const [available, setavailable] = useState(false);
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
            callApi.get("/cartdetail_tmp.php")
            .then((e)=>{
                setcart(e.data)
            })
            .catch(err=>{
                // ToastAndroid.show(err.response.data.mess, 
                // ToastAndroid.SHORT
                // );
                // console.log(err.response.data.mess);
            })
        })
    }, []);
    const delitemcart =(id_cart, id_prd) =>{
        callApi.get("/delcartitem_tmp.php?id_cart="+id_cart+"&id_prd="+id_prd)
        .then((e) =>{
            // console.log(e.data);
            setdelitem( delitem + 1);
        })
    }
    useEffect(() => {
            callApi.get("/cartdetail_tmp.php")
            .then((e)=>{
                setcart(e.data)
            })
            .catch(err=>{
                // ToastAndroid.show(err.response.data.mess, 
                // ToastAndroid.SHORT
                // );
                // console.log(err.response.data.mess);
            })
    }, [delitem]);
    const total = ()=>{
        let rs =0;
        cart?.forEach(e => {
            rs+=e?.prd_qty*e?.price_prd*((100-e?.discount_prd)/100)
        });
        return rs;
    }
    const pay = ()=>{
        const cost = total()
        if(cost>0){
            props.navigation.navigate('Payment',{cart: cart})
        }
    }
    const handleQuantity=(id,quantity) =>{
        let index =0;
         cart?.forEach((e,i) => {
            // console.log(e.id_prd,id);
            if(e.id_prd==id) index= i;
        });
        // console.log(index);
        let arr=[...cart]
        let item = {...cart[index]}
        item.prd_qty= quantity
        arr[index]= item

        setcart(arr)
    }
    if(available)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.divPrd}>
                {cart?.map((cartItem,i)=>{
                    return(
                        <View style={styles.divPrdItem} key={i}>
                        <View style={styles.imgPrc}>
                        <Image 
                        style={styles.img}
                        source={{
                            uri: cartItem.image_prd,
                        }}
                            />
                        </View>
                        <View style={styles.Citem}>
                            <Text style={styles.nameP}>
                                {cartItem.name_prd}
                            </Text>
                            <View style={styles.ip}>
                                <InputSpinner 
                            style={{ 
                                shadowColor:true,
                                
                            } }
                            skin="clean"
                            inputStyle={{
                                fontSize :18,
                            }}                  
                                max={cartItem.amount_prd}
                                min={1}
                                step={1}
                                value={cartItem.prd_qty}
                                onChange={(num) => handleQuantity(cartItem.id_prd,num)}
                            />
                            </View>
                        </View>
                        <View style={styles.Ritem}>
                            <View style={styles.icon}>
                                 <Icon
                                color="red"
                                name="trash-outline"
                                size={25}
                                type='ionicon'
                                onPress={() => delitemcart(cartItem.id_cart, cartItem.id_prd)}
                                />
                            </View>
                            <Text style={styles.price}>
                                
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItem.prd_qty*cartItem.price_prd*(100-cartItem.discount_prd)/100)}
                            </Text>
                        </View>
                    </View>
                    )
                })}
              </ScrollView>           
            <View style={styles.divPay}>
                <View style={styles.cost}>
                   <Text style={styles.tx}>Tổng tiền</Text>
                   <Text style={styles.Txc}>
                       
                   {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total())}
                   </Text>
                </View>
                <View style={styles.pay}>
                <TouchableOpacity
                    style={styles.btnP}
                    onPress={() => pay()} 
                    >
                        <Text
                             style={styles.TxP}
                        >
                            Đặt hàng ngay
                        </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        
        )
    else
        return(
            <View style={{ 
                width:"100%", 
                height:"100%", 
                display: "flex", 
                justifyContent: "center",
                paddingHorizontal:"10%"
             }}>
                <TouchableHighlight 
                underlayColor="#4e9f65" 
                style={{ borderRadius:10 }}
                onPress={() =>navi.navigate('User') }>
                <Text
                style={{ 
                    fontSize:25, textAlign: "center",fontWeight: "600",
                    backgroundColor:"white",
                    height:80,
                    paddingVertical:20,
                    borderRadius:10
                }}
                > Hãy đăng nhập</Text>
                </TouchableHighlight>
            </View>
        )
    }
    export default CartDetail;
