import { useFormik } from 'formik'
import { Link, useNavigate } from "react-router-dom"
import loginicon from './icon.avif'
import Loginpage from './loginpage';
import axios from 'axios'
import { config } from './config';

function Portal(){

    const formik = useFormik({
        initialValues : {
            Name:"",
            Email : "",
            Password:"",
        },
        validate :(values)=> {
    let errors={};
    if(!values.Name){
        errors.Name="Please enter your Name"
    }

    if(!values.Email){
        errors.Email="Please enter your Email Id"
    }
    if(!values.Password){
        errors.Password = "Please enter your Password"
    }
    return errors;
    
        },
        onSubmit :async(values) =>{
            try{
                const registerbuyer = await axios.post(`${config.api}/seller`,values);
                alert(registerbuyer.data.message);
                }
                           catch(error){
                console.log(error)
                           }
                        }
        
    })
  
return(
    <div className='row m-4  '>
        <h1>Seller Credetials Register</h1>
    <div className='col-lg-6 p-4 pic'>
    <img className='img-fluid' src={loginicon}></img>
    </div>
    <div className='col-lg-6 '>
    <div className='container pt-5'>
    <form onSubmit={formik.handleSubmit}>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name='Name' onChange={formik.handleChange} value={formik.values.Name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {formik.errors.Name ? <div id="emailHelp" className="form-text text-danger">{formik.errors.Name}</div>:null}
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='Email' onChange={formik.handleChange} value={formik.values.Email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {formik.errors.Email ? <div id="emailHelp" className="form-text text-danger">{formik.errors.Email}</div>:null}
    </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='Password' onChange={formik.handleChange} value={formik.values.Password} className="form-control" id="exampleInputPassword1"/>
    {formik.errors.Password ? <div id="emailHelp" className="form-text text-danger">{formik.errors.Password}</div>:null}
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary m-2">SignUp</button>
    
    </form>
    <p>Already have an account click here 👉<Link to="/sellerlogin" element={<Loginpage></Loginpage>}>Login</Link></p>
    </div>
    </div>
    </div>
)
}

export default Portal