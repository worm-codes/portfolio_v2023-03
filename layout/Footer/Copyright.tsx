import Image from 'next/image';

import styled from 'styled-components';

// import { useResponsive } from 'hooks';
import { devices } from 'theme';

function Copyright() {
  // const { isTablet } = useResponsive();
  return (
    <CopyrightWrapper>
      {/* <Image
        src="/images/white-logo.svg"
        width={isTablet ? 112 : 135}
        height={isTablet ? 40 : 48}
        alt="copyright logo"
      /> */}
      <CopyrightText>Copyright © 2022 </CopyrightText>
    </CopyrightWrapper>
  );
}

export default Copyright;

const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.primary.base};
  color: ${p => p.theme.colors.white};
  padding: ${p => {
    const { $5, $20 } = p.theme.spacing;
    return `${$5} ${$20}`;
  }};

  @media ${devices.tablet} {
    padding: ${p => {
      const { $5, base } = p.theme.spacing;
      return `${$5} ${base}`;
    }};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CopyrightText = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.md};
    margin-top: ${p => p.theme.spacing.$3};
  }
`;
