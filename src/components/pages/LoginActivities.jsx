import React from "react";
import MaterialTable from "material-table";
import { Button } from "react-bootstrap";
import "./logina.scss";
import { useHistory } from "react-router-dom";

function LoginActivities() {
  let history = useHistory();
  const { useState } = React;
  const [data, setData] = useState([
    {
      cusname: "Jhon Smith",
      email: "jhon@gmail.com",
      ip: "192.168.1.5",
    },
    {
      cusname: "Elizabeth Taylor",
      email: "taylor@gmail.com",
      ip: "192.168.1.5",
    },
    {
      cusname: "Michael Smith",
      email: "michael@gmail.com",
      ip: "192.168.1.5",
    },
  ]);

  const [columns, setColumns] = useState([
    {
      title: "Customer Name",
      field: "cusname",
    },

    {
      title: "Email adrress",
      field: "email",
    },
    {
      title: "Logged in IP adresses",
      field: "ip",
    },
  ]);

  return (
    <div className="gg container">
      <div className="container-fluid row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <br />
              <h3 className="lgact">Login Activities</h3>
            </div>
            <div className="input-group col-12 mb-5 ">
              <form className="fmc mb-3 col-6 mt-2 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search User"
                />
                <span class="input-group-btn">
                <Button className="lbn">Filter</Button>
                </span>
                
                
              </form>
            </div>

            <div className="col-sm-6">
              
            </div>
          </div>
          <br />
          

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
      </div>
    </div>
  );
}

export default LoginActivities;
