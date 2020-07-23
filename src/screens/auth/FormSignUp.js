import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {Formik} from "formik";
import {DATE, HEURFETE, TYPE, WILAYA} from "../../constante/Phrases";
import StyleCommon from "../../constante/StyleCommon";
import {OutlinedTextField} from "react-native-material-textfield";
import Colors from "../../constante/Colors";
import {Icon} from "react-native-elements";
import { RadioButton } from 'react-native-paper';
import {choisirPicker} from "../../utils/PickerUtil";
import {listWilaya, phoneRegex} from "../../constante/Data";
import PickerInput from "../../components/PickerInput";
import SinglePicker from "../../components/SinglePicker";
import ButtonBLue from "../../components/ButtonBLue";
import * as yup from "yup"
import {connect} from "react-redux";
import { loadingAuth, signupReject, signupSuccess} from "../../redux/actions/UserActions";
import {userApi} from "../../api/Api";
class FormSignUp extends Component {
    validationSchema = yup.object().shape({
        nom : yup.string()
            .label("Nom complet")
            .required("le nom ne doit pas être vide"),
        prenom : yup.string()
            .label("prenom")
            .required("Le prénom ne doit pas être vide "),
        email : yup.string()
            .label("Email")
            .email("Entrer un email valide")
            .required("l'email ne doit pas être vide"),
        age: yup.number()
            .required("Enter Votre age")
            .min(18, "il faut que tu aura plus de 18 ans")
            .max(100, "il faut que tu aura moins de 100 ans"),
        password : yup.string()
            .label('Mot de Passe')
            .required("le mot de passe ne doit pas etre vide")
            .min(8,"Le mot de passe doit être au minimum 8 caractère"),
        passwordConf: yup.string()
            .label("Confirmer mot de passe")
            .required("confirmer le mot de passe ne doit pas être vide")
            .oneOf([yup.ref('password'),null],"les deux mots de passe doivent être les même"),
        phone: yup.string().matches(phoneRegex,"le numero de telepohone n'est pas valide")
    });

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

    _SubmitHandler=(values)=> {
        if (this.state.sexe !== "" && this.state.wilaya.name !== WILAYA ) {
            const user = {
                ...values,
                wilaya: this.state.wilaya.name,
                sexe: this.state.sexe.toLowerCase()
            };
            this.props.loadingSignup()
            userApi.signup(user).then(response=>{
                console.log(response)
                if(response.error){
                    alert(response.data.message)
                    this.props.signupReject()
                }else{
                    this.props.signupSucces(response.data.user,response.data.token)
                    console.log(this.props.user)
                    this.props.navigation.replace("HomeStack")
                }
            })

        } else {
            alert("Attention, il faut remplir tous les champs !")
        }
    }
    render() {
        return (
            <Formik
                initialValues={{nom : "islem",prenom : "neddar",age : 23,email : "fn_islem@esi.dz",phone :"0556565656",password :"123456789",passwordConf :"123456789"}}
                onSubmit={values => {this._SubmitHandler(values)}}
                validationSchema={this.validationSchema}
            >
                {formikProps =>(
                    <ScrollView style={[StyleCommon.container,{backgroundColor : "#FFF"}]} showsVerticalScrollIndicator={false}>
                        <SinglePicker parent={this} parite={this.state.currentInput === "wilaya"}/>
                        <OutlinedTextField
                            name = {"nom"}
                            label={"Nom"}
                            onChangeText = {formikProps.handleChange("nom")}
                            value={formikProps.values.nom}
                            onBLur={formikProps.handleBlur("nom")}
                            error={formikProps.errors.nom && formikProps.touched.nom ? formikProps.errors.nom : ""}
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
                                        <RadioButton value="h" color={Colors.$bluePrimary}/>
                                        <Text>Homme</Text>
                                    </View>
                                    <View style={{flexDirection : "row",alignItems : "center"}}>
                                        <RadioButton value="f" color={Colors.$bluePrimary}/>
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

const mapDispatchtoProps = dispatch=>{
    return{
        loadingSignup : () => {dispatch(loadingAuth())},
        signupSucces: (user,token) =>{dispatch(signupSuccess(user,token))},
        signupReject : () =>{dispatch(signupReject())}
    }
}

export default connect(
    state=>({
        user : state.user,
    }),
    mapDispatchtoProps
)(FormSignUp)