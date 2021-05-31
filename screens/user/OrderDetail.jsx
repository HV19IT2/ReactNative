import React from 'react';
import {useState,useEffect} from 'react';
import {  Text, View, TouchableOpacity, ScrollView, Button, Image, ToastAndroid  } from 'react-native';
import RootAuth from '../login/RootAuth';
import callApi from '../../api/axios';
import styles from '../../styles/orderDt';
import 'intl';
import 'intl/locale-data/jsonp/vi';


const OrderDetail = (props) => {
    const route = props.route
    const id = route.params.id
    // console.log("OD"+id);
    const [order, setorder] = useState([]);
    useEffect(() => {
        callApi.get("/orderdetail_tmp.php?id_bill="+id).then((response) =>{
            setorder(response.data)
            // console.log(response.data);
        }
     )  
    }, []);
    const cancelOrder = (id_bill) =>{
        callApi.get("/cancelOrder_tmp.php?id_bill="+id_bill)
        .then((response) =>{
                console.log(response.data.mess);
                ToastAndroid.show(response.data.mess,ToastAndroid.SHORT);
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'User' }],
                  });
        })
    }
    const updateOD = (id_bill) =>{
        callApi.get("/updateStaOD_tmp.php?id_bill="+id_bill)
        .then((response) =>{
                console.log(response.data.mess);
                ToastAndroid.show(response.data.mess,ToastAndroid.SHORT);
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'User' }],
                  });
        })
    }
    return (
        <View style={styles.container}>
                <View style={styles.containHead}>
                    <View style={styles.cHinH}>
                        <Text style={styles.TxcHinH}>
                            Đơn hàng MVDF{id}
                        </Text>
                        {(order[0]?.status_delivery == 0 &&
                            <View
                                style={styles.wAit}>
                            <Text style={{ textAlign:"center", fontSize:16, color:"#ccc"}}>
                                Chờ xác nhận
                            </Text>
                        </View> 
                        )||(order[0]?.status_delivery == 1 &&
                            <View
                                style={styles.ing}>
                            <Text style={{ textAlign:"center", fontSize:16, color:"#fff"}}>
                                Đang giao hàng
                            </Text>
                        </View> 
                        )||(order[0]?.status_delivery == 2 &&
                            <View
                                style={styles.fn}>
                            <Text style={{ textAlign:"center", fontSize:16, color:"#fff"}}>
                                Đã giao hàng
                            </Text>
                        </View> 
                        )
                        }
                        
                    </View>
                    <View style={styles.cHinC}>
                        <ScrollView style={styles.scrcHinC}>
                            {Object.keys(order)?.map((i)=>{
                                return(
                                <View style={styles.item} key={i}>
                                    <View style={styles.Litem}>
                                        <Image style={styles.img}
                                            source={{ 
                                                uri: order[i].image_prd
                                            }}
                                        />
                                    </View>
                                    <View style={styles.Citem}>
                                        <Text style={styles.prd}>{order[i].name_prd}</Text>
                                        <Text style={styles.prd}> SL : {order[i].amount_prd}</Text>
                                    </View>
                                    <View style={styles.Ritem}>
                                    <Text style={styles.price}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order[i].amount_prd*order[i].price_prd)}
                                    </Text>
                                    </View>
                                </View>
                                    
                                )
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.cHinB}>
                        <View style={styles.vLcHinB}>
                            <View style={styles.TxV}>
                                <Text style={styles.Tx}>Tổng tiền hàng </Text>
                                <Text style={styles.Txprice}>
                                   {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order[0]?.price_total)}
                                </Text>     
                            </View>
                            <View style={styles.TxV}>
                            <Text style={styles.Tx}>Phí vận chuyển </Text>
                            <Text style={styles.Txprice}>
                                   {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(0)}
                                </Text> 
                            </View>
                            <View style={styles.hr}></View>
                            <View style={styles.TxV}>
                            <Text style={styles.Tx}>Thành tiền</Text>
                            <Text style={styles.TxpriceF}>
                                   {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order[0]?.price_total)}
                            </Text>     
                            </View>            
                        </View>
                    </View>
                </View>
                <View style={styles.containBot}>
                        <Text style={styles.TxcHinH}>
                        Thông tin giao hàng
                        </Text>
                    <View style={styles.botC}>
                        <View style={styles.LbotC}>
                            <Text style={styles.tt}>
                                Địa chỉ đi
                            </Text>
                            <Text style={styles.dt}>
                               Viet Nam, Hoi An
                            </Text>
                            <Text style={styles.tt}>
                                Ghi chú
                            </Text>
                            <Text style={styles.dt}>
                                {order[0]?.oder_notes}
                            </Text>
                            <Text style={styles.tt}>
                                Liên lạc
                            </Text>
                            <Text style={styles.dt}>
                                {order[0]?.phone_num}
                            </Text>
                        </View>
                        <View style={styles.RbotC}>
                        <Text style={styles.tt}>
                                Địa chỉ nhận
                            </Text>
                            <Text style={styles.dt}>
                               {order[0]?.full_name}, {order[0]?.address_delivery}
                            </Text>
                            <Text style={styles.tt}>
                                Thời gian đặt hàng
                            </Text>
                            <Text style={styles.dt}>
                                {order[0]?.time_order}
                            </Text>  
                        </View>
                    </View>
                </View>
                { ( order[0]?.status_delivery == 0 &&
                    <View style={styles.cancelDH}>
                            <TouchableOpacity style={styles.btnCancel}
                            onPress={() => cancelOrder(order[0]?.id_bill) }
                            >
                                <Text style={styles.TxCancel}>
                                    Hủy đơn hàng
                                </Text>
                            </TouchableOpacity>
                    </View>
                 )||(order[0]?.status_delivery == 1 && 
                    <View style={styles.cancelDH}>
                    <TouchableOpacity style={styles.btnOK}
                    onPress={() => updateOD(order[0]?.id_bill) }
                    >
                        <Text style={styles.TxOK}>
                           Xác nhận đã thanh toán
                        </Text>
                    </TouchableOpacity>
                    </View>
                )}
        </View>
    );
}

export default OrderDetail;