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
import {validateFete} from "../../../../utils/validationUtil";


class FormCreateFete extends Component {
    state={
        name : "",
        age : "",
        wilaya : {name : WILAYA},
        type : {name : TYPE},
        date : {name : DATE},
        nombreInvite : 0,
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
        console.log(values);
        this.props.navigation.navigate("ChooseSalle")
        /*if(validateFete(this)){
            const fete={
                name : values.name,
                age : values.age,
                wilaya : this.state.wilaya.code,
                type : this.state.type.code,
                date : this.state.date.name,
                nombreInvite : values.nombreInvite,
                heursFete : this.state.heursFete.name,
            };
            console.log(fete);
            this.setState({
                isLoading : true
            });
        }else{
            alert("Attention, il faut remplir tous les champs")
        }*/
    };

    handleDate(date) {
        const day = new Date(date);
        const jour = day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"";
        this.setState({
            date : {name : jour}
        })
    }

    getListHeurs = ()=>{
        var spec = "Choisir une Heure";
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
                initialValues={{name : this.state.name,age : this.state.age,etablissement : this.state.etablissement,volume : this.state.volume}}
                onSubmit={values => {this._SubmitHandler(values)}}
                validationSchema={this.validationSchema}
            >
                {formikProps =>(
                    <View style={[StyleCommon.container,{backgroundColor : "#FFF"}]}>
                        <SinglePicker parent={this} parite={this.state.currentInput === "pays"}/>
                        <DateTimePicker isVisible={this.state.isTimePickerVisible}
                                        onConfirm={(date)=>{
                                            this.handleDate(date);
                                            this.setState({
                                                isTimePickerVisible : false
                                            })
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
                        <OutlinedTextField
                            name = {"name"}
                            label={"Nom"}
                            onChangeText = {formikProps.handleChange("name")}
                            value={formikProps.values.name}
                            onBLur={formikProps.handleBlur("name")}
                            error={formikProps.errors.name && formikProps.touched.name ? formikProps.errors.name : ""}
                            inputContainerStyle={StyleCommon.margintop}
                        />
                        <OutlinedTextField
                            name = {"age"}
                            label={"Age"}
                            onChangeText = {formikProps.handleChange("age")}
                            value={formikProps.values.volume}
                            onBLur={formikProps.handleBlur("age")}
                            error={formikProps.errors.volume && formikProps.touched.volume ? formikProps.errors.volume : ""}
                            inputContainerStyle={StyleCommon.margintop}
                            keyboardType="numeric"
                        />
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
                            name = {"nombreInvite"}
                            label={"nombre des Invites"}
                            onChangeText = {formikProps.handleChange("nombreInvite")}
                            value={formikProps.values.volume}
                            onBLur={formikProps.handleBlur("nombreInvite")}
                            error={formikProps.errors.volume && formikProps.touched.volume ? formikProps.errors.volume : ""}
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

export default FormCreateFete;