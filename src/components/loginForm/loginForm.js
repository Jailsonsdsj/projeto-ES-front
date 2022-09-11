import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export const LoginForm = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandle = (e) => {
    e.preventDefault();
    login(details.email, details.password); //context integration
  };

  const onChange = (e) => {
    const { value, name} = e.target;
    setDetails({ ...details, [name]: value })
  }

  return (
    <form onSubmit={submitHandle}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(onChange)}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(onChange)}
          value={details.password}
        />
      </div>
      <Link to="/resetPassword">Esqueci a senha</Link>
      <input type="submit" value="Entrar" />

    </form>
  );
}





