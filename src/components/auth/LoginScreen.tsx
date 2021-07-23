import React from "react";
import { useDispatch } from "react-redux";
import { startGooleLogin, startLoginEmailPassword } from "../../actions/auth";
import './LoginScreen.css'

import useForm from "../../hooks/useForm";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleInputChange] = useForm({
    lEmail: "kevin@gmail.com",
    lPassword: "admin",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(lEmail, lPassword));
  };

  const handleGoogleLogin = () => {
    dispatch(startGooleLogin());
  };

  return (
    <div className="back ">
    
        <a href="/" className="m-2 btn btn-success">Return</a>
      
      <div className="card text-dark bg-light mb-3 container contenido position-absolute top-50 start-50 translate-middle">
        <div className="mt-2 texto">Log In</div>
        <div className="card-body">
          <form action="" onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Correo</label>
              <input type="email"
                  className="form-control"
                  placeholder="Correo"
                  name="lEmail"
                  value={lEmail}
                  onChange={handleInputChange} />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="">Contraseña</label>
              <input  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="lPassword"
                  value={lPassword}
                  onChange={handleInputChange} />
              <div id="emailHelp" className="form-text"></div>
            </div>
            
            <button type="submit" className=" mt-2 btn btn-primary items">
              Log in
            </button>
            <br></br>
            <button onClick={handleGoogleLogin}  type="submit" className=" items mt-2 btn btn-success">
              Log In By Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
