const themes = [
  {
    name: 'blue',
    firstTime: true,
    colorPrimary: '#4ea9da',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#daedf7',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'cyan',
    firstTime: true,
    colorPrimary: '#3dc0b0',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#d7f2ef',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'blue-alt',
    colorPrimary: '#FAFAFA',
    colorAlternate: '#4ea9da',
    colorHighlight: '#2a93cb',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(78, 169, 218, 0.75)'
  },
  {
    name: 'cyan-alt',
    colorPrimary: '#FAFAFA',
    colorAlternate: '#3dc0b0',
    colorHighlight: '#35a698',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(61, 192, 176, 0.75)'
  },
  {
    name: 'green',
    colorPrimary: '#5BA150',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#e1efdf',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'brown',
    colorPrimary: '#A26836',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f5ebe2',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'orange',
    colorPrimary: '#e17421',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f9e4d5',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'crimson-red',
    colorPrimary: '#e64f52',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#fbe4e4',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'red',
    colorPrimary: '#af3d4e',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f6e4e7',
    textPrimary: '#202121',
    navAlpha: 'rgba(250, 250, 250, 0.75)'
  },
  {
    name: 'red-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#89303d',
    colorHighlight: '#63232c',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(137, 48, 61, 0.75)'
  },
  {
    name: 'indigo-alt',
    colorPrimary: '#FAFAFA',
    colorAlternate: '#303F9F',
    colorHighlight: '#242f78',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(48, 63, 159, 0.75)'
  },
  {
    name: 'grey-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#485564',
    colorHighlight: '#333c46',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(72, 85, 100, 0.75)'
  },
  {
    name: 'material-cyan',
    colorPrimary: '#00BCD4',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#d4faff',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-brown',
    colorPrimary: '#845c4e',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#eee6e3',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey',
    firstTime: true,
    colorPrimary: '#607D8B',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#dfe6e9',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.75)'
  },
  {
    name: 'material-grey-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#455A64',
    colorHighlight: '#374850',
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
