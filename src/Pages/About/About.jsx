import "./About.scss";
import ProjectCards from "../../helper/Components/ProjectCards";
const About = () => {
  return (
    <>
      <section>
        <div className="bio-text">
          <h1 className="bio-title">BIO</h1>
          <p className="bio-pha">
            Wednesday Addams is a fictional character from the Addams Family
            multimedia franchise created by American cartoonist Charles Addams.
            She is typically portrayed as a morbid and emotionally reserved
            child that is fascinated by the macabre, often identified by her
            pale skin and black pigtails. Wednesday has been portrayed by
            several actresses in various films and television series, including
            Lisa Loring in the television series The Addams Family (1964),
            Christina Ricci in the feature films The Addams Family (1991) and
            Addams Family Values (1993), and Jenna Ortega in the streaming
            television series Wednesday (2022).
          </p>
        </div>
      </section>
      <ProjectCards />
    </>
  );
};

export default About;
