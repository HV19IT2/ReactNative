import axios from 'axios';
import config from '../../api/config';
import React, { useEffect, useState } from 'react';
import { Image, Text, View ,StyleSheet, Button, TouchableHighlight} from 'react-native';
// import { Rating } from 'react-native-elements';
import { Rating } from 'react-native-ratings';
import callApi from '../../api/axios';
import 'intl';
import 'intl/locale-data/jsonp/vi';
const ItemFlower = (props) => {
  const flower = props.data;
  // console.log(flower.id_prd);
  const handleDetail = props.handleDetail;
  const [star, setstar] =useState({});
  // const[i, seti] = useState(0)
    useEffect(() => {
        callApi.get("/vote_tmp.php?id_prd="+flower.id_prd).then((response) =>{
            setstar(response.data)
            // seti(i+1)
          }) 
          // console.log(i+"a");
    }, [flower]);
    return (
      <TouchableHighlight style={styles.div} underlayColor="#ddd" onPress={()=>handleDetail(flower.id_prd)} >
        <View style={styles.divI}>
          {  flower.discount_prd != 0 &&
            <View style={styles.itemDs}>
            <Text style={styles.disc}>
              {Intl.NumberFormat("en-US", {
                  style: "percent",
                  signDisplay: "exceptZero"
              }).format(-flower.discount_prd/100)}</Text>
          </View>
          }
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
                    <Text style={styles.bold}>
                      Giá: <Text style={styles.boldG}>
                       {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((flower.price_prd*(100-flower.discount_prd))/100)}
                    </Text>
                    </Text>
                    
                </View>
            </View>
      </TouchableHighlight>
            
    );
}
const styles = StyleSheet.create({
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
      borderRadius: 10,
      padding: 2,
      elevation: 3
    },
    divI: {
      width: "100%",
    },
    img: {
      width: "100%",
      height: 170,
      borderRadius: 10,
    },
    itemDs:{
      // width:"auto",
      width: 45,
      position:"absolute",
      zIndex:10,
      right:5,
      top:5,
      backgroundColor: "#ff4d4d",
      borderRadius:50,
      paddingHorizontal:3,
      paddingVertical:1,
      borderWidth:1,
      borderColor:"white",
      borderStyle:"solid"      
    },
    disc:{
      color: "white",
      fontSize:14,
      textAlign: "center",
    },
  });
  
export default ItemFlower;
