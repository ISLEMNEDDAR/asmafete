import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../../../constante/StyleCommon";
import {Formik} from "formik";
import {OutlinedTextField} from "react-native-material-textfield";
import {DATE, HEURFETE, TYPE, WILAYA} from "../../../../constante/Phrases";
import {choisirPicker} from "../../../../utils/PickerUtil";
import {listHeurs, listType, listWilaya} from "../../../../constante/Data";
import PickerInput from "../../../../components/PickerInput";
import SinglePicker from "../../../../components/SinglePicker";
import DateTimePicker from "react-native-modal-datetime-picker";
import Colors from "../../../../constante/Colors";
import {MultiPickerMaterialDialog} from "react-native-material-dialog";
import ButtonBLue from "../../../../components/ButtonBLue";
import {connect} from "react-redux";
import * as yup from "yup"
import {feteApi} from "../../../../api/Api";
import LoadingScreen from "../../../../components/LoadingScreen";

class FormCreateFete extends Component {
    validationSchema = yup.object().shape({
        nombre_invite: yup.number()
            .label("Nombre d'invité")
            .required("le nombre d'invite ne doit pas être vide")
            .max(1000, "le nombre d'invite ne doit pas etre superieurs a 1000"),
    })

    state={
        wilaya : {name : WILAYA},
        type : {name : TYPE},
        date : {name : DATE},
        heursFete : {name : HEURFETE},
        //
        currentInput : false,
        listPicker : [],
        singlePickerVisible : false,
        singlePickerSelectedItem : {} ,
        isTimePickerVisible : false,
        isLoading : false,
        multiPickerSpecialiteVisible : false,
        heurs : []
    }

    _SubmitHandler=(values)=>{
        //s
        console.log(this.state.wilaya.name)
        console.log(this.state.type.name)
        console.log(this.state.date.name)
        console.log(this.state.heursFete.name)
        if(this.state.wilaya.name !== WILAYA && this.state.type.name !== TYPE && this.state.date.name !== Date && this.state.heurs.length){
            const fete={
                ...values,
                wilaya : this.state.wilaya.name,
                type : this.state.type.name,
                date : this.state.date.name,
                heurs_fete : this.state.heurs.map((heurs,i)=>{
                    return heurs.label
                }),
                id_user : this.props.user.user.id
            };
            console.log(fete);
            this.setState({
                isLoading : true
            })
            feteApi.createFete(this.props.user.token,fete)
                .then(response => {
                    if(response.error){
                        alert("there is a probleme")
                        this.setState({
                            isLoading : false
                        })
                    }else{
                        this.setState({
                            isLoading : false
                        })
                        this.props.navigation.replace("ChooseSalle",{fete : response.data.fete._id})
                    }
                }).catch()
        }else{
            alert("Attention, il faut remplir tous les champs")
        }
    };

    handleDate(date) {
        const day = new Date(date);
        const jour = day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"";
        this.setState({
            date : {name : jour}
        })
    }

    getListHeurs = ()=>{
        let spec = "Choisir une Heure";
        const list = this.state.heurs;
        if(list.length>0){
            if(list.length === 1) return list[0].label;
            else{
                return ""+list.length+" Heurs choisies"
            }
        }
        return spec
    };

    handleSpecialite = (selectedHeurs)=>{
        this.setState({
            heurs : selectedHeurs,
            multiPickerSpecialiteVisible : false
        })
    };

    render() {
        return (
            <Formik
                initialValues={{nombre_invite : ""}}
                onSubmit={values => {this._SubmitHandler(values)}}
                validationSchema={this.validationSchema}
            >
                {formikProps =>(
                    <View style={[StyleCommon.container,{backgroundColor : "#FFF",justifyContent : "center"}]}>
                        <LoadingScreen hide={!this.state.isLoading}/>
                        <SinglePicker parent={this} parite={this.state.currentInput === "wilaya"}/>
                        <DateTimePicker isVisible={this.state.isTimePickerVisible}
                                        onConfirm={(date)=>{
                                            this.setState({
                                                isTimePickerVisible : false
                                            })
                                            this.handleDate(date);
                                        }}
                                        onCancel={()=>{
                                            this.setState({
                                                isTimePickerVisible : false
                                            })
                                        }}
                                        mode="date"
                                        datePickerModeAndroid="calendar"
                        />
                        <MultiPickerMaterialDialog
                            title={"Choisissez des Heurs :"}
                            items={listHeurs.map((row, index) => ({ value: index, label: row.name , item : row }))}
                            visible={this.state.multiPickerSpecialiteVisible}
                            onCancel={()=>this.setState({multiPickerSpecialiteVisible : false})}
                            onOk={(result)=>{
                                console.log(result.selectedItems);
                                this.handleSpecialite(result.selectedItems)
                            }}
                            scrolled={true}
                            colorAccent={Colors.$bluePrimary}
                            cancelLabel={"Annuler"}
                        />
                        {/*<OutlinedTextField
                            name={"name"}
                            label={"Nom"}
                            onChangeText={formikProps.handleChange("name")}
                            value={formikProps.values.name}
                            onBLur={formikProps.handleBlur("name")}
                            error={formikProps.errors.name && formikProps.touched.name ? formikProps.errors.name : ""}
                            inputContainerStyle={StyleCommon.margintop}
                        />
                            <OutlinedTextField
                            name = {"age"}
                            label={"Age"}
                            onChangeText = {formikProps.handleChange("age")}
                            value={formikProps.values.age}
                            onBLur={formikProps.handleBlur("age")}
                            error={formikProps.errors.age && formikProps.touched.age ? formikProps.errors.age : ""}
                            inputContainerStyle={StyleCommon.margintop}
                            keyboardType="numeric"
                            />*/}
                        <PickerInput text={this.state.wilaya.name}
                                     height={55}
                                     backgroundColor={"white"}
                                     iconName={"arrow-drop-down"}
                                     onPress={()=>{choisirPicker(this,listWilaya,"wilaya")}}
                                     margintop={10}
                        />
                        <PickerInput text={this.state.type.name}
                                     height={55}
                                     backgroundColor={"white"}
                                     iconName={"arrow-drop-down"}
                                     onPress={()=>{choisirPicker(this,listType,"type")}}
                                     margintop={10}
                        />
                        <PickerInput text={this.state.date.name}
                                     backgroundColor={"white"}
                                     iconName={"calendar"}
                                     iconType={"font-awesome"}
                                     height={55}
                                     onPress={()=>{
                                         this.setState({
                                             isTimePickerVisible : true
                                         })

                                     }}
                        />
                        <OutlinedTextField
                            name = {"nombre_invite"}
                            label={"nombre des Invites"}
                            onChangeText = {formikProps.handleChange("nombre_invite")}
                            value={formikProps.values.nombre_invite}
                            onBLur={formikProps.handleBlur("nombre_invite")}
                            error={formikProps.errors.nombre_invite && formikProps.touched.nombre_invite ? formikProps.errors.nombre_invite : ""}
                            inputContainerStyle={StyleCommon.margintop}
                            keyboardType="numeric"
                        />
                        <PickerInput text={this.getListHeurs()}
                                     height={55}
                                     backgroundColor={Colors.$whiteSecondary}
                                     iconName={"arrow-drop-down"}
                                     onPress={()=>{
                                             this.setState({
                                                 multiPickerSpecialiteVisible : true
                                             })
                                         }
                                     }
                        />
                        <View style={{width : "100%",marginBottom : 50,marginTop : 20,alignItems:"flex-end"}}>
                            <ButtonBLue
                                        text= {"Crée Fete et reserver Salle"}
                                        paddingTop={8}
                                        paddingBottom={8}
                                        paddingRight={16}
                                        paddingLeft={16}
                                        fontSize={14}
                                        onPress={formikProps.handleSubmit}/>
                        </View>
                    </View>

                )}
            </Formik>

        );
    }
}

export default connect(
    state=>({
        user : state.user
    }),
    {}
)(FormCreateFete);