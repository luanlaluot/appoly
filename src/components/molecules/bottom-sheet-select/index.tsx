import { StyleSheet, Text, View } from 'react-native';
import React, { ForwardedRef, PropsWithChildren } from 'react';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
export type BottomSheetSelectProps = {} & RBSheetProps & PropsWithChildren;
const BottomSheetSelect = React.forwardRef(
	(props: BottomSheetSelectProps, ref: ForwardedRef<RBSheet>) => {
		const { children } = props;
		return (
			<RBSheet
				ref={ref}
				height={300}
				openDuration={250}
				customStyles={{
					container: {
						justifyContent: 'center',
						alignItems: 'center',
					},
				}}>
				{children}
			</RBSheet>
		);
	}
);

export default BottomSheetSelect;

const styles = StyleSheet.create({});
