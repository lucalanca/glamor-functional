import {style} from 'glamor';

export const DEFAULT_SPACINGS = {
	'tiny'     : '1px',
	'xx-small' : '2px',
	'x-small'  : '4px',
	'small'    : '8px',
	'medium'   : '16px',
	'large'    : '24px',
	'x-large'  : '32px',
	'xx-large' : '48px',
	'huge'     : '96px',
};

export const getSpacingValue = (name, spacings = DEFAULT_SPACINGS) =>
	spacings[name];

export const spacing = (type = 'margin', direction = 'top', name, spacings = DEFAULT_SPACINGS) => {
	if (direction === 'vertical' || direction === 'v') {
		return style({
			[`${type}-top`]: getSpacingValue(name, spacings),
			[`${type}-bottom`]: getSpacingValue(name, spacings),
		});
	}

	if (direction === 'horizontal' || direction === 'h') {
		return style({
			[`${type}-left`]: getSpacingValue(name, spacings),
			[`${type}-right`]: getSpacingValue(name, spacings),
		});
	}

	return style({[`${type}-${direction}`]: spacings[name]});
}

export const square = (size, spacings = DEFAULT_SPACINGS) =>
	style({
		width: getSpacingValue(size, spacings),
		height: getSpacingValue(size, spacings)
	});

export const rectangle = (w, h, spacings = DEFAULT_SPACINGS) =>
	style({
		width: getSpacingValue(w, spacings),
		height: getSpacingValue(h, spacings),
	})
