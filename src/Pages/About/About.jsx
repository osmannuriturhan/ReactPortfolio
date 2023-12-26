import "./About.scss";
import ProjectCards from "../../helper/Components/ProjectCards";
const About = () => {
  return (
    <>
      <section>
        <div className="bio-text">
          <h1 className="bio-title">BIO</h1>
          <p className="bio-pha">
            My bachelor's degree in International Trade and Logistics and my
            ongoing master's studies in this field havegiven me a deep insight
            into the complex world of global trade. At the same time, I have
            been trained indifferent areas of software for the last three years,
            with a particular focus on front-end development. I havecontinuously
            improved myself through the projects I have realized and the
            training I have received during thisprocess. Although I have come a
            long way in this field, I am aware that there is still a lot to
            learn and I amcommitted to constantly renewing and improving myself
            on this journey.
          </p>
        </div>
      </section>
      <ProjectCards />
    </>
  );
};

export default About;
