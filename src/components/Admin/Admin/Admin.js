import React, { useState } from 'react';
import Slidebar from '../../Customer/Customer/Slidebar/Slidebar';

const Admin = () => {

  const [admin, setAdmin] = useState({});


  const handleSubmit = (e) => {
    fetch("https://shrouded-fortress-62693.herokuapp.com/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(admin),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // alert("data submitted");
          // history.push("/");
        }

        e.preventDefault();
      });
    alert("data submitted");
  }
  const handleBlur = (e) => {
    // const newData = e.target.value
    // setAdmin(newData)
    const newUserInfo = { ...admin }
    newUserInfo[e.target.name] = e.target.value;
    setAdmin(newUserInfo);
  }
  return (
    <section className="row">
      <div className="col-md-3">
        <Slidebar></Slidebar>
      </div>
      <div className="col-md-8 mt-5" style={{ backgroundColor: '#F4F7FC' }}>
        <div style={{ marginTop: '20px' }}>
          <form action="" onSubmit={handleSubmit}>
            <label for="email"><h5>Email</h5></label> <br />
            <input
              style={{ width: '400px', border: '1px solid light', height: '50px', borderRadius: '5px' }}
              onBlur={handleBlur}
              type="text" name="email" placeholder="email" id="" />

            <input type="submit"
              className="btn btn-dark ml-5 mb-2"
              style={{ height: '50px', width: '150px' }}
              value="submit" />
          </form>

        </div>
      </div>
    </section>

  );
};

export default Admin;