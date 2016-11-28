import {style} from 'glamor';

export const DEFAULT_PALETTES = {
	neutral: {
		white  : 'white',
		gray10 : '#e6e6e6',
		gray20 : '#cccccc',
		gray30 : '#b3b3b3',
		gray40 : '#999999',
		gray50 : '#808080',
		gray60 : '#666666',
		gray70 : '#4d4d4d',
		gray80 : '#333333',
		gray90 : '#1a1a1a',
		black  : 'black',
	},
	ginetta: {
		'pink'        : '#FB9FB1',
	    'salmon'      : '#F0A88B',
	    'orange'      : '#e6ad7a',
	    'green-olive' : '#A4C46A',
	    'green'       : '#73CB88',
	    'green-lake'  : '#55CE9B',
	    'teal'        : '#34CFAD',
	    'cyan'        : '#0FCDD0',
	    'blue'        : '#5EC5EB',
	    'blue-sky'    : '#80bff4',
	    'purple'      : '#9EB8F8',
	    'violet'      : '#D0A9F6',
	}
};

export const getColorValue = (paletteName, color, palette = DEFAULT_PALETTES) =>
	palette[paletteName][color];

export const text = (paletteName, color, palette = DEFAULT_PALETTES) =>
	style({color: palette[paletteName][color]});
export const background = (paletteName, color, palette = DEFAULT_PALETTES) =>
	style({backgroundColor: palette[paletteName][color]});
export const fill = (paletteName, color, palette = DEFAULT_PALETTES) =>
	style({fill: palette[paletteName][color]});
export const stroke = (paletteName, color, palette = DEFAULT_PALETTES) =>
	style({stroke: palette[paletteName][color]});
