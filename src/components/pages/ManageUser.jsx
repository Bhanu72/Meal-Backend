import React from "react";
import "./manageuser.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

function ManageUser() {
  const dateValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const dValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    22
  );
  return (
    <div className="container">
      <div className="container-fluid">
        <h3 className="adt text-left">Add User</h3>
        <div className="card">
          <Form className="fcontrol col-xs-2">
            <Row>
              <Col>
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="Full Name"/> <br />
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control placeholder="Mobile Number"/>
                <br />
                <Form.Label>Gender</Form.Label>
                <Form.Control placeholder="Gender"/>
                <br />
                
                <Form>
                  {""}
                  <Form.Label>User Type</Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Patient"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />

                      <Form.Check
                        inline
                        label="Professional"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
                <br />
                <Form.Label>Height</Form.Label>
                <Form.Control placeholder="Height"/>
              </Col>
              <Col>
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder="Email Address"/>
                <br />
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder=" Address"/>
                <br />
                <div className="datepicker">
                  <Form.Label>Date of Birth</Form.Label>
                  <DatePickerComponent
                    placeholder="Date of Birth"
                    value={dateValue}
                    format="dd-MMM-yyyy"
                    start="Year"
                    depth="Year"
                  />
                  <br/> <br/> 
                </div>
                  <div className="datepicker">
                  <Form.Label>Date of Regiistration</Form.Label>
                  <DatePickerComponent
                    placeholder="Date of Regiistration"
                    value={dValue}
                    format="dd-MMM-yyyy"
                    start="Year"
                    depth="Year"
                  />
                </div><br/> 
                
                <Form.Label>Weight</Form.Label>
                <Form.Control placeholder="Weight"/>
                <div className="bt row">
                  <div className="col">
                    <Button className="update "> Save</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
