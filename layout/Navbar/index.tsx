import Image from 'next/image';

import styled from 'styled-components';

import { navLink } from 'constant';

function Navbar() {
  return (
    <NavbarWrapper>
      <Container>
        <Image
          width={80}
          height={50}
          alt="logo"
          src="/images/logo.png"
        />

        <LinkGroup>
          {navLink.map(link => (
            <LinkItem key={link}>{link}</LinkItem>
          ))}
        </LinkGroup>
      </Container>
    </NavbarWrapper>
  );
}

export default Navbar;
const Container = styled.div`
  width: 1400px;
  height: 30px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 100%;
  list-style: none;
  gap: 50px;
`;

const LinkItem = styled.li``;
