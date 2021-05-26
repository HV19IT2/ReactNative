import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
    div1: {
        width: "100%",
        height: "100%",
        paddingHorizontal:10,
        paddingVertical:10,        
    },
    div2:{
        width: "100%",
        height: "35%",
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
    },
    div2S:{
        width: "100%",
        // height:"100%",
        // backgroundColor:"white",
        // paddingHorizontal:10,
        // paddingVertical:10,
        // borderRadius:10,
    },
    title:{
        width: "100%",
        height: "15%",
        fontSize:23,
        color:"black",
        fontWeight:"600",
    },
    dtV:{
        width:"100%",
        height:"85%",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    dtVhe:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    dtVitem:{
        width:"48%",
        height:"auto",
    },
    dtVitemB:{
        width:"100%",
        height:"auto",
    },
    tt :{
        fontSize:18,
        color:"black",
        fontWeight:"600",
    },
    ip:{
        paddingHorizontal:10,
        marginBottom:10,
        marginTop:5,
        borderRadius:10,
        width: "100%",
        height: 35,
        backgroundColor:"#ddd",
    },
    div3:{
        width:"100%",
        height:"45%",
        marginTop:10,
        borderRadius:10,
        backgroundColor:"#ddd",
        paddingHorizontal:10,
        paddingVertical:10,
    },
    sc:{
        height:"100%",
        width:"100%",
    },
    div4:{
        marginBottom:10,
        width:"100%",
        height:80,
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:"space-between",
        flexDirection: "row",
    },
    
    Litem:{
        width: "30%",
        height:"100%",
        position:"relative",
    },
    img:{
        width: "100%",
        height:"100%",
        borderRadius:10
    },
    Citem:{
        width: "37%",
        height:"100%",
        position:"relative",
        paddingVertical:8,
        paddingLeft:10,
    },
    prd:{
        fontSize:16,
    },
    Ritem:{
        width: "30%",
        paddingRight:5,
        height:"100%",
        position:"relative",
        paddingVertical:8,
    
    },
    price:{
        fontSize:15,
        fontWeight: "600",
        textAlign:"right"
    },
    div5 :{
        width: "100%",
        height: "20%",
        paddingVertical: 10,
        flexDirection:"column",
        justifyContent: "space-between"
    },
    
    cost:{
        borderRadius:10,
        // paddingTop:25,
        paddingVertical:10,
        width: "100%",
        height: "55%",
        backgroundColor:"white",
        flexDirection:"row",
        // justifyContent: "space-between"
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