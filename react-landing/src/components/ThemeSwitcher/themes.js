const themes = [
  {
    name: 'blue',
    colorPrimary: '#5CB0DD',
    colorAlternate: '#F4F4F6',
    colorHighlight: '#D6EBF6',
    textPrimary: '#202121',
    navAlpha: 'rgba(244, 244, 246, 0.75)'
  },
  {
    name: 'cyan',
    colorPrimary: '#49c5b6',
    colorAlternate: '#F4F7F6',
    colorHighlight: '#DBEBD9',
    textPrimary: '#202121',
    navAlpha: 'rgba(244, 247, 246, 0.75)'
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
