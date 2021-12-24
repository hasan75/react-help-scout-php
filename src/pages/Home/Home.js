import React from "react";
import "./Home.css";
import Navbar from "layouts/Navbar/Navbar";
import { ReactComponent as GoogleIcon } from "assets/images/google-icon.svg";
import freestart from "assets/images/freestart.svg"
import makesmart from "assets/images/makesmart.svg"


import chromeSvg from "assets/images/chromeextension.svg";
import chrome from "assets/images/chrome.png";
import analyzeSvg from "assets/images/analyze.svg"
import analyze from "assets/images/analyze.png"
import engageSvg from "assets/images/engage.svg"
import engage from "assets/images/workflow.png"



import firstimg from 'assets/images/first.png'
import target from "assets/images/target.svg"
import Footer from "layouts/Footer/Footer";
import { Row, Col, Container } from "react-bootstrap";
import searchicon from "assets/images/searcher-icon.svg";
import searchImg from "assets/images/search.png";
import crm from "assets/images/crm.png"
import crmlogo from "assets/images/crmlogo.svg"
import trust from "assets/images/trust.png"
import leader1 from "assets/images/leader1.png"
import leader2 from "assets/images/leader2.png"

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="">
        <div className="container-wrapper">
          <div className="section">
            <div className="section-left">
              <h5 className="mb-1">The sales intelligence and engagement platform to </h5>
              <p className="fs-48px graphik-semibold darkest-blue mb-20px">
                Crush Your Sales numbers every quarter
              </p>
              <p className="fs-21px darkest-blue lh-2 mb-35px">
                Simple to start, powerful to grow, and proven to build better
                customer relationships.
              </p>

              <div className="hero-input-wrapper mb-35px">
                <input type="text" placeholder="Work Email*" />
                <button className="button-wrapper bg-sharp-blue white fs-18px graphik-medium radius-4px pointer">
                  Try for free
                </button>
              </div>
              <p className="text-center">Or</p>
              <button className="button-wrapper bg-secondary white fs-18px graphik-medium radius-4px pointer w-100">
                <GoogleIcon/>  Sign Up with Google
              </button>
              <div>

              </div>
            </div>
            <div className="section-right">
              <img className="img-fluid" src={firstimg} width="100%"alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-grad-color">
        <Row>
          <Col sm="6" md="4" className="with-bg-img p-3 d-flex justify-content-center align-items-center ps-3">
            Trusted by Over 1M sales users worldwide.
          </Col>
          <Col sm="6" md="8" className="ps-4 align-self-center">
            <Row className="ps-3 d-flex justify-content-around align-self-center">
              <Col className="p-3">
                <h2>200M+</h2>
                <p className="fs-bold text-primary">Contacts</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p className="fs-bold text-primary">Companies</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p className="fs-bold text-primary">Mobile Numbers</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p className="fs-bold text-primary">Paying Customers</p>
              </Col>
                
            </Row>
            
          </Col>
        </Row>
        
      </div>
      <div className="py-5">
        <Row className="ps-2 p-2 bg-gradient-light ">
        <Col lg="4" className="d-flex flex-column justify-content-center align-items-center">
          <img src={target} height="112px" width="112px" alt="" className="pb-2" />
          <h2>Target with laser precision</h2>
          <p>200 filter attributes to personalize your engagement</p>
          <p>Refreshed more frequently than other vendors</p>
        </Col>
        <Col lg="4" className="d-flex flex-column justify-content-center align-items-center">
        <img src={freestart} height="112px" width="112px" alt="" className="pb-2" />
          <h2>Free to start</h2>
          <p>100% free starter plan, free trial for advanced plans</p>
          <p>Used by over 1M sales professionals.</p>
        </Col>
        <Col lg="4" className="d-flex flex-column justify-content-center align-items-center p-2">
        <img src={makesmart} height="112px" width="112px" alt="" className="pb-2" />
          <h2 className="">Make smart GTM simple</h2>
          <p>Get started engaging with your prospects in minutes</p>
          <p>One platform to find customers</p>
        </Col>
      </Row>
      </div>

      <div className="ps-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6">
            <div className="pb-2">
              <img className="" src={searchicon} alt="" />
              <span className="fs-bolder ps-2">Searcher</span>
            </div>
            <h2>Find your ideal customer with laser precision</h2>
            <ul>
              <li>Build precise lists of contacts and companies using Apollo.io’s advanced filtering across 200+ customizable attributes.</li>
              <li>Trust Apollo’s contributory network and algorithms to access the most accurate and up-to-data contact and company data.</li>
            </ul>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={searchImg} alt="" />
          </Col>
        </Row>
      </div>
      <div className="ps-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6" sm={{ order: 2 }} md={{ order: 1 }}>
            <img className="img-fluid" src={crm} alt="" />
          </Col>
          <Col lg="6" sm={{ order: 1 }} md={{ order: 2 }}>
            <div className="pb-2">
              <img className="" src={crmlogo} alt="" />
              <span className="fs-bolder ps-2">Enrich & Cleanse</span>
            </div>
            <h2>Find your ideal customer with laser precision</h2>
            <ul>
              <li>Build precise lists of contacts and companies using Apollo.io’s advanced filtering across 200+ customizable attributes.</li>
              <li>Trust Apollo’s contributory network and algorithms to access the most accurate and up-to-data contact and company data.</li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="ps-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6">
            <div className="pb-2">
              <img className="" src={analyzeSvg} alt="" />
              <span className="fs-bolder ps-2">Analyze</span>
            </div>
            <h2>Find your ideal customer with laser precision</h2>
            <ul>
              <li>Build precise lists of contacts and companies using Apollo.io’s advanced filtering across 200+ customizable attributes.</li>
              <li>Trust Apollo’s contributory network and algorithms to access the most accurate and up-to-data contact and company data.</li>
            </ul>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={analyze} alt="" />
          </Col>
        </Row>
      </div>
      <div className="ps-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center">
        <Col lg="6" sm={{ order: 2 }} md={{ order: 1 }}>
            <img className="img-fluid" src={engage} alt="" />
          </Col>
          <Col lg="6" sm={{ order: 1 }} md={{ order: 2 }}>
            <div className="pb-2">
              <img className="" src={engageSvg} alt="" />
              <span className="fs-bolder ps-2">Engage</span>
            </div>
            <h2>Find your ideal customer with laser precision</h2>
            <ul>
              <li>Build precise lists of contacts and companies using Apollo.io’s advanced filtering across 200+ customizable attributes.</li>
              <li>Trust Apollo’s contributory network and algorithms to access the most accurate and up-to-data contact and company data.</li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="ps-4 pt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6">
            <div className="pb-2">
              <img className="" src={chromeSvg} alt="" />
              <span className="fs-bolder ps-2">Chrome Extension</span>
            </div>
            <h2>Find your ideal customer with laser precision</h2>
            <ul>
              <li>Build precise lists of contacts and companies using Apollo.io’s advanced filtering across 200+ customizable attributes.</li>
              <li>Trust Apollo’s contributory network and algorithms to access the most accurate and up-to-data contact and company data.</li>
            </ul>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={chrome} alt="" />
          </Col>
        </Row>
      </div>
      <div className="px-3 py-5 bg-secondary">
        <Row>
          <Col sm="12" lg="6">
            <h1 className="text-light">Trusted by over 1M sales professionals at one-person startups to Fortune 500 companies</h1>
            <br />
            <Row className="d-flex justify-content-center align-items-center pt-5">
              <Col sm="4">
              <img className=" img-fluid" height="145px" width="188px" src={leader1} alt="" />
              </Col>
              <Col sm="4">
              <img className=" img-fluid" height="145px" width="188px" src={leader2} alt="" />
              </Col>
              <Col sm="4">
              <p className="fs-bold text-warning">Leader in Sales Intelligence Lead Intelligence Marketing Account Intelligence Sales Engagement</p>
              </Col>

            </Row>
          </Col>
          <Col sm="12" lg="6">
            <img className="img-fluid" src={trust} alt="" />
          </Col>

        </Row>
      </div>

      <Footer />
    </div>
  );
}

export default App;
