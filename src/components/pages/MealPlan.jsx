import React from "react";
import MaterialTable from "material-table";
import { Button , Form , Col ,Row} from "react-bootstrap";
import "./mealplan.scss";
import {useHistory } from "react-router-dom";



function Mealplan() {
  let history = useHistory();

  const { useState } = React;
  const [data , setData] = useState([
    {
        cusname: "Jhon Smith",
        plan: 9,
        cemail: "jhon@gmail.com",
        ldevices: 2,
      
    },
    {
        cusname: "Elizabeth Taylor",
        plan: 2,
        cemail: "taylor@gmail.com",
        ldevices: 5,
      
    },
    {
        cusname: "Michael Smith",
        plan: 5,
        cemail: "michael@gmail.com",
    ldevices: 6,
      
    },
    
  ]);

  const [columns, setColumns] = useState([
    {
      title: "Customer Name",
      field: "cusname",
    },

    {
      title: "No.of plans",
      field: "plan",
    },
    {
      title: "Customer Email",
      field: "cemail",
    },
    {
      title: "No.Of logged devices",
      field: "ldevices",
    },
    
  ]);

  return (
    <div className='container'>
     
      <div className="container-fluid row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <br />
              <h3>Customers</h3>
            </div>
            <div className="col-sm-6">
              
              
              
            </div>
          </div>
          <br/> 
<div className='cusfilter'>
<Row className="mb-2">
    <Form.Group as={Col} >
      
      <Form.Control placeholder="Customer Name"/>
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Select defaultValue="Choose...">
        <option>Filter By Devices</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} >
      
      <Form.Select defaultValue="Choose...">
        <option>Filter By Meal Number</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
    <Button className="bn">Filter</Button>
</Row>

</div>
          <MaterialTable
            
            data={data}
            columns={columns}
            actions ={[
   
  ]}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
      
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
              
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                  }, 1000)
                }),
                
                
            }}
            options={{
              actionsColumnIndex: -1,
              search: false,
              paging: false,
              toolbar: false,
            }}
              
          />
        </div>
        {/* <div className="col-sm-3">col2</div> */}
      </div>
    </div>
  );
}

export default Mealplan;
