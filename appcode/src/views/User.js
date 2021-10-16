/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import Video2 from "./Video2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function User() {
  const eporner = "eporner";
  const pornhub = "pornhub";

  return (
    <>
      <div className="content">
      <Row>

      <Video2 site = {pornhub} embedId="ph5d87e25f838b0" />
      <Video2 site = {pornhub} embedId="ph5d87e25f838b0" />
      <Video2 site = {pornhub} embedId="ph5d87e25f838b0" />
      <Video2 site = {pornhub} embedId="ph5d87e25f838b0" />
      </Row>

      </div>
    </>
  );
}

export default User;
