import {
  useToast,
  Input,
  Box,
  Grid,
  Img,
  Heading,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/action";


const initialState = {
  name: "",
  email: "",
  password: "",
};


function Register() {
  const toast = useToast();
  const [formData, setFormData] = React.useState(initialState);
  
  const dispatch = useDispatch()
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key] === "") {
        toast({
          title: "Please fill all the fields.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    }
    dispatch(signup(formData))
    
  };


  return (
    <Grid
      w={{ base: "70%", md: "90%" }}
      m="30px auto"
      gap={8}
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
    >
      <Box display={{ base: "none", md: "inherit" }}>
        <Img
          w={"100%"}
          h={"100%"}
          src="https://static.toiimg.com/thumb/msid-59632433,width=1200,height=900/59632433.jpg"
        />
      </Box>
      <Box shadow={{ base: "md", md: "none" }} borderRadius="20px" p={4}>
        <Heading textAlign={"center"}>Welcome To Our Community</Heading>
        <Stack py={8} gap={4} w={{ base: "85%", md: "70%" }} m="auto">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faUser} />}
            />
            <Input
              type={"text"}
              onChange={handleChange}
              name="name"
              placeholder="First name"
              value={formData.name}
            />
          </InputGroup>
          <InputGroup>
            {" "}
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.600" />}
            />
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
              value={formData.email}
              required={true}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.600" />}
            />
            <Input
              type={"password"}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              value={formData.password}
            />
          </InputGroup>

          <Button
            bg={"rgb(88, 88, 88)"}
            onClick={handleSubmit}
            _hover={{ bg: "black" }}
            color={"white"}
            fontSize="18px"
            w={"100%"}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default Register;
