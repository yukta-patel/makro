import Head from "next/head";
import { Box } from "@chakra-ui/core";
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
      <Navigation />
      <Box maxWidth={1200} width="90%" m="0 auto">
        <Banner />
        <WhyChoose />
      </Box>
      <Platform />
      <Advantages />
      <Introduction />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
