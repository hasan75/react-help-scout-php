import React from "react";
import PricingItem from "./PricingItem";

function PricingCard(props) {
  const {
    title,
    price,
    duration,
    packageDisc,
    buttonTitle,
    packageDetails,
    priceText,
    buttonSpecial = false,
  } = props;
  return (
    <div className="pricing-card">
      <div>
        <div className="text-center mb-20px">
          <p
            className={`fs-24px graphik-medium ${
              priceText ? "mb-25px" : "mb-15px"
            } `}
          >
            {title}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
            className="mb-5px"
          >
            {priceText ? (
              ""
            ) : (
              <span
                className="fs-30px graphik-medium "
                style={{ marginTop: "10px" }}
              >
                $
              </span>
            )}
            {priceText ? (
              <p className="fs-36px graphik-regular mb-10px">{priceText}</p>
            ) : (
              <p className="fs-56px graphik-regular ">{price}</p>
            )}
          </div>
          <p className="fs-13px light-blue weight-4 mb-25px">{duration}</p>

          <p className="package-title fs-16px light-blue graphik-light ">
            {packageDisc}
          </p>
        </div>
      </div>

      <div>
        <ul className="pricing-details-list mb-35px">
          {packageDetails.map((item, index) => {
            return (
              <PricingItem
                title={item.title}
                tooltipText={item.tooltipText ? item.tooltipText : false}
                seePricing={item.seePricing ? true : false}
                badge={item.badge ? item.badge : false}
                special={item.special}
              />
            );
          })}
        </ul>
      </div>

      <div>
        <button
          className={`bricing-btn pointer weight-6 ${
            buttonSpecial ? "special" : ""
          }`}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
