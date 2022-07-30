import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { config } from './config';
function Productpush(){

const formik = useFormik({
    initialValues : {
Name : "",
image:"",
price_per_hour:"",
description:"",
category:""
    },
    onSubmit :async(values)=>{
        try{
let productpush =await axios.post(`${config.api}/productpush`,values,{
    headers: {
      Authorization: `${localStorage.getItem("react_app_token")}`,
    },
})
alert(productpush.data.message);
        }
        catch(error){
            console.log(error)
        }
    }
});

let navigation = useNavigate();

let logout = ()=>{
    localStorage.removeItem("react_app_token");
    navigation("/");
}


return(<div className="container">
    <h1>Product Gateway</h1>
    <p>Sell your products any where any time</p>
    <form className="mt-5" onSubmit={formik.handleSubmit}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Product Name</label>
      <input type="text" class="form-control" name='Name' onChange={formik.handleChange} value={formik.values.Name}   id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Image url</label>
      <input type="text" name='image' onChange={formik.handleChange} value={formik.values.image} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Price / hr</label>
      <input type="text" class="form-control" name='price_per_hour' onChange={formik.handleChange} value={formik.values.price_per_hour} id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Description</label>
      <input type="text" class="form-control" name='description' onChange={formik.handleChange} value={formik.values.description} id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Category</label>
      <input type="text" class="form-control" name='category' onChange={formik.handleChange} value={formik.values.category} id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    <button className="btn btn-danger ms-2" onClick={()=>{logout()}}>Logout</button>
  </form>
  </div>
)



}

export default Productpush