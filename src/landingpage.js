import { useEffect, useState } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
function Landingpage(){

    let[adds,setadds]=useState([]);
    

    return (<>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rentals.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/contactus" class="nav-link active" aria-current="page" href="#">Contactus</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
        <div className="row">
            <div className="col-lg-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
   

<div class="carousel-item active">
 <img src="https://image.shutterstock.com/image-vector/tire-car-advertisement-poster-landscape-260nw-1122836192.jpg" class="d-block w-100 h-10" alt="..."/>
</div>
<div class="carousel-item active">
 <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-jeans-sale-poster-template-6dd64377870b5712a26fbbeaa2eb7276_screen.jpg?ts=1561725397" class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item active">
 <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/06/sony-camera-half-page-ad-delhi-times-10-6-2017.jpg" class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item active">
 <img src="https://static.c.realme.com/IN/wm-thread/1267778836620115968.jpeg"  class="d-block w-100 " alt="..."/>
</div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
<div className="row mt-3">
    <h1 className="h1">Welcome to Rentals.com</h1>
<h3 className="h3">Place where you get connected to the Biggest brands </h3>
</div>
<div className="container m-5">
    <h4>We help you to sell / rent / purchase products under clothing / Electronics / Vehicles and much mode</h4>
   
   <h5 className="h5"> Grab Your best deals with a single click 😉. <Link className="btn btn-primary" to = '/buyerlogin'>Click here to become our buyer</Link>  <Link  className="btn btn-info"  to = '/sellerlogin'>Click here to become our Seller</Link></h5>
</div>
</>
    )
}

export default Landingpage