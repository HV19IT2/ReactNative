import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';


const Signup = (props) => {
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
                    Register
                </Text>
                <TextInput
                    style={{
                        backgroundColor:"#ddd",
                        height:40,
                        paddingHorizontal:10,
                        color:"#333",
                        marginBottom:10,
                        borderRadius: 7
                    }}
                    placeholder="Enter fullname"
                    placeholderTextColor="#333"
                />
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
                />
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
                />
                <TextInput
                    style={{
                        backgroundColor:"#ddd",
                        height:40,
                        paddingHorizontal:10,
                        color:"#333",
                        marginBottom:10,
                        borderRadius: 7
                    }}
                    placeholder="Enter username"
                    placeholderTextColor="#333"
                />
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
                        fontWeight: "bold",
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

export default Signup;
