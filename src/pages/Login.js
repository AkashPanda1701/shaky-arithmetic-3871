import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Img, Input, InputGroup, InputLeftElement, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUserTie} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from 'react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/auth/action';
import { AUTH_LOGOUT, AUTH_RESET_MESSAGE } from '../redux/auth/actionTypes';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: "",
  password: "",
};
function Login() {
  const [formData, setFormData] = React.useState(initialState);
  const { isOpen,onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast();
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch()
const navigate = useNavigate()
  useEffect(() => {
    if(state.message){
      toast({
        title: state.message,
        status: state.error ? "error" : "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      if(!state.error){
        setFormData(initialState)
        dispatch({type: AUTH_RESET_MESSAGE})
        if(state.isAuth){
          navigate("/")
        }
      }
    }
  }, [state.message, state.error, toast, dispatch, navigate, state.isAuth])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


 
 const handleLogin = (e) => {
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

    dispatch(signin(formData))
    
    
       
 
 }

  if(!state.isAuth){
    return (
      <> 
      <Text
    onClick={onOpen}
    fontSize="18px"
    fontWeight={500}
    cursor="pointer"

  >
    Login &nbsp;
    
    <FontAwesomeIcon  icon={faUserTie}/>
  </Text>
  
       <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base:"xs",md:"md"}}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
           WELCOME USER
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} my={8}>
              <Img src='https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg'/>
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
            <Button colorScheme='blue' onClick={handleLogin}>Login</Button>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
    }else{
      return (<>
        <Text
        fontSize="18px"
        fontWeight={500}
      >
        <FontAwesomeIcon  icon={faUserTie}/>
        &nbsp;
        
        {state.name}  
      </Text>
        <Text
        fontSize="18px"
        fontWeight={500}
        cursor="pointer"
        onClick={()=>{
          dispatch({type:AUTH_LOGOUT})
          toast({
            title: "Logged out successfully.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });

        }}
      >
        Logout  &nbsp;
        
        <FontAwesomeIcon  icon={faRightFromBracket}/>
      </Text>
      </>
      )
    }
 
}

export default Login
