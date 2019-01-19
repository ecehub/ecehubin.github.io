import React from "react";
import { Row, Col } from "reactstrap";

import "./HomePage.css";

import SubjectCard from "../SubjectCard/SubjectCard";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          name: "DCS",
          fullform: "Digital Control Systems",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        },
        {
          name: "F&W",
          fullform: "Field and Waves",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        },
        {
          name: "AEC",
          fullform: "Analog Electronic Circuit",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        },
        {
          name: "CS",
          fullform: "Communication Systems",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        },
        {
          name: "CAO",
          fullform: "Computer Architecture and Organisation",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        },
        {
          name: "EVS",
          fullform: "Enviromental Studies",
          desc:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugitquidem aliquid at ex esse autem quaerat doloribus, ullam sunt veniam?"
        }
      ]
    };
  }

  onCardClick = e => {
    const parent = e.target.parentElement;
    if (parent.classList.contains("card")) {
      const cardBody = parent.childNodes[1];
      const subjectName = cardBody.firstChild.textContent;
      this.props.history.push(`/subject/${subjectName}`);
    } else if (parent.classList.contains("card-body")) {
      const subjectName = parent.firstChild.textContent;
      this.props.history.push(`/subject/${subjectName}`);
    }
  };

  render() {
    return (
      <div className="homepage container">
        <Row>
          <h2 className="heading-subjects">Subjects</h2>
        </Row>
        <Row>
          {this.state.subjects.map((subject, index) => {
            return (
              <Col sm="12" md="6" lg="4" className="mt-4" key={index}>
                <SubjectCard onCardClick={this.onCardClick} subject={subject} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default HomePage;
