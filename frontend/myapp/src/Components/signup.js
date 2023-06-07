import React from "react"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
 export const Signup = () => {
    const [fname, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const createAccount = () => {
      axios
        .post("http://localhost:8000/user/signup", {
          name: fname,
          username: userName,
          password: password,
          email: email
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          const { status, message } = result;
          if (status === "SUCCESS") {
            alert(message, status);
          } else {
            alert(message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };


    return(
        <>
        <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={fname} onChange={(e)=>setName(e.target.value)} />
                      <label className="form-label">Name:</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                      <label className="form-label">username:</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                      <label className="form-label">Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <label className="form-label">Password</label>
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={createAccount}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}