import React, {Component} from 'react';
//import {onPressOkPicker} from "../utils/PickerUtil";
import {SinglePickerMaterialDialog} from "react-native-material-dialog";
import Colors from "../constante/Colors";

class SinglePicker extends Component {
    render() {
        const {parent,parite,remove} = this.props;
        let input = "";
        if(remove){
             input = parent.state.currentInput.slice(0,-1)
        }else{
            input = parent.state.currentInput
        }
        console.log(input);
        return (
            <SinglePickerMaterialDialog
                title={parite ? "choisir un "+input+" :" : "choisir une "+input+" :"}
                items={parent.state.listPicker.map((row, index) => ({ value: index, label: row.name ,item : row }))}
                visible={parent.state.singlePickerVisible}
                onCancel={() => parent.setState({ singlePickerVisible: false })}
                onOk={result => {
                    console.log(result);
                    onPressOkPicker(parent,result)
                }}
                colorAccent={Colors.$bluePrimary}
                scrolled={true}
                cancelLabel={"Annuler"}
            />
        );
    }
}

export default SinglePicker;
