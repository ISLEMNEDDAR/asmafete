import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {Formik} from "formik";
import {DATE, HEURFETE, TYPE, WILAYA} from "../../constante/Phrases";
import StyleCommon from "../../constante/StyleCommon";
import {OutlinedTextField} from "react-native-material-textfield";
import Colors from "../../constante/Colors";
import {Icon} from "react-native-elements";
import { RadioButton } from 'react-native-paper';
import commonStyles from "../../constante/StyleCommon";
import PhoneInput from "react-native-phone-input";
import {choisirPicker} from "../../utils/PickerUtil";
import {listWilaya} from "../../constante/Data";
import PickerInput from "../../components/PickerInput";
import SinglePicker from "../../components/SinglePicker";
import ButtonBLue from "../../components/ButtonBLue";
class FormSignUp extends Component {
    state={
        wilaya : {name : WILAYA},
        sexe : "",

        //
        passwordVisibility : true,
        passwordConfVisibility : true,


        currentInput : false,
        listPicker : [],
        singlePickerVisible : false,
        singlePickerSelectedItem : {} ,
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
    render() {
        return (
            <Formik
                initialValues={{name : "",prenom : "",age : "",email : "",phone :""}}
                onSubmit={values => {this._SubmitHandler(values)}}
                validationSchema={this.validationSchema}
            >
                {formikProps =>(

                    <ScrollView style={[StyleCommon.container,{backgroundColor : "#FFF"}]} showsVerticalScrollIndicator={false}>
                        <SinglePicker parent={this} parite={this.state.currentInput === "pays"}/>
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
                            name = {"prenom"}
                            label={"Prénom"}
                            onChangeText = {formikProps.handleChange("prenom")}
                            value={formikProps.values.prenom}
                            onBLur={formikProps.handleBlur("prenom")}
                            error={formikProps.errors.prenom && formikProps.touched.prenom ? formikProps.errors.prenom : ""}
                            inputContainerStyle={StyleCommon.margintop}
                        />
                        <OutlinedTextField
                            name = {"email"}
                            label={"Email"}
                            onChangeText = {formikProps.handleChange("email")}
                            value={formikProps.values.email}
                            //onBLur={formikProps.handleBlur("email")}
                            error={formikProps.errors.email && formikProps.touched.email ? formikProps.errors.email : ""}
                            inputContainerStyle={StyleCommon.margintop}
                        />
                        <OutlinedTextField
                            name = {"password"}
                            label={"Mot de passe"}
                            renderRightAccessory = {()=>{return (
                                <Icon
                                    name='eye'
                                    type='font-awesome'
                                    color={Colors.$warm_gray}
                                    onPress={()=>{this.setState({passwordVisibility : !this.state.passwordVisibility})}}
                                />
                            )}}
                            onChangeText = {formikProps.handleChange("password")}
                            value={formikProps.values.password}
                            //onBLur={formikProps.handleBlur("password")}
                            error={formikProps.errors.password && formikProps.touched.password ? formikProps.errors.password : ""}
                            secureTextEntry={this.state.passwordVisibility}
                            inputContainerStyle={StyleCommon.margintop}
                        />
                        <OutlinedTextField
                            name = {"passwordConf"}
                            label={"Confirmer le mot de passe"}
                            renderRightAccessory = {()=>{return (
                                <Icon
                                    name='eye'
                                    type='font-awesome'
                                    color={Colors.$warm_gray}
                                    onPress={()=>{this.setState({passwordConfVisibility : !this.state.passwordConfVisibility})}}
                                />
                            )}}
                            onChangeText = {formikProps.handleChange("passwordConf")}
                            value={formikProps.values.passwordConf}
                            //onBLur={formikProps.handleBlur("passwordConf")}
                            error={formikProps.errors.passwordConf && formikProps.touched.passwordConf ? formikProps.errors.passwordConf : ""}
                            secureTextEntry={this.state.passwordConfVisibility}
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
                        />
                        <View style={[{flexDirection : "row",alignItems : "center"},StyleCommon.margintop]}>
                            <Text style={{width : "33%"}}>Sexe : </Text>
                            <RadioButton.Group
                                onValueChange={sexe => this.setState({ sexe })}
                                value={this.state.sexe}
                            >
                                <View style={{flexDirection : "row"}}>
                                    <View style={{flexDirection : "row",alignItems : "center",width : "50%"}}>
                                        <RadioButton value="homme" color={Colors.$bluePrimary}/>
                                        <Text>Homme</Text>
                                    </View>
                                    <View style={{flexDirection : "row",alignItems : "center"}}>
                                        <RadioButton value="femme" color={Colors.$bluePrimary}/>
                                        <Text>Femme</Text>
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View>
                        <OutlinedTextField
                            name = {"phoone"}
                            label={"Entrer votre numéro de téléphone"}
                            onChangeText = {formikProps.handleChange("phone")}
                            value={formikProps.values.phone}
                            onBLur={formikProps.handleBlur("phone")}
                            error={formikProps.errors.phone && formikProps.touched.phone ? formikProps.errors.phone : ""}
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
                        <View style={{width : "100%",marginBottom : 50,marginTop : 20,alignItems:"center"}}>
                            <ButtonBLue
                                text= {"inscrire"}
                                paddingTop={8}
                                paddingBottom={8}
                                paddingRight={16}
                                paddingLeft={16}
                                fontSize={14}
                                onPress={formikProps.handleSubmit}/>
                        </View>
                    </ScrollView>
                )}

            </Formik>
        );
    }
}

export default FormSignUp;