import { useContext, useEffect, useState } from "react"
import userContext from "./usercontext"
import axios from 'axios'
import { config } from "./config";
function Cart(){

   let data = useContext(userContext);
    const [cart,addcart]=useState([]);
const [total,settotal] = useState(0)
    let cartnavigate =async ()=>{
       let cartitems =await axios.get(`${config.api}/addtocart`);
    
     addcart(cartitems.data)

     console.log(cart)
     let add= cart.reduce((x,y)=>x+y.price,0);
   

     
        }

useEffect(()=>{
    cartnavigate();
},[])

   let deletecart =async (id,price)=>{
    await axios.delete(`${config.api}/deletecart/${id}`);
    let subtract =data.product-price;
    data.setproduct(subtract);
    cartnavigate();
   }

    return (<>
    <ul class="list-group">
{
cart.map((cart)=>{return(
    
<li class="list-group-item">Product:{cart.name} - Price/hr:{cart.price} - startdate and time:{cart.dateandtime} - quantity:{cart.qty} <button className="btn btn-danger" onClick={()=>{deletecart(cart._id,cart.price)}}>Delete</button> </li>


)
})
}   
  </ul>
  <h1>Total ={data.product} </h1></>
  )
}

export default Cart