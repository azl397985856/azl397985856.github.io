const themes = [
  {
    name: 'blue',
    firstTime: true,
    colorPrimary: '#5CB0DD',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#D6EBF6',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'cyan',
    firstTime: true,
    colorPrimary: '#49c5b6',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#DBEBD9',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'material-indigo-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#3F51B5',
    colorHighlight: '#303F9F',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(63, 81, 181, 0.75)'
  },
  {
    name: 'material-blue',
    colorPrimary: '#03A9F4',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#B3E5FC',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-cyan',
    colorPrimary: '#00BCD4',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#B2EBF2',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-brown',
    colorPrimary: '#795548',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#D7CCC8',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey',
    firstTime: true,
    colorPrimary: '#607D8B',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#CFD8DC',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#455A64',
    colorHighlight: '#29363c',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(69, 90, 100, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
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
