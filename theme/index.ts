//example theme
const theme = {
  colors: {
    grayDark: {
      gray900: '#101828',
      gray800: '#1D2939',
      gray700: '#344054',
      gray600: '#475467',
      gray500: '#667085',
      gray400: '#9CA4B5',
      gray300: '#D3D7DF',
      gray200: '#EDEFF2',
      gray100: '#F6F7F9',
      gray0: '#FFFFFF',
    },
    primary: {
      dark: '#008F82',
      base: '#00C4B3',
      light: '#B8FFF9',
      lighter: '#EBFFFD',
    },
    secondary: {
      dark: '#87A527',
      base: '#ABD037',
      light: '#D2E694',
      lighter: '#F5F9E6',
    },
    white: '#ffffff',
    modelCardBorder: '#66DCD1',
    applicationCardBorder: '#CDE387',
    adminBorder: '#0505050f',
    adminBorderLighter: '#d9d9d9',
  },
  fonts: { text: 'GT Eesti Text', title: 'GT Eesti Display', normal: 'sans-serif' },

  fontSizes: {
    /** 12px */
    xs: '0.75rem',
    /** 14px */
    sm: '0.875rem',
    /** 16px */
    md: '1rem',
    /** 18px */
    lg: '1.125rem',
    /** 24px */
    xl: '1.5rem',
    /** 32px */
    $2xl: '2rem',
    /** 40px */
    $2md: '2.5rem',
    /** 48px */
    $3xl: '3rem',
    /** 56px */
    $3md: '3.5rem',
    /** 64px */
    $4xl: '4rem',
    /** 80px */
    hero: '5rem',
  },

  lineHeights: {
    /** 16px */
    sm: '1rem',
    /** 24px */
    md: '1.5rem',
    /** 32px */
    lg: '2rem',
    /** 40px */
    xl: '2.5rem',
    /** 48px */
    $2xl: '3rem',
    /** 56px */
    $2md: '3.5rem',
    /** 64px */
    $3xl: '4rem',
    /** 72px */
    $4xl: '4.5rem',
    /** 88px */
    hero: '5.5rem',
  },

  spacing: {
    /** 2px */
    $0md: '0.125rem',
    /** 4px */
    $1: '0.25rem',
    /** 8px */
    $2: '0.5rem',
    /** 12px */
    $3: '0.75rem',
    /** 14px */
    $3md: '0.875rem',
    /** 16px */
    base: '1rem',
    /** 20px */
    $5: '1.25rem',
    /** 24px */
    $6: '1.5rem',
    /** 28px */
    $7: '1.75rem',
    /** 32px */
    $8: '2rem',
    /** 36px */
    $9: '2.25rem',
    /** 40px */
    $10: '2.5rem',
    /** 44px */
    $11: '2.75rem',
    /** 48px */
    $12: '3rem',
    /** 52px */
    $13: '3.25rem',
    /** 56px */
    $14: '3.5rem',
    /** 64px */
    $16: '4rem',
    /** 80px */
    $20: '5rem',
    /** 96px */
    $24: '6rem',
  },

  radius: {
    /** 2px */
    sm: '0.125rem',
    /** 4px */
    rounded: '0.25rem',
    /** 6px */
    md: '0.375rem',
    /** 8px */
    lg: '0.5rem',
    /** 12px */
    xl: '0.75rem',
    /** 16px */
    $2xl: '1rem',
    /** 24px */
    $3xl: '1.5rem',
    /** 36px */
    $4xl: '2.25rem',
    circle: '50%',
    full: '9999px',
  },

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  shadows: {
    navbarDropdown: 'box-shadow: 0px 16px 88px rgba(0, 0, 0, 0.04)',
    newsShadow: 'box-shadow: 0px 24px 132px rgba(0, 0, 0, 0.04);',
    awardsShadow: 'box-shadow: 0px 48px 96px rgba(0, 0, 0, 0.04);',
    loginShadow: 'box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.04);',
  },

  utils: {
    /**
     * Bir paragrafta belirli bir satırdan sonraki içeriği `...` şeklinde kesmek için kullanılır.
     *
     * @param clampCount Kaç satır gösterileceğini ifade eder
     */
    lineClamp: (value: number) => {
      return `
        display: -webkit-box;
        line-clamp: ${value};
        -webkit-line-clamp: ${value};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `;
    },
  },
};

export const devices = {
  /**(max-width: 1440px) */
  widescreen: '(max-width: 1440px)',
  /**max-width: 1280px */
  desktop: '(max-width: 1280px)',
  /**max-width: 1024px */
  laptop: '(max-width: 1024px)',
  /**max-width: 768px */
  tablet: '(max-width: 768px)',
  /**max-width: 640px */
  phone: '(max-width: 640px)',
  /**max-width: 425px */
  mini: '(max-width: 425px)',
};

export const sizes = {
  widescreen: 1440,
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 600,
  mini: 350,
};

export default theme;
