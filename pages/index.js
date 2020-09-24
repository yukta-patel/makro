import Head from "next/head";
import { Box } from "@chakra-ui/core";
import {
  Banner,
  Navigation,
  WhyChoose,
  Platform,
  Advantages,
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
    </>
  );
};

export default Home;
