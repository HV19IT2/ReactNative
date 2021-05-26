import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor:"#ddd",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical:10,
        paddingHorizontal:10
    },
    divPrd: {
        width: "100%",
        paddingHorizontal:5,
        paddingVertical:15,
        height: "80%",
        position:"relative",
        display: "flex",
        marginBottom: 10,
    },
    divPrdItem: {
        width: "100%",
        height:150,
        backgroundColor:"white",
        display:"flex",
        position:"relative",
        marginBottom:10,
        borderRadius: 20,
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
    imgPrc: {
        width: "38%",
        height: "100%",
        borderRadius:15,
        // backgroundColor:"#ddd",
        
    },
    img: {
        height: "100%",
        width: "100%",
        borderRadius:15,

    },
    Citem:{
        width: "38%",
        height: "100%",
        // paddingVertical:10,
        paddingHorizontal:10,
    },
    ip:{
        width: "100%",
        height: "40%",
        borderRadius:25,
        paddingVertical:2,
    },
    Ritem:{
        width: "18%",
        height: "100%",

    },
    nameP:{
        fontSize:18,
        fontWeight:"600",
        textAlign:"left",
        marginBottom:15,
        height:60,
    },
    icon:{
        width: 25,
        position:"absolute",
        right:0
    },
    price:{
        marginTop:40,
        color:"#4e9f65",
        fontSize:15,
        textAlign: "right",
        fontWeight:"600",
    },
    divPay : {
        width: "100%",
        height: "20%",
        // backgroundColor:"#ddd",
        flexDirection:"column",
        justifyContent: "space-between"
      },
    cost:{
        borderRadius:10,
        // paddingTop:25,
        width: "100%",
        height: "60%",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems: "center"

    },
    tx:{
        width: "48%",
        fontSize:23,
        fontWeight:"600",
        paddingHorizontal: 15
    },
    Txc:{
        width: "48%",
        fontSize:23,
        fontWeight:"600",
        paddingHorizontal: 15,
        textAlign:"right"
    },
    pay:{
        borderRadius:10,
        width: "100%",
        height: "35%",
        backgroundColor:"white",
    },
    btnP:{
        width: "100%",
        height: "100%",
        backgroundColor:"#77a088",
        borderRadius: 10,
        justifyContent: "center"

    },
    TxP:{
        fontSize:22,
        fontWeight:"600",
        color: "white",
        textAlign:"center",
    },
});
export default styles;