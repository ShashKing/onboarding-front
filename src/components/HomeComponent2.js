import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import * as Yup from 'yup'
import { Box, Tab } from '@material-ui/core'
import moment from 'moment'
import { useRecoilState } from 'recoil'
import { p_details } from './AtomState'

function HomeComponent2() {
    const [value, setValue] = useState([])
    const [details, setDetails] = useRecoilState(p_details)
    useEffect(() => {
        setDetails([])
        return() =>{
            console.log(value)
            setDetails(value)
        }
    },[value])
    const now = moment().format("yyyy-MM-DD")
    const initialValues = {
        first_name: "",
        last_name:'',
        email:'',
        phone_number:'',
        date_of_birth: now,
        gender:'male',
        qualification:'',
        date_of_joining: now,
        adhar_card:'',
        pan_card:''
        
    }

    const gender = [
        { key: 'Male', value: "male" },
        { key: 'Female', value: "female" },
        { key: 'Other', value: "other" }
    ]

    const qualification = [
        { key: 'MCA', value: "mca" },
        { key: 'B.Tech', value: "btech" },
        { key: 'B.Sc', value: "bsc" }
    ]

    const validationSchema = Yup.object({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string().required("Required").email("Invalid Format"),
        // phone_number: Yup.number().required("Required").max(10,'Not more than 10'),
        // adhar_card: Yup.number().required("Required").max(12,'')
        pan_card: Yup.string().required("Required")
    })

    
    const handleAutoSubmit = values => {
        setValue(values)
    }
    return (
        
            <Box style ={{marginTop:"2%", marginLeft:"2%", marginRight:"2%"}}>
                
                <Card >
                   <Tab label ="Personal Details"></Tab>
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
                                            name  ="first_name"
                                            type ="text"
                                            label ="First Name"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="last_name"
                                            type ="text"
                                            label ="Last Name"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="email"
                                            type ="email"
                                            label ="Email"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="phone_number"
                                            type ="text"
                                            label ="Phone"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="date_of_birth"
                                            label ="Date of birth"
                                            control = "input"
                                            type = 'date'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            control  ="radio"
                                            options = {gender}
                                            name = 'gender'
                                            label = "Gender"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            control  ="dropdown"
                                            options = {qualification}
                                            name = 'qualification'
                                            label = "Qualification"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="date_of_joining"
                                            label ="Date of Joining"
                                            control = "input"
                                            type = 'date'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="adhar_card"
                                            type ="text"
                                            label ="Adhaar Card"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs = {6}>
                                        <Box>
                                            <FormikControl
                                            name  ="pan_card"
                                            type ="text"
                                            label ="Pan Card"
                                            control = "input"/>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <button type ='submit' hidden >Submit</button>
                            </Form>
                        )
                    }
                }
                </Formik>
                </Card>`
            </Box>
    )
}

export default HomeComponent2
