import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import config from '../../api/config';

const DetailPrd = (props) => {
    const route =props.route
    const id = route.params.id
    const [flower, setflower] = useState({});
    console.log(flower);
    
    useEffect(() => {
        axios.get(config.api+"/index_tmp.php?id_prd="+id).then((response) =>{
            console.log(response.data);
            console.log("ta da lay dc dataa roi, m dung goi t nuwa. re render lai di");
           setflower(response.data)
        }
     )  
    }, []);
    return (
        <View>
            <Text>{flower.name_prd}</Text>
            <Image style={styles.logo}
                source={{
                uri: flower.image_prd,
                }}/>
        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        width: "177px",
        height: "152px",
    },
})
export default DetailPrd;
