import React from "react";
import {Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="#495E57">
      <div>
        <Flex
          margin="0 auto"
          px={12}
          color="#fff"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={300}
        >
          <SimpleGrid columns={3} spacing={10}>
            <Box bg='#495E57' height='50px'><h1>Little Lemon</h1></Box>
            <Box bg='#495E57' height='50px'></Box>
            <Box bg='#495E57' height='50px'><Image src="./icons_assets/2/resturantchefB.png" alt="chef" width="50px"></Image></Box>
            <Box bg='#495E57' height='50px'><h3>Chicago</h3></Box>
            <Box bg='#495E57' height='50px'></Box>
            <Box bg='#495E57' height='50px'></Box>
          </SimpleGrid>
        </Flex>
      </div>
    </Box>
  );
};
export default Hero;