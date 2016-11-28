import React from 'react';
import {merge, style} from 'glamor'
import chroma from 'chroma-js'
import {
	background,
	getColorValue, DEFAULT_PALETTES
} from '../materials/colors';




console.log('DEFAULT_PALETTES', DEFAULT_PALETTES);

const DEFAULT_TEXT_COLOR = 'white';
const ALTERNATE_TEXT_COLOR = 'black';
const MINIMUM_CONTRAST = 4.5;

const UiColor = ({ paletteName, colorName }) => {
	const contrastWithDefaultColor = chroma.contrast(getColorValue(paletteName, colorName), DEFAULT_TEXT_COLOR);
	const textColorName = contrastWithDefaultColor > MINIMUM_CONTRAST
		? DEFAULT_TEXT_COLOR
		: ALTERNATE_TEXT_COLOR;
	const styles = merge(
		background(paletteName, colorName),
		style({ color: textColorName })
	);
	console.log(colorName, contrastWithDefaultColor, textColorName);
	return (
		<div {...styles}>
			{ colorName }
		</div>
	)

}

export default ({ palettes = DEFAULT_PALETTES }) => {
	return (
		<div>
			<h1>Palettes</h1>
			{
				Object.keys(palettes).map(paletteName =>
					<div key={`UiColors-${paletteName}`}>
						<h2>{paletteName} Palette</h2>
						{
							Object.keys(palettes[paletteName]).map(colorName =>
								<UiColor
									key={`UIColors-${paletteName}-${colorName}`}
									paletteName={paletteName}
									colorName={colorName} />
							)
						}
					</div>
				)
			}
		</div>
	)
}
