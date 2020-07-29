import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import HeaderComponent from "../../components/HedearCompenent";
import Colors from "../../constante/Colors";
import {listFetes, listSalle} from "../../constante/Data";
import ListFete from "./mesfetes/ListFete";
import LoadingScreen from "../../components/LoadingScreen";
import {feteApi} from "../../api/Api";
import {connect} from "react-redux";

class MesFetes extends Component {

    state = {
        listFetes : [],
        isLoading : false
    }

    componentDidMount() {
        this.setState({
            isLoading : true
        })
        feteApi.getUserFete(this.props.user.user.id,this.props.user.token)
            .then(response =>{
                if(response.error){
                    alert("there is a probleme")
                    this.setState({
                        isLoading : false
                    })
                }else{
                    console.log(response.data.listFete)
                    this.setState({
                        listFetes : response.data.listFete,
                        isLoading : false
                    })
                }
            })
    }

    render() {
        return (
            <SafeAreaView style={StyleCommon.container}>
                <LoadingScreen hide={!this.state.isLoading}/>
                <HeaderComponent
                    color1={Colors.$pink}
                    color2={Colors.$pink}
                    height={65}
                    iconCenter={"tint"}
                    sizeIconCenter={30}
                    colorIconCenter={Colors.$wihtePrimary}
                    tailleFont={20}
                    colorText={Colors.$wihtePrimary}
                    text={"Mes Fetes"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={[StyleCommon.container, {marginHorizontal : "5%"},StyleCommon.margin10Horizontal]}>
                    <ListFete listFetes={this.state.listFetes} />
                </View>
            </SafeAreaView>
        );
    }
}

export default connect(
    state=>({
        user : state.user
    }),
    {}
)(MesFetes);