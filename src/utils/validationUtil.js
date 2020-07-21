import {TYPE, WILAYA} from "../constante/Phrases";


export const validationInputFete = (parent)=>{
    return parent.state.wilaya.name !== WILAYA && parent.state.type.name !== TYPE
};

export const validateFete = (parent)=>{
  return validationInputFete(parent)
};
