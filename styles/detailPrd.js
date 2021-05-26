import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    height: "100%",
    backgroundColor: "#4e9f65",
    },
    headerDiv: {
        width: "100%",
        height: 500,
        backgroundColor: "#4e9f65",
    },
    nameTx:{
        fontSize:30,
        color: "white",
        marginTop: "10%",
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
        fontSize:18,
        color: "white",
        position:"relative",
    },
    priceTx:{
        fontSize:25,
        color: "white",
        marginBottom:5,
         position:"relative",
    },
    priceATx:{
        fontSize:14,
        color: "#161616",
        marginBottom:5,
        position:"relative",
        textDecorationLine: "line-through"
    },
    amountTx:{
        fontSize:25,
        color: "white",
        position:"relative",
        marginBottom:5,

    },
    img: {
        position:"absolute",
        borderRadius:10,
        // marginLeft:"50%",
        right:40,
        width: "45%",
        height: "60%",
        top:"45%",
    },
    descTx: {
        fontSize:30,
        fontWeight: "600",
        marginTop: "10%",
        marginLeft: "10%",
        
    },
    cmtTx: {
        fontSize:20,
        fontWeight: "600",
        position:"relative",
        width: "100%",
        marginBottom:5        
    },
    detailDes: {
        fontSize:20,
        marginLeft:"10%",
        marginTop:"5%",
        marginRight:"5%",
    },
    bottomDivV:{
            position:"relative",
         borderTopLeftRadius:40,
         borderTopRightRadius:40,
         backgroundColor: "white",
         paddingVertical:10,
        //  paddingTop:35,
         height: 440,
         zIndex:-10,
    },
    bottomDiv: {
        height:"100%",
        width: "100%",
    },
    comment: {
        //  marginTop: 10,
         width: "100%",
         backgroundColor: "white",
         paddingHorizontal:10,
         paddingVertical:10,
    },
    inCmt: {
        width: "100%",
        height:"auto",
        borderRadius:10,
        backgroundColor:"#f0f0f0",
        paddingHorizontal:10,
        paddingVertical:10,
        marginBottom:10,
        flexDirection: "column",
    },
    input:{
        marginBottom: 10,
        paddingHorizontal:10,
        paddingTop:10,
        marginTop:5,
        width:"100%",
        height:100,

        borderRadius:8,
        backgroundColor:"white",
    },
    botCmtIn:{
        flexDirection:"row",
        width: "100%",
    },
    cmt: {
        fontSize:18,
        marginLeft:"10%",
        marginTop:5,
        marginBottom:10
    },
    ava:{
        flexDirection:"row",
        width: "100%",
    },
    username: {
        fontSize:18,
        marginVertical:5,
        width:"35%",
        fontWeight: "600",
    },
    time:{
        color: "#969696",  
        width: "36%", 
    },
    Cmtdetail:{
        width: "100%",
        height: "auto",
        backgroundColor: "#f0f0f0",
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        marginBottom:10,
    },
    Dcmt: {
        width: "100%",
        marginVertical:10
    },
    Rdate: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    CmtdetailR:{
        width: "80%",
        height: "auto",
        marginLeft:"20%",
        backgroundColor: "#f0f0f0",
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        marginBottom:10,
    },
    DcmtR: {
        width: "100%",
        marginVertical:10
    },
   
    timeR:{
        color: "#969696",  
        width: "100%",
        marginLeft:"56%" 
    },
    });
    export default styles;
    