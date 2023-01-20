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

const Login = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    if (email && password) {
      axios
        .post(`http://localhost:8080/users/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          // console.log(res.data.token);
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
      <Box borderBottomWidth="1px" w="100%">
        <Box p="4" w="100%">
          <Image src="https://tse1.mm.bing.net/th?id=OIP.f6RJ4sSX4IrWiP2MfgmbGwAAAA&pid=Api&P=0" />
        </Box>
      </Box>
      <Stack spacing="24px">
        <Box>
          <FormLabel htmlFor="username">Email</FormLabel>
          <Input
            id="form"
            placeholder="Enter your email id"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="username">Password</FormLabel>
          <Input
            id="username"
            placeholder="Enter your password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <Badge
              display="inline"
              variant="subtle"
              textTransform="lowercase"
              colorScheme="blue"
              fontSize="1.1em"
            >
              Register
            </Badge>
          </Link>
        </Box>
        <Box>
          <Text fontSize="xs">
            By clickng, you agree with our{" "}
            <a color="#0f847d" href="https://www.1mg.com/privacypolicy">
              {" "}
              <Badge
                display="inline"
                variant="subtle"
                textTransform="lowercase"
                colorScheme="green"
              >
                Privacy Policy
              </Badge>
            </a>
          </Text>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
