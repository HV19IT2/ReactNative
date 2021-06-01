import React from 'react';
import {useState,useEffect} from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import styles from '../../styles/account';
import config from '../../api/config';
import callApi from '../../api/axios';
import { Icon } from "react-native-elements";
import 'intl';
import 'intl/locale-data/jsonp/vi';
const Done = (props) => {
    const handleDetail = props.handleDetail;
    const [dh, setdh] = useState([]);
    useEffect(() => {
        callApi.get("/account_tmp.php").then((e)=>{
            // console.log(e.data);
            setdh(e.data);
        })
    
    }, []);
    return (
        <ScrollView style={styles.scroll}>
             
            {dh?.map((detail,index)=>{
            if(detail.status_delivery=="2")
            return(
                <TouchableHighlight underlayColor="null" onPress={() => handleDetail(detail.id_bill) } key={index}>
                <View style={styles.divPrdItem}>
                    <Text style={styles.code}>MVDF{detail.id_bill}</Text>
                    <View style={styles.Citem}>
                        <Text style={styles.nameP}>
                            {detail.full_name}
                        </Text>
                        <Text style={styles.add}>
                        <Icon       
                            color="#4e9f65"
                            name="place"
                            size={18}
                            type="material"
                            /> 
                        {detail.address_delivery}
                        </Text>
                    </View>
                    <View style={styles.Ritem}>
                        <Text style={styles.price}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(detail.price_total)}
                        </Text>
                    </View>
                </View>
                </TouchableHighlight>
                )    
            })}
        </ScrollView>
    );
}

export default Done;
