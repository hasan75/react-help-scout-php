import React, {useContext, useState} from "react";
import Logo from "components/Logo/Logo";
import { Link } from "react-router-dom";
import "./Login.css";
import messagePreviewImg from "assets/images/messages-preview.png";
import { ReactComponent as GoogleIcon } from "assets/images/google-icon.svg";
import Checkbox from "components/Checkbox/Checkbox";
import { UserContext } from "contexts/UserContext";

function Login() {
  const { loginUser, isLoggedIn } = useContext(UserContext);
  const initialState = {
    userInfo:{
      email:'',
      password:'',
    },
    errorMsg:'',
    successMsg:'',
  }

  const [state, setState] = useState(initialState);

  const [checked, setChecked] = React.useState(false);
  
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo:{
        ...state.userInfo,
        [e.target.name]: e.target.value
      }
    })
  }
  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await loginUser(state.userInfo);
    if(data.success && data.token){
        setState({
            ...initialState,
        });
        localStorage.setItem('loginToken', data.token);
        await isLoggedIn();
      }
    else{
        setState({
            ...state,
            successMsg:'',
            errorMsg:data.message
        });
    }
  }
  // Show Message on Error or Success
  let successMsg = '';
  let errorMsg = '';
  if(state.errorMsg){
      errorMsg = <div className="error-msg">{state.errorMsg} <br /></div>;
  }
  if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="py-40px">
      <div className="container-wrapper">
        <div className="text-center mb-40px">
          <Link to="/" className="navbar-left">
            <Logo />
          </Link>
        </div>

        <div className="mb-30px">
          <div className="login-container ">
            <div className="login left">
              <p className="text-center fs-18px dark-blue weight-4 graphik-light mb-20px">
                Messages for Beacon
              </p>

              <Link to="/" className="mb-10px">
                <img src={messagePreviewImg} alt="" />
              </Link>

              <div className="text-center">
                <button className="light-blue pointer">Learn More</button>
              </div>
            </div>
            <div className="login right">
              <p className="login-title text-center fs-24px weight-5 graphik-medium dark-blue ">
                Log in
              </p>

              <form onSubmit={submitForm} className="login-form">
                <input
                  name="email"
                  type="email"
                  className="form-input graphik-light"
                  placeholder="Email Address"
                  value={state.userInfo.email}
                  onChange={onChangeValue}
                  required
                />

                <div className="mb-10px">
                  <input
                  name='password'
                    type="password"
                    className="form-input graphik-light "
                    placeholder="Password"
                    value={state.userInfo.password}
                    onChange={onChangeValue}
                  />
                </div>

                <div className="mb-15px">
                  <Checkbox
                    label="Remember me for 30 days"
                    value={checked}
                    onChange={handleChange}
                  />
                </div>
                {errorMsg}
                {successMsg}

                <button className="mb-10px white text-center graphik-regular fs-14px pointer">
                  Log in
                </button>
                <p className="light-blue fs-12px weight-4 text-center mb-10px">
                  or
                </p>
                <button className="google-login dark-blue mb-20px fs-14px graphik-regular pointer">
                  <GoogleIcon />
                  Sign in with Google
                </button>

                <a
                  href="#"
                  className="dark-blue fs-13px text-center block pointer graphik-light"
                >
                  Forgot your password?
                </a>
              </form>
            </div>
          </div>
        </div>

        <p className="fs-14px text-center light-blue graphik-light">
          Looking for a better way to talk with customers?{" "}
          <a href="#" className="blue graphik-light">
            Try Help Scout
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
