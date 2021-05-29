import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableHighlight, LogBox} from 'react-native';
import ItemFlower from './ItemFlower';
import {SearchBar } from 'react-native-elements';
import callApi from '../../api/axios';
const Product = (props) => {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
    const navigation = props.navigation;
    const [flowers, setflowers] = useState([]);
    const [cate, setcate] = useState([]);
    const [idcate, setidcate] = useState(0);
    const [textSearch, settextSearch] = useState('');
    const slCate = (id) => setidcate(id);
    const updateSearch = (text) => settextSearch(text);
    const handleDetail=(id)=>{
        navigation.navigate("Detail",{ id:id })
    }
    useEffect(() => {
        navigation.addListener("focus", () =>{
        callApi.get('/index_tmp.php').then((response) =>{
            setflowers(response.data);
        })
    })
    }, []);
    useEffect(() => {
        callApi.get('/cate_tmp.php').then((response) =>{
            setcate(response.data);
        })
    }, []);
    const onReload =()=>{
         callApi.get('/index_tmp.php').then((response) =>{
            setflowers(response.data);
        })
    }
    useEffect(() => {
        callApi.get("/index_tmp.php?search-value="+textSearch).then((response) =>{
            setflowers(response.data)
        })
    }, [textSearch]);
    useEffect(() => {
        callApi.get("/index_tmp.php?id_cate="+idcate).then((response) =>{
            setflowers(response.data)
        })
    }, [idcate]);
    return (
        <ScrollView>
            <View style={styles.Vlogo}>
            <TouchableHighlight 
            underlayColor="#f0f0f0"
            onPress={() => onReload()}
            style={{ 
                borderRadius:20,
            }}
            >
                <Image 
                 style={styles.img}
                  source={{
                    uri: 'https://res.cloudinary.com/dhwyxc/image/upload/v1621437457/logo_tcqdio.png',
                  }}
                />
            </TouchableHighlight>
            </View>
            <View>
                <SearchBar 
                onChangeText={updateSearch}
                placeholder="Tìm kiếm..."
                platform='android'
                />
                <ScrollView 
                horizontal ={true}
                style={styles.VCate}
                >
                    {  cate?.map((itemCate,i) =>{
                        return (
                        <TouchableHighlight 
                        key={i}
                        underlayColor="#ddd" 
                        style={{ 
                            borderRadius:50,
                        }}
                        onPress={()=> slCate(itemCate.id_cate)}
                        >
                            <View style={styles.itemC} >
                                <Text style={styles.itemTx}>
                                    {itemCate.name_cate}
                                </Text>
                            </View>
                        </TouchableHighlight>
                        )
                    })}
                    
                </ScrollView>
                <View style={styles.container}>
                    { flowers?.map((flower,index)=>{
                        return( <ItemFlower  handleDetail={handleDetail} key={index} data={flower} ></ItemFlower>)
                    })}         
                </View>

            </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        marginRight:10,
        marginLeft:10,
        flexDirection:"row",
        flexWrap: "wrap",
      },
      Vlogo:{ 
        width:"100%", 
        height:110,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop:25
       },
       img:{ 
        width:136, 
        height:90,
       },
      itemC:{
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:100,
        backgroundColor: "#9accaf",
        borderWidth:1,
        borderColor:"white",
        borderStyle:"solid",
        marginRight:5,
        marginLeft:5,
        marginVertical:2
      },
      itemTx:{
        width:"100%",
        fontSize:15,
        color:"white",
        marginHorizontal:2
    },
    VCate:{
        // height:50,
        paddingHorizontal:5,
        // paddingRight:10,
        paddingVertical:10,
    }
});
export default Product;
