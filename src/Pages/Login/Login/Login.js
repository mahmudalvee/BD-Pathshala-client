import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';


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
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    

  return (
    <div>
       <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="warning" className='fs-4 fw-semibold' type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
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
    <h3 className='text-center mt-3'>Don't have an Account? <Link to='/register'>Regester Now</Link></h3>
    </div>
  );
};

export default Login;
