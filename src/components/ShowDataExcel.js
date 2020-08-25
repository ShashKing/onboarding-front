import React, { useState, useEffect } from 'react'
import axios from  'axios'
import ReactToExcel from 'react-html-table-to-excel'
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

function ShowDataExcel() {
    const [personal_details, setPersonalData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/employees")
        .then(response => {
            console.log(response.data)
            setPersonalData(response.data)
            debugger

        })
        .catch(error => {
            console.log(error)
        })
    },[])
    return (
        <div>
            <ReactToExcel
            table ="table-to-xlsx"
            className ='btn'
            filename ="excelFile"
            sheet ="Sheet 1"
            buttonText = "Export">

            </ReactToExcel>
            
            <TableContainer component={Paper}>
      <Table aria-label="simple table" id ="table-to-xlsx">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date of Joining</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Adhaar Card</TableCell>
            <TableCell align="right">Pan Card</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personal_details.map((detail) => (
            <TableRow key={detail.id}>
              <TableCell align = "right">
                {`${detail.first_name} ${detail.last_name}`}
              </TableCell>
              <TableCell align="right">{detail.date_of_joining}</TableCell>
              <TableCell align="right">{detail.email}</TableCell>
              <TableCell align="right">{detail.phone_number}</TableCell>
              <TableCell align="right">{detail.gender}</TableCell>
              <TableCell align="right">{detail.date_of_birth}</TableCell>
              <TableCell align="right">{detail.adhar_card}</TableCell>
              <TableCell align="right">{detail.pan_card}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
        
    )
}

export default ShowDataExcel
