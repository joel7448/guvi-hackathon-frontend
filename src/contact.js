import link from './link.png'
import phone from './phone.png'
import mail from './mail.png'
import { useFormik } from 'formik'
import axios from 'axios'
import { config } from './config'
function Contactus(){
  const formik = useFormik({
    initialValues : {
      Name : "",
      Email : "",
      Comments : ""
    },
    validate :(values)=> {
      let errors={};
      
      if(!values.Email){
          errors.Email="Please enter your Email Id"
      }
      if(!values.Name){
          errors.Password = "Please enter your Name"
      }
      if(!values.Comments){
        errors.Comments="Enter minimum 8 characters"
      }
      return errors;
      
          },
          onSubmit :async (values)=>{
         let res =  await axios.post(`${config.api}/contactus`,values);
          alert(res.data.message);
          }
  })  
  
  return (
   
        <div className="row">

            <div className="col-lg-6">
            <div className="container">
    <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input name='Name' onChange={formik.handleChange} value={formik.values.Name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input name='Email' onChange={formik.handleChange} value={formik.values.Email} type="email" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="form-floating">
  <textarea class="form-control" name='Comments' onChange={formik.handleChange} value={formik.values.Comments} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
       
        <button type="submit" class="btn btn-primary m-4">Submit</button>
      </form></div></div>
      <div className="col-lg-6">
        <ul>
<li type="none" className='mt-5'><img src={link}></img> <a href='#'>www.rentals.com</a></li>
<li type="none"><img src={phone}></img> <a href="#">+91 7567899589</a> </li>
<li type="none"><img src={mail}></img> <a href="#">rentals34@gmail.com</a> </li>
        </ul>
      </div>
      
      </div>)


}

export default Contactus