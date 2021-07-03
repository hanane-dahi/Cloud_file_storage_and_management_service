import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { spacing } from '@material-ui/system';
import { facebookProvider, googleProvider } from "../../authMethods";
import socialMediaAuth from "./socialMediaAuth";





export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // hook for redirecting to routes

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/"); // redirecting to dashboard
    } catch (error) {
      setError("failed to Log in");
    }
    setLoading(false);
  };

  const handleOnClick = async(provider)=>{
    const res=await socialMediaAuth(provider);
    console.log(res);
  };
  
  return (
    <>
      <Card>
        <Card.Body>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 className="text-center mb-4">Log In</h2>
          <br/>
          <div className="text-center mb-4">
              <Button margin-bottom={2} onClick={()=>handleOnClick(facebookProvider)}>
                Facebook
              </Button> 
          </div>
          <br/>
          <div className="text-center mb-4">
              <Button onClick={()=>handleOnClick(googleProvider)}>
                Google
              </Button>
          </div>
          <br/>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Log In
            </Button>
            
          </Form>
          <div className="text-center w-100 mt-3">
            <Link to="/forgetPassword">Forget password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Not registered yet? <Link to="/signup">Sign Up</Link>
      </div>
    </>  
  );
}

