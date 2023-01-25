import { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';

// import { Icon } from 'components';

import { links } from '../links';
import { SubMenuProps } from '../types';

function MobileNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <MobileNavWrapper>
      <MobileNavLinks>
        {links.map((link, index) =>
          link.url ? (
            <MobileNavLink key={`mobile-link-${index}`}>
              <Link
                href={link.url}
                passHref
              >
                {link.label}
              </Link>
            </MobileNavLink>
          ) : (
            <MobileNavLink key={`mobile-link-with-submenu-${index}`}>
              <SubmenuWrapper
                $isDropdownOpen={isDropdownOpen}
                onClick={() => setIsDropdownOpen(prev => !prev)}
              >
                {link.label}
                <IconWrapper>{/* <Icon name={isDropdownOpen ? 'arrow-up' : 'arrow-down'} /> */}</IconWrapper>
              </SubmenuWrapper>
              <DropdownList $isDropdownOpen={isDropdownOpen}>
                {link.submenus &&
                  link.submenus.map((submenu, index) => (
                    <MobileSubLink key={`mobile-submenu-link-${index}`}>
                      <Link href={submenu.url}>{submenu.label}</Link>
                    </MobileSubLink>
                  ))}
              </DropdownList>
            </MobileNavLink>
          )
        )}
      </MobileNavLinks>
    </MobileNavWrapper>
  );
}

export default MobileNav;

const MobileNavWrapper = styled.nav`
  margin-top: ${p => p.theme.spacing.$6};
`;

const MobileNavLinks = styled.ul`
  width: 100vw;
`;

const MobileNavLink = styled.li`
  width: 100%;
  padding: ${p => {
    const { $3, base } = p.theme.spacing;
    return `${$3} ${base}`;
  }};
  border-bottom: 1px solid ${p => p.theme.colors.grayDark.gray200};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
`;

const SubmenuWrapper = styled.div<SubMenuProps>`
  color: ${p => (p.$isDropdownOpen ? p.theme.colors.primary.base : p.theme.colors.grayDark.gray900)};
  cursor: pointer;
  display: flex;
`;

const IconWrapper = styled.div`
  margin-left: ${p => p.theme.spacing.base};
`;

const DropdownList = styled.ul<SubMenuProps>`
  display: ${p => (p.$isDropdownOpen ? 'block' : 'none')};
`;

const MobileSubLink = styled(MobileNavLink)`
  border-top: 1px solid ${p => p.theme.colors.grayDark.gray200};
  border-bottom: none;

  &:last-of-type {
    padding-bottom: 0;
  }
`;
