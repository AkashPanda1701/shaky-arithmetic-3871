import { Box, Button, Container, Grid, Img,  Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { carousel_1, carousel_2, carousel_3, data } from '../components/Homedata'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/product/action";

function Home() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  const ProductState = useSelector(state => state.product)
  // console.log('ProductState: ', ProductState);
  const [index, setIndex] = React.useState(1);
  const Image = [
    "https://n.nordstrommedia.com/id/3aa68b69-013f-4f60-bbbc-f45b85722335.jpeg",
    "https://n.nordstrommedia.com/id/ce9d6820-42f8-4d0c-b45c-0e440e5b6252.jpeg",
  ];

  React.useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
      if (index === Image.length - 1) {
        setIndex(0);
      }
    }, 4000);

    
    return () => clearInterval(interval);
  }, [index, Image.length]);
  return (
    <>
      <Container>
        <Text fontWeight={700} textAlign={"center"} my={2}>
          Shop what you love—faster and easier.
        </Text>
        {
          !state.isAuth &&
        <Link to='/register'>
        <Button
          _hover={{ color: "white", bg: "black" }}
          colorScheme="black"
          px={{ base: 12, md: 28, lg: 36 }}
          m="auto"
          display={"block"}
          variant="outline"
        >
          Sign In or Create an Account
        </Button>
        </Link>
        }
      
      </Container>
      <Grid
        h={{ base: "100px", md: "150px", lg: "200px" }}
        alignItems="center"
        bgImage={
          "https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg"
        }
        bgSize="contain"
        bgRepeat={"no-repeat"}
        my={8}
      >
        <Box w={"40%"} m="auto" textAlign={"center"}>
          <Text
            fontWeight={700}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            my={2}
          >
            Get a $40 Bonus Note!
          </Text>
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            display={{ base: "none", md: "inherit" }}
          >
            An exclusive offer for new Nordstrom credit cardmembers.
            Restrictions apply.
          </Text>
        </Box>
      </Grid>
      <Carousel carousel={carousel_1} />
      <Box
        w="95%"
        m="30px auto"
        borderBottom={"2px solid black"}
        borderTop={"2px solid black"}
      >
        <Text fontWeight={700} textAlign={"center"} my={2}>
          THE THREAD
        </Text>
        <Text textAlign={"center"} my={2}>
          Introducing your new go-to destination for all things fashion, beauty
          and lifestyle at Nordstrom, from how-tos and style inspiration to
          exclusive interviews and more.
        </Text>
        <Grid templateColumns={"repeat(3,1fr)"} my={8}>
          {data.map((item,index) => {
            return (
              <Box key={index}>
                <Img src={item.img} alt={item.title} />
                <Text
                  fontWeight={"bold"}
                  my={2}
                  color="gray.600"
                  fontSize={{ base: "16px", md: "20px" }}
                >
                  {item.title}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Box>
      <Box bg={'blue.200'} p={'4'}>
      <Grid w={{base:'90%',md:'80%'}}   gap={6} m={'20px auto'} templateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}}>
        {
          ProductState.products.filter((pro)=>pro.category==='men').slice(0,4).map((item,index) => {
            return  <Box
            key={index}
            bg={"white"}
            shadow={"md"}
            p={4}
            borderRadius={"md"}
          >
            <Img
              cursor={"pointer"}
              src={item.images[0]}
              w={"100%"}
              h={"350px"}
            />
         <Box  mt={"-40px"}>
            <Link to={`/products?category=men`}>
                    <Button
                      
                      w={'100%'}
                      _hover={{ bg: "black" }}
                      bg="rgb(80,80,80)"
                      color={"white"}
                      >
                      Explore More
                    </Button>
                    </Link>
                    </Box>

<Text fontSize={{ md: "20" }} fontWeight={700} mt={2}>
              {item.tagline.slice(0, 15)}...
            </Text>
            <Text fontSize={{ md: "20" }} fontWeight={500} mt={2}>
              INR-{item.price}
            </Text>
          </Box>
          })
        }
      </Grid>
      </Box>
      <Box w={'95%'} m={'40px auto'} borderBottom={"2px solid black"}/>
      <Text fontWeight={700} fontSize={"22px"} textAlign={"center"} my={2}>
        GET INSPIRED
      </Text>
      <Carousel carousel={carousel_2} />
      <Carousel carousel={carousel_3} />

      <Box
        w="95%"
        py={10}
        m="30px auto"
        borderBottom={"2px solid black"}
        borderTop={"2px solid black"}
      >
        <Img src={Image[index]} />
        {index === 1 ? (
          <Box position={'relative'} w={{base:'200px',md:'300px'}} top={{base:'-100px',md:'-150px',lg:'-160px',xl:'-250px'}} left={{base:'40px',md:'80px',lg:'120px',xl:'250px'}}>
            <Text fontWeight={700} fontSize={{base:'14px'}} textAlign={"center"}>
              What's Your Personal Style?
            </Text>
            <Text fontSize={{base:'14px',lg:'18px'}} textAlign={"center"}>
              Take a quick quiz to discover your style, then request curated
              looks from our stylists
            </Text>
          </Box>
        ) : (
          <Box position={'relative'} w={{base:'200px',md:'300px'}} top={{base:'-100px',md:'-150px',lg:'-160px',xl:'-250px'}} left={{base:'40px',md:'80px',lg:'120px',xl:'250px'}}>
            <Text fontWeight={700} fontSize={{base:'14px'}} textAlign={"center"}>
              Free Style Help
            </Text>
            <Text fontSize={{base:'14px',lg:'18px'}} textAlign={"center"}>
              Our stylists can get you back to business with curated outfits
              that'll help you look and feel amazing
            </Text>
          </Box>
        )}
      </Box>
      <Box bg={'pink.200'} p={'4'}>
      <Grid w='90%' gap={6} m={'20px auto'} templateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}}>
        {
           ProductState.products.filter((pro)=>pro.category==='women').slice(4,8).map((item,index) => {
            return  <Box
            key={index}
            bg={"white"}
            shadow={"md"}
            p={4}
            borderRadius={"md"}
          >
            <Img
              cursor={"pointer"}
              src={item.images[0]}
              w={"100%"}
              h={"350px"}
            />
         <Box  mt={"-40px"}>
            <Link to={`/products?category=women`}>
                    <Button
                      
                      w={'100%'}
                      _hover={{ bg: "black" }}
                      bg="rgb(80,80,80)"
                      color={"white"}
                      >
                      Explore More
                    </Button>
                    </Link>
                    </Box>

<Text fontSize={{ md: "20" }} fontWeight={700} mt={2}>
              {item.tagline.slice(0, 15)}...
            </Text>
            <Text fontSize={{ md: "20" }} fontWeight={500} mt={2}>
              INR-{item.price}
            </Text>
          </Box>
          })
        }
      </Grid>
      </Box>
      <Footer/>
    </>
  );
}

export default Home;
