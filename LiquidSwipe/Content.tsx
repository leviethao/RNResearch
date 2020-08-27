import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const styles = StyleSheet.create({
	title1: {
		fontSize: 48,
		fontWeight: "300",
	},
	title2: {
		fontSize: 48,
		fontWeight: "600",
	},
	description: {
		opacity: 0.5,
		fontSize: 16,
	},
});

interface ContentProps {
	color: string;
	backgroundColor: string;
	source: number;
	title1: string;
	title2: string;
	width: number;
	height: number;
}

export default ({
	color,
	backgroundColor,
	source,
	title1,
	title2,
	width,
	height
}: ContentProps) => {
	return (
		<View
			style={{
				...StyleSheet.absoluteFillObject,
				padding: 32,
				backgroundColor,
				alignItems: "center",
				justifyContent: "space-around",
			}}
		>
			<Image {...{ source }} />
			<View>
				<Text style={[styles.title1, { color }]}>{title1}</Text>
				<Text style={[styles.title2, { color }]}>{title2}</Text>
				<Text style={[styles.description, { color }]}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
					pharetra pellentesque. Donec blandit purus ut arcu vulputate, at
					rutrum sem dictum. Mauris sagittis felis interdum arcu ultrices
					vestibulum.
		      </Text>
			</View>
		</View>

		// <>
		// 	<Rect x={0} y={0} {...{ width, height }} fill={backgroundColor} clipPath="url(#mask)" />
		// 	<Image x={16} y={100} width={width * 0.61} href={source} clipPath="url(#mask)" />
		// 	<Text x={16} y={height / 2} fontSize={48} fontWeight={300} fill={color} clipPath="url(#mask)">
		// 		{title1}
		// 	</Text>
		// 	<Text x={16} y={height / 2 + 48} fontSize={48} fontWeight={600} fill={color} clipPath="url(#mask)">
		// 		{title2}
		// 	</Text>
		// 	<Text y={height / 2 + 48 * 2} fontSize={16} fill={color} clipPath="url(#mask)">
		// 		<TSpan x={16} dy={0}>
		// 			Lorem ipsum dolor sit amet,
		// 		</TSpan>
		// 		<TSpan x={16} dy={16 + 2}>
		// 			consectetur adipiscing elit.
		// 		</TSpan>
		// 		<TSpan x={16} dy={32 + 4}>
		// 			Donec rutrum pharetra pellentesque.
		// 		</TSpan>
		// 	</Text>
		// </>
	);
};
