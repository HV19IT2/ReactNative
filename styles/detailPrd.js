import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    height: "100%",
    },
    headerDiv: {
        width: "100%",
        height: 500,
        backgroundColor: "#4e9f65",
    },
    nameTx:{
        fontSize:"30px",
        color: "white",
        marginTop: "5%",
        marginLeft: "5%",
         position:"relative",
    },
    leftDiv:{
        width: "30%",
        marginLeft: "10%",
        marginTop: "8%",
        position:"relative",
    },
    label: {
        fontSize:"18px",
        color: "white",
        position:"relative",
    },
    priceTx:{
        fontSize:"25px",
        color: "white",
        marginBottom:"5px",
         position:"relative",
    },
    priceATx:{
        fontSize:"14px",
        color: "#161616",
        marginBottom:"5px",
        position:"relative",
        textDecorationLine: "line-through"
    },
    amountTx:{
        fontSize:"25px",
        color: "white",
        position:"relative",
        marginBottom:"5px",

    },
    img: {
        position:"absolute",
        borderRadius:"10px",
        marginLeft:"50%",
        width: "45%",
        height: "60%",
        top:"45%",
    },
    descTx: {
        fontSize:"30px",
        fontWeight:"600",
        marginTop: "10%",
        marginLeft: "10%",
        
    },
    detailDes: {
        fontSize:"20px",
        marginLeft:"10%",
        marginTop:"5%",
        marginRight:"5%",
    },
    bottomDiv: {
         position:"relative",
        //  paddingTop:35,
         height: 323,
         zIndex:-10,
    },
    comment: {
         marginTop: 10,
    },
    input:{
        marginBottom: "10px",
        paddingHorizontal:10,
        marginTop:"5px",
        width:"70%",
        height:"40px",
        borderRadius:"8px",
        backgroundColor:"#ddd",
        marginLeft:"10%",
    },
    cmt: {
        fontSize:"18px",
        marginLeft:"10%",
        marginTop:"5px",
    },
    username: {
        fontSize:"18px",
        fontWeight:"600",
        marginLeft:"10%",
        marginTop:"5%",
        marginRight:"5%",
    },
    time:{
        marginTop:"5px",
        marginLeft:"10%",
        color: "#969696",   
    },
    Rcmt: {
        marginTop:"5px",
        fontSize:"18px",
        marginLeft:"15%",
    },
    Rusername: {
        fontSize:"18px",
        fontWeight:"600",
        marginLeft:"15%",
        marginTop:"5%",
        marginRight:"5%",
    },
    Rtime:{
        marginTop:"5px",
        marginLeft:"15%",
        color: "#969696",   
    },
    });
    export default styles;
    