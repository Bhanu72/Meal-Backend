import React from "react";
import "./accountdetails.scss";
import { Form, Col, Row , Button} from "react-bootstrap";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";

function AccountDetails() {
     const { useState } = React;
  const [data, setData] = useState([
    {
      dip: "192.168.1.5",
      time: "12.58am",
   
    },
    {
     dip: "192.160.5.2",
    time: "7.15pm",
    },
  
  ]);

  const [columns, setColumns] = useState([
    {
      title: "Device IP Address",
      field: "dip",
    },

    {
      title: "Time",
      field: "time",
    },
    
  ]);
  return (
    <div className="container">
    <Row>
    <Col sm='6'>
    <div>
    <h2 className ='accdetails'>Account Details</h2>
    </div>
    </Col>

    <Col sm='2'>
    <Button className='blacklistbtn'>Blacklist Account</Button>
    
    </Col>
    <Col >
    <Button className='suspendtbtn'>Suspend Account</Button>
    </Col>
    
    </Row>
    
    
      
      <Row>
        <Col sm-6>
          <br />
          <br />
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Col sm="6">
              <Form.Control
                plaintext
                readOnly
                defaultValue="John Smith"
              />
            </Col>
            <br />
            <br />
            <Form.Label>Mobile Number</Form.Label>
            <Col sm="6">
              <Form.Control plaintext readOnly defaultValue="1234567890" />
            </Col>
            <br />
            <br />
            <Form.Label>Gender</Form.Label>
            <Col sm="6">
              <Form.Control plaintext readOnly defaultValue="Mail" />
            </Col>
            <br />
            <br />
            <Form.Label>User Type</Form.Label>
            <Col sm="6">
              <Form.Control plaintext readOnly defaultValue="Patient" />
            </Col>
            <br />
            <br />
            <Form.Label>Height</Form.Label>
            <Col sm="6">
              <Form.Control plaintext readOnly defaultValue="175cm" />
            </Col>
            <br />
            <br />
          </Form.Group>
        </Col>

        <Col>
        <br/><br/>
        <Form.Label>
      Email Address
    </Form.Label>
    <Col sm="6">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col><br/><br/>
    <Form.Label>
     Address
    </Form.Label>
    <Col sm="6">
      <Form.Control plaintext readOnly defaultValue="1234" />
    </Col><br/><br/>
    <Form.Label>
      Date Of Birth
    </Form.Label>
    <Col sm="6">
      <Form.Control plaintext readOnly defaultValue="12/11/1995" />
    </Col><br/><br/>
    <Form.Label>
      Weight
    </Form.Label>
    <Col sm="6">
      <Form.Control plaintext readOnly defaultValue="85kg" />
    </Col><br/><br/>
    <Form.Label>
     BMI
    </Form.Label>
    <Col sm="6">
      <Form.Control plaintext readOnly defaultValue="65" />
    </Col><br/><br/>
        </Col>
      </Row>

      <div className='tble'>
      <h6 className='ech'>Nutrient intake for the day</h6>

      <MaterialTable
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);

                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              search: false,
              paging: false,
              toolbar: false,
            }}
          />
      </div>

<div className='clzbtn'>
<Row>
<Col >
<Button className='print'>Turn off printing option</Button>
</Col>
<Col >
<Button className='temail'>Turn off email option</Button>
</Col>
<Col sm="6">
<Button className='edita'>Edit Account</Button>
</Col>

</Row>
</div>


    </div>
    
    
    
  );
}

export default AccountDetails;
