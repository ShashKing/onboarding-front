import React, { useState, useEffect } from 'react'
import { Box, Card, Tab, Grid } from '@material-ui/core'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { account_details } from './AtomState'

function BankDetails() {
    const [value, setValue] = useState([])
    const [details, setDetails] = useRecoilState(account_details)
    useEffect(() => {
        setDetails([])
        return() =>{
            console.log(value)
            setDetails(value)
            
        }
    },[value])
    const initialValues ={
        account_holder_name:"",
        account_number:'',
        ifsc_code:'',
        bank_name:'',
        branch_name:'',

       
    }
    const validationSchema = Yup.object({
        

    })

    const handleAutoSubmit = values => {
        console.log(values)
        setValue(values)
    }
    return (
        <Box style ={{marginTop:"2%", marginLeft:"2%", marginRight:"2%"}}>
                
                <Card >
                <Tab label ="Bank Details"></Tab>
                <Formik initialValues ={initialValues}
                validationSchema = {validationSchema}
                >
                {
                    formik => {
                        console.log(formik.isValid)
                        if (formik.isValid)
                        {
                            handleAutoSubmit(formik.values)
                        }
                    

                        return(
                            <Form className ="card-style">
                                <Grid container spacing = {2}>
                         
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="account_holder_name"
                                            type ="text"
                                            label ="Account Holder Name"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="account_number"
                                            type ="text"
                                            label ="Account number"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="ifsc_code"
                                            type ="text"
                                            label ="IFSC Code"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="bank_name"
                                            type ="text"
                                            label ='Bank Name'
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="branch_name"
                                            type ="text"
                                            label ="Branch Name"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    

                                </Grid>
                            </Form>
                        )
                    }
                }
                </Formik>
                </Card>`
            </Box>
    )
}

export default BankDetails
