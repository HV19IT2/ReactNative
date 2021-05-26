import axios from 'axios';
import config from '../../api/config';
import React, { useEffect, useState } from 'react';
import { Image, Text, View ,StyleSheet, Button, TouchableHighlight} from 'react-native';
import { Rating } from 'react-native-elements';
import callApi from '../../api/axios';
import 'intl';
import 'intl/locale-data/jsonp/vi';
const ItemFlower = (props) => {
  const flower = props.data;
  // console.log(flower.id_prd);
  const handleDetail = props.handleDetail;
  const [star, setstar] =useState({});
    useEffect(() => {
        callApi.get("/vote_tmp.php?id_prd="+flower.id_prd).then((response) =>{
            setstar(response.data)
        }
      )  
    }, []);
    return (
      <TouchableHighlight style={styles.div} underlayColor="#ddd" onPress={()=>handleDetail(flower.id_prd)} >
        <View style={styles.divI}>
                <Image 
                 style={styles.img}
                  source={{
                    uri: flower.image_prd,
                  }}
                />
                <View style={styles.bottomdiv}>
                    <Text style={{ fontSize:20, textAlign: 'center'}}>{flower.name_prd}</Text>
                    <Rating 
                    type='custom'
                    imageSize={15} 
                    readonly 
                    ratingBackgroundColor="#969696"
                    startingValue={star.star} />
                    <Text style={styles.bold}>Giá: 
                    <Text style={styles.boldG}>
                       {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((flower.price_prd*(100-flower.discount_prd))/100)}
                    </Text>
                    </Text>
                    <Button
                     color="#4e9f65" 
                     onPress={()=>handleDetail(flower.id_prd)} title="Xem chi tiết">
                    </Button>
                </View>
            </View>
      </TouchableHighlight>
            
    );
}
const styles = StyleSheet.create({
    // itemFlower:{
    //     boxShadow:"1px 2px 3px 4px gray"
    // },
    bold:{
        fontWeight: "600",
      textAlign: "center",

    },
    boldG:{
      fontSize:20,
      fontWeight: "600",
      color: "#4e9f65",
      textAlign: "center",
    },
    bottomdiv:{
       textAlign: 'center',
       width: "100%",
    },
    div: {
      width: "45%",
      backgroundColor: "#fff",
      display: "flex",
      flexWrap: "wrap",
      margin:"1.25%",
      borderRadius: 5,
      padding: 2
    },
    divI: {
      width: "100%",
      // backgroundColor: "#fff",
      // display: "flex",
      // flexWrap: "wrap",
      // margin:"1.25%",
      // borderRadius: 5,
      // padding: 2
    },
    img: {
      width: "100%",
      height: 170,
      borderRadius: 5,
    },
    
  });
  
export default ItemFlower;
