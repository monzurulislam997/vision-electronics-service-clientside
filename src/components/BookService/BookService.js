 import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import Shipment from '../Shipment/Shipment';
 import './BookService.css'
 const BookService = () => {
    const {bookingService, userInfo} = useContext(UserContext); 
     return (
         <main>
             <Navbar></Navbar>
          <div className="row">
          <h3 className="text-center text-danger"> <i class="fas fa-shopping-cart"></i>  Buy Now This Product : </h3> 
              <div className="col-md-4">
               
                
                <div className="m-4"><img  width="400" height="400" src={bookingService.serviceImage} alt="" /> 
                <h5>Description:</h5>
                <p>{bookingService.description}</p>
                </div>
              </div>
              <div className=" d-flex  col-md-8">
              
                <div>
                    <div className="d-flex justify-content-around text-secondary p-3 mt-3">
                        <h5>Service Name</h5>
                        <h5>$Price</h5>
                        <h5>User Name</h5>
                              </div>
                              <  hr/> 
                   
                
                    <div className="d-flex justify-content-around">
                        
                      
                        <h4>{bookingService.name}</h4>
                        <h4>{bookingService.price}$</h4>
                        <h4>{userInfo.displayName}</h4>
                       
                        
                    </div>
                    <Shipment bookingService={bookingService} userInfo={userInfo}></Shipment>
                </div>
              </div>
          </div>   
         </main>    
     );
 };
 
 export default BookService;