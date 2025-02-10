import React from "react";
import "./Project.scss";
import ghIcon from "/icons/github_icon.svg";
import projects from "../../../src/data/projects.json";

function ProjectCard({
  link,
  img1,
  name,
  description,
  gh_link,
  tech,
  onMouseMove,
  onMouseLeave,
}) {
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="project__card"
    >
      <div className="project__img-container">
        <a href={link} target="_blank">
          <img src={img1} alt={name} className="project__img" />
        </a>
      </div>
      <div className="project__content">
        <div className="project__info">
          <p className="project__name">{name}</p>
          <p className="project__description">{description}</p>
        </div>
        <div className="project__link">
          <a href={gh_link} target="_blank">
            <img src={ghIcon} alt="" />
          </a>
        </div>
        {/* <div className="project__tech">CSS | JavaScript | EJS</div> */}
      </div>
    </div>
  );
}

function Project() {

  //disable card hover animation on mobile devices
  var isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0


  const handleMouseMove = (e) => {
    if (isTouchDevice()) return;
    const card = e.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = -1 * (mouseY / (cardHeight / 2)) * 10;
    const rotateY = (mouseX / (cardWidth / 2)) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    if (isTouchDevice()) return
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="project" id="projects">
      <p className="project__direction">Click on a project to see it live</p>
      <div className="project__container">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              link={project.link}
              img1={project.img1}
              name={project.name}
              description={project.description}
              gh_link={project.gh_link}
              tech={project.tech}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Project;
