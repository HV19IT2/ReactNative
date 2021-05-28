import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
    },
  div1: {
    height:"32.5%",
    display:"flex",
    borderBottomLeftRadius:150,
    position:"relative",
    backgroundColor:"rgba(62, 156, 88, 0.8)",
    alignItems: "center",
  },
  touch:{
    backgroundColor: "white",
    borderRadius: 7,
    width: "25%",
    position:"absolute",
    top:40,
    right:10,
  },
  TxTouch:{
    fontSize:18,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    marginTop:8,
    marginBottom:8,
  },
  circle :{
    borderStyle:"solid",
    borderRadius: 200,
    top:"20%",
    height: 150,
    width: 150,
    backgroundColor:"#ddd",
    justifyContent: "center",
    alignItems:"center",
  },
  textCirL:{
    fontSize:30,
    textAlign:"center",
    width: "100%",
    color: "white",
  },
  userTxt:{
        textAlign:"center",
        marginTop:"15%",
        fontSize:18,
        fontWeight: "500",

  },
  div2 : {
    height:"65%",
    position:"relative",
    backgroundColor:"white",
  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical:5
  },
  touchLR:{
    backgroundColor:"#ff3838",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"

  },
  TxTouchLR:{
    fontSize:16,
    fontWeight: "500",
    color: "white",
    textAlign:"center",

  },
  touchLC:{
    backgroundColor:"#38acff",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"

  },
  TxTouchLC:{
    fontSize:16,
    fontWeight: "500",
    color: "white",
    textAlign:"center",
  },
  touchLL:{
    backgroundColor:"#4e9f65",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"
  },
  TxTouchLL:{
    fontSize:16,
    fontWeight: "500",
    color: "white",
    textAlign:"center",
  },
  activeT:{
    borderColor: "#4e9f65",
    borderWidth:2,
    borderStyle:"solid",
    backgroundColor:"white",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"

  },
  activeTx: {
    fontSize:16,
    fontWeight: "500",
    color: "#4e9f65",
    textAlign:"center",
  },
  activeTC:{
    borderColor: "#38acff",
    borderWidth:2,
    borderStyle:"solid",
    backgroundColor:"white",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"

  },
  activeTxC: {
    fontSize:16,
    fontWeight: "500",
    color: "#38acff",
    textAlign:"center",
  },
  activeTR:{
    borderColor: "#ff3838",
    borderWidth:2,
    borderStyle:"solid",
    backgroundColor:"white",
    paddingHorizontal:5,
    paddingVertical:10,
    borderRadius:5,
    width:"31%"

  },
  activeTxR: {
    fontSize:16,
    fontWeight: "500",
    color: "#ff3838",
    textAlign:"center",
  },
  div3:{
      width:"100%",
      paddingHorizontal: 10,
      paddingVertical:10,
      height:"90%",
      backgroundColor:"white",
    //   marginTop:"10px",
  },
  scroll:{
    height:"100%",
    backgroundColor:"#ddd",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:10,
  },
  divPrdItem: {
    width: "100%",
    height: 125,
    backgroundColor:"white",
    display:"flex",
    position:"relative",
    marginBottom:15,
    borderRadius: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
},

Citem:{
    width: "70%",
    height: "100%",
    paddingVertical:20,
    paddingHorizontal:10,
},
code:{
  position:"absolute",
  top:10,
  left:10,
  fontSize:14,
  color: "black",
},
Ritem:{
    width: "28%",
    height: "100%",

},
nameP:{
    fontSize:18,
    fontWeight:"600",
    textAlign:"left",
    marginBottom:10
},

price:{
    marginTop:40,
    color:"#4e9f65",
    fontSize:19,
    fontWeight:"600",
    textAlign:"right",
},
  itemL:{
    width: "14%",
    backgroundColor:"white",
    height:"100%",
    marginRight:"1%",
    textAlign: "center",
    borderRadius:5,
    paddingHorizontal:5,
},
itemCa:{
    width: "49%",
    backgroundColor:"white",
    height:"100%",
    marginRight:"1%",
    borderRadius:5,
    paddingHorizontal:5,
},
itemCb:{
    width: "19%",
    backgroundColor:"white",
    height:"100%",
    marginRight:"1%",
    textAlign: "center",
    borderRadius:5,
    paddingHorizontal:5,
},
itemR:{
    width: "14%",
    backgroundColor:"white",
    height:"100%",
    borderRadius:5,
    justifyContent: "center",
    paddingVertical:15,
    flexDirection: "row",
},
  itemTx:{
    fontSize:17,
  }
});
export default styles;
