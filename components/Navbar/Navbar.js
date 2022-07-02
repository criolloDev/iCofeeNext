import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'

import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Nav
} from "./Navbar.elements";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
          <Link href="/">
          <LogoContainer>
            <Image priority layout="fixed" width={50} height={45} alt="logo" 
                src="/img/logo.png"
            />
          </LogoContainer>
          </Link>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Nav open={showMobileMenu}>
          <Menu>
          <Link href="/">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Inicio
              </MenuItemLink>
            </MenuItem>
            </Link>
            <Link href="/nosotros">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Nosotros
              </MenuItemLink>
            </MenuItem>
            </Link>
            <Link href="/menu">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Menu
              </MenuItemLink>
            </MenuItem>
            </Link>
            <Link href="/galeria">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Galeria
              </MenuItemLink>
            </MenuItem>
            </Link>
            <Link href="/equipo">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Equipo
              </MenuItemLink>
            </MenuItem>
            </Link>
            <Link href="/contacto">
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  Contáctanos
              </MenuItemLink>
            </MenuItem>
            </Link>
          </Menu>
          </Nav>
        
    </Container>
  );
};

export default Navbar;
