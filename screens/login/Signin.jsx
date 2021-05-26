import React from 'react';
import { Text, TextInput, View, TouchableOpacity  } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import config from '../../api/config';
import { useForm, Controller } from 'react-hook-form';
import Account from '../user/Account';
import callApi from '../../api/axios';
const Signin = (props) => {
        const [auth, setauth] = useState(false);
        useEffect(() => {
            async function checkUserSignedIn(){
                try {
                   let value = await AsyncStorage.getItem('auth');
                   if (value != null){
                    setauth(true) 
                   }
                   else {
                   
                  }
                } catch (error) {
                  // Error retrieving data
                }
            }
            checkUserSignedIn()
        },[])
      
        
       
       
     function save(key, value) {
         AsyncStorage.setItem(key, value);
         setauth(true) 
      }
   
    const { register, setValue, handleSubmit, control, reset, errors } = useForm();
    const onSubmit = data => {
    
    //   axios.defaults.withCredentials = true;
      callApi.post(config.api+"/login_tmp.php",{data},
      { headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(
            res => {
                save("auth",true)
            },
      ).catch((e)=>console.log("loi r")),
     console.log("ok2");
    };
   
    const onChange = arg => {
      return {
        value: arg.nativeEvent.text,
      };
    };
    // console.log(errors);
    if(auth) return (<Account></Account>)
    return (
        <View 
        style={{ 
            backgroundColor:"#4e9f65",
            height:"100%", 
            alignItems: "center",
            justifyContent: "center",
         }}>
            <View
            style={{
                width: "80%",
            }}
            >
                <Text
                style={{
                    fontSize:30,
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom:20,
                    color:"white"
                }}
                >
                    Login
                </Text>
                <Controller
                    control={control}
                    render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={{ 
                            backgroundColor:"#ddd",
                            height:40,
                            paddingHorizontal:10,
                            color:"#333",
                            marginBottom:10,
                            borderRadius: 7
                        }}
                        placeholder = "Enter username"
                        placeholderTextColor="#333"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="username"
                    rules={{ required: true }}
                />
                <Controller
                    control={control}
                    render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        secureTextEntry={true}
                        style={{ 
                            backgroundColor:"#ddd",
                            height:40,
                            paddingHorizontal:10,
                            color:"#333",
                            marginBottom:10,
                            borderRadius: 7
                         }}
                        placeholder = "Enter password"
                        placeholderTextColor="#333"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="password"
                    rules={{ required: true }}
                />
                 <View 
                style={{ 
                    display: "flex",
                 }}>
                <TouchableOpacity
                style={{ 
                    backgroundColor: "white",
                    borderRadius: 7,
                    width: "48%",
                    position:"relative",
                 }}
                 onPress={handleSubmit(onSubmit)}
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
                        SignIn
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ 
                    backgroundColor: "white",
                    borderRadius: 7,
                    left: "52%",
                    width: "48%",
                    position:"absolute",
                 }}
                 onPress={() =>props.navigation.navigate('Signup')}
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
                        Register
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Signin;
