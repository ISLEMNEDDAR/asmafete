import Colors from "./Colors";

export default {
    container : {
        flex : 1,
    },
    logo:{
        height: 200,
        width : 200,
        borderRadius : 200
    },
    logoLogin : {
        height: 150,
        width : 150,
        borderRadius : 200,
        //resize :"stretch"
    },
    containerAuth : {
        height : 70,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },
    Center : {
        alignItems : "center",
        justifyContent : "center"
    },
    centerVertical : {
        justifyContent : "center"
    },
    centerBottom : {
        alignItems : "center",
        justifyContent : "flex-end"
    },
    margin10Vertical:{
        marginHorizontal : "10%"
    },
    margin10Horizontal:{
        marginVertical : "10%"
    },
    centerTop : {
        justifyContent : "flex-start"
    },
    margintop : {
        marginTop : 10
    },
    phoneInput : {
        //marginTop : 20,
        marginBottom : 10,
        borderWidth : 1,
        borderColor : Colors.$warm_gray,
        padding : 18,
        borderRadius : 2
    },
}