import axios from 'axios';
import config from '../../api/config';
import React, { useEffect, useState } from 'react';
import { Image, Text, View ,StyleSheet, Button} from 'react-native';
import { Rating } from 'react-native-elements';
const ItemFlower = (props) => {
  const flower = props.data;

  const handleDetail = props.handleDetail;
  const [star, setstar] =useState({});
    useEffect(() => {
        axios.get(config.api+"/vote_tmp.php?id_prd="+flower.id_prd).then((response) =>{
            setstar(response.data)
        }
      )  
    }, []);
    return (
            <View style={styles.div}>
                <Image 
                 style={styles.img}
                  source={{
                    uri: flower.image_prd,
                  }}
                />
                <View style={styles.bottomdiv}>
                    <Text style={{ fontSize:"20px" }}>{flower.name_prd}</Text>
                    <Rating 
                    type='custom'
                    imageSize={15} 
                    readonly 
                    ratingBackgroundColor="#969696"
                    startingValue={star.star} />
                    <Text style={styles.bold}>Giá: <Text style={styles.boldG}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((flower.price_prd*(100-flower.discount_prd))/100)}</Text></Text>
                    <Button
                     color="#4e9f65" 
                     onPress={()=>handleDetail(flower.id_prd)} title="Xem chi tiết">
                    </Button>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    // itemFlower:{
    //     boxShadow:"1px 2px 3px 4px gray"
    // },
    bold:{
        fontWeight:"bold",
    },
    boldG:{
      fontSize:"20px",
      fontWeight:"bold",
      color: "#4e9f65",
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
      borderRadius: "5px",
      padding: "2px"
    },
    img: {
      width: "100%",
      height: "170px",
      borderRadius: "5px",
    },
    
  });
  
export default ItemFlower;
