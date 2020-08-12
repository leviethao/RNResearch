import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	Animated
} from 'react-native';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			scrollY: new Animated.Value(0)
		}
	}

	render () {
		const headerHeight = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
			extrapolate: 'clamp'
		});

		const profileImageHeight = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
			extrapolate: 'clamp'
		});

		return (
			<View style={{flex: 1}}>
				<Animated.View style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					backgroundColor: 'lightskyblue',
					height: headerHeight
				}}></Animated.View>

				<Animated.ScrollView
					style={{flex: 1}}
					onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}], {useNativeDriver: false})}
					scrollEventThrottle={16}
				>
					<Animated.View style={{
						height: profileImageHeight,
						width: profileImageHeight,
						borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
						borderColor: 'white',
						borderWidth: 3,
						overflow: 'hidden',
						marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
						marginLeft: 10
					}}>
						<Image
							source={require('./assets/me.jpg')}
							style={{flex: 1, width: null, height: null}}
						>
						</Image>
					</Animated.View>
					<View><Text>HIHI</Text></View>
					<View style={{height: 1000}}></View>
				</Animated.ScrollView>
			</View>
		);
	}
}

export default App;