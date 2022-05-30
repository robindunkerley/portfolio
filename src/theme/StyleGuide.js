const spacing = 4

export const StyleGuide = {
    spacingSmall: spacing,
    spacingMedium: spacing * 2,
    spacingLarge: spacing * 3,
    paddingHorizontal: '4%',
    palette: {
      grey: '#d3d3d3',
      greyLight: '#EDEDED',
      greyDark: '#bababa',
      black: '#333333',
      offWhite: '#FAF9F6',
      primary: 	'#F9AE6A',
      secondary: "#FF6584",
      tertiary: "#38ffb3",
      blue: "#6AB5F9",
      backgroundPrimary: "#d5e5ff", // === rgba(primary, 0.1)
      background: "#f2f2f2",
      border: "#f2f2f2",
    },
    typography: {
      body: {
        fontSize: 17,
      },
      callout: {
        fontSize: 16,
      },
      caption: {
        fontSize: 11,
      },
      footnote: {
        fontSize: 13,
        color: "#999999",
      },
      headline: {
        fontSize: 17,
      },
      subhead: {
        fontSize: 15,
      },
      titleDesktop: {
        fontSize: 68,
      },
      title1: {
        fontSize: 34,
      },
      title2: {
        fontSize: 28,
      },
      title3: {
        fontSize: 22,
      },
    },
  };

  export const MobileStyles = {
    heading: {
      fontSize: StyleGuide.typography.title3.fontSize / 1.2,
      fontWeight: 300,
      color: StyleGuide.palette.black
    },
    subheading: {
      color: 'grey',
      fontWeight: 300,
      fontSize: StyleGuide.typography.subhead.fontSize / 1.2
    }
  }