import Avatar from 'components/atoms/avatar';
import Input from 'components/atoms/input';
import Text from 'components/atoms/text';
import Container from 'layout/container';
import { useAuthContext } from 'provider/AuthProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'theme/ThemeProvider';

const Profile = () => {
	const { setAuthenticated } = useAuthContext();
	const { theme } = useTheme();
	return (
		<Container
			header={{
				isDetail: true,
				hiddenAvatar: true,
			}}>
			<View style={{}}>
				<View
					style={{
						marginBottom: 20,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Avatar
						source={{
							uri: 'https://i.pravatar.cc/300',
						}}
						rounded
						size={130}
						containerStyle={{ paddingBottom: 6 }}
					/>
					<Text style={{ color: theme.color?.grey[500] }}>Sinh viên</Text>
				</View>

				<View
					style={{
						marginBottom: 20,
					}}>
					<Input label="Email" touchable value="huyendtnps32157@fpt.edu.vn" />
					<Input label="Số điện thoại" touchable value="0932614237" />
					<Input label="Trạng thái" touchable value="HDI ( Học đi )" />
				</View>
				<View
					style={{
						marginBottom: 20,
					}}>
					<Text bold h4 style={{ marginBottom: 6 }}>
						Thông tin cá nhân
					</Text>
					<Input label="Họ và tên" touchable value="Đặng Thị Như Huyền" />
					<Input label="Mã sinh viên" touchable value="PS32157" />
					<Input label="Giới tính" touchable value="Nữ" />
					<Input label="Ngày sinh" touchable value="2000-05-08" />
					<Input
						label="Địa chỉ"
						touchable
						value="ấp tập phước ,xã long phước  huyện long thành ,tỉnh đồng nai"
					/>
				</View>
				<View
					style={{
						marginBottom: 20,
					}}>
					<Text bold h4 style={{ marginBottom: 6 }}>
						CMND/Căn cước/Hộ chiếu
					</Text>
					<Input label="Số" touchable value="075300005081" />
					<Input label="Ngày cấp" touchable value="2000-05-08" />
					<Input label="Nơi cấp" touchable value="Đồng Nai" />
					<Input label="Dân tộc" touchable value="Kinh" />
				</View>
				<View
					style={{
						marginBottom: 20,
					}}>
					<Text bold h4 style={{ marginBottom: 6 }}>
						Thông tin học tập
					</Text>
					<Input label="Mã tài khoản" touchable value="huyendtnps32157" />
					<Input label="Khoá" touchable value="18.3" />
					<Input
						label="Chuyên ngành"
						touchable
						value="Thiết kế đồ họa(Dựng phim và quảng cáo)"
					/>
					<Input label="DNgày nhập học" touchable value="2022-09-12" />
				</View>
			</View>
		</Container>
	);
};

const SectionContainer = ({
	children,
	title,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<View style={{ marginBottom: 20 }}>
			<Text bold style={{ marginBottom: 10 }}>
				{title}
			</Text>
			{children}
		</View>
	);
};

export default Profile;
