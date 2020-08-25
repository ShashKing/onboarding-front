import React from 'react'
import {TextField} from '@material-ui/core'
import { Field } from 'formik'

function Input(props) {
    const {name, label, ...rest} = props
    return (
            <Field name ={name} >
            {
                ({field, form}) => {
                    return(
                    <TextField
                    className ="input-style"
                        error = {form.errors[name] !== undefined}  
                        id ={name} 
                        label ={label} 
                        {...rest} 
                        {...field} 
                        
                        variant ="outlined"
                     />
                    )
                }
            }
        </Field>
    )
}

export default Input
