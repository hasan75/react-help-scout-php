import LinkBtn from "components/LinkBtn/LinkBtn";
import PricingCard from "components/PricingCard/PricingCard";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const [pricingOptions, setpricingOptions] = useState({
    annual: true,
    monthly: false,
  });

  const handleChange = (e) => {
    let title = e.toLowerCase();

    if (title === "annual") {
      setpricingOptions({
        annual: true,
        monthly: false,
      });
      return;
    }
    if (title === "monthly") {
      setpricingOptions({
        annual: false,
        monthly: true,
      });
      return;
    }
  };

  return (
    <>
      <Navbar />

      <div className="pricing-page pt-90px">
        <div className="container-wrapper">
          <p className="text-center fs-36px dark-blue graphik-medium py-30px mb-30px">
            Happy customers. Happy team.{" "}
            <span className="light-blue graphik-regular">Try for free.</span>
          </p>

          <div className="package-select mb-60px">
            <Checkbox
              title="Annual"
              radio={true}
              rounded={true}
              radioTitle="packageSelect"
              saveTitle="(Save up to 20%)"
              handleChange={handleChange}
              checked={pricingOptions.annual}
            />
            <Checkbox
              title="Monthly"
              radio={true}
              rounded={true}
              radioTitle="packageSelect"
              handleChange={handleChange}
              checked={pricingOptions.monthly}
            />
          </div>

          <div className="pricing-wrapper mb-100px">
            <img
              src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--plan-standard--illo.png?ixlib=gatsbyHook-1.6.12&fit=min&w=160&h=375"
              alt=""
              className="pricing-img-left"
            />
            <img
              src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--plan-company--illo.png?ixlib=gatsbyHook-1.6.12&fit=min&w=183&h=375"
              alt=""
              className="pricing-img-right"
            />
            {pricingOptions.annual ? (
              <>
                <PricingCard
                  title="Standard"
                  price="20"
                  duration="per User per month"
                  packageDisc="Reporting, automation, and integrations for support teams"
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "3 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Additional Mailboxes are $10 each/month and Docs sites are $20 each/month.",
                    },
                    { title: "Beacon with live chat" },
                    { title: "Proactive Messages", seePricing: true },
                    {
                      title: "Customer Properties",
                      badge: "New",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Reports" },
                    { title: "Automated Workflows" },
                    { title: "API and 50+ integrations" },
                  ]}
                />
                <PricingCard
                  title="Plus"
                  price="35"
                  duration="per User per month"
                  packageDisc="Advanced features and reporting for teams at scale              "
                  buttonTitle="Free 15-day Trial"
                  buttonSpecial={true}
                  packageDetails={[
                    {
                      title: "All Standard features",
                      special: true,
                    },
                    {
                      title: "10 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Custom Fields" },
                    {
                      title: "Teams",
                    },
                    { title: "Salesforce, Jira, HubSpot Apps" },
                    { title: "HIPAA Compliance" },
                    { title: "SSO/SAML Authentication", badge: "ADD-ON" },
                    { title: "Advanced Permissions" },
                  ]}
                />
                <PricingCard
                  title="Company"
                  priceText="Contact Us"
                  duration="Designed to grow with teams of 25+"
                  packageDisc="Personalized service and enterprise security for large teams"
                  buttonTitle="Contact Us"
                  packageDetails={[
                    { title: "All Plus features", special: true },
                    { title: "Unlimited Mailboxes" },
                    { title: "Unlimited Docs sites" },
                    { title: "Flexible Users for one low price" },
                    { title: "Concierge onboarding services" },
                    { title: "Dedicated account manager" },
                    { title: "Enterprise security and SSO" },
                  ]}
                />
              </>
            ) : (
              <>
                <PricingCard
                  title="Standard"
                  price="25"
                  duration="per User per month"
                  packageDisc="Reporting, automation, and integrations for support teams"
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "3 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Additional Mailboxes are $10 each/month and Docs sites are $20 each/month.",
                    },
                    { title: "Beacon with live chat" },
                    { title: "Proactive Messages", seePricing: true },
                    {
                      title: "Customer Properties",
                      badge: "New",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Reports" },
                    { title: "Automated Workflows" },
                    { title: "API and 50+ integrations" },
                  ]}
                />
                <PricingCard
                  title="Plus"
                  price="40"
                  duration="per User per month"
                  packageDisc="Advanced features and reporting for teams at scale              "
                  buttonTitle="Free 15-day Trial"
                  packageDetails={[
                    {
                      title: "All Standard features",
                      special: true,
                    },
                    {
                      title: "10 Mailboxes, 1 Docs site",
                      tooltipText:
                        "Enrich Customer Profiles with custom attributes",
                    },
                    { title: "Custom Fields" },
                    {
                      title: "Teams",
                    },
                    { title: "Salesforce, Jira, HubSpot Apps" },
                    { title: "HIPAA Compliance" },
                    { title: "SSO/SAML Authentication", badge: "ADD-ON" },
                    { title: "Advanced Permissions" },
                  ]}
                />
                <PricingCard
                  title="Company"
                  priceText="Contact Us"
                  duration="Designed to grow with teams of 25+"
                  packageDisc="Personalized service and enterprise security for large teams"
                  buttonTitle="Contact Us"
                  packageDetails={[
                    { title: "All Plus features", special: true },
                    { title: "Unlimited Mailboxes" },
                    { title: "Unlimited Docs sites" },
                    { title: "Flexible Users for one low price" },
                    { title: "Concierge onboarding services" },
                    { title: "Dedicated account manager" },
                    { title: "Enterprise security and SSO" },
                  ]}
                />
              </>
            )}
          </div>

          <div className="discount">
            <p className="text-center fs-30px dark-blue graphik-medium mb-55px">
              Looking for a discount?
            </p>

            <div className="mb-100px">
              <div className="discout-cards ">
                <Link to="/" className="discout-card pointer">
                  <p className="discount-good fs-30px dark-blue text-center mb-30px">
                    Help Scout
                    <span>
                      {" "}
                      for Good
                      <img
                        src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--hsfg-highlight.png?ixlib=gatsbyHook-1.6.12&fit=min&w=130&h=10"
                        alt=""
                      />
                    </span>
                  </p>

                  <p className="discount-disc graphik-regular fs-21px dark-blue mb-35px">
                    For organizations with a focus on environmental
                    sustainability & social impact.
                  </p>

                  <LinkBtn
                    wrapperClassName="margin-center w-fit-content "
                    className="fs-18px "
                    title="Learn More"
                  />
                </Link>
                <Link to="/" className="discout-card pointer">
                  <p className="discount-good fs-30px dark-blue text-center mb-20px">
                    Help Scout for Startups
                    <img
                      src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--startups-rocket.png?ixlib=gatsbyHook-1.6.12&fit=min&w=51&h=55"
                      alt=""
                    />
                  </p>

                  <p className="discount-disc graphik-regular fs-21px dark-blue mb-35px">
                    For new companies that could use a price break for the first
                    year.
                  </p>

                  <LinkBtn
                    wrapperClassName="margin-center w-fit-content "
                    className="fs-18px "
                    title="Learn More"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-100px">
            <div className="pricing-section">
              <div className="pricing-section-left">
                <p className="fs-30px dark-blue graphik-medium mb-30px">
                  You can count on us
                </p>
                <p className="fs-21px light-blue lh-2">
                  We're here to help from day one, with 24/6 outstanding
                  support, backed up by a 30-day money back guarantee. This is
                  the beginning of a beautiful friendship.
                </p>
              </div>
              <div className="pricing-section-right">
                <img
                  src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--support-team.png?ixlib=gatsbyHook-1.6.12&fit=min&w=450&h=385"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mb-100px">
            <div className="pricing-section reverse">
              <div className="pricing-section-left">
                <p className="fs-30px dark-blue graphik-medium mb-30px">
                  One tree per customer
                </p>
                <p className="fs-21px light-blue lh-2">
                  As a certified B Corp, we’re doing what we can to leave the
                  world better than we found it. When you become a customer,
                  we’re planting a tree with The Nature Conservancy to say
                  thanks.
                </p>
              </div>
              <div className="pricing-section-right tree">
                <img
                  src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--bcorp-logo.png?ixlib=gatsbyHook-1.6.12&fit=min&w=164&h=161"
                  alt=""
                  className="tree-badge"
                />
                <img
                  src="https://hs-marketing.imgix.net/images/pages/pricing/PricingPage--bcorp-trees.png?ixlib=gatsbyHook-1.6.12&fit=min&w=301&h=381"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="get-started">
          <div className="container-wrapper">
            <div className="py-100px text-center get-started-content ">
              <p className="fs-30px graphik-medium dark-blue mb-20px">
                Get started with Help Scout
              </p>
              <p className="light-blue fs-18px lh-2 mb-50px">
                Want to learn what Help Scout can do for you? See for yourself
                with a free trial — we'll happily extend you if you need more
                time.
              </p>

              <Link
                to="/register"
                className="button-wrapper radius-4px bg-sharp-blue white graphik-regular weight-5 fs-18px"
              >
                Free Trial
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Pricing;

function Checkbox(props) {
  const {
    title,
    radio,
    radioTitle,
    rounded,
    saveTitle,
    handleChange,
    checked,
  } = props;
  return (
    <div className={rounded ? "checkbox rounded pointer" : "checkbox pointer"}>
      <div>
        <input
          type={radio ? "radio" : "checkbox"}
          name={radioTitle ? radioTitle : ""}
          id={title}
          onChange={() => handleChange(title)}
          checked={checked}
        />
      </div>
      <label className="fs-18px light-blue weight-4 pointer" htmlFor={title}>
        {title}{" "}
        <span
          className="fs-14px graphik-medium"
          style={{ color: "rgb(9, 130, 63)" }}
        >
          {saveTitle}
        </span>
      </label>
    </div>
  );
}
