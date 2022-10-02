import {
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  IconButton,
} from "@chakra-ui/react";
import Router from "next/router";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

function Dropdown(props) {
  const { data } = props;
  // console.log(data);

  return (
    <Menu className="bg-gray">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        size="lg"
        className="h-10"
      />
      <MenuList className="bg-gray-light pl-8 pr-5">
        {data.map((value, index) => {
          return (
            <MenuItem
              onClick={() => {
                Router.push(`/${value}`);
              }}
              key={index}
              className="h-8"
            >
              {value}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Dropdown;
