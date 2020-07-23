import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Button, Image} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import TextUnderline from "../../components/TextUnderline";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Formik} from "formik"
import * as yup from "yup"
import ButtonBLue from "../../components/ButtonBLue";
import Colors from "../../constante/Colors";
import {Icon} from "react-native-elements";
import assets from "../../assets/assets";
import {OutlinedTextField} from "react-native-material-textfield";
import {connect} from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import {userApi} from "../../api/Api";
import {loadingAuth, signupReject, signupSuccess} from "../../redux/actions/UserActions";
class Login extends Component {
    validationSchema = yup.object().shape({
        email: yup
            .string()
            .label('Email')
            .email('Enter a valid email')
            .required('Please enter a registred email'),
        password: yup
            .string()
            .label('Mot de Passe')
            .required()
            .min(8, 'Passoword must have at least 8 characters'),
    });

    state = {
        passwordVisibility: true,
    };

    handleSubmit = values => {
        if (values.email.length > 0 && values.password.length > 0){
            console.log("login")
            const user = {
                ...values
            }
            this.props.loadingLogin()
            userApi.login(user)
                .then(response=>{
                    if(response.error){
                        alert(response.data.messages)
                        this.props.loginReject()
                    }else{
                        this.props.loginSuccess(response.data.user,response.data.token)
                    }
                })
        }
        else alert('error in login');
    };

    render() {
        return (
            <SafeAreaView style={StyleCommon.container}>

                    <View style={StyleCommon.container}>
                        <Formik initialValues={{email: '', password: ''}}
                                onSubmit={values => {
                                    this.handleSubmit(values);
                                }}
                                validationSchema={this.validationSchema}>
                            {formikProps =>(
                                <View style={{flex : 1}}>
                                    <View style={[{flex : 0.5},StyleCommon.centerBottom]}>
                                        <Image source={assets.first.logo} style={StyleCommon.logoLogin}/>
                                    </View>
                                    <View style={[{flex : 1},StyleCommon.centerVertical,StyleCommon.margin10Vertical]}>
                                        <OutlinedTextField
                                            style={{}}
                                            name={'email'}
                                            label={'Email'}
                                            textContentType={'emailAddress'}
                                            onChangeText={formikProps.handleChange('email')}
                                            value={formikProps.values.email}
                                            onBLur={formikProps.handleBlur('email')}
                                            error={formikProps.errors.email && formikProps.touched.email ? formikProps.errors.email : ""}
                                        />
                                        <OutlinedTextField
                                            style={{}}
                                            name={'password'}
                                            label={'Mot de passe'}
                                            secureTextEntry={this.state.passwordVisibility}
                                            renderRightAccessory={() => {
                                                return <Icon
                                                    name={this.state.passwordVisibility ? 'eye' : 'eye-slash'}
                                                    type="font-awesome"
                                                    color={Colors.$warm_gray}
                                                    onPress={() => {
                                                        this.setState({passwordVisibility: !this.state.passwordVisibility})
                                                    }}
                                                />
                                            }}
                                            onChangeText={formikProps.handleChange('password')}
                                            value={formikProps.values.password}
                                            onBLur={formikProps.handleBlur('password')}
                                            error={formikProps.errors.password && formikProps.touched.password ? formikProps.errors.password : ""}/>
                                    </View>
                                    <View style={[{flex : 0.5},StyleCommon.centerTop,StyleCommon.margin10Vertical]}>
                                        <ButtonBLue
                                            text="Se connecter"
                                            paddingTop={15}
                                            paddingBottom={15}
                                            paddingRight={16}
                                            paddingLeft={16}
                                            fontSize={14}
                                            onPress={formikProps.handleSubmit}
                                            //disabled={!formikProps.isValid || formikProps.isSubmitting}
                                        />
                                    </View>
                                </View>
                            )}
                        </Formik>
                        <View style={StyleCommon.containerAuth}>
                            <TextUnderline text={"S'inscrire"}/>
                        </View>
                    </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchtoProps = dispatch=>{
    return{
        loadingLogin : () => {dispatch(loadingAuth())},
        loginSuccess: (user) =>{dispatch(signupSuccess(user))},
        loginReject : () =>{dispatch(signupReject())}
    }
}

export default connect(
    state =>({
        user : state.user
    }),
    mapDispatchtoProps
)(Login);