import React, { useState } from "react";
import "./Media.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Media = () => {
  const [tab1, setTab1] = useState(true);
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
        "Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro Intro",
      press_img: "press_pdf.png",
      press_heading: "View Now",
      press_heading_mobile: "Read Now",
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
          adaptiveHeight: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="wrapper">
      <section className="desktop-hidden">
        <div className="media-section">
          <div
            className={`media ${tab1 ? "active" : ""}`}
            onClick={() => {
              setTab1(true);
              setTab2(false);
              setTab3(false);
            }}
          >
            Media
          </div>
          <div
            className={`media ${tab2 ? "active" : ""}`}
            onClick={() => {
              setTab2(true);
              setTab1(false);
              setTab3(false);
            }}
          >
            Events
          </div>
          <div
            className={`media ${tab3 ? "active" : ""}`}
            onClick={() => {
              setTab3(true);
              setTab2(false);
              setTab1(false);
            }}
          >
            Press Release
          </div>
        </div>
        <div className="media-mobile mobile-active">
          <div className="media-name">Media</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(!tab1);
              setTab2(false);
              setTab3(false);
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
        <div
          className="media-box"
          style={{
            display: tab1 ? "grid" : "none",
          }}
        >
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
        <div className="media-mobile mobile-active">
          <div className="media-name">Events</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(false);
              setTab2(!tab2);
              setTab3(false);
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
        <div className="media-mobile mobile-active">
          <div className="media-name">Press Release</div>
          <div
            className="arrow"
            onClick={() => {
              setTab1(false);
              setTab2(false);
              setTab3(!tab3);
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
