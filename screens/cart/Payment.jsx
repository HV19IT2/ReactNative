import React from 'react';
import { Text, View, Image, Button,ScrollView } from 'react-native';
import styles from '../../styles/pay';
import InputSpinner from "react-native-input-spinner";
import { TextInput } from 'react-native-gesture-handler';

const Payment = (props) => {
    return (
        <ScrollView style={styles.div1}>
                <View style={styles.div2}>
                    <Text style={styles.textP}>Họ Và Tên</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Họ và Tên"
                        keyboardType="default"
                    />
                    <Text style={styles.textP}>Số Điện Thoại</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Số Điện Thoại"
                        keyboardType="numeric"
                    />
                    <Text style={styles.textP}>Địa Chỉ</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Địa Chỉ"
                        keyboardType="default"
                    />
                    <Text style={styles.textP}>Ghi Chú</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ghi Chú"
                        keyboardType="default"
                    />
                </View>
                <ScrollView style={styles.div3}>
                    <Text style={{ fontSize:"24px", color:"white" }}>Sản Phẩm</Text>
                    <View style={styles.div4}>
                        <Text style={styles.textPrd}>
                        Cây Chuối Thiên Điểu
                        </Text>
                        <Text style={styles.textSl}>
                            Số lượng : 01
                        </Text>
                        <Text style={styles.textPrc}>
                            95.000 đ
                        </Text>
                    </View>
                    <View style={styles.div4}>
                        <Text style={styles.textPrd}>
                        Cây Chuối Thiên Điểu
                        </Text>
                        <Text style={styles.textSl}>
                            Số lượng : 01
                        </Text>
                        <Text style={styles.textPrc}>
                            95.000 đ
                        </Text>
                    </View>
                    <View style={styles.div4}>
                        <Text style={styles.textPrd}>
                        Cây Chuối Thiên Điểu
                        </Text>
                        <Text style={styles.textSl}>
                            Số lượng : 01
                        </Text>
                        <Text style={styles.textPrc}>
                            95.000 đ
                        </Text>
                    </View>
                    <View style={styles.div4}>
                        <Text style={styles.textPrd}>
                        Cây Chuối Thiên Điểu
                        </Text>
                        <Text style={styles.textSl}>
                            Số lượng : 01
                        </Text>
                        <Text style={styles.textPrc}>
                            95.000 đ
                        </Text>
                    </View>

                </ScrollView>
                <View style={styles.div5}>
                    <Text style={styles.textTotal}>
                        Tổng <br/>
                        95.000 đ
                    </Text>
                    <View style={styles.buttonD}>
                        <Button
                        
                            title="Thanh Toán"
                            color="rgba(105, 243, 144, 1)"
                            
                        />
                        </View>
                </View>


        </ScrollView>
        
    );
}

export default Payment;
