import React, { useState } from "react";
import "./Media.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const Media = () => {
  const [tab1, setTab1] = useState(true);

  const [mobileTab, setMobileTab] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const media = [
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Read Now",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Read Now",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Read Now",
    },
    {
      img: "media.png",
      desc: "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      sub_heading: "Watch Now",
      icon: "watch_now_icon.png",
    },
  ];

  const press = [
    {
      press_desc:
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
    },
    {
      press_desc:
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",

      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
    },
    {
      press_desc:
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",

      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
    },
    {
      press_desc:
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
    },
    {
      press_desc:
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      press_desc2:
        " Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
    },
  ];

  const events = [
    {
      id: "1",
      img: "event_img1.png",
    },
    {
      id: "2",
      img: "event_img2.png",
    },
    {
      id: "3",
      img: "event_img3.png",
    },
    {
      id: "4",
      img: "event_img2.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          // slidesToShow: 1,
          adaptiveHeight: true,
          variableWidth: true,
        },
      },
      //   {
      //     breakpoint: 580,
      //     settings: {
      //       // slidesToShow: 1,
      //       adaptiveHeight: true,
      //     },
      //   },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },
    ],
  };

  return (
    <div className="wrapper">
      <div className="mobile-hidden">
        <div className="media-section">
          <div className="media-mobile">
            <div className="media-name">Media</div>
            <div
              className="arrow"
              onClick={() => {
                setMobileTab(!mobileTab);
                setTab2(false);
                setTab3(false);
              }}
            >
              <img
                src={require(`../../images/media_events/${
                  mobileTab ? "up.png" : "down.png"
                }`)}
              />
            </div>
          </div>
          <div>
            <div
              className="media-box"
              style={{ display: mobileTab ? "block" : "none" }}
            >
              {media.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="main-media">
                      <div className="media-img">
                        <img
                          src={require(`../../images/media_events/${item.img}`)}
                          alt="media_picture"
                        />
                      </div>
                      <div className="desc">{item.desc}</div>
                      <div className="media_watch_now">
                        <a href="#a" className="watch_now_desc">
                          {item.sub_heading}
                        </a>
                        {item.sub_heading === "Watch Now" ? (
                          <a href="#a" className="watch_now_icon">
                            <img
                              src={require(`../../images/media_events/${item.icon}`)}
                              alt="watch_now_icon"
                            />
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="media-mobile">
            <div className="media-name">Events</div>
            <div
              className="arrow"
              onClick={() => {
                setMobileTab(false);
                setTab2(!tab2);
                setTab3(false);
              }}
            >
              <img
                src={require(`../../images/media_events/${
                  tab2 ? "up.png" : "down.png"
                }`)}
              />
            </div>
          </div>
          <div>
            <div
              className="events-section"
              style={{ display: tab2 ? "block" : "none" }}
            >
              <div className="event-box">
                <div className="event-name">Event Name</div>
                <div className="event-intro">Intro and Date</div>
                <Slider {...settings}>
                  {events.map((item, index) => {
                    return (
                      <div className="event-image" key={index}>
                        <img
                          src={require(`../..//images/event/${item.img}`)}
                          alt="event_image"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="event-box">
                <div className="event-name">Event Name</div>
                <div className="event-intro">Intro and Date</div>
                <Slider {...settings}>
                  {events.map((item, index) => {
                    return (
                      <div className="event-image" key={index}>
                        <img
                          src={require(`../..//images/event/${item.img}`)}
                          alt="event_image"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="event-box">
                <div className="event-name">Event Name</div>
                <div className="event-intro">Intro and Date</div>
                <Slider {...settings}>
                  {events.map((item, index) => {
                    return (
                      <div className="event-image" key={index}>
                        <img
                          src={require(`../..//images/event/${item.img}`)}
                          alt="event_image"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="media-mobile">
            <div className="media-name">Press Release</div>
            <div
              className="arrow"
              onClick={() => {
                setMobileTab(false);
                setTab2(false);
                setTab3(!tab3);
              }}
            >
              <img
                src={require(`../../images/media_events/${
                  tab3 ? "up.png" : "down.png"
                }`)}
              />
            </div>
          </div>
          <div>
            <div
              className="press-box"
              style={{ display: tab3 ? "block" : "none" }}
            >
              {press.map((item, i) => {
                return (
                  <div className="press-container " key={i}>
                    <div className="press">
                      <div className="press-desc">{item.press_desc}</div>
                      <div className="press-pdf">
                        <div className="pdf-img">
                          <img
                            src={require(`../../images/media_events/${item.press_img}`)}
                            alt="pdf"
                          />
                        </div>
                        <div className="pdf-heading">
                          {item.press_heading_mobile}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="desktop-hidden">
        <div className="media-section">
          <a
            href="#a"
            className="media"
            onClick={() => {
              setTab1(true);
              setTab2(false);
              setTab3(false);
            }}
          >
            Media
          </a>
          <a
            href="#a"
            className="media"
            onClick={() => {
              setTab2(true);
              setTab1(false);
              setTab3(false);
            }}
          >
            Events
          </a>
          <a
            href="#a"
            className="media"
            onClick={() => {
              setTab3(true);
              setTab2(false);
              setTab1(false);
            }}
          >
            Press Release
          </a>
        </div>

        <div className="media-box " style={{ display: tab1 ? "" : "none" }}>
          {media.map((item, i) => {
            return (
              <div key={i}>
                <div className="media-img">
                  <img
                    src={require(`../../images/media_events/${item.img}`)}
                    alt="media_picture"
                  />
                </div>
                <div className="desc">{item.desc}</div>
                <div className="media_watch_now">
                  <a href="#a" className="watch_now_desc">
                    {item.sub_heading}
                  </a>
                  {item.sub_heading === "Watch Now" ? (
                    <a href="#a" className="watch_now_icon">
                      <img
                        src={require(`../../images/media_events/${item.icon}`)}
                        alt="watch_now_icon"
                      />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="events-section"
          style={{ display: tab2 ? "block" : "none" }}
        >
          <div className="event-box">
            <div className="event-name">Event Name</div>
            <div className="event-intro">Intro and Date</div>
            <Slider {...settings}>
              {events.map((item, index) => {
                return (
                  <div className="event-image" key={index}>
                    <img
                      src={require(`../..//images/event/${item.img}`)}
                      alt="event_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="event-box">
            <div className="event-name">Event Name</div>
            <div className="event-intro">Intro and Date</div>
            <Slider {...settings}>
              {events.map((item, index) => {
                return (
                  <div className="event-image" key={index}>
                    <img
                      src={require(`../..//images/event/${item.img}`)}
                      alt="event_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="event-box">
            <div className="event-name">Event Name</div>
            <div className="event-intro">Intro and Date</div>
            <Slider {...settings}>
              {events.map((item, index) => {
                return (
                  <div className="event-image" key={index}>
                    <img
                      src={require(`../..//images/event/${item.img}`)}
                      alt="event_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="press-box" style={{ display: tab3 ? "block" : "none" }}>
          {press.map((item, i) => {
            return (
              <div className="press-container" key={i}>
                <div className="press">
                  <div className="press-desc">{item.press_desc}</div>
                  <div className="press-pdf">
                    <div className="pdf-img">
                      <img
                        src={require(`../../images/media_events/${item.press_img}`)}
                        alt="pdf"
                      />
                    </div>
                    <div className="pdf-heading">{item.press_heading}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Media;

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// export default () => (
//   <Tabs>
//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabPanel>
//       <h2>Any content 1</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//   </Tabs>
// );
