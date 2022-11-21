import React from "react";
import "./WhoWeAre.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhoWeAre = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
      <div className="who_section wrapper">
        <div className="text-box">
          <div className="title">Who we are</div>
          <div className="desc">
            We aspires to be a one-stop platform for 80M Dairy farmers in India
            to become lifelong partners in their growth and prosperity. Be it
            access to financial services like formal banking with ease at the
            milk collection, society point, customized financial products for
            dairy farmers, productivity enhancement tools, integrated market
            place which will bring about ease and higher yield will be our
            singular aim.
          </div>
        </div>
        <div className="image-box">
          <Slider {...settings}>
            <div className="who_img">
              <img
                src={require(`../../images/who/who_we_are_img.png`)}
                alt="about_us"
              />
            </div>
            <div className="who_img">
              <img
                src={require(`../../images/who/who_we_are_img.png`)}
                alt="about_us"
              />
            </div>
            <div className="who_img">
              <img
                src={require(`../../images/who/who_we_are_img.png`)}
                alt="about_us"
              />
            </div>
            <div className="who_img">
              <img
                src={require(`../../images/who/who_we_are_img.png`)}
                alt="about_us"
              />
            </div>
            <div className="who_img">
              <img
                src={require(`../../images/who/who_we_are_img.png`)}
                alt="about_us"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
