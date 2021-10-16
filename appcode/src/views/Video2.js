import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
const Video2 = ({ embedId, site }) => (
    <Col md="4">
      
    <hr />
        <div id="video-responsive">
        <iframe
          src={`https://www.${site}.com/embed/${embedId}`}
          frameBorder="0"
          allowFullScreen = "true"
        />
        </div>
        {/* <Video2 site = {pornhub} embedId="9zDYKIgS5hY" /> */}
    </Col>
);

Video2.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video2;