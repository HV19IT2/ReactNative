import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ToastAndroid  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState,useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import Account from '../user/Account';
import callApi from '../../api/axios';
const Signin = (props) => {
    const [auth, setauth] = useState(false);
    const { handleSubmit, control } = useForm();
        useEffect(() => {
            async function checkUserSignedIn(){
                try {
                   let value = await AsyncStorage.getItem('auth');
                   if (value != null){
                    setauth("true") 
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
         setauth("true") 
      }
   
    const onSubmit = data => {
      callApi.post("/login_tmp.php",{data},
      { headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(
            res => {
                save("auth","true");
                ToastAndroid.show(res.data.mess, ToastAndroid.SHORT);

            },
      )
      .catch(
          (e)=>{
            //   console.log(e.response.data);
              ToastAndroid.show(e.response.data.mess, ToastAndroid.SHORT);
        }),
     console.log("OK");
    };
    const navigation = props.navigation;
    const handleDetail=(id)=>{
        // console.log(id);
        navigation.navigate("OrderDetail",{
            id:id,
        })
    }
    if(auth=="true") return (<Account handleDetail={handleDetail}></Account>)
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
                    // rules={{ required: true }}
                    defaultValue=""
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
                    // rules={{ required: true }}
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

export default Signin;
