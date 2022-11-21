import React from "react";
import "./CoreManagementTeam.css";
import linkedIn from "../../images/core_team/LinkedIn.png";

const CoreManagementTeam = () => {
  const core = [
    {
      img: "Mukesh_Ranjan.png",
      name: "Mukesh Ranjan",
      post1: "Chief",
      post2: "Technology Officer",
    },
    {
      img: "Nishchint_Paliwal.png",
      name: "Nishchint Paliwal",
      post1: "Chief",
      post2: "Commercial Officer",
    },
    {
      img: "Mayank_Rai.png",
      name: "Mayank Rai",
      post1: "GM & Head Business",
      post2: "DGV Pay & Money",
    },
    {
      img: "Pushkar_Salunkhe.png",
      name: "Pushkar Salunkhe",
      post1: "GM & Head - Engineering &",
      post2: "Technology Solutioning",
    },
    {
      img: "Ravi_Singh.png",
      name: "Ravi Singh",
      post1: "GM & Head - People,",
      post2: "Facilities & Marketing",
    },
    {
      img: "Avdhoot_Bhogulkar.png",
      name: "Avdhoot Bhogulkar",
      post1: "GM & Head - IT Infra &",
      post2: "Information Security",
    },
    {
      img: "Vijay_Chougle.png",
      name: "Vijay Chougle",
      post1: "Deputy Vice President -",
      post2: "Operations",
    },
    {
      img: "Sangeetha_Lewis.png",
      name: "Sangeetha Lewis",
      post1: "Associate Vice President -",
      post2: "Founder's Office",
    },
    {
      img: "Rohit_Mahakal.png",
      name: "Rohit Mahakal",
      post1: "Finance",
      post2: "Controller",
    },
    {
      img: "Mayur_Raval.png",
      name: "Mayur Raval",
      post1: "State Head -",
      post2: "Gujarat",
    },
  ];

  return (
    <section className="wrapper">
      <div className="title">Core Management Team</div>
      <div className="core_team_main">
        {core.map((item, i) => {
          return (
            <div key={i}>
              <div className="team_member">
                <img
                  src={require(`../../images/core_team/${item.img}`)}
                  alt="core_team_member"
                />
                <a href="#a" className="linkedIn_img">
                  <img src={linkedIn} alt="linkedIn_icon" />
                </a>
              </div>
              <div className="member_name">{item.name}</div>
              <div className="designation">
                {item.post1} <br />
                {item.post2}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreManagementTeam;
