import { useFormik } from 'formik'
import { Link, useNavigate } from "react-router-dom"
import loginicon from './icon.avif'
import axios from 'axios'
import { config } from './config';
function Loginpage2(){
let navigation = useNavigate();

const formik = useFormik({
    initialValues : {
        Email : "",
        Password:"",
    },
    validate :(values)=> {
let errors={};

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
            const login = await axios.post(`${config.api}/sellerlogin`, values);
           
            localStorage.setItem("react_app_token", login.data.token);
           
            
            navigation("/productpush")
            }
            catch(error){
                console.log(error);
            }
       

    }
})

return( <div className='row m-4  '>
    <h2>Seller Login</h2>
<div className='col-lg-6 p-4 pic'>
<img className='img-fluid' src={loginicon}></img>
</div>
<div className='col-lg-6 '>
<div className='container pt-5'>
<form onSubmit={formik.handleSubmit}>
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
<button type="submit" className="btn btn-primary">Login</button>

</form>
<p className='mt-3'>New Here ! Click here to Signup as Seller 👉<Link to="/portal" className='ms-2' >Signup</Link></p>

</div>
</div>
</div>)

}

export default Loginpage2