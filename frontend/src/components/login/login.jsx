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
import AlertComp from "../AlertComp";
import { useSelector } from "react-redux";
import { PasswordInput } from "./PasswordInput";
import { backendSite } from "../backendSiteLink/backendSite";

const Login = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, token } = useSelector((store) => store.auth);
  console.log(isAuth, token);

  const handleClick = () => {
    if (email && password) {
      axios
        .post(`${backendSite}/users/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);

          alert(res.data.msg);

          if (res.data.token) {
            localStorage.setItem("Token", res.data.token);
            Navigate("/");
          } else {
            Navigate("/login");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill your credentials");
    }
  };
  return (
    <div>
      <Box w="20%" m="auto">
        <Box borderBottomWidth="1px" w="100%">
          <Box p="4" w="100%">
            <Image
              w="100%"
              src="https://tse1.mm.bing.net/th?id=OIP.f6RJ4sSX4IrWiP2MfgmbGwAAAA&pid=Api&P=0"
            />
          </Box>
        </Box>
        <Stack spacing="24px" mt="10px">
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
            <Box>Don't Have an Account?</Box>
            <Link to="/signup">
              <Box
                w={"100px"}
                margin="auto"
                backgroundColor="#ff6f61"
                padding="4px"
                mt="10px"
                borderRadius="5px"
              >
                Register
              </Box>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xs">
              By clickng, you agree with our{" "}
              <a color="#0f847d" href="https://www.1mg.com/privacypolicy">
                {" "}
                <Box color="red">Privacy Policy</Box>
              </a>
            </Text>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
