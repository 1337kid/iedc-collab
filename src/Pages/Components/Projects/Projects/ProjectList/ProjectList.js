import React, { useContext } from "react";
import ProjectBox from "./ProjectBox";
import { Col } from "react-bootstrap";
import { ProjectContext } from "../../../../../contexts/ProjectContext";

const ProjectList = ({ width, setdispmobDetails }) => {
  const { projects, setSelectedProject } = useContext(ProjectContext);
  console.log(projects);

  return (
    <Col className={" overflow "}>
      {projects.map((x) => {
        return (
          <div
            className="content post-item"
            key={x.id}
            onClick={() => {
              // props.setMobileComponent(true);
              setSelectedProject(x);
              if (width < 768) setdispmobDetails(true);
            }}
          >
            <ProjectBox
              name={x.name}
              teamLeader={x.leader_name}
              projectId={x.id}
            />
          </div>
        );
      })}
    </Col>
  );
};

export default ProjectList;
