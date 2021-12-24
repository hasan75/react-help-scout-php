import React from "react";
import { ReactComponent as InformationIcon } from "assets/images/information-icon.svg";

const PricingItem = ({
  title,
  tooltipText,
  seePricing = false,
  badge = false,
  special = false,
}) => {
  return (
    <li
      className={`pricing-item fs-16px ${
        special ? "weight-6" : "graphik-light weight-5"
      }  `}
    >
      {title}
      {seePricing ? (
        <a href="#" className="blue">
          (See Pricing)
        </a>
      ) : (
        ""
      )}
      {badge ? <div className="badge">{badge}</div> : ""}
      {tooltipText ? (
        <div className="pricing-information">
          <div className="pricing-information-icon">
            <InformationIcon />
          </div>

          <div className="pricing-information-tooltip">{tooltipText}</div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default PricingItem;
