import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView ,Button, StyleSheet} from 'react-native';
import config from '../../api/config';
import ItemFlower from './ItemFlower';
import DetailPrd from './DetailPrd';
import {SearchBar } from 'react-native-elements';
import usePrd from '../../common/hooks/usePrd';
const Product = (props) => {
    const navigation = props.navigation;
    const handleDetail=(id)=>{
        console.log(id);
        navigation.navigate("Detail",{
            id:id
        })
    }

    const [flowers, setflowers] = useState([]);
    useEffect(() => {
        axios.get(config.api+"/index_tmp.php").then((response) =>{
            console.log(response.data);
            setflowers(response.data)
        }
     )  
    }, []);
    
    const [textSearch, settextSearch] = useState('');
    const updateSearch =(text) =>{
        settextSearch((prevState=>text))
        axios.get(config.api+"/index_tmp.php?search-value="+textSearch).then((response) =>{
            setflowers(response.data)
           
        })
    }
    return (
        <ScrollView>
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
        margin: "10px",
        flexDirection:"row",
        flexWrap: "wrap",
      },
});
export default Product;
