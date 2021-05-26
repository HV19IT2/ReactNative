import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView ,Button, StyleSheet, Image} from 'react-native';
import config from '../../api/config';
import ItemFlower from './ItemFlower';
import {SearchBar } from 'react-native-elements';
import callApi from '../../api/axios';
const Product = (props) => {
    const navigation = props.navigation;
    const [flowers, setflowers] = useState([]);
    const handleDetail=(id)=>{
        // console.log(id);
        navigation.navigate("Detail",{
            id:id
        })
    }
    useEffect(() => {
        navigation.addListener("focus", () =>{
        callApi.get('/index_tmp.php').then((response) =>{
            setflowers(response.data);
        }
     ).catch((e)=>{
         console.log({e});
         console.log("loi");
     })
    })
    }, []);
    
    const [textSearch, settextSearch] = useState('');
    const updateSearch =(text) =>{
        settextSearch((prevState=>text))
        callApi.get("/index_tmp.php?search-value="+textSearch).then((response) =>{
            setflowers(response.data)
        })
    }
    return (
        <ScrollView>
            <View style={{ 
                     width:"100%", 
                     height:110,
                     alignItems: "center",
                     justifyContent: "space-between",
                     paddingTop:25
                    }}>
            <Image 
                 style={{ 
                    width:136, 
                    height:90,
                   }}
                  source={{
                    uri: 'https://res.cloudinary.com/dhwyxc/image/upload/v1621437457/logo_tcqdio.png',
                  }}
                />
            </View>
            <View>
                <SearchBar 
                lightTheme
                round
                onChangeText={updateSearch}
                placeholder="Tìm kiếm..."
                value={textSearch}
                />
                <View style={styles.container}>
                    { flowers?.map((flower,index)=>{
                        return( <ItemFlower  handleDetail={handleDetail} key={flower.id_prd} data={flower} ></ItemFlower>)
                    
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
        margin: 10,
        flexDirection:"row",
        flexWrap: "wrap",
      },
});
export default Product;
