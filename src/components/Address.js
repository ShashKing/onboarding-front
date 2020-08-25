import React, { useState, useEffect } from 'react'
import { Box, Card, Grid, Tab } from '@material-ui/core'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { address_details } from './AtomState'

function Address() {
    const [value, setValue] = useState([])
    const [details, setDetails] = useRecoilState(address_details)
    useEffect(() => {
        setDetails([])
        return() =>{
            console.log(value)
            setDetails(value)
        }
    },[value])
    const initialValues ={
        street:'',
        home_number:'',
        locality:'',
        landmark:'',
        city:'',
        district:'',
        state:'',
        pin_code:''
    }
    const validationSchema = Yup.object({
        street: Yup.number().required("Required"),
        home_number: Yup.string().required("Required"),
        locality: Yup.string().required("Required"),
        landmark: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        district: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        pin_code: Yup.number().required("Required")

    })

    const onSubmit = values => {
        console.log(values)
    }

    const handleAutoSubmit = values => {
        setValue(values)

    }


    return (
        <Box style ={{marginTop:"2%", marginLeft:"2%", marginRight:"2%", marginBottom: "2%"}}>
                
                <Card >
                <Tab label ="Address Details"></Tab>
                <Formik initialValues ={initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}>
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
                                            name  ="home_number"
                                            type ="text"
                                            label ="House/Flat Number"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="street"
                                            type ="text"
                                            label ="Street Number"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="locality"
                                            type ="text"
                                            label ="Locality"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="landmark"
                                            type ="text"
                                            label ="Nearby Landmark"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="city"
                                            type ="text"
                                            label ="City"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="district"
                                            type ="text"
                                            label ="District"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="state"
                                            type ="text"
                                            label ="State"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="pin_code"
                                            type ="text"
                                            label ="Pin Code"
                                            control = "input"/>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Form>
                        )
                    }
                }
                </Formik>
                </Card>
            </Box>
            
    )
}

export default Address
