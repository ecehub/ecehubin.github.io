import React from "react";

import {
  Card,
  CardText,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody
} from "reactstrap";

import DCS from "../../img/dcs.jpg";

const SubjectCard = props => {
  return (
    <Card className="move-up" onClick={props.onCardClick}>
      <CardImg top width="100%" src={DCS} style={{ height: "400px" }} />
      <CardBody>
        <CardTitle>{props.subject.name}</CardTitle>
        <CardSubtitle>{props.subject.fullform}</CardSubtitle>
        <CardText>{props.subject.desc}</CardText>
        <CardLink>View Subject</CardLink>
      </CardBody>
    </Card>
  );
};

export default SubjectCard;
