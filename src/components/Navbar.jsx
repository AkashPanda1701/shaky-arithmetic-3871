import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  faCartShopping,
  faContactBook,
  faHeart,
  faIdCard,
  faLock,
  faMailBulk,
  faShippingFast,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink,  useSearchParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Login from "../pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../redux/cart/action";
import { RESET_CART_MESSAGE } from "../redux/cart/actionTypes";


function Navbar() {
const state = useSelector((state) => state.auth);
const [ queryParam, setQueryParam ] = useSearchParams();
console.log(setQueryParam)
// console.log('queryParam: ', queryParam.get('category'));

const category=queryParam.get('category') ;

const toast = useToast();
const dispatch = useDispatch();
const cartState = useSelector((state) => state.cart);
const { isOpen, onOpen, onClose } = useDisclosure();
  let activeStyle = {
    color: "red",
    fontWeight: "500",
    fontSize: "18px",
    borderBottom: "2px solid red",
  };
  let unactiveStyle = {
    fontSize: "18px",
    fontWeight: "500"
  };

  useEffect(() => {
    if(state.isAuth){

      dispatch(getCartProducts());
    }
  }, [dispatch,state.isAuth]);

  useEffect(() => {
    if(cartState.message){
      toast({
        title: cartState.message,
        status: cartState.error ? "error" : "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({type:RESET_CART_MESSAGE})
    }
  }, [cartState.message,cartState.error,dispatch,toast]);


  return (
    <Box   bg='white' shadow={'md'}>
      <Box px={5}>
        <Flex
          borderBottom={"1px solid gray"}
          px={8}
          py={{ base: 4, md: 8 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <NavLink to="/">
              <Img
                w={"280px"}
                src="https://i.ibb.co/SmRZ6JC/nordstrom-logo.jpg"
              />
            </NavLink>
          </Box>
          <Box w={"50%"} mx={4}>
            <Searchbar/>
          </Box>
          <Flex alignItems={"center"}>
            <Menu isOpen={isOpen}>
              {
                !state.isAuth &&
              <MenuButton
                variant="ghost"
                mx={2}
                borderRadius={5}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Sign Up {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              }
              <MenuList p={4} onMouseEnter={onOpen} onMouseLeave={onClose}>
                <NavLink to="/register">
                  <Button
                    onClick={onClose}
                    _hover={{ bg: "rgb(88, 88, 88)" }}
                    bg={"black"}
                    color="white"
                    px={8}
                  >
                    Sign In | Create Account
                  </Button>
                </NavLink>

                <Box textAlign={"left"}>
                  <Text mx={3} fontWeight={600}>
                    Account
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faShoppingBag} /> Purchase
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faHeart} /> Wish List
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faShippingFast} /> Shipping Address
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faIdCard} /> Payment Method
                  </Text>
                  <br />
                  <Text mx={3} fontWeight={600}>
                    Account-Settings
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faLock} /> Password & Personal Info
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faMailBulk} /> Email & Mail Prefrence
                  </Text>
                  <br />
                  <Text mx={3} fontWeight={600}>
                    We're here to help, 24/7
                  </Text>
                  <Text
                    p={2}
                    _hover={{
                      borderRadius: "5px",
                      bg: "gray.100",
                      color: "red",
                      cursor: "pointer",
                    }}
                    mx={3}
                  >
                    <FontAwesomeIcon icon={faContactBook} /> Contact Us
                  </Text>
                </Box>
              </MenuList>
            </Menu>
            <NavLink to="/cart">
              {cartState.cartProducts.length > 0 ? <Box position={'absolute'} w="25px" textAlign={"center"} h={"25px"} borderRadius="50%" bg='red' color={'white'} m={'-15px 20px'}>{cartState.cartProducts.length}</Box>:null}
            
            <FontAwesomeIcon cursor={"pointer"} icon={faCartShopping} />
              </NavLink>
          </Flex>
        </Flex>
      </Box>
      <Container>
        <Flex
          px={8}
          py={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products?category=men"
            style={({ isActive }) => (isActive && category==='men' ? activeStyle : unactiveStyle)}
          >
            Mens
          </NavLink>
          <NavLink
            to="/products?category=women"
            style={({ isActive }) => (isActive  && category==='women' ? activeStyle : unactiveStyle)}
          >
            Womens
          </NavLink>
          <Login activeStyle={activeStyle} unactiveStyle={unactiveStyle}/>
        </Flex>
      </Container>
     
    </Box>
  );
}

export default Navbar;
