import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#495E57">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="#fff"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={200}
        >
          <p>Kevin • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;