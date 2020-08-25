import React from 'react'
import { Button, Box } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { p_details, address_details, account_details, company_details } from './AtomState'
import axios from 'axios'


function FormFinished() {
    const personal_details = useRecoilState(p_details)
    const address_detail = useRecoilState(address_details)
    const bank_details = useRecoilState(account_details)
    const company_detail = useRecoilState(company_details)
    const handleSubmit = () => {
        axios.post("http://localhost:4000/employees",personal_details[0])
        .then(response => {
            const p_a = JSON.stringify(address_detail[0])
            const p_b = p_a.replace("}", `, "employee_id":${response.data.id}}`)
            const p_values = JSON.parse(p_b)
            axios.post(`http://localhost:4000/addresses`, p_values)
            .then(response1 => {
                console.log(response1.data)
            })

            .catch(error => {
                console.log(error)
            })
            debugger
            const c_a = JSON.stringify(company_detail[0])
            const c_b = c_a.replace("}", `, "employee_id":${response.data.id}}`)
            const c_values = JSON.parse(c_b)
            axios.post(`http://localhost:4000/companies`, c_values)
            .then(response1 => {
                console.log(response1.data)
            })
            .catch(error => {
                console.log(error)
            })

            const a_a = JSON.stringify(bank_details[0])
            const a_b = a_a.replace("}", `, "employee_id":${response.data.id}}`)
            const a_values = JSON.parse(a_b)
            axios.post(`http://localhost:4000/accounts`, a_values)
            .then(response1 => {
                console.log(response1.data)
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch()
        console.log(bank_details[0])
        console.log(company_detail[0])

    }
    return (
        <Box>
            
            <Button color ="primary" variant ="outlined" onClick = {handleSubmit}>
                Submit
            </Button>
           
        </Box>

    )
}

export default FormFinished
