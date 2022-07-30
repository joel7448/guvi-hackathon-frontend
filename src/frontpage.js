import {Link} from 'react-router-dom'

function Frontpage(){

    return(<>
    <div className="row mt-5 ">
        <div className="col-lg-2">
    <div className="container">
    <Link to="/sellerlogin" className='btn btn-info'>Seller login</Link>
    </div></div>
   
    <div className="col-lg-2 ms-5 ">
        <div className="container">
        <Link to="/buyerlogin" className='btn btn-primary'>Buyer login</Link>
        </div>
    </div></div>
    </>)
}

export default Frontpage