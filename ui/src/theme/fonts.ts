import Stacker from '@fonts/stacker-font/Stacker-jE03l.ttf';

export const stackerFont = {
	fontFamily: 'Stacker',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('Stacker'),
    local('Stacker-Regular'),
    url(${Stacker}) format('ttf')
  `,
	unicodeRange: 'U+0000-FFFF',
};
