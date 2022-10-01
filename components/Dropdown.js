import {
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Dropdown() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem className="h-8">Download</MenuItem>
        <MenuDivider className="bg-blue " />
        <MenuItem className="h-8">Create a Copy</MenuItem>
        <MenuDivider />
        <MenuItem className="h-8">Mark as Draft</MenuItem>
        <MenuDivider />
        <MenuItem className="h-8">Delete</MenuItem>
        <MenuDivider />
        <MenuItem className="h-8">Attend a Workshop</MenuItem>
        <MenuDivider />
      </MenuList>
    </Menu>
  );
}

export default Dropdown;
