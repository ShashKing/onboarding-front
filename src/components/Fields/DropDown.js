import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box } from '@material-ui/core';
import { Field } from 'formik';
function DropDown(props) {
    const {name, label, options, ...rest} = props
    return (
        <Box >
            <Field name ={name}>
                {
                    ({field}) => {
                        return(
                                <FormControl variant="outlined" style ={{width:"100%"}} >
                                <InputLabel id={name}>{label}</InputLabel>
                                <Select
                                labelId={name}
                                id={name}
                                {...rest}
                                {...field}
                                label={label}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    options.map(option => {
                                        return(
                                            <MenuItem key ={option.key} value={option.value}>{option.key}</MenuItem>

                                        )
                                    })
                                }
                                </Select>
                            </FormControl>
                        )
                    }
                }
            </Field>
        </Box>
    )
}

export default DropDown
