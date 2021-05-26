import React from 'react';
import {useState,useEffect} from 'react';
import {  Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootAuth from '../login/RootAuth';
import axios from 'axios';
import config from '../../api/config';
import callApi from '../../api/axios';
import styles from '../../styles/account';
import Wait from './Wait';
import Done from './Done';
import Deli from './Deli';
const Account = (props) => {
    const [user, setuser] = useState({});
    const [indexTab, setindexTab] = useState(0);
    const [auth, setauth] = useState(true);
    
    useEffect(() => {
        callApi.get("/user_tmp.php")
        .then(
            e=>{
                
                    setuser(e.data);
                }
        )
        .catch((e)=>{
            AsyncStorage.removeItem("auth");
                setauth(false)
        })
    }, [])
    const navigation = props.navigation;
    const handleDetail=(id)=>{
        props.handleDetail(id)
    }
    
    const listTab = [
        <Wait handleDetail={handleDetail}/>,
        <Deli handleDetail={handleDetail}/>,
        <Done handleDetail={handleDetail}/>
    ]
    function getTab(i){
        return listTab[i]
    }
   
    function logout() {
        AsyncStorage.removeItem("auth");
        console.log("pkk");
        setauth(false)
     }


     if(!auth) return(<RootAuth></RootAuth>)
    return (
        
        <View style={styles.container}>
            
        <View style={styles.div1}>
       <View style={styles.circle}>
                <Text style={styles.textCirL}>{user?.username}</Text>
       </View>
       <Text style={styles.userTxt}>{user?.full_name}</Text>
       
        <TouchableOpacity
        style={styles.touch}
        onPress={logout}
        >
        <Text
        style={styles.TxTouch}
        >
            Logout
        </Text>
        </TouchableOpacity>
    </View>
    <View style={styles.div2}>
        
            <Text style={{ textAlign: "center", fontSize:22}}>
                Thông tin đơn hàng
            </Text>
            <View style={styles.tabContainer}>
            <TouchableOpacity
            style={[styles.touchLL,indexTab==0 ? styles.activeT :{}]}
            onPress={()=>setindexTab(0)}
            >
                <Text
                style={[styles.TxTouchLL,indexTab==0 ? styles.activeTx :{}]}
                
                >
                    Chờ xác nhận
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
           style={[styles.touchLC,indexTab==1 ? styles.activeTC :{}]}
            onPress={()=>setindexTab(1)}
            >
                <Text
                style={[styles.TxTouchLC,indexTab==1 ? styles.activeTxC :{}]}
                >
                    Đang giao hàng
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.touchLR,indexTab==2 ? styles.activeTR :{}]}
            onPress={()=>setindexTab(2)}
            >
                <Text
                style={[styles.TxTouchLR,indexTab==2 ? styles.activeTxR :{}]}
                >
                    Đã giao hàng
                    
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.div3}>
               {getTab(indexTab)}
            </View>
    </View>
    </View>
    );
}

export default Account;
