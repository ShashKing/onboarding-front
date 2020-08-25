import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import M from 'materialize-css'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

function HomeComponent() {

    
    useEffect(() => {
        M.AutoInit()
    })


    const options = [
        { key: 'Select Qualification', value: "" },
        { key: 'MCA', value: "mca" },
        { key: 'B.Tech', value: "btech" },
        { key: 'B.Sc', value: "bsc" }
    ]
    const gender = [
        { key: 'Male', value: "male" },
        { key: 'Female', value: "female" },
        { key: 'Other', value: "other" }

    ]

    const initialValues = {
        first_name:"",
        last_name:"",
        email:"",
        date_of_joining:"",
        phone_number:"",
        employee_id:"",
        // verify_email:"",
        // verify_phone:"",
        gender:"male",
        resign_date:null,
        is_resign:false,
        qualification:'',
        hasemail:'no'
    }

    const validationSchema = Yup.object({
        first_name: Yup.string().required("required"),
        last_name: Yup.string().required("required"),
        email: Yup.string().required("required").email("Invalid format"),
        phone_number:  Yup.string().required("required").max(10,"More than 10 digits"),
        gender: Yup.string().required("required"),
        qualification: Yup.string().required("required")
        
    })

    const onSubmit = values => {
        axios.post("http://localhost:4000/employees", values)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    return (
    <Formik initialValues = {initialValues}
    onSubmit = {onSubmit}
    validationSchema = {validationSchema}>
	{
        formik => {
        return(
        (
            <div className ='main_container'>
                <div className ="row">
                <Form className ="col s12">
                    <div className="input-field col s6">
                        <Field type = "text" name ="first_name" id ="first_name"  />
                        <label htmlFor ="first_name">First Name</label>
                        <ErrorMessage name ="first_name"/>
                    </div>

                    <div className="input-field col s6">
                        <Field type = "text" name ="last_name" id ="last_name"  />
                        <label htmlFor ="last_name">Last Name</label>
                        <ErrorMessage name ="last_name"/>
                    </div>

                    <div className="input-field col s12">
                        <Field type = "text" name ="phone_number" id ="phone_number"  />
                        <label htmlFor ="phone_number">Phone Number</label>
                        <ErrorMessage name ="phone_number"/>
                    </div>

                    <div className ="col s12">
                        <Field as ='select' id ="qualification" name ="qualification">
                            {options.map(option => {
                            return(
                                <option key ={option.key} value ={option.value}>{option.key}</option>
                            )
                            })}
                        </Field>
                        <label htmlFor ="qualification">Qualification</label>
                        <ErrorMessage name ="qualification"/>
                    </div>

                    <div className="input-field col s12">
                        <Field type = "text" name ="email" id ="email"  />
                        <label htmlFor ="email">Email</label>
                        <ErrorMessage name ="email"/>
                    </div> 
                    <div>
                        <Field name="gender" id ="gender">
                            {({field}) => {
                                return (
                                    gender.map(option => {
                                    return (
                                        <React.Fragment key = {option.key}>
                                            <label>
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
                    </div>
                    <div className ="input-field" style ={{float:"left"}}>
                        Date of Joining
                        <Field name = "date_of_joining" id = "date_of_joining" >
                            {({field, form}) => {
                                const {setFieldValue} = form
                                const { value } = field
                                return(
                                    
                                    <React.Fragment >
                                       <DateView
                                       name = "date_of_joining"
                                       id ="date_of_joining"
                                       dateFormat="dd/MM/yyyy"
                                       peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                       {...field}
                                       selected ={value}
                                       onChange ={val => setFieldValue("date_of_joining", val)}>

                                       </DateView>

                                       </React.Fragment>
                                )
                            }}
                        </Field>
                    </div>

                    <div className ="col s12 ">
                        <button type ="submit" className = "waves-effect waves-light btn"> Submit</button>
                    </div>
                </Form>
            </div>
            </div>
        )
        )
        }
    }
    </Formik>

    )
}

export default HomeComponent