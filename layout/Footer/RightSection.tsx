import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

// import { Icon } from 'components';
// import { useResponsive } from 'hooks';
import { devices } from 'theme';

import { socialList } from './footerData';

function RightSection() {
  // const { isTablet } = useResponsive();
  return (
    <RightSectionWrapper>
      {/* <Image
        src="/images/footer-logo.svg"
        alt="footer logo"
        width={isTablet ? 345 : 340}
        height={120}
      /> */}
      <StyledLink href="https://turkiyefinans.com.tr">
        {/* <Icon name="external-link" /> */}
        www.turkiyefinans.com.tr
      </StyledLink>
      <SocialList>
        {socialList.map((social, index) => (
          <Social key={`social-${index}`}>
            <Link
              href={social.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              {social.logo}
            </Link>
          </Social>
        ))}
      </SocialList>
    </RightSectionWrapper>
  );
}

export default RightSection;

const RightSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${p => p.theme.spacing.$20};

  @media ${devices.desktop} {
    margin-right: ${p => p.theme.spacing.base};
  }

  & > img {
    @media ${devices.tablet} {
      position: absolute;
      left: calc(50% - (345px / 2));
      top: 0;
    }
  }

  @media ${devices.tablet} {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.primary.base};
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.spacing.base};
  margin-left: ${p => p.theme.spacing.$24};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  font-weight: ${p => p.theme.fontWeights.light};
  svg {
    margin-right: ${p => p.theme.spacing.$3};
  }

  @media ${devices.tablet} {
    margin-left: ${p => p.theme.spacing.base};
    margin-bottom: ${p => p.theme.spacing.base};
  }
`;

const SocialList = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing.base};
  margin-top: ${p => p.theme.spacing.$8};
  margin-left: ${p => p.theme.spacing.base};

  @media ${devices.tablet} {
    margin: 0;
    padding-bottom: ${p => p.theme.spacing.$8};
    padding-left: ${p => p.theme.spacing.base};
  }
`;

const Social = styled.div`
  padding: ${p => p.theme.spacing.base};
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};
  cursor: pointer;
`;
