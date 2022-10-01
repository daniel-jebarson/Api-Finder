import React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Container,
  InputLeftElement,
} from "@chakra-ui/react";

import { h } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";

function SearchBar() {
  return (
    <Container color="white" className="mb-3">
      <InputGroup>
        <Input
          className="p-2 w-5xl bg-gray-light "
          type="text"
          placeholder="Search Here"
          color="black"
        />
        <InputRightElement>
          <IconButton
            className="h-10  bg-blue  w-10 "
            size="md"
            colorScheme="blackAlpha"
            aria-label="Get request"
            icon={<Search2Icon />}
          />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}

export default SearchBar;
