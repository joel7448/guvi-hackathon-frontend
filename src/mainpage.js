import axios from "axios";
import { useContext, useEffect, useState } from "react";
import cart from './cart.png'
import cart2 from './cart2.png'
import { Link, useNavigate } from "react-router-dom"
import userContext from "./usercontext";
import {useFormik} from 'formik'
import { config } from "./config";
function Mainpage(){
let [products,setproducts]=useState([]);
let [count,setcount]=useState(0);
let[cart,addcart]=useState([]);

let navigation = useNavigate();

let  data=useContext(userContext);


let cartnavigate = ()=>{
navigation("/cart")
}

    let fetchData = async () => {
      try{
let res = await axios.get(`${config.api}/products`,{
headers: {
    Authorization: `${localStorage.getItem("react_app_token")}`,
  },
})



setproducts(res.data);


      }
      catch(error){
        console.log(error);
      }
      }

      useEffect(()=>{
fetchData();
      },[])

    const [isable,setisable]=useState(false)

      let arr = [];
      let addtocart = async(id,name,price)=>{
setcount(count+1);
const login = await axios.post(`${config.api}/addtocart`, {"buyer_id":id,"name":name,"price":price,"dateandtime":new Date(),qty:`${data.count}`});

const cartitems = await axios.get(`${config.api}/addtocart`);
var arr = cartitems.data.map((x)=>{return(x.price)});
var sum = arr.reduce((x,y)=>parseInt(x)+parseInt(y),0);
var index = products.findIndex((x)=>x._id==id);
products[index].istrue = true;




data.setproduct(sum);





      }

      

      const formik = useFormik({
        initialValues : {
            category : ""
        },
        onSubmit:async(values)=>{
          let filter = await axios.post(`${config.api}/filter`,values);
         setproducts(filter.data)
        }
      })
      
let logout = ()=>{
    localStorage.removeItem("react_app_token");
    navigation("/");
}

let add=(id)=>{
var find = products.findIndex((x)=>x._id==id);
console.log(products[find])

  data.setcount(data.count+1);
  products[find].count = data.count;
}

let minus=(id)=>{
 
  if(data.count==0){
    data.setcount(0)
  }
  else{
    data.setcount(data.count-1);
  }
}

return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rentals.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li><img src={cart}/></li>
      </ul>
      
      <ul class="navbar-nav me-5 mb-2 mb-lg-0">
             <li><p onClick={()=>{cartnavigate()}}><div className="count">{count}</div><img src={cart2}/>Add to cart</p></li>
      </ul>
      <form class="d-flex" role="search" onSubmit={formik.handleSubmit}>
        <input class="form-control me-2"  name='category' onChange={formik.handleChange} value={formik.values.category} type="search" placeholder="Search for Categories" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
      
    </div>
  </div>
</nav>
<div className="row">
    <div className="col-lg-10">
    <div className="container d-flex flex-wrap">
   { products.map((product)=>{return(<div class="card m-2" style={{width: "18rem"}}>
  <img style={{height:"200px",objectfit:"cover"}} src={product.image} className="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{product.Name}</h5>
    <p class="card-text">{product.description}</p>
    <p class="card-text">{product.price_per_hour}/hr</p>
    <button class="btn btn-primary" onClick={()=>{addtocart(product._id,product.Name,product.price_per_hour,)}} disabled={product.istrue ? true:false}>Add to cart</button>
    <button className="btn btn-info m-2" onClick={()=>{add(product._id)}}>+</button> {product.count?data.count:0} <button className="btn btn-danger m-2" onClick={()=>{minus(product._id)}}>-</button>
  </div>
</div>)})}
</div></div>
<div className="col-lg-2">
    <h2>Categories</h2>
    <h6>Electronics</h6>
    <h6>Clothes</h6>
    <h6>Automobiles</h6>
    <h6>Furnitures and many more</h6>
    <button className="btn btn-danger" onClick={()=>{logout()}}>Logout</button>
</div>


</div>
</>
)


}

export default Mainpage;