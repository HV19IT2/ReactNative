import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:"#ddd",
  },
  containHead:{ 
    width: "100%",
    height: "63%",
    backgroundColor:"white",
    marginBottom:"4%",
    borderRadius:8,
    paddingHorizontal:15,
    paddingVertical:15,
  },
  cHinH:{
    width: "100%",
    height: "10%",
  },
  TxcHinH:{
    fontSize:26,
    fontWeight: "600",
  },
  cHinC:{
    width: "100%",
    height: "55%",
    marginBottom:5
  },
  scrcHinC:{
    width: "100%",
    height: "100%",

  },
  item:{
    width: "100%",
    height:70,
    marginBottom:10,
    position:"relative",
    justifyContent:"space-between",
    flexDirection: "row",
  },
  Litem:{
    width: "19.4%",
    height:"100%",
    position:"relative",
  },
  img:{
    width: "100%",
    height:"100%",
    borderRadius:5
  },
  Citem:{
    width: "55%",
    height:"100%",
    position:"relative",
    paddingVertical:8,

  },
  prd:{
    fontSize:16,
  },
  Ritem:{
    width: "20%",
    height:"100%",
    position:"relative",
    paddingVertical:8,
   
  },
  price:{
    fontSize:15,
    fontWeight: "600",
    textAlign:"right"
  },
  cHinB:{
    width: "100%",
    height: "35%",
  },
  vLcHinB:{
    width: "65%",
    height: "100%",
    position:"absolute",
    right:0,
    paddingVertical:5,
  },
  Tx:{
    fontSize:16,
    fontWeight: "600",
    color: "grey"
  },
  Txprice:{
    fontSize:16,
    fontWeight: "600",
    textAlign:"right",
    top:-20,
    position:"relative"
  },
  TxpriceF:{
    fontSize:19,
    fontWeight: "600",
    textAlign:"right",
    top:-20,
    position:"relative"
  },
  TxV:{
    width: "100%",
    height: "32%",
  },
  hr:{
    height: "0.5%",
    backgroundColor:"grey",
    marginBottom:20
  },
  containBot:{ 
    width: "100%",
    height: "35%",
    backgroundColor:"white",
    borderRadius:8,
    paddingHorizontal:15,
    paddingVertical:15,
  },
  botC:{
    width: "100%",
    height: "80%",
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LbotC:{
    width: "48%",
    height: "100%",
    backgroundColor:"white",
  },
  RbotC:{
    width: "48%",
    height: "100%",
    backgroundColor:"white",
  },
  tt:{
    fontSize:15,
    fontWeight: "600",
    textAlign:"left",
    marginBottom:5
  },
  dt:{
    fontSize:15,
    fontWeight: "600",
    textAlign:"left",
    color: "grey",
    marginBottom:10,
  },
});
export default styles;
