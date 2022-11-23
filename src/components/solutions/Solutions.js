import React, { useEffect, useState } from "react";
import "./Solutions.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solutions = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  const video = [
    {
      union: [
        {
          url: "https://www.youtube.com/embed/W39kum43RT4",
          title: "MD- Sursagar Dairy",
        },
        {
          url: "https://www.youtube.com/embed/LDPcPptUiBs",
          title: "Chairman- Dudhsagar Dairy",
        },
        {
          url: "https://www.youtube.com/embed/OAoc7jJP9Pc",
          title: "MD- Sarvottam Dairy",
        },
        {
          url: "https://www.youtube.com/embed/JHX5iXWHznk",
          title: "GM- Dudhsagar Dairy",
        },
      ],
    },
    {
      societies: [
        {
          url: "https://www.youtube.com/embed/Dt14l02U3ZI",
          title: "Secretary- Himmatpur Mandli",
        },
        {
          url: "https://www.youtube.com/embed/LgLCZQg2Cn4",
          title: "Secretary-Vansol Mandli",
        },
      ],
    },
    {
      farmers: [
        {
          url: "https://www.youtube.com/embed/WUDOCQhkT_w",
          title: "Ambaben",
        },
        {
          url: "https://www.youtube.com/embed/C3SZGKTx6T0",
          title: "Ram",
        },
      ],
    },
    {
      partners: [
        {
          url: "https://www.youtube.com/embed/WUDOCQhkT_w", // NEED TO CHANGE THE URL AND TITLE
          title: "Ambaben",
        },
        {
          url: "https://www.youtube.com/embed/C3SZGKTx6T0", // NEED TO CHANGE THE URL AND TITLE
          title: "Ram",
        },
      ],
    },
  ];
  const width = window.innerWidth;
  useEffect(() => {
    if (width <= 600) {
      setTab1(false);
    }
  }, [width]);

  return (
    <div className="wrapper">
      <section>
        {/* DESKTOP-TAB */}

        <div className="desktop-tab">
          <div
            className={`tab-title ${tab1 ? "active" : ""}`}
            onClick={() => {
              setTab1(true);
              setTab2(false);
              setTab3(false);
              setTab4(false);
            }}
          >
            Dairy Unions
          </div>
          <div
            className={`tab-title ${tab2 ? "active" : ""}`}
            onClick={() => {
              setTab2(true);
              setTab1(false);
              setTab3(false);
              setTab4(false);
            }}
          >
            Dairy Societies
          </div>
          <div
            className={`tab-title ${tab3 ? "active" : ""}`}
            onClick={() => {
              setTab3(true);
              setTab2(false);
              setTab1(false);
              setTab4(false);
            }}
          >
            Dairy Farmers
          </div>
          <div
            className={`tab-title ${tab4 ? "active" : ""}`}
            onClick={() => {
              setTab3(false);
              setTab2(false);
              setTab1(false);
              setTab4(true);
            }}
          >
            Partners
          </div>
        </div>

        {/* MOBILE-TAB */}

        <div className="mobile-tab mobile-active">
          <div className="tab-name">Dairy Unions</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(!tab1);
              setTab2(false);
              setTab3(false);
              setTab4(false);
            }}
          >
            <img
              src={require(`../../images/media_events/${
                tab1 ? "up.png" : "down.png"
              }`)}
              alt="arrows"
            />
          </div>
        </div>

        {/* BODY */}

        <div
          className="dairy_unions_container"
          style={{ display: tab1 ? "block" : "none" }}
        >
          <div className="union-title">
            Digitalization of dairy farmer ecosystem by providing Reliable &
            Transparent financial system
          </div>
          <div className="union-box">
            <div className="union-box1">
              <div className="pay-img">
                <img src={require("./images/pay.png")} alt="dgv" />
              </div>
              <div className="union-desc">Single debit multiple credit</div>
              <div className="union-desc">
                Digitalizing financial infrastructure
              </div>
            </div>

            <div className="union-box2">
              <div className="money-img">
                <img src={require("./images/money.png")} alt="dgv" />
              </div>
              <div className="union-desc">Financial inclusion</div>
              <div className="union-desc">Digital Dairy loans</div>
              <div className="union-desc">More disposal income</div>
            </div>

            <div className="union-box3">
              <div className="connect-img">
                <img src={require("./images/connect.png")} alt="dgv" />
              </div>
              <div className="union-desc">Regional indigenous breed</div>
              <div className="union-desc">Increase in Milk productivity</div>
            </div>
          </div>
          <div className="union-video-content">
            <Slider {...settings}>
              {video[0].union.map((items, i) => {
                return (
                  <iframe
                    key={i}
                    className="union-video"
                    src={items.url}
                    title={items.title}
                    frameBorder="0"
                    allow="fullscreen"
                  ></iframe>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* MOBILE_TAB */}

        <div className="mobile-tab mobile-active">
          <div className="tab-name">Dairy Societies</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(false);
              setTab2(!tab2);
              setTab3(false);
              setTab4(false);
            }}
          >
            <img
              src={require(`../../images/media_events/${
                tab2 ? "up.png" : "down.png"
              }`)}
              alt="arrows"
            />
          </div>
        </div>

        {/* BODY */}

        <div
          className="dairy_societies_container"
          style={{ display: tab2 ? "block" : "none" }}
        >
          <div className="societies-title">
            Provided 900+ milk societies with digital banking facilities,
            resulting in increased productivity of milk
          </div>
          <div className="societies-box">
            <div className="societies-box1">
              <div className="pay-img">
                <img src={require("./images/pay.png")} alt="dgv" />
              </div>
              <div className="union-desc">
                Banking facility for farmers at Milk Society itself
              </div>
              <div className="union-desc">
                Cash Management Service available
              </div>
              <div className="union-desc">Dedicated Relationship Officer</div>
              <div className="union-desc">Dedicated call center</div>
              <div className="union-desc">Bill Payment facilities</div>
              <div className="union-desc">Incentives for Operator</div>
            </div>

            <div className="societies-box2">
              <div className="money-img">
                <img src={require("./images/money.png")} alt="dgv" />
              </div>
              <div className="union-desc">Overdraft facility available</div>
              <div className="union-desc">Affordable Interest rates</div>
              <div className="union-desc">Revolving credit facility</div>
            </div>
          </div>

          <div className="union-video-content">
            <Slider {...settings}>
              {video[1].societies.map((item, i) => {
                return (
                  <iframe
                    key={i}
                    className="union-video"
                    src={item.url}
                    title={item.title}
                    frameBorder="0"
                    allow="fullscreen"
                  ></iframe>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* MOBILE_TAB */}

        <div className="mobile-tab mobile-active">
          <div className="tab-name">Dairy Farmers</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(false);
              setTab2(false);
              setTab3(!tab3);
              setTab4(false);
            }}
          >
            <img
              src={require(`../../images/media_events/${
                tab3 ? "up.png" : "down.png"
              }`)}
              alt="arrows"
            />
          </div>
        </div>

        {/* BODY */}

        <div
          className="dairy_farmers_container"
          style={{ display: tab3 ? "block" : "none" }}
        >
          <div className="farmers-title">
            Digitalization of dairy farmer ecosystem by providing Reliable &
            Transparent financial system
          </div>
          <div className="farmers-box">
            <div className="farmers-box1">
              <div className="pay-img">
                <img src={require("./images/pay.png")} alt="dgv" />
              </div>
              <div className="union-desc">Banking Via Aadhar card</div>
              <div className="union-desc">Transact with any bank</div>
              <div className="union-desc">Bill Payment facilities</div>
              <div className="union-desc">Cash Deposit facility</div>
              <div className="union-desc">No charge on cash withdrawal</div>
              <div className="union-desc">Doorstep Banking services</div>
              <div className="union-desc">Saves travel time to bank</div>
              <div className="union-desc">Saves on incidental expenses</div>
            </div>

            <div className="farmers-box2">
              <div className="money-img">
                <img src={require("./images/money.png")} alt="dgv" />
              </div>
              <div className="union-desc">Loans available at Door-step</div>
              <div className="union-desc">Minimum processing fees</div>
              <div className="union-desc">Zero collateral</div>
              <div className="union-desc">
                Digital dairy loan to fulfill all needs
              </div>
              <div className="union-desc">Low interest rate</div>
            </div>

            <div className="farmers-box3">
              <div className="connect-img">
                <img src={require("./images/connect.png")} alt="dgv" />
              </div>
              <div className="union-desc">Wide variety of indigenous breed</div>
              <div className="union-desc">
                Save time, money on cattle discovery
              </div>
              <div className="union-desc">AI & Para Vet verified</div>
              <div className="union-desc">Larger reach of audience</div>
              <div className="union-desc">One stop Solution</div>
              <div className="union-desc">
                Embedded digital cattle Loan & insurance
              </div>
              <div className="union-desc">End use check for loan</div>
              <div className="union-desc">
                Increase in quality & quantity of milk
              </div>
            </div>
          </div>

          <div className="union-video-content">
            <Slider {...settings}>
              {video[2].farmers.map((item, i) => {
                return (
                  <iframe
                    key={i}
                    className="union-video"
                    src={item.url}
                    title={item.title}
                    frameBorder="0"
                    allow="fullscreen"
                  ></iframe>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* MOBILE_TAB */}

        <div className="mobile-tab mobile-active">
          <div className="tab-name">Partners</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(false);
              setTab2(false);
              setTab3(false);
              setTab4(!tab4);
            }}
          >
            <img
              src={require(`../../images/media_events/${
                tab4 ? "up.png" : "down.png"
              }`)}
              alt="arrows"
            />
          </div>
        </div>

        {/* BODY */}

        <div
          className="dairy_partners_container"
          style={{ display: tab4 ? "block" : "none" }}
        >
          <div className="partners-title">
            Digitalization of dairy farmer ecosystem by providing Reliable &
            Transparent financial system
          </div>
          <div className="partners-box">
            <div className="partners-box1">
              <div className="dgv-solutions-img">
                <img src={require("./images/solutions.png")} alt="dgv" />
              </div>
              <div className="union-desc">Financial inclusion in villages</div>
              <div className="union-desc">Priority Sector Lending</div>
              <div className="union-desc">
                OCA & NOCA accounts for societies
              </div>
              <div className="union-desc">Account opening for farmers</div>
              <div className="union-desc">
                Increase of unbanked rural centre footprints
              </div>
            </div>
          </div>

          <div className="union-video-content">
            <Slider {...settings}>
              {video[3].partners.map((item, i) => {
                return (
                  <iframe
                    key={i}
                    className="union-video"
                    src={item.url}
                    title={item.title}
                    frameBorder="0"
                    allow="fullscreen"
                  ></iframe>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
