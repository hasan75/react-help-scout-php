import React from "react";
import List from "components/List/List";
import bCorpImg from "assets/images/b-corp-img.svg";
import pledgeImg from "assets/images/pledge.svg";

import { ReactComponent as TwitterIcon } from "assets/images/twitterIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/images/facebook-icon.svg";
import { ReactComponent as LinkdenIcon } from "assets/images/linkden-icon.svg";

import signImg from "assets/images/sign.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container-wrapper">
        <div>
          <div className="footer">
            <div className="footer-title-box">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 137.5 166"
                  role="img"
                  className="mb-15px"
                  style={{ width: "25px", height: "30px" }}
                >
                  <path
                    fill="#1292ee"
                    d="M9.9 97.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 48.6C3.9 54.8 0 63.5 0 73c0 9.5 3.8 18 9.9 24.2zM127.6 68.8L79 117.4c-6.3 6.2-10.2 14.9-10.2 24.4 0 9.4 3.8 18 9.9 24.2l48.6-48.6c6.3-6.2 10.2-14.9 10.2-24.4 0-9.5-3.8-18-9.9-24.2zM127.3 48.7s0-.1 0 0c6.3-6.2 10.2-14.9 10.2-24.4 0-9.4-3.8-18-9.9-24.2L10.2 117.4C3.9 123.6 0 132.3 0 141.8c0 9.4 3.8 18 9.9 24.2L127.3 48.7z"
                  ></path>
                </svg>
                <p className="white fs-24px footer-title-box-title">
                  Tools for the world's most customer-centric businesses
                </p>
              </div>
              <div className="footer-title-box-bottom">
                <a href="">
                  <img src={bCorpImg} alt="" />
                </a>
                <a href="">
                  <img src={pledgeImg} alt="" />
                </a>
              </div>
            </div>

            <div className="footer-lists">
              <div className="footer-box">
                <List
                  listTitle="Platform"
                  listData={[
                    { title: "Shared Inbox", link: "#" },
                    { title: "Knowledge Base", link: "#" },
                    { title: "Live Chat", link: "#" },
                    { title: "Messaging", link: "#" },
                    { title: "Customer Management", link: "#" },
                    { title: "Reporting", link: "#" },
                    { title: "Integrations", link: "#" },
                    { title: "iOS & Android", link: "#" },
                    { title: "More Features", link: "#" },
                  ]}
                />
              </div>
              <div className="footer-box">
                <List
                  listTitle="Compare"
                  listData={[
                    { title: "Help Scout vs. Zendesk", link: "#" },
                    { title: "Help Scout vs. Intercom", link: "#" },
                    { title: "Help Scout vs. Front", link: "#" },
                    { title: "Help Scout vs. Freshdesk", link: "#" },
                  ]}
                />
              </div>
              <div className="footer-box">
                <List
                  listTitle="Company"
                  listData={[
                    { title: "About Us", link: "#" },
                    { title: "Careers", link: "#" },
                    { title: "DEI Dashboard", link: "#" },
                    { title: "Help Scout for Good", link: "#" },
                    { title: "Startup Program", link: "#" },
                    { title: "Brand Handbook", link: "#" },
                    { title: "In the Works", link: "#", new: true },
                    { title: "Terms & Privacy", link: "#" },
                    { title: "Accessibility Statement", link: "#" },
                  ]}
                />
              </div>
              <div className="footer-box">
                <List
                  listTitle="Get Help"
                  listData={[
                    { title: "Developers", to: "true", link: "#" },
                    { title: "Help Docs", to: "true", link: "#" },
                    { title: "Free Training", link: "#" },
                    { title: "Contact Sales", link: "#" },
                    {
                      title: "Status",
                      to: "true",
                      link: "#",
                      revenu: "true",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="footer-social">
            <div className="footer-social-icons">
              <a
                aria-label="Twitter"
                href="https://twitter.com/helpscout"
                className="footer-social-icon"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/helpscout"
                className="footer-social-icon"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/help-scout"
                className="footer-social-icon"
                title="LinkedIn"
              >
                <LinkdenIcon />
              </a>
            </div>
            <div className="footer-copyrights">
              <span>
                <img src={signImg} alt="" />
                <p className="fs-14px white graphik-medium">
                  Made by hand in over 75 cities around the world.
                </p>
              </span>
              <p className="fs-14px gray">© 2021 Help Scout</p>
              <div className="footer-title-box-bottom">
                <a href="">
                  <img src={bCorpImg} alt="" />
                </a>
                <a href="">
                  <img src={pledgeImg} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
