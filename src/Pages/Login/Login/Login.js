import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider()
    const gitprovider = new GithubAuthProvider();
    const handleGoogleSignIn =() => {
        providerLogin(googleProvider)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGitSignIn =() => {
        providerLogin(gitprovider)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.error(error))
    }

  return (
    <div>
      <Form className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Text className="text-danger fw-semibold">hmm</Form.Text>
        </Form.Group>
        <div className='App my-3'>
            <Button variant="warning" size="lg" type="submit" >
            Login
            </Button>
        </div>
      </Form>
      <div className="d-grid gap-2 w-50 mx-auto">
        <h5 className='text-center mt-1'>Or Direct Login from:</h5>
      <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
      <i className="bi bi-google"></i> Google Account
      </Button>
      <Button onClick={handleGitSignIn} variant="dark" size="lg">
      <i className="bi bi-github"></i> Github Account
      </Button>
    </div>
    </div>
  );
};

export default Login;
