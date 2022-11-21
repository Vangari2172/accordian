import React from "react";
import "./Overview.css";
import Counter from "react-number-increment";

const CardOverview = () => {
  const overview = [
    {
      img: "backgr_01.png",
      heading: {
        start: 0.0,
        end: 8.5,
        speed: 0.3,
        child: "",
        threshold: 1,
        offset: 0.5,
      },
      sub_heading: "Lakh Crore",
      desc: "The Dairy sector is more than the combined value of wheat and rice production in 2022",
      icon: "icon.png",
    },
    {
      img: "backgr_02.png",
      heading: {
        end: 210,
        speed: 0,
        child: "",
        threshold: 1,
      },
      sub_heading: "Billion",
      desc: "  Litres-India is the largest producer of dairy products in the world",
      icon: "icon1.png",
    },
    {
      img: "backgr_03.png",
      heading: {
        end: 6.5,
        speed: 0,
        child: "",
        threshold: 1,
      },
      sub_heading: "Percent",
      desc: "The growth rate of milk production in India was over 6.2% in fiscal",
      icon: "icon2.png",
    },
    {
      img: "backgr_04.png",
      heading: {
        end: 303,
        speed: 0,
        child: "",
        threshold: 1,
      },
      sub_heading: "Mn Bovines",
      desc: " 193 million cattle and 110 million buffaloes, India has largest indigenous breed Bovines",
      icon: "icon3.png",
    },
    {
      img: "backgr_05.png",
      heading: {
        end: 70,
        speed: 0,
        child: "",
        threshold: 1,
      },
      sub_heading: "Percent",
      desc: " of the money that is received from the customers goes directly to the farmer",
      icon: "icon4.png",
    },
    {
      img: "backgr_06.png",
      heading: {
        end: 5,
        speed: 0,
        child: "",
        threshold: 1,
      },
      sub_heading: "Percent",
      desc: " of India's total GDP and 25% of agricultural GDP is contributed by Dairy Industry",
      icon: "icon5.png",
    },
  ];

  return (
    <section className="container">
      <div className="title">Overview of Indian Dairy Industry</div>
      <div className="chart">
        {overview.map((item, i) => {
          const url = require(`../../images/background_img_overview/${item.img}`);
          return (
            <div
              key={i}
              className="background-img"
              style={{
                backgroundImage: `url(${url})`,
              }}
            >
              <div className="heading">
                <Counter {...item.heading} />
              </div>
              <div className="sub-heading">{item.sub_heading}</div>
              <div className="desc">{item.desc}</div>
              <div className="icon">
                <img
                  src={require(`../../images/icons/${item.icon}`)}
                  alt="milk_icon"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardOverview;
