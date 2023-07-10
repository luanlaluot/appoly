import React, {
	PropsWithChildren,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import Animated, { interpolate, useSharedValue } from 'react-native-reanimated';
import { View, Animated as RNAnimated } from 'react-native';
import {
	createDrawerNavigator,
	useDrawerProgress,
	useDrawerStatus,
} from '@react-navigation/drawer';
export function withFancyDrawer(Component: any) {
	function Wrapper({ children }: PropsWithChildren) {
		const animate = useDrawerProgress();
		const status = useDrawerStatus();
		// const scale = interpolate(animate, [0, 1], [1, 0.8]);
		// const translateMainCard = interpolate(animate, [0, 1], [0, 20]);
		// const translateTransparentCard = interpolate(
		// 	animate,
		// 	[0, 0.5, 1],
		// 	[0, 0, -50]
		// );\

		useEffect(() => {
			console.log('====================================');
			console.log('ủa', status);
			console.log('ủa', animate);
			console.log('====================================');
		}, [status]);
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'blue',
				}}>
				<Animated.View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						// transform: [{ scale, translateX: translateMainCard }],
					}}>
					<Animated.View
						style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'white',
							opacity: 0.3,
							borderRadius: 30,
							// transform: [
							// 	{ translateX: translateTransparentCard },
							// 	{ scale: 0.9 },
							// ],
						}}
					/>
					<View
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 30,
							backgroundColor: 'white',
							position: 'absolute',
							top: 0,
							left: 0,
							overflow: 'hidden',
						}}>
						{children}
					</View>
				</Animated.View>
			</View>
		);
	}
	return (props: any) => (
		<Wrapper>
			<Component {...props} />
		</Wrapper>
	);
}
