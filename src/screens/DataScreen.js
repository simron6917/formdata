import React , {Component} from 'react'
// import FormContent from './FormScreen'
// import Table from './FormScreen'

const DataScreen = (props) => {
    return (
        <div>
            <h1>Your Information</h1>
            <table>
            <tbody>
         <tr>
             <td>First Name</td>
             <td>Email Address</td>
             <td>Phone</td> 
             <td>DOB</td>   
             <td>City</td>                    
             <td>District</td>      
         </tr>  
         <tr>
             <td>{props.name}</td>
             <td>{props.email}</td>
             <td>{props.phone}</td>
             <td>{props.dob}</td>
             <td>{props.city}</td>
             <td>{props.district}</td>

         </tr> 
         
    </tbody>
 </table>
        
        </div>
    )
}

export default DataScreen
