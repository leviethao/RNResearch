import React, { useState, useMemo, useCallback } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'
import { PanGestureHandler, State, PinchGestureHandler } from 'react-native-gesture-handler'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		height: 100,
		width: 100,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

const Ex1 = () => {
	const [translateX, setTranslateX] = useState(new Animated.Value(0))
	const [translateY, setTranslateY] = useState(new Animated.Value(0))
	const [scale, setScale] = useState(new Animated.Value(1))

	const onGestureEventPan = Animated.event([
		{
			nativeEvent: {
				translationX: translateX,
				translationY: translateY,
			}
		}
	], { useNativeDriver: true })

	const onGestureEventPinch = Animated.event([
		{
			nativeEvent: {
				scale: scale,
			}
		}
	], { useNativeDriver: true })

	const onHandlerStateChange = useCallback((event) => {
		// if (event.nativeEvent.oldState == State.ACTIVE) {
		// 	Animated.timing(translateX, {
		// 		toValue: 100,
		// 		duration: 500,
		// 		useNativeDriver: true,
		// 	}).start()
		// }

		scale.setValue(event.nativeEvent.scale)
	}, [])
	return (
		<View style={styles.container}>
			<PanGestureHandler onGestureEvent={onGestureEventPan}>
				<Animated.View style={[styles.box, {
					transform: [{ translateX: translateX, translateY: translateY }]
				}]}>
					<Text>Pan</Text>
				</Animated.View>
			</PanGestureHandler>
			<PinchGestureHandler onGestureEvent={onGestureEventPinch} onHandlerStateChange={onHandlerStateChange} >
				<Animated.View style={[styles.box, {
					transform: [{ scale: scale }, { perspective: 200 }]
				}]}>
					<Text>Pinch</Text>
				</Animated.View>
			</PinchGestureHandler>
		</View>
	)
}

export default Ex1