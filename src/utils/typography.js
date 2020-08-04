import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Space Mono',
      styles: ['400', '700', '400i', '700i'],
    },
    {
      name: 'Barlow',
      styles: ['400', '500', '700'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono', 'monospace'],
  bodyFontFamily: ['Space Mono', 'monospace'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.h1': {
      ...adjustFontSizeTo('36px'),
    },
    '.h2': {
      ...adjustFontSizeTo('30px'),
    },
    '.h3': {
      ...adjustFontSizeTo('26px'),
    },
    '.h4': {
      ...adjustFontSizeTo('20px'),
    },
    '.body-1': {
      ...adjustFontSizeTo('26px'),
    },
    '.body-2': {
      ...adjustFontSizeTo('24px'),
    },
    '.body-3': {
      ...adjustFontSizeTo('22px'),
    },
    '.body-4': {
      ...adjustFontSizeTo('20px'),
    },
    '.body-5': {
      ...adjustFontSizeTo('18px'),
    },
    '.cta': {
      ...adjustFontSizeTo('22px'),
    },
    '@media only screen and (max-width:992px)': {
      '.h1': {
        ...adjustFontSizeTo('24px'),
      },
      '.h2': {
        ...adjustFontSizeTo('20px'),
      },
      '.h3': {
        ...adjustFontSizeTo('17px'),
      },
      '.h4': {
        ...adjustFontSizeTo('14px'),
      },
      '.body-1': {
        ...adjustFontSizeTo('17px'),
      },
      '.body-2': {
        ...adjustFontSizeTo('16px'),
      },
      '.body-3': {
        ...adjustFontSizeTo('14px'),
      },
      '.body-4': {
        ...adjustFontSizeTo('13px'),
      },
      '.body-5': {
        ...adjustFontSizeTo('12px'),
      },
      '.cta': {
        ...adjustFontSizeTo('14px'),
      },
    },
    '.text-18px': {
      ...adjustFontSizeTo('18px'),
    },
    '.text-20px': {
      ...adjustFontSizeTo('20px'),
    },
    '.text-22px': {
      ...adjustFontSizeTo('22px'),
    },
    '.text-23px': {
      ...adjustFontSizeTo('23px'),
    },
    '.text-24px': {
      ...adjustFontSizeTo('24px'),
    },
    '.text-26px': {
      ...adjustFontSizeTo('26px'),
    },
    '.text-28px': {
      ...adjustFontSizeTo('28px'),
    },
    '.text-30px': {
      ...adjustFontSizeTo('30px'),
    },
    '.text-32px': {
      ...adjustFontSizeTo('32px'),
    },
    '.text-33px': {
      ...adjustFontSizeTo('33px'),
    },
    '.text-34px': {
      ...adjustFontSizeTo('34px'),
    },
    '.text-36px': {
      ...adjustFontSizeTo('36px'),
    },
    '.text-38px': {
      ...adjustFontSizeTo('38px'),
    },
    '.text-40px': {
      ...adjustFontSizeTo('40px'),
    },
  }),
})

export default typography
