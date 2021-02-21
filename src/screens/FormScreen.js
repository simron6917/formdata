import React, { Component} from 'react';
import {Link} from 'react-router-dom';
// import DataScreen from './DataScreen'
 
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
            data:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
    // let arr=[]

    // let item= [this.state]
    // arr.push(item)
    // var index = this.setState({index: this.state.index +1});
    // localStorage.setItem('document', index ,JSON.stringify(this.state.data));
   localStorage.setItem('document',JSON.stringify(this.state) );
   this.componentDidMount();
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
    if (localStorage.getItem('document')) {
        this.setState({
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
    })
}
// console.log(this.documentData);
}    
        
render() {
    return <>
        <div className="container" >
            <form onSubmit={this.handleFormSubmit} >
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
                    <label>Address</label> <br />
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
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            <br />
            <h3 style={{paddingLeft:'50px'}}>Your Information</h3>
            <table  style={{position: 'absolute', left: '8%'}}>
            <tbody>
            
         <tr>
             <td>First Name</td>
             <td>Email Address</td>
             <td>Phone</td> 
             <td>DOB</td>   
             <td>City</td>                    
             <td>District</td>      

         </tr>  
         {/* {this.state.data.map(item=>(
            <tr>
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>{item.dob}</td>
             <td>{item.city}</td>
             <td>{item.district}</td>
             <td>{item.phone}</td>

         </tr> 
         ))} */}
         <tr>
             <td>{this.state.data.name}</td>
             <td>{this.state.data.email}</td>
             <td>{this.state.data.phone}</td>
             <td>{this.state.data.dob}</td>
             <td>{this.state.data.city}</td>
             <td>{this.state.data.district}</td>

         </tr> 
         <Link to='/data'>
         <button style={{position: 'absolute', left: '20%', margin:'10px'}} type="sumbit">Profile</button>      
         </Link>
    </tbody>
 </table>

        {/* <DataScreen
            name = {this.state.data.name}
            email= {this.state.data.email}
            phone= {this.state.data.phone}
            dob= {this.state.data.dob}
            city= {this.state.data.city}
    district= {this.state.data.district}
    /> */}
        </div>
   

</>
}
}
