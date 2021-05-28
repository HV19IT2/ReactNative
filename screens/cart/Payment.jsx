import React, { useEffect, useState } from 'react';
import { Text, View, Image,ScrollView,TouchableOpacity, ToastAndroid } from 'react-native';
import styles from '../../styles/pay';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import 'intl';
import 'intl/locale-data/jsonp/vi';
import callApi from '../../api/axios';
const Payment = (props) => {
    const route =props.route;
    const cart = route.params.cart;
    const { handleSubmit, control } = useForm();
    const total = ()=>{
        let rs =0;
        cart?.forEach(e => {
            rs+=e?.prd_qty*e?.price_prd*((100-e?.discount_prd)/100)
        });
        return rs;
    }
    const onPay = (data) => {
      const cost = total()
      callApi.post("/payment_tmp.php",{data,cost,cart})
      .then(
            res => {
                console.log(res.data);
                    console.log("pay success");
                    ToastAndroid.show("Đặt hàng thành công", ToastAndroid.SHORT);
                    props.navigation.navigate("User")
            })
      .catch((e)=>console.log("loi r"))

    }
    return (
        <View style={styles.div1}>
                <View style={styles.div2}>
                <ScrollView style={styles.div2S}>
                    <Text style={styles.title}>Thông tin giao hàng</Text>
                    <View style={styles.dtV}>
                        <View style={styles.dtVhe}>
                        <View style={styles.dtVitem}>
                            <Text style={styles.tt}>Họ và tên</Text>
                            <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput style={styles.ip}
                            placeholder="Nhập Họ và tên"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            />
                            )}
                            name="fname"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        </View>
                        <View style={styles.dtVitem}>
                            <Text style={styles.tt}>Số điện thoại</Text>
                             <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput style={styles.ip}
                            placeholder="Nhập số điện thoại"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            />
                            )}
                            name="pnum"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        </View>
                        </View>
                        <View style={styles.dtVitemB}>
                            <Text style={styles.tt}>Địa chỉ</Text>
                            <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput style={styles.ip}
                            placeholder="Nhập địa chỉ"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            />
                            )}
                            name="add"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        </View>
                        <View style={styles.dtVitemB}>
                            <Text style={styles.tt}>Ghi chú</Text>
                            <Controller
                            control={control}
                            render={({field: { onChange, onBlur, value }}) => (
                            <TextInput style={styles.ip}
                            placeholder="Nhập ghi chú"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            />
                            )}
                            name="note"
                            defaultValue=""
                        />
                        </View>
                    </View>
                </ScrollView>
                </View>
                <View style={styles.div3}>
                    <ScrollView style={styles.sc}>
                {cart?.map((item,i)=>{
                    return(
                    <View style={styles.div4} key={i}>
                        <View style={styles.Litem}>
                            <Image style={styles.img}
                                source={{ 
                                    uri: item.image_prd
                                }}
                            />
                        </View>
                        <View style={styles.Citem}>
                            <Text style={styles.prd}>{item.name_prd}</Text>
                            <Text style={styles.prd}>SL : {item.prd_qty}</Text>
                        </View>
                        <View style={styles.Ritem}>
                        <Text style={styles.price}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price_prd*item.prd_qty*(100-item.discount_prd)/100)}
                        </Text>
                        </View>
                    </View>
                    )
                })}
                    </ScrollView>
                </View>
                <View style={styles.div5}>
                    <View style={styles.cost}>
                    <Text style={styles.tx}>Tổng tiền</Text>
                    <Text style={styles.Txc}>
                        
                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total())}
                    </Text>
                    </View>
                    <View style={styles.pay}>
                    <TouchableOpacity
                        style={styles.btnP}
                        onPress={handleSubmit(onPay)} 
                       
                        >
                            <Text
                                style={styles.TxP}
                            >
                                Thanh toán
                            </Text>
                    </TouchableOpacity>
                    </View>
                </View>


        </View>
        
    );
}

export default Payment;
