

export const onPressOkPicker = (parent,result)=>{
    console.log("press ok Picker");
    parent.setState({ singlePickerVisible: false });
    parent.setState({ singlePickerSelectedItem: result.selectedItem });
    if(result.selectedItem !== null && result.selectedItem !== undefined ){

        var inputChoosed = result.selectedItem.item;
        console.log(inputChoosed);
        switch(parent.state.currentInput){
            case "wilaya":
                parent.setState({wilaya : inputChoosed});
                break;
            case "ville" :
                parent.setState({ville : inputChoosed});
                break;
            case "specialite":
                parent.setState({specialite : inputChoosed});
                break;
            case "type":
                parent.setState({type : inputChoosed});
                parent.setState({specialite : {name : SPECIALITY}});
                break;
        }
        console.log("fin picker")
    }
};

export const visibleSiglePicker = (parent)=>{
    parent.setState({
        singlePickerVisible : true
    })
};

export const updateList = (parent,list)=>{
    parent.setState({
        listPicker : list
    })
};

export const choisirPicker = (parent,list,input)=>{
    setCurrentInput(parent,input);
    updateList(parent,list);
    visibleSiglePicker(parent)
};

export const setCurrentInput = (parent,input)=>{
    parent.setState({
        currentInput : input
    })
};
