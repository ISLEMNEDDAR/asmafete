

/*export const onPressOkPicker = (parent,result)=>{
    console.log("press ok Picker");
    parent.setState({ singlePickerVisible: false });
    parent.setState({ singlePickerSelectedItem: result.selectedItem });
    if(result.selectedItem !== null && result.selectedItem !== undefined ){

        var inputChoosed = result.selectedItem.item;
        console.log(inputChoosed);
        switch(parent.state.currentInput){
            case "pays":
                parent.setState({pays : inputChoosed});
                parent.setState({ville : {name : VILLE}});
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
            case "paysf":
                parent.setState({pays : inputChoosed});
                parent.setState({ville : {name : VILLEF}},()=>{
                        console.log(createUrl(parent));
                });
                break;
            case "villef" :
                parent.setState({ville : inputChoosed},()=>{
                    console.log(createUrl(parent));
                });
                break;
            case "specialitef":
                parent.setState({specialite : inputChoosed},()=>{
                    console.log(createUrl(parent));
                });
                break;
            case "typef":
                parent.setState({type : inputChoosed});
                parent.setState({specialite : {name : SPECIALITYF}},()=>{
                    console.log(createUrl(parent));
                });
                break;
            case "group":
                parent.setState({group : inputChoosed});
                break;
            case "specialited":
                parent.setState({specialite : inputChoosed})
                break;
            case "payss":
                parent.setState({pays : inputChoosed});
                parent.setState({ville : {name : VILLEF}});
                break;
            case "villes" :
                parent.setState({ville : inputChoosed});
                break;
            case "groups":
                parent.setState({group : inputChoosed});
                break;
        }
    }

    console.log("fin picker")
};*/

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
