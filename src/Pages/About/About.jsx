import "./About.scss";
import ProjectCards from "../../helper/Components/ProjectCards";
const About = () => {
  return (
    <>
      <section>
        <div className="bio-text">
          <h1 className="bio-title">BIO</h1>
          <p className="bio-pha">
            I am a Full Stack Web Developer with a background in the
            construction industry. I have a passion for building things and
            solving problems. I am a team player and enjoy working with others.
            I am always looking to learn new things and improve my skills.
          </p>
        </div>
      </section>
      <ProjectCards />
    </>
  );
};

export default About;
