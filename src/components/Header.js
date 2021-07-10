import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem,NavLink, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form , FormGroup, Input, Label} from 'reactstrap';
import { useState } from 'react';
const Header = (props) =>  {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
     
  
    <React.Fragment>
      <Navbar  dark expand="md">
      <NavbarBrand style={{fontSize:"40px",fontWeight:"bolder",marginRight:"60px",color:"white"}} >BuyBubble</NavbarBrand>

       <NavbarToggler classname="ml-auto"onClick={toggle} />
       <Collapse isOpen={isOpen} navbar>
         <Nav className="container" style={{marginLeft:"80px"}} navbar>
           <NavItem>
             <NavLink style={{fontSize:"20px",fontWeight:"bolder",color:"white"}} href="/home">Home</NavLink>
           </NavItem>
           <NavItem>
             <NavLink style={{fontSize:"20px",fontWeight:"bolder",color:"white"}} href="/order">Order</NavLink>
           </NavItem>
          
          </Nav>
          
       </Collapse>
       
       
     </Navbar>
      <Jumbotron >
           <div >
               <div className="row row-header">
                 <img src="/images/pic22.png" height="250px"/>
                   <div className="col-12 col-sm-6 justify-content-centre">
                       <h1 style={{textAlign: "center" ,fontWeight: 'bold'}}>BuyBubble</h1>
                       <p className="text-center">....Reading is dreaming with open eyes....</p>
                   </div>
                   <img src="/images/pic2.png" height="250px"/>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }


export default Header;