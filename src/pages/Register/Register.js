import Logo from "components/Logo/Logo";
import React, {useContext,useState} from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ReactComponent as RegisterImg1 } from "assets/images/register-img-1.svg";
import { ReactComponent as RegisterBooksImg } from "assets/images/register-books-img.svg";
import {UserContext} from "contexts/UserContext";

const LabelInput = ({
  label,
  placeholder,
  type = "text",
  InputComponent,
  wrapperClassName,
  hint,
  name
}) => {
  return (
    <div className={wrapperClassName}>
      <label className="fs-13px dark-blue mb-5px block" htmlFor={label}>
        {label}
      </label>
      {InputComponent ? (
        <InputComponent />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="form-input graphik-light"
          id={label}
        />
      )}
      <p className="fs-13px gray mb-5px block">{hint}</p>
    </div>
  );
};

function Register() {
  const {toggleNav,registerUser} = useContext(UserContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }
  return (
    <div className="register-wrapper">
      <div className="py-40px">
        <div className="container-wrapper">
          <div className="text-center mb-20px">
            <Link to="/" className="navbar-left">
              <Logo />
            </Link>
          </div>

          <div className="mb-55px">
            <div className="register-form-wrapper ">
              <div className="register-image-1">
                <RegisterImg1 />
              </div>
              <div className="register-books-img">
                <RegisterBooksImg />
              </div>

              <p className="text-center dark-blue fs-24px graphik-medium mb-20px">
                Start Your Free Trial
              </p>

              <ul className="free-trial-box mb-40px">
                <li className="fs-14px dark-blue graphik-light">
                  15-day trial
                </li>
                <li className="fs-14px dark-blue graphik-light">
                  No credit card required
                </li>
              </ul>

              <form onSubmit={submitForm} className="register-form mb-25px">
                {/* <LabelInput 
                  label="First name" 
                  placeholder="Help"
                  value={state.userInfo.first_name} onChange={onChangeValue}/>
                <LabelInput 
                  label="Last name" 
                  placeholder="Scout" 
                  value={state.userInfo.last_name} onChange={onChangeValue}/> */}
                <LabelInput
                  name='name' 
                  label="Name" 
                  placeholder="Scout's club" 
                  value={state.userInfo.name} onChange={onChangeValue}/>
                <LabelInput
                  name='email'
                  label="Work email"
                  placeholder="scout@company.com"
                  value={state.userInfo.email} onChange={onChangeValue}
                />
                <LabelInput
                  name='password'
                  label="Password"
                  placeholder="Password"
                  type="password"
                  hint="At least 8 characters"
                  wrapperClassName="mb-10px"
                  value={state.userInfo.password} onChange={onChangeValue}
                />
                {/* <LabelInput
                  label="Phone number (optional)"
                  wrapperClassName="mb-10px"
                  value={state.userInfo.phone} onChange={onChangeValue}
                /> */}
                {errorMsg}
                {successMsg}

                <button className="register-btn pointer fs-14px white graphik-regular">
                  Get Your Account
                </button>
              </form>

              <p className="register-terms fs-12px weight-3 light-blue text-center mb-10px">
                By clicking this button, you agree to our{" "}
                <a href="#" className="fs-12px weight-3 light-blue text-center">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="fs-12px weight-3 light-blue text-center">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="fs-12px weight-3 light-blue text-center">
                  Security Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="register-form-footer">
            <p className="text-center fs-13px dark-blue graphik-regular mb-15px">
              Trusted by more than 12,000 businesses
            </p>

            <div className="register-form-brands mb-20px">
              <img
                src="https://dhmmnd775wlnp.cloudfront.net/a0804b3cf5/images/logos/signup/litmus.png"
                alt=""
              />
              <img
                src="https://dhmmnd775wlnp.cloudfront.net/a0804b3cf5/images/logos/signup/zapier.png"
                alt=""
              />
              <img
                src="https://dhmmnd775wlnp.cloudfront.net/a0804b3cf5/images/logos/signup/superhuman.png"
                alt=""
              />
              <img
                src="https://dhmmnd775wlnp.cloudfront.net/a0804b3cf5/images/logos/signup/spindrift.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
