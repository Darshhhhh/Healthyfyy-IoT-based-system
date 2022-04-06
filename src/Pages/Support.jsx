import React from "react";
import { Table } from "react-bootstrap";
import "./Support.css";
import Navbar from "../components/Navbar";
function Support() {
  return (
    <div>
      <Navbar />
      <div class="heading" id="Heading-page2">
        <center>
          <h2>EMERGENCY CONTACTS</h2>
        </center>
      </div>
      <center>
        <Table striped bordered hover style={{ width: "100%" }}>
          <thead
            style={{
              backgroundColor: "#ff835e",
              height: "25px",
            }}
          >
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Department</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ambulance</td>
              <td>108</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Gov Helpline</td>
              <td>+91-11-23978046</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Blood Bank</td>
              <td>26651833</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Oxeygen Bank</td>
              <td>9818060549</td>
            </tr>
          </tbody>
        </Table>
      </center>
    </div>
  );
}

export default Support;
