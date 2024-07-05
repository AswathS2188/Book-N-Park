import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSubmit = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:5000/api/user/login",
        data: {
          email: email,
          password: password,
        },
        responseType: "json",
      });

      console.log(data);
      // localStorage.setItem("userInfo", JSON.stringify(data));
      // setLoading(false);
      // history.push("/chats");
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign In</h1>
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
        <span>or use your account</span>
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          sx={{ width: 350, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <TextField
          margin="normal"
          required
          id="password"
          label="Password"
          name="password"
          autoComplete="Password"
          sx={{ width: 350, bgcolor: "#eee" }}
          autoFocus
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <a href="#">Forgot your password?</a>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleOnSubmit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
