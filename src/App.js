import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loginpage from './loginpage';
import Signup from './Signup';
import Mainpage from './mainpage';
import Landingpage from './landingpage';
import Portal from './portal';
import Cart from './cart';
import { UserProvider } from './usercontext';
import Productpush from './productpush';
import Loginpage2 from './loginpage2';
import Frontpage from './frontpage';
import Contactus from './contact';
function App() {



  return (
   <BrowserRouter>
   <UserProvider> 
   <Routes> 
   
     <Route path="/buyerlogin" element={<Loginpage></Loginpage>}/>
     <Route path="/signup" element = {<Signup></Signup>}/>
     <Route path="/mainpage" element={<Mainpage></Mainpage>}/>
     <Route path="/" element={<Landingpage></Landingpage>}/>
     <Route path="/portal" element={<Portal></Portal>}/>
     <Route path="/cart" element={<Cart></Cart>}/>
     <Route path="/productpush" element={<Productpush></Productpush>}/>
     <Route path="/Sellerlogin" element={<Loginpage2></Loginpage2>}/>
     <Route path="/contactus" element={<Contactus></Contactus>}/>
   </Routes>
   </UserProvider>
   </BrowserRouter>
  );
}

export default App;
