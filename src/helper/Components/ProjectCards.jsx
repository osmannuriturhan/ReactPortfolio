import "../Components/ProjectCard.scss";
import { aboutData } from "../aboutData";

const ProjectCards = () => {
  return (
    <section className="project-card">
      <div className="container-project-card">
        <div className="pha1">
          <h2>2023 - 2024</h2>
          <h3>CLARUSWAY</h3>
          <p>Front End Developer</p>
          {aboutData.map((data, index) => (
            <div className="pha2" key={index}>
              <li>{data.description}</li>
            </div>
          ))}
        </div>

        <div className="pha1">
          <h2>2017 - 2021</h2>
          <h3>Atatürk University</h3>
          <p>Uluslararası Ticaret Ve Lojistik</p>
          <p>
            International Trade and Logistics Management is an academic
            discipline that deals with the inventory transportation, storage and
            packaging of goods in general.
          </p>
          <p></p>
        </div>

        <div className="pha1">
          <h2>2021 - 2022</h2>
          <h3>Pars Security</h3>
          <p>Operation Officer</p>
          <p>
            Establishes operational plans, organizes security personnel and
            supervises the use of security equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
