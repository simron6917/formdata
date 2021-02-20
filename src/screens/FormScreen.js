
import React, { Component } from 'react';
import Table from '../components/Table'
 
export default class FormContent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            dob:'',
            city:'',
            district:'',
            province:'',
            country:'',
            data:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
   this.componentDidMount();
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
    if (localStorage.getItem('document')) {
        this.setState({
        //     name: this.documentData.name,
        //    email: this.documentData.email,
        //    phone: this.documentData.phone,
        //    dob: this.documentData.dob,
        //    city: this.documentData.city,
        //    district: this.documentData.district,
        //    province: this.documentData.province,
        //     country:this.documentData.country
        data: this.documentData
    })
} else {
    this.setState({
        name: '',
        email: '',
        phone: '',
        dob:'',
        city:'',
        district:'',
        province:'',
        country:''
    })
}
}    
        

render() {
    return <>
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>DOB</label>
                    <input type="date" name="dob" className="form-control" value={this.state.dob} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <label>City</label>
                    <input type="text" name="city" className="form-control" value={this.state.city} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>District</label>
                    <input type="text" name="district" className="form-control" value={this.state.district} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Province</label>
                    {/* <input name="district" className="form-control" value={this.state.province} onChange={this.handleChange} > */}
                    <select style={{marginLeft:'10px' , marginTop:'3px'}}>
                          <option value={this.state.first} name='first'>1</option>
                          <option value={this.state.second} name='second'>2</option>
                          <option value={this.state.third} name='third'>3</option>
                          <option value={this.state.fouth} name='fourth'>4</option>
                          <option value={this.state.fifth} name='fifth'>5</option>
                          <option value={this.state.sixth} name='sixth'>6</option>
                          <option value={this.state.seventh} name='seventh'>7</option>
                     </select>
                     {/* </input> */}
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" name="counry" className="form-control" value={this.state.country} value="Nepal" onChange={this.handleChange} defaultValue/>
                </div>
                <button type="submit" onClick={this.handleClick} className="btn btn-primary btn-block">Submit</button>
            </form>
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
             <td>{this.state.data.name}</td>
             <td>{this.state.email}</td>
             <td>{this.state.phone}</td>
             <td>{this.state.dob}</td>
             <td>{this.state.city}</td>
             <td>{this.state.district}</td>

         </tr>        
    </tbody>
 </table>
            {/* <Table /> */}
        </div>
   

</>
}
}
