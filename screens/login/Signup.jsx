import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ToastAndroid  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import config from '../../api/config';
import { useForm, Controller } from 'react-hook-form';
import Account from '../user/Account';
import callApi from '../../api/axios';
import RootAuth from './RootAuth';

const Signup = (props) => {
    const [signup, setsignup] = useState(false);
    const { handleSubmit, control } = useForm();
    const onSubmit = data => {
      callApi.post("/register_tmp.php",{data},
      { headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(
            res => {
                console.log(res.data);
                setsignup(true);
                    // console.log("dktc");
                    ToastAndroid.show(res.data.mess, ToastAndroid.SHORT);
            },
      ).catch((e)=>{
        ToastAndroid.show(e.response.data.mess, ToastAndroid.SHORT);
      })
    };
   
    if(signup)  return (<RootAuth></RootAuth>)
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
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom:20,
                    color:"white"
                }}
                >
                    Register
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
                        placeholder = "Enter fullname"
                        placeholderTextColor="#333"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="fname"
                    rules={{ required: true }}
                    defaultValue=""
                />
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
                        placeholder="Enter address"
                        placeholderTextColor="#333"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="add"
                    rules={{ required: true }}
                    defaultValue=""
                />
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
                        placeholder="Enter phonenum"
                        placeholderTextColor="#333"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="pnum"
                    rules={{ required: true }}
                    defaultValue=""
                />
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
                    defaultValue=""
                />
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
                        placeholder="Enter password"
                        placeholderTextColor="#333"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
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
                 onPress={() =>props.navigation.navigate('Signin')}
                >
                    <Text
                    style={{
                        fontSize:18,
                        fontWeight: "600",
                        textAlign: "center",
                        color: "#000",
                        marginTop:8,
                        marginBottom:8,
                    }}
                    >
                        Signin
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
                 onPress={handleSubmit(onSubmit)}
                >
                    <Text
                    style={{
                        fontSize:18,
                        fontWeight: "600",
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

export default Signup;
