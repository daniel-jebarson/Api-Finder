import { Container, Badge, Text, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
function Navbar(props) {
  const { data } = props;
  return (
    <Container className="flex justify-around flex-row flex-wrap mt-3 shadow-md ">
      <nav>
        <h1 class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-green to-blue text-clip text-blue">
          Home
        </h1>
      </nav>
      <nav>
        <SearchBar />
      </nav>
      <nav>
        <Dropdown data={data} />
      </nav>
    </Container>
  );
}

export default Navbar;
