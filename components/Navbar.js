import { Container } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
function Navbar() {
  return (
    <Container className="flex justify-around flex-row flex-wrap">
      <nav>hi</nav>
      <nav>
        <SearchBar />
      </nav>
      <nav>
        <Dropdown />
      </nav>
    </Container>
  );
}

export default Navbar;
