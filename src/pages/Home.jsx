// import color from "../src/assets/color.svg";
import { Link } from "react-router-dom";
import data from "../../database/db";
import Card from "../components/Card";

const Home = () => {
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
                         <Link>My Work</Link>, or get to know{" "}
                         <Link>About Me</Link>. I hope you{" "}
                         <Link>Reach Out</Link>!
                        </p>
                      </div>
                    </section>
                  );
                })}

                <section id="projects">
                  <Card/>
                </section>
            </main>
          );
        })}
    </>
  );
};

export default Home;
