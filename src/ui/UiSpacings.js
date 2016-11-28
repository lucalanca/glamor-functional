import React from 'react';
import {merge, style} from 'glamor'
import {
	square, spacing,
	getSpacingValue, DEFAULT_SPACINGS
} from '../materials/spacings'
import { background, text } from '../materials/colors'


const divider = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
});

const UISpacing = ({ name, spacings }) => {
	const styles = merge(
		square(name),
		background('ginetta', 'green-lake'),
		text('neutral', 'white'),
		spacing('margin', 'top', 'small')
	);
	return (
		<div {...divider}>
			<div {...styles}></div>
			<span>{name} ({ getSpacingValue(name, spacings) })</span>
		</div>
	)
}


export default ({ spacings = DEFAULT_SPACINGS }) => {
	return (
		<div>
			<h1>Spacings</h1>
			{
				Object.keys(spacings).map(spacingName =>
					<UISpacing
						key={`UiSpacings-${spacingName}`}
						name={spacingName}
						spacings={spacings} />
				)
			}
		</div>
	)
}
