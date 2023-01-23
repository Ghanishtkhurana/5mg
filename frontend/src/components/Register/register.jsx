import {
  Stack,
  Input,
  Box,
  Image,
  Text,
  Badge,
  Button,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { PasswordInput } from "../login/PasswordInput";
import { backendSite } from "../backendSiteLink/backendSite";

const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (name && email && password) {
      axios
        .post(`${backendSite}/users/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          // console.log(res.data.token);
          alert(res.data.msg);
          Navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill The Required Fields");
    }
  };

  return (
    <div>
      <Box w="20%" m="auto">
        <Box borderBottomWidth="1px" w="100%">
          <Box
            p="4"
            w="100%"
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <Image w="100%" src="/images/5mg.png" />
          </Box>
        </Box>
        <Stack spacing="24px" mt="10px">
          <Box w="100%">
            <FormLabel htmlFor="username"> Name</FormLabel>
            <Input
              w="100%"
              placeholder="Enter your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="username">Email</FormLabel>
            <Input
              w="100%"
              placeholder="Enter your email id"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="username">Password</FormLabel>
            <PasswordInput password={password} setPassword={setPassword} />
          </Box>

          <Box>
            <Button bg="#ff6f61" w="100%" onClick={handleClick} mt="20px">
              Submit{" "}
              {isLoading && (
                <div>
                  <Spinner color="red.500" />
                </div>
              )}
            </Button>
            <Box>Have an account? </Box>
            <Link to="/login">
              <Box
                w="23%"
                margin="auto"
                backgroundColor="#ff6f61"
                padding="4px"
                mt="10px"
                borderRadius="5px"
              >
                Login
              </Box>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xs">
              By signing up, you agree to our
              <a color="#0f847d" href="https://www.1mg.com/privacypolicy">
                {" "}
                <Box w="100%" margin="auto" padding="4px" color="red">
                  Privacy Policy
                </Box>
              </a>
            </Text>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
