import { Button, TextField } from "@mui/material";
import React from "react";
function SignUp() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i class="fab fa-google fa-2x"></i>
          </a>
          <a href="#" className="social">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <span>or use your email for registration</span>
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          sx={{ width: 450, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            // setEmail(e.target.value);
            // console.log(email);
          }}
        />
        <TextField
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          sx={{ width: 450, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            // setEmail(e.target.value);
            // console.log(email);
          }}
        />
        <TextField
          margin="normal"
          required
          id="password"
          label="Password"
          name="password"
          autoComplete="Password"
          sx={{ width: 450, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            // setEmail(e.target.value);
            // console.log(email);
          }}
        />
        <TextField
          margin="normal"
          required
          id="car-number"
          label="Car Registration Number"
          name="car-number"
          autoComplete="car-number"
          sx={{ width: 450, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            // setEmail(e.target.value);
            // console.log(email);
          }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
