import React from 'react';
import { Image, Text, View ,StyleSheet, Button} from 'react-native';
const ItemFlower = (props) => {
  const flower = props.data;

  const handleDetail = props.handleDetail;
 
    return (
            <View style={styles.div}>
                <Image 
                 style={styles.img}
                  source={{
                    uri: flower.image_prd,
                  }}
                />
                <View style={styles.bottomdiv}>
                    <Text>{flower.name_prd}</Text>
                    <Text style={styles.bold}>Giá: {flower.price_prd}đ</Text>
                    <Button onPress={()=>handleDetail(flower.id_prd)} title="xem chi tiet">
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
        fontWeight:"bold"
    },
    bottomdiv:{
       textAlign: 'center',
       width: "171px",
    },
    div: {
      width: "177px",
      backgroundColor: "#fff",
      display: "flex",
      flexWrap: "wrap",
      margin:"10px",
      // border: "2px solid #000",
      borderRadius: "5px",
      padding: "2px"
    },
    img: {
      width: "171px",
      height: "152px",
      borderRadius: "5px",
    },
    
  });
  
export default ItemFlower;
