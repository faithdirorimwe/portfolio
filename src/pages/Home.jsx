// import color from "../src/assets/color.svg";
import { Link } from "react-router-dom";
import data from "../../database/db";
import Card from "../components/Card";
import {  NavLink } from 'react-router-dom';

const Home = () => {
  const url = 'https://faithdirorimwe.github.io/Nyamatusi-project/';
  const url1= 'https://faithdirorimwe.github.io/Project-1-The-Mobi/';
  const url2 = 'https://project-2-nowalls.vercel.app/';
  const url3 = 'https://project-4-resellme-54ed-kalht3yz2-faithdirorimwe.vercel.app/';

 

  return (
    <>
      {data.Home &&
        data.Home.map((item) => {
          return (
            <main key={item.id} className="home">
              {item.hero &&
                item.hero.map(item => {
                  return (
                    <section key={item.id} id="hero">
                      <div className="content">
                        <p className="title">{item.sub_title}</p>
                        <h1>{item.main_title}</h1>
                        <p className="text">
                          Scroll down, and get to see some of{" "}
                          <NavLink to = "/Work">My Work</NavLink>, or get to know{" "}
                          <NavLink to = "/About">About Me</NavLink>. I hope you{" "}
                          <NavLink to = "/Contact">Reach Out</NavLink>!
                        </p>
                      </div>
                    </section>
                  );
                })}

              <section id="projects">
                <Card />

                <p className="text">
                  With 1 year’s experience, I am skilled in using <Link to={url}>HTML,</Link> <Link to={url1}>CSS,</Link> <Link to={url2}>JavaScript &</Link> <Link>WordPress</Link> with ease to create seamless user interfaces that promote great experience.
                  Proficient in using libraries like <Link to={url3}>ReactJS</Link> to merely give me the upper hand in my industry.
                </p>

                <p>My other superpowers are <NavLink to = "/Design">UI Design &</NavLink> <Link>Digital Marketing.</Link></p>
              </section>
            </main>
          );
        })}
    </>
  );
};

export default Home;
