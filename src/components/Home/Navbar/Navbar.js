import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'
import { UserContext } from '../../../App';
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';

import "firebase/auth";
const Navbar = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful
            setUserInfo("")
            sessionStorage.removeItem('admin')
            sessionStorage.removeItem('token')
        }).catch((error) => { 
            // An error happened.
        });
    }

    return (
    

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/home"><img className="img-fluid" src={logo} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link active fw-bolder fs-5 " aria-current="page" to="/home">Home</Link>
        </li>
        
        <li class="nav-item">
        <Link className="nav-link  active fw-bolder fs-5" aria-current="page" to="/services">Services</Link>
        </li>
        

        {
          userInfo.photoURL ? 
          <li class="nav-item">
        <Link className="nav-link active fw-bolder fs-5 " aria-current="page" to="/dashboard">Dashboard</Link>
        </li> :
        <li className="nav-item mx-3">
        <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/login">{''}</Link>
    </li> 
        }
       
                        {
                             userInfo.photoURL ?
                             <li className=" d-flex nav-item mx-3">
                                     <Link className="mx-3" aria-current="page" to="/dashboard"><img style={{width: '50px', borderRadius: '50%' }} src={userInfo.photoURL} alt=""/> </Link>
                                  <h4 className="my-2">{userInfo.displayName}</h4>
                                     
                                 </li>  :
                                 <li className="nav-item me-5">
                                     <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/login">Login</Link>
                                 </li>
                         }
                        {
                             userInfo.photoURL ?
                             <li className="nav-item mx-3">
                             <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/home" onClick={handleLogout}  >Sign Out</Link>
                         </li> :
                                 <li className="nav-item mx-3">
                                     <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/login">{''}</Link>
                                 </li>
                         }

                        
      </ul>
    </div>
  </div>
</nav> 



    );
};

export default Navbar;