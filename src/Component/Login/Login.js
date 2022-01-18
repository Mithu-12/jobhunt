import React, {useState} from 'react';
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import './Login.css'


const Login = () => {
 const [visiable, setVisiable] = useState(false);
 const { register, handleSubmit, reset } = useForm();
 const onSubmit = data => console.log(data);
  return (
    <div className=''>
            <div className='reg-form '>
            <Row>
                {/* <Col xs={12} md={5}>
                    <div className="reg-items log-items">
                       <Container>
                        <div className="reg-item log-item">
                        <div className="div">
                        <h5>Join The Club</h5>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        </div>
                        </Container>
                        
                    </div>
                </Col> */}
                <Col  xs={12} md={12}>
                    <div className="input-container mt-5">
                        <div className="input-info mt-5">
                        <h3 className='mt-5'>Welcome<span></span></h3>
                        <p>Join gazillions of people online</p>
                        <h4>Login</h4>
                        </div>
                        
                        <div className="input-field">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="log-emailDiv">
                            <input className='mt-3 log-email' type='email' {...register("email", { required: true})} placeholder="Email" required/>
                            </div>
                            <div className="log-passwordField">
                            <input className='mt-3 log-password' type={(visiable) ? "text" : "password"}  {...register("password", { required: true })} placeholder="Password" required/>
                      
                            <span><i onClick={() =>setVisiable(visivility => !visivility)} class={`far ${visiable ? " fa-eye-slash" : "fa-eye"} `}></i></span>
                            </div>
                            <br />
                            <div className="inputBtn">
                            <input className='submitbtn' type="submit" value='REGISTER'/>
                            </div>
                        </form>
                        
                        </div>
                        
                    </div>
                    <p className='log-link'>Don't 'have an account? <NavLink to='/register'>Sign Up</NavLink></p>
                    <p className='forgot'><a href="">Forgot Password ?</a></p>
                </Col>
                
            </Row>
          
            </div>
        </div>
  );
};

export default Login;
