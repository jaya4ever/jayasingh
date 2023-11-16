import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Icon,
  Text,
  useDisclosure,
  Stack,
  useColorMode,
  useColorModeValue as mode,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiWorld } from "react-icons/gi";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { linkName: "About", path: "/about" },
  { linkName: "Contact", path: "/contact" },
];

const blogLinks = [
  { linkName: "All Blogs", catogory: "all" },
  { linkName: "Latest Blog", catogory: "latest" },
  { linkName: "Europe", catogory: "europe" },
  { linkName: "Asia", catogory: "asia" },
  { linkName: "Africa", catogory: "africa" },
  { linkName: "America", catogory: "america" },
  { linkName: "Oceania", catogory: "oceania" },
];

const NavLink = ({ children, path }) => (
  <Link
    as={ReactLink}
    to={path}
    px="2"
    py="2"
    fontweight="semibold"
    _hover={{ textDecoration: "none", bg: mode("blue.100", "blue.800") }}
  ></Link>
);
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={mode("blue.200", "blue.900")} px={4}>
      <Flex h="16" alignItems={"center"} justifyContent="space-between">
        <IconButton
          bg={mode("blue.200", "blue.900")}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
