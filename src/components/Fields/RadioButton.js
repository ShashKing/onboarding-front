import React from 'react'
import { Box } from '@material-ui/core'
import { Field } from 'formik'

function RadioButton(props) {
    const {name, label,options, ...rest} = props
    return (
        <Box>
            <Box>
            <label htmlFor ={name}>{label}</label>
            </Box>
            <Field name={name}>
                {({field}) => {
                    return (
                        options.map(option => {
                        return (
                            <React.Fragment key = {option.key}>
                                <label style ={{marginRight: "10%"}}>
                                    <input 
                                    type ="radio" 
                                    name ={option.value} 
                                    {...field} 
                                    value ={option.value} 
                                    className ="with-gap"
                                    checked ={field.value === option.value}/>
                                    <span>{option.key}</span>
                                    </label>
                            </React.Fragment>
                        )
                        }))
                    }
                }
            </Field>
        </Box>
    )
}

export default RadioButton
