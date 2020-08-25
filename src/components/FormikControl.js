import React from 'react'
import Input from './Fields/Input'
import RadioButton from './Fields/RadioButton'
import DropDown from './Fields/DropDown'

function FormikControl(props) {
    const {control, ...rest} = props
    switch (control){
        case 'input':
        return <Input {...rest}/>
        case 'radio':
            return <RadioButton {...rest}/>
        case 'dropdown':
            return <DropDown {...rest}/>
        default:
            return null
    }
    
}

export default FormikControl
