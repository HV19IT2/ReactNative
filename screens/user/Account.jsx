import React from 'react';
import {useState,useEffect} from 'react';
import {  Text, TextInput, View, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootAuth from '../login/RootAuth';
import axios from 'axios';
import config from '../../api/config';
import callApi from '../../api/axios';

const Account = () => {
    const [user, setuser] = useState({});
    useEffect(() => {
        callApi.get(config.api+"/user_tmp.php").then((e)=>{
            console.log(e.data);
            setuser(e.data);
        })
       
    }, []);
    
    // const [page,setpage]= useState(1);
    
    // useEffect(() => {
    //     callApi.get(config.api+"/product.php?page"+page).then((e)=>{
    //         console.log(e);
    //     })
        
    // },[page]);

    // handlePage(i){
    //     setpage(i);
    // }

  
    
    const [auth, setauth] = useState(true);
    function logout() {
        AsyncStorage.removeItem("auth");
        console.log("pkk");
        setauth(false)
     }


     if(!auth) return(<RootAuth></RootAuth>)
    return (
        <View>
            <Text>{user?.username}</Text>
            <TouchableOpacity
        style={{ 
            backgroundColor: "white",
            borderRadius: 7,
            width: "48%",
            position:"relative",
         }}
         onPress={logout}
        >
            <Text
            style={{
                fontSize:18,
                fontWeight: "bold",
                textAlign: "center",
                color: "#000",
                marginTop:8,
                marginBottom:8,
            }}
            >
                Logout
            </Text>
        </TouchableOpacity>
        </View>
        
    );
}

export default Account;
