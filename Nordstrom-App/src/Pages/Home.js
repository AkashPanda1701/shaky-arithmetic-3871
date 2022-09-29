import { Box, Button, Container, Grid, Img,  Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const carousel_1 = [
  {
    id: 1,
    img: "https://i.ibb.co/myr1jMW/image.png",
    title: "Welcome, Parachute",
    desc: "This modern home goods brand is here to stay with a new, Nordstrom-exclusive color: Slate Blue.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/CMwLTYP/image.png",
    title: "Bright Spot",
    desc: "Mood-boosting hues and styles that bring joy to your wardrobe.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/kxLr6V5/image.png",
    title: "Fall for ASOS",
    desc: `The new collection is here—and hot! Don't wait to get yours.`,
  },
];

const carousel_2 = [
  {
    id: 1,
    img: "https://n.nordstrommedia.com/id/d3b10906-7d01-47f3-adc2-2098e4ac6600.jpeg",
  },
  {
    id: 2,
    img: "https://n.nordstrommedia.com/id/72f8e166-8da0-4103-8b13-2629617b5ba9.jpeg",
  },
];
const carousel_3 = [
  {
    id: 1,
    img: "https://n.nordstrommedia.com/id/f357e310-4980-4e26-988a-cd792fece56b.jpeg?",
  },
  {
    id: 2,
    img: "https://n.nordstrommedia.com/id/69fdafac-5f3a-4c62-8e4c-57d911fe24c5.jpeg",
  },
];

const data = [
  {
    id: 1,
    img: "https://n.nordstrommedia.com/id/9dcfe884-91ac-479d-b6b2-a30e9c416d43.jpeg?h=516&w=536",
    title: "Closer to... Paige Adams-Geller",
  },
  {
    id: 2,
    img: "https://n.nordstrommedia.com/id/19066cc4-3b0e-4f9b-bebe-cdb6635308e3.jpeg?h=516&w=536",
    title: "Our Hispanic & Latinx Employees on Food, Family & Culture",
  },
  {
    id: 3,
    img: "https://n.nordstrommedia.com/id/d4ed27e5-36a0-4357-a30a-36734ef7844c.jpeg?h=516&w=536",
    title: `Lynn Yaeger's Fine Jewelry Edit`,
  },
];

function Home() {
  const [index, setIndex] = React.useState(1);
  const Image = [
    "https://n.nordstrommedia.com/id/3aa68b69-013f-4f60-bbbc-f45b85722335.jpeg",
    "https://n.nordstrommedia.com/id/ce9d6820-42f8-4d0c-b45c-0e440e5b6252.jpeg",
  ];
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
          {data.map((item) => {
            return (
              <Box key={item.id}>
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
      <Footer/>
    </>
  );
}

export default Home;
