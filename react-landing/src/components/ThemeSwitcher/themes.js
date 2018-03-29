const themes = [
  {
    name: 'blue',
    colorPrimary: '#5CB0DD',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#D6EBF6',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'cyan',
    colorPrimary: '#49c5b6',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#DBEBD9',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
