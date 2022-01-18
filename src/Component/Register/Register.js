import React, { useState } from 'react';
import './Register.css';
import { useForm, Controller } from "react-hook-form";
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from 'react-router-dom';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


const Register = () => {
    const [visiable, setVisiable] = useState(false);
    const [visiable1, setVisiable1] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
      const onSubmit = data => {
        console.log(data)
        reset()
      };
    // const handlenumber = () => {
    //     console.log(handlenumber);
    // }
 function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
        <div className=''>
            <div className='reg-form '>
            <Row>
                {/* <Col xs={12} md={5}>
                    <div className="reg-items">
                       <Container>
                        <div className="reg-details">
                        <div className="reg-detail">
                            <h4>Employer</h4>
                            <h6>Benefits</h6>
                        </div>
                        </div>
                        <div className="reg-div">
                        <Row className='reg-div1'>
                            <div className="reg-item">
                            <Col xs={4} md={4}>
                                <div className="reg-info">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/Research-Associates-icon6.png" alt="" />
                                    <h4>Great Learning</h4>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                            <div className="reg-info">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/Research-Associates-icon2.png" alt="" />
                                    <h4>Excellent Career
                                        Prospects </h4>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                            <div className="reg-info">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/sign-up-icon7.png" alt="" />
                                    <h4>Strengthening of
                                        Curriculum Vitae</h4>
                                </div>
                            </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="reg-item">
                            <Col xs={6} md={6}>
                                <div className="reg-info item-div">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/Research-Associates-icon4.png" alt="" />
                                    <h4>Great Learning</h4>
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                            <div className="reg-info item-div1">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/Research-Associates-icon4.png" alt="" />
                                    <h4 className='item-title'>Excellent Career
                                        Prospects </h4>
                                </div>
                            </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="reg-item">
                            <Col xs={12} md={12}>
                                <div className="reg-info">
                                    <img src="https://mycoauthor.s3.us-east-2.amazonaws.com/theme/uploads/Research-Associates-icon.png" alt="" />
                                    <h4>Great Learning</h4>
                                </div>
                            </Col>
                            
                            </div>
                        </Row>
                        </div>
                        </Container>
                        
                    </div>
                </Col> */}
                <Col  xs={12} md={12}>
                    <div className="input-container">
                        <div className="input-info">
                        <h3>Welcome <span></span></h3>
                        <div className="input-info-div">
                        <p>“Collaborate with people you can learn from.” - Pharrell Williams</p>
                        <h4>Register As Employer</h4>
                        </div>
                        </div>
                        
                        <div className="input-field">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='mt-4 employee-input' {...register("employeeName", { required: true })} placeholder="Employee Name" required/>
                        {errors.employeeName?.type === 'required' && "Employee name is required"}
                         <br/>
                        <div className="name-input">
                        <div className="select mt-3">
                        <select className=' select' {...register("gender")}>
                            <option value="male">Mr.</option>
                            <option value="female">Mrs.</option>
                            <option value="other">other</option>
                        </select>
                       
                        
                        </div>
                        <div className="first"><input className='mt-3 employee-input' {...register("firstname", { required: true })} placeholder="First Name" required/></div>
                        <div className="last"><input  className='mt-3 employee-input' {...register("lastName", { required: true})} placeholder="Last Name" required/>
                        {errors.lastName && "Last name is required"}
                         </div>

                        </div>
                        <div className="email-field">
                            <div className="email">
                            <input className='mt-3 employee-input' {...register("email", { required: true })} placeholder="Email" required/>
                            </div>
                            <div className="phone">
                            <input className='mt-3 employee-input' {...register("phone", { required: true })} placeholder="Phone" required/>
                            {/* <IntlTelInput onClick={()=> handlenumber}
                                containerClassName="intl-tel-input"
                                inputClassName="form-control"
                                /> */}
                            </div>
                        </div>
                        <div className="city">
                        <input className='mt-3 employee-input' {...register("city", { required: true })} placeholder="Current City" required/>
                        </div>
                            
                       <div className="password-display">
                       <div className="password-input">
                        <input className='mt-3 employee-input pass' type={(visiable) ? "text" : "password"}  {...register("password", { required: true })} placeholder="Password" required/>
                        <span><i onClick={() =>setVisiable(visivility => !visivility)} class={`far ${visiable ? " fa-eye-slash" : "fa-eye"} `}></i></span>
                        </div>
                        <div className="password-input">
                        <input className='mt-3 employee-input retype-pass' type={(visiable1) ? "text" : "password"} {...register("confirmPassword", { required: true})} placeholder="Confirm Password" required/>
                        <span><i onClick={() =>setVisiable1(visivility => !visivility)} class={`far ${visiable1 ? " fa-eye-slash" : "fa-eye"} `}></i></span>
                        </div>
                       </div>
                       <div className="check-input">
                        <Form.Check className='form-check' aria-label="option 1" /> 
                        <p>I I have read the TERMS & CONDITIONS and PRIVACY POLICY and I agree with it. </p>
                        </div>
                            
                        <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                            /> 
                             

                            <div className="inputBtn">
                            <input className='submitbtn' type="submit" value='REGISTER'/>
                            </div>
                        </form>
                        
                        </div>
                        
                    </div>
                    <p className='log-link'>have an account? <NavLink to='/login'>Sign In</NavLink></p>
                </Col>
                
            </Row>
          
            </div>
        </div>
    );
};

export default Register;









{/* <input className='mt-3 first' type="text" placeholder="First Name" />
                            <input className='mt-3 last' type="text" placeholder="Last Name" /><br/>
                            <input className='mt-3 email'  type="email" name="" id="" placeholder='Enter Your Email' required/>
                            <input className='mt-3 phone'  type="" name="" id="" placeholder='phone' required/><br />
                            <input className='mt-3' type="password" name="" id="" placeholder='Enter Your Password' required/><br />
                            <input  type="submit" value="Submit" className='btn btn-primary mt-3'/> */}