import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"rgba(62, 156, 88, 0.8)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position:"relative",
        // top: 0,
    },
    divPrd: {
        width: "80%",
        height: "500px",
        marginTop: 25,
        position:"relative",
        display: "flex",
        marginBottom: 30,
    },
    divPrdItem: {
        // width: "334px",
        height: "125px",
        display:"flex",
        position:"relative",
        marginBottom:10,
    },
    
    imgPrc: {
        width: "120px",
        height: "120px",
        borderRadius:"8px",
        
    },
    textPrd :{
        textAlign:"center",
        marginTop:"-35%",
        color:"#ffffff",
        fontStyle:"semi bold",
        fontSize: "20px",
        marginLeft:"15%",   
    },
    textPrc :{
        textAlign:"center",
        marginTop:"0%",
        color:"#ffffff",
        fontStyle:"semi bold",
        fontSize: "24px",
        marginLeft:"7%",
        
    },
    textPrcD :{
        textDecorationLine:"line-through",
        textAlign:"center",
        marginTop:"-7%",
        color:"#ffffff",
        fontStyle:"semi bold",
        fontSize: "12px",
        marginLeft:"55%",
    },
    divPay : {
        width: "80%",
        height: "60px",
        display:"flex",
        // right:"17px",
        top: "-20px",
        position:"relative",
        
    },
    textPay :{
        fontSize:"25px",
        color:"#ffffff"

    },
    buttonD :{
        width : "155px",
        height:"70px",
        justifyContent: 'center',
        left: "50%",
        marginTop:"-65px",
        // color:"rgba(105, 243, 144, 1)",
        // borderRadius: "15px",
    },
});
export default styles;