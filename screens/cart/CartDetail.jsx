import React from 'react';
import { Text, View, Image, Button,ScrollView } from 'react-native';
import styles from '../../styles/cartIndex';
import InputSpinner from "react-native-input-spinner";

const CartDetail = (props) => {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.divPrd}>
                <View style={styles.divPrdItem}>
                        <Image 
                    style={styles.imgPrc}
                    source={{
                        uri: 'https://giongrausach.com/wp-content/uploads/2019/11/De-thoa-man-thu-choi-hoa-ban-co-the-lua-chon-chau-hoa-tu-nhieu-chat-lieu-khac-nhau.jpg',
                    }}
                        />
                        <Text style={styles.textPrd}>
                            Tên Sản Phẩm
                        </Text>
                        <Text style={styles.textPrc}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((10000*(100-5))/100)}
                        </Text>
                        <Text style={styles.textPrcD}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(10000)}
                        </Text>
                        <InputSpinner style={{ 
                            width :"120px",
                            marginLeft:"40%",
                            marginTop:"5%",
                        } }
                        skin="clean"
                        inputStyle={{
                            fontSize :"25px",
                        }}                  
                            max={10}
                            min={1}
                            step={1}
                            value={0}
                            onChange={(num) => {
                                console.log(num);
                            }}
                        />
                </View>
               
            </ScrollView>           
                    <View style={styles.divPay}>
                        <Text style={styles.textPay}>
                            Tổng {"\n"}{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(10000)}
                        </Text>
                        <View style={styles.buttonD}>
                        <Button
                            title="Đặt Hàng"
                            color="rgba(105, 243, 144, 1)"
                            onPress={() => props.navigation.navigate('Payment')}
                        />
                        </View>
                    </View>
                
            

        </View>
        
    );
}

export default CartDetail;