import Text from 'components/atoms/text';
import Container from 'layout/container';
import { useAuthContext } from 'provider/AuthProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'theme/ThemeProvider';

const NewsDetail = () => {
	const { setAuthenticated } = useAuthContext();
	const { theme } = useTheme();
	return (
		<Container
			header={{
				title: 'Hoạt động',
				isDetail: true,
			}}>
			<View>
				<View
					style={{
						marginBottom: 10,
					}}>
					<Text h4 bold>
						THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023
					</Text>
				</View>

				<View
					style={{
						marginBottom: 10,
					}}>
					<Text
						style={{
							fontStyle: 'italic',
							color: theme?.color?.grey[500],
						}}>
						Người đăng: nhuntq20
					</Text>
					<Text
						style={{
							fontStyle: 'italic',
							color: theme?.color?.grey[500],
						}}>
						Thời gian: 13:13:33 - 30/06/2023
					</Text>
					<Text
						style={{
							fontStyle: 'italic',
							color: theme?.color?.grey[500],
						}}>
						Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023
					</Text>
				</View>
				<View>
					<Text>
						Phòng Đào tạo thông báo đến các bạn sinh viên có tên trong danh sách
						dự kiến làm Dự án tốt nghiệp học kỳ Fall 2023 về việc đăng ký nhóm
						và đề tài như sau: Sinh viên thành lập nhóm và cử TRƯỞNG NHÓM đăng
						ký cho cả nhóm. Đối với sinh viên không tìm được nhóm có thể tạo
						nhóm cá nhân ở chế độ công khai để các sinh viên chưa có nhóm còn
						lại tham gia nhóm hoặc Bộ môn sẽ phân nhóm ngẫu nhiên. Sinh viên
						đăng nhập mail FPT và truy cập link dangky.poly.edu.vn. Hướng dẫn sử
						dụng trang web đăng ký : tại đây Danh sách sinh viên (bao gồm đủ
						điều kiện, chưa đủ điều kiện và chờ kết quả kỳ Summer 2023) : DSSV
						Dự án TN Fall 2023 Số lượng thành viên trong nhóm (Lưu ý: Sau 12
						tiếng từ lúc đăng ký, nếu số lượng thành viên nhóm không đúng quy
						định thì sẽ bị hủy nhóm)
					</Text>
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

export default NewsDetail;

const styles = StyleSheet.create({});
