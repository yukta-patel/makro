import Head from "next/head";
import { Box, Flex } from "@chakra-ui/core";
import {
  Banner,
  Navigation,
  WhyChoose,
  Platform,
  Advantages,
  Introduction,
  Slider,
  Footer,
} from "./components/Home";

const Home = () => {
  return (
    <>
      <Box maxWidth={1200} width="90%" m="0 auto">
        <Navigation />
        <Banner />
        <WhyChoose />
      </Box>
      <Platform />
      <Advantages />
      <Introduction />
      <Slider />
      <Footer />

      {/* <Box
      mb="10rem"
      height="300px"
      background="url(https://images.unsplash.com/photo-1581362508717-f542c1ecf295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80) center/cover"
      webkitMask="radial-gradient(var(--r1,100%) var(--r2,50%) at top   ,white 79.5%,transparent 80%) top left,
      radial-gradient(var(--r1,100%) var(--r2,50%) at bottom,transparent 79.5%,white 80%) top center,
      radial-gradient(var(--r1,100%) var(--r2,50%) at top   ,white 79.5%,transparent 80%) top right"
      mask="radial-gradient(var(--r1,100%) var(--r2,50%) at top   ,white 79.5%,transparent 80%) top left,
      radial-gradient(var(--r1,100%) var(--r2,50%) at bottom,transparent 79.5%,white 80%) top center,
      radial-gradient(var(--r1,100%) var(--r2,50%) at top   ,white 79.5%,transparent 80%) top right"
      webkitMaskSize="33.4% 150%"
      webkitMaskRepeat="no-repeat"
      maskSize="33.4% 150%"
      maskRepeat="no-repeat"
      position="relative"
      background="#09F"
      color="#FFF"
      >
        <Text>Yukta</Text>
        <SVGAElement xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <Path2D fill="#FFF" d="…"></Path2D>
        </SVGAElement>
        yukta
      </Box> */}
    </>
  );
};

export default Home;
