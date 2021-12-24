import LinkBtn from "components/LinkBtn/LinkBtn";
import React from "react";
import "./SideBySideSection.css";
import platformIdentityImg from "assets/images/platform-identity-img.webp";

function SideBySideSection(props) {
  const { headline, title, subtitle, linkTitle, identity = false, img } = props;
  return (
    <div className="side-by-side-wrapper">
      <div className="container-wrapper">
        <div className="side-by-side">
          <div className="side-by-side-left">
            <p className="fs-24px dark-blue mb-20px">{headline}</p>
            <p className="fs-30px  darkest-blue graphik-medium mb-30px">
              {title}
            </p>
            <p className="fs-18px dark-blue lh-2 graphik-light weight-4 mb-30px ">
              {subtitle}
            </p>
            <LinkBtn className="fs-18px graphik-medium" title={linkTitle} />
          </div>
          <div className="side-by-side-right">
            <div className="side-by-side-img-wrapper">
              {identity ? (
                <div className="img-identity-wrapper">
                  <span></span>
                  <span></span>
                  <span></span>
                  <img
                    src={platformIdentityImg}
                    className="platform-identity-img"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBySideSection;
