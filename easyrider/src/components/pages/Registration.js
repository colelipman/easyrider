import React, { Component } from 'react'; 
import './App.css'; 
import { render } from 'react-dom';



class Registration extends Component {
    render () { 
        return ( 
            <div class="container">
    <form class="registration" action="action_page.php"/>
        <div class="container"/>
          <h1 class="registration">Registration</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
      
          <label class="elabel" data-component="Elabel" for="email"><b>E-mail</b></label>
          <input class="email" data-component="Email" type="text" placeholder="Enter Email" name="email" required/>
      
          <label class="plabel" data-component="Plabel" for="psw"><b>Password</b></label>
          <input class="password" data-component="Password" type="password" placeholder="Enter Password" name="psw" required/>
      
          <label class="repeat"  data-component="Repeat" for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password"  data-component="Password" placeholder="Repeat Password" name="psw-repeat" required/>
      
          <label/>
            <input class="box" data-component="Box" type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> 
            Remember me
            </input>
         
            
            <button data-component="Cancelbtn" type="button" class="cancelbtn">Cancel</button>
    
            
           
            <button data-component="Signupbtn" type="submit" class="signupbtn">Sign Up</button>
            
        </div> 
        ); 
    }
}
 

export default Registration; 