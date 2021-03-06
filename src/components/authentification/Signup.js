import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { facebookProvider, googleProvider } from "../../authMethods";
import socialMediaAuth from "./socialMediaAuth";
import { spacing } from '@material-ui/system';

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const userNameRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("failed to create an account");
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
          <h2 className="text-center mb-4">Sign Up</h2>
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
          <Form.Group id="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" required ref={userNameRef}></Form.Control>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordConfirmRef}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100" disabled={loading}>
              Sign Up
            </Button>
          </Form>
          <br/>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;