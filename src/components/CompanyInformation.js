import React, { useState, useEffect } from 'react'
import { Box, Card, Tab, Grid } from '@material-ui/core'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { company_details } from './AtomState'

function CompanyInformation() {
    const [value, setValue] = useState([])
    const [
        details, setDetails] = useRecoilState(company_details)
    useEffect(() => {
        setDetails([])
        return() =>{
            console.log(value)
            setDetails(value)
        }
    },[value])
    const initialValues ={
        previous_company:'',
        total_experience:'',
        previous_designation:'',
        designation:''

       
    }
    const validationSchema = Yup.object({
        previous_company: Yup.string().required("Required"),
        total_experience: Yup.number().required("Required"),
        previous_designation: Yup.string().required("Required"),
        designation: Yup.string().required("Required")

    })

   

    const handleAutoSubmit = values => {
        console.log(values)
        setValue(values)

    }
    return (
        <Box style ={{marginTop:"2%", marginLeft:"2%", marginRight:"2%"}}>
                
                <Card >
                   <Tab label ="Company Details"></Tab>
                <Formik initialValues ={initialValues}
                validationSchema = {validationSchema}
                >
                {
                    formik => {
                        console.log(formik)
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
                                            name  ="previous_company"
                                            type ="text"
                                            label ="Previous Company Name"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="total_experience"
                                            type ="text"
                                            label ="Total Experience"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="previous_designation"
                                            type ="text"
                                            label ="Previous Company Designation"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="designation"
                                            type ="text"
                                            label ="Current Company Designation"
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

export default CompanyInformation
