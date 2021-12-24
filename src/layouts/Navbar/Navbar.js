import React, {useContext} from "react";
import "./Navbar.css";
import DropdownItem from "components/DropdownItem/DropdownItem";

import inboxImg from "assets/images/inbox-2.svg";
import analyticsImg from "assets/images/analytics-2.svg";
import newsLetterImg from "assets/images/new-letter.svg";
import liveChatImg from "assets/images/live-chat.svg";
import heartImg from "assets/images/heart-2.svg";
import integrationImg from "assets/images/integration.svg";
import booksImg from "assets/images/books-2.svg";
import DropdownWrapper from "components/DropdownWrapper/DropdownWrapper";

import { ReactComponent as Hamburger } from "assets/images/hamburger.svg";

import { ReactComponent as CrossIcon } from "assets/images/cross-icon.svg";
import { Link } from "react-router-dom";
import Logo from "components/Logo/Logo";
import {UserContext} from "../../contexts/UserContext";

function Navbar() {
  const { rootState, logoutUser} = useContext(UserContext);
  const {isAuth, theUser, showLogin} = rootState;

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  });

  return (
    <div className="navbar-wrapper">
      <div className="container-wrapper">
        <div className="navbar">
          <Link to="/" className="navbar-left">
            <Logo />
          </Link>

          <div className="hamburger" onClick={() => setShow(!show)}>
            <Hamburger />
          </div>

          <div className={`navbar-right-wrapper ${show ? "show" : ""} `}>
            <div className="navbar-right">
              <button className="cross-icon" onClick={() => setShow(false)}>
                <CrossIcon />
              </button>
              <div className="navbar-on-mobile">
                <DropdownItem
                  img={inboxImg}
                  title="Shared Inbox"
                  subtitle="Manage conversations at scale"
                />
                <DropdownItem
                  img={analyticsImg}
                  title="Reporting"
                  subtitle="Real-time data at your fingertips"
                />
                <DropdownItem
                  img={booksImg}
                  title="Knowledge Base"
                  subtitle="Instant answers for customers"
                />
                <DropdownItem
                  img={liveChatImg}
                  title="Live Chat"
                  subtitle="Make your website more useful"
                />
                <DropdownItem
                  img={heartImg}
                  title="Messages"
                  subtitle="Provide proactive customer support"
                />
                <DropdownItem
                  img={integrationImg}
                  title="Integrations"
                  subtitle="Connect the tools you already use"
                />
                <DropdownItem
                  img={newsLetterImg}
                  title="Customer Management"
                  subtitle="Know your VIPs"
                />

                <div className="navbar-brand-features">
                  <div className="navbar-brand-features-links">
                    <a href="#" className="navbar-brand-features-link">
                      Company Plan
                    </a>
                    <a href="#" className="navbar-brand-features-link">
                      Pricing
                    </a>
                    <a href="#" className="navbar-brand-features-link">
                      Success Stories
                    </a>
                    <a href="#" className="navbar-brand-features-link">
                      Blog
                    </a>
                  </div>

                  <div className="navbar-mobile-btns">
                    <button>Free Trial</button>
                    <div className="already-customer">
                      <p>Already a Customer?</p>
                      <Link to="/">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-links">
                <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                  Features
                  <DropdownWrapper className="navbar-dropdown columns-2 w-642px">
                    <DropdownItem
                      img={inboxImg}
                      title="Shared Inbox"
                      subtitle="Manage conversations at scale"
                    />
                    <DropdownItem
                      img={analyticsImg}
                      title="Reporting"
                      subtitle="Real-time data at your fingertips"
                    />
                    <DropdownItem
                      img={booksImg}
                      title="Knowledge Base"
                      subtitle="Instant answers for customers"
                    />
                    <DropdownItem
                      img={liveChatImg}
                      title="Live Chat"
                      subtitle="Make your website more useful"
                    />
                    <DropdownItem
                      img={heartImg}
                      title="Messages"
                      subtitle="Provide proactive customer support"
                    />
                    <DropdownItem
                      img={integrationImg}
                      title="Integrations"
                      subtitle="Connect the tools you already use"
                    />
                    <DropdownItem
                      img={newsLetterImg}
                      title="Customer Management"
                      subtitle="Know your VIPs"
                    />
                  </DropdownWrapper>
                </div>
                <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                  Resources
                  <DropdownWrapper className="navbar-dropdown flex-col  w-255px">
                    <DropdownItem
                      title="Success Stories"
                      subtitle="See how other teams use Help Scout"
                    />
                    <DropdownItem
                      title="Attend a Live Class"
                      subtitle="Help Scout tips, best practices, and Q&A"
                    />
                    <DropdownItem
                      title="Help Center"
                      subtitle="How-to articles about using Help Scout"
                    />
                    <DropdownItem
                      title="Contact Us"
                      subtitle="Get in touch with our team"
                    />
                  </DropdownWrapper>
                </div>
                <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                  Blog
                </div>
                <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                  Demo
                </div>
                <Link
                  to="/pricing"
                  className="navbar-link light-blue graphik-regular fs-15px pointer "
                >
                  Pricing
                </Link>
              </div>

              <div className="navbar-btns">
                {isAuth ? (
                  <>
                    <h1 className="light-blue graphik-regular fs-15px pointer" >{theUser.first_name}</h1>
                    <button className="light-blue graphik-regular fs-15px pointer"
                    onClick={logoutUser}>Log Out</button>
                  </>
                  
                  ) : (
                    <>
                    <Link
                    to="/login"
                    className="light-blue graphik-regular fs-15px pointer "
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="button-wrapper radius-4px bg-sharp-blue white graphik-regular weight-5"
                  >
                    Free Trial
                  </Link>
                  </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
