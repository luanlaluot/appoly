import React, { Component, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	KeyboardAvoidingView,
	Modal,
	TouchableOpacity,
	Animated,
	PanResponder,
	Platform,
	StyleProp,
	ViewStyle,
} from 'react-native';

type BottomSheetProps = {
	animationType: 'none' | 'slide' | 'fade';
	height: number;
	minClosingHeight: number;
	openDuration: number;
	closeDuration: number;
	closeOnDragDown: boolean;
	closeOnPressMask: boolean;
	dragFromTopOnly: boolean;
	closeOnPressBack: boolean;
	keyboardAvoidingViewEnabled: boolean;
	customStyles: {
		wrapper: StyleProp<ViewStyle>; // The Root of Component (You can change the `backgroundColor` or any styles)
		container: StyleProp<ViewStyle>; // The Container of Bottom Sheet
		draggableIcon: StyleProp<ViewStyle>; //The Draggable Icon (If you set closeOnDragDown to true)
	};
	onClose: (props: any) => void;
	onOpen: (props: any) => void;
} & PropsWithChildren;

class RBSheet extends Component<BottomSheetProps> {
	constructor(props: BottomSheetProps) {
		super(props);
		this.createPanResponder(props);
	}

	panResponder: any = undefined;

	state = {
		modalVisible: false,
		animatedHeight: new Animated.Value(0),
		pan: new Animated.ValueXY(),
	};

	setModalVisible(visible: boolean, props?: any) {
		const {
			height,
			minClosingHeight,
			openDuration,
			closeDuration,
			onClose,
			onOpen,
		} = this.props;
		const { animatedHeight, pan } = this.state;
		if (visible) {
			this.setState({ modalVisible: visible });
			if (typeof onOpen === 'function') onOpen(props);
			Animated.timing(animatedHeight, {
				useNativeDriver: false,
				toValue: height,
				duration: openDuration,
			}).start();
		} else {
			Animated.timing(animatedHeight, {
				useNativeDriver: false,
				toValue: minClosingHeight,
				duration: closeDuration,
			}).start(() => {
				pan.setValue({ x: 0, y: 0 });
				this.setState({
					modalVisible: visible,
					animatedHeight: new Animated.Value(0),
				});

				if (typeof onClose === 'function') onClose(props);
			});
		}
	}

	createPanResponder(props: any) {
		const { closeOnDragDown, height } = props;
		const { pan } = this.state;
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => closeOnDragDown,
			onPanResponderMove: (e, gestureState) => {
				if (gestureState.dy > 0) {
					Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(
						e,
						gestureState
					);
				}
			},
			onPanResponderRelease: (e, gestureState) => {
				if (height / 4 - gestureState.dy < 0) {
					this.setModalVisible(false);
				} else {
					Animated.spring(pan, {
						toValue: { x: 0, y: 0 },
						useNativeDriver: false,
					}).start();
				}
			},
		});
	}

	open(props?: any) {
		this.setModalVisible(true, props);
	}

	close(props?: any) {
		this.setModalVisible(false, props);
	}

	render() {
		const {
			animationType,
			closeOnDragDown,
			dragFromTopOnly,
			closeOnPressMask,
			closeOnPressBack,
			children,
			customStyles,
			keyboardAvoidingViewEnabled,
		} = this.props;
		const { animatedHeight, pan, modalVisible } = this.state;
		const panStyle = {
			transform: pan.getTranslateTransform(),
		};

		return (
			<Modal
				transparent
				animationType={animationType}
				visible={modalVisible}
				supportedOrientations={[
					'portrait',
					'portrait-upside-down',
					'landscape',
					'landscape-left',
					'landscape-right',
				]}
				onRequestClose={() => {
					if (closeOnPressBack) this.setModalVisible(false);
				}}>
				<KeyboardAvoidingView
					enabled={keyboardAvoidingViewEnabled}
					behavior="padding"
					style={[styles.wrapper, customStyles.wrapper]}>
					<TouchableOpacity
						style={styles.mask}
						activeOpacity={1}
						onPress={() => (closeOnPressMask ? this.close() : null)}
					/>
					<Animated.View
						{...(!dragFromTopOnly && this.panResponder.panHandlers)}
						style={[
							panStyle,
							styles.container,
							{ height: animatedHeight },
							customStyles.container,
						]}>
						{closeOnDragDown && (
							<View
								{...(dragFromTopOnly && this.panResponder.panHandlers)}
								style={styles.draggableContainer}>
								<View
									style={[styles.draggableIcon, customStyles.draggableIcon]}
								/>
							</View>
						)}
						{children}
					</Animated.View>
				</KeyboardAvoidingView>
			</Modal>
		);
	}
}

export default RBSheet;
import { StyleSheet } from 'react-native';
import { AnimateStyle } from 'react-native-reanimated';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#00000077',
	},
	mask: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	container: {
		backgroundColor: '#fff',
		width: '100%',
		height: 0,
		overflow: 'hidden',
	},
	draggableContainer: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	draggableIcon: {
		width: 35,
		height: 5,
		borderRadius: 5,
		margin: 10,
		backgroundColor: '#ccc',
	},
});
