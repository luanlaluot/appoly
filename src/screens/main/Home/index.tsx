import Text from 'components/atoms/text';
import Container from 'layout/container';
import { useAuthContext } from 'provider/AuthProvider';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import DayOffSection from './components/dayoff';
import TodaySection from './components/today';
import axios from 'axios';
import Cheerio from 'cheerio';

const getHtml = async (url: string) => {
	const result = await fetch('https://ap.poly.edu.vn/sinh-vien', {
		'headers': {
			'accept':
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'max-age=0',
			'sec-fetch-dest': 'document',
			'sec-fetch-mode': 'navigate',
			'sec-fetch-site': 'none',
			'sec-fetch-user': '?1',
			'upgrade-insecure-requests': '1',
			'cookie':
				'_gid=GA1.3.30855863.1689242023; PHPSESSID=i842hb8ko91sv0sucpade4pef3; XSRF-TOKEN=eyJpdiI6IjQ4ays4QXMrcWpwMDNnNXQzckZ5WUE9PSIsInZhbHVlIjoiWEFtNzhCQitVb0Z5STNBdGZYRjd6WS9kMG1lRy9zeXpHMmtzT2c1a0FVWGtEZVJ1dWdXTll1bEptQkFRT09FakVGYytRY1NGZHQraVRiSFlBYXJGZ2tNMGdRNTljQ3JSUzZuZzRkck0rNHVMVHJJNEVmanlqRGN3RzRlR1daWXAiLCJtYWMiOiIxM2E2ZDgyODUxOWI1YWIwZmZiMWM1MWQ0ZjljZTg2ZTQwODhmMzNmM2RiODkzY2VmMzBiYTljMmE0NTZiZDAxIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkxqWjgrN0Q2SzZVOVRTMnJXSjVHbUE9PSIsInZhbHVlIjoicmpUVERuRUg1S1lWcW1jaHoxR0MzTzRweFJRa0QzNEhoOTVWL1grRWxjNHJGdmdzRDNxK2psem11ek9qMjlDQzlIMlZ2WEV1ZkdRN3M5WFBKdTlLSExVSmhVSHg3cllrdG1TeGtlRzlvOUFuNTdwazcvK01uenJmR3RVR3B2d3oiLCJtYWMiOiJjYTVjNGEyMmZiZGRkYzJjYmJlMDY5Mzc4OGIwZGZlMWM1ZGJjYWFmODdiNmM5YTU5ZDRhODZlNTFlM2ZkNGQ3IiwidGFnIjoiIn0%3D; _ga_PQRRSN07T3=GS1.1.1689242023.1.1.1689245972.0.0.0; _ga=GA1.1.1198691210.1689242023',
		},
		'body': null,
		'method': 'GET',
	});
	console.log(result);

	return Cheerio.load([]);
};

const getCategory = async () => {
	const $ = await getHtml('https://ap.poly.edu.vn/sinh-vien');

	const content = $('#kt_content').find(
		'.kt-grid__item--fluid .kt-portlet__body .kt-widget1'
	);

	const data = $(content)
		.get()
		.map(div => {
			return {
				title: $(div).find('h3').text().replaceAll('\n', ''),
				data: $(div)
					.find('.kt-widget1__item')
					.get()
					.map(item => {
						const value = $(item).find(
							'.kt-widget1__item .kt-widget1__title .kt-link'
						);
						const title = $(value).text().replaceAll('\n', '');
						const link = $(value).attr('href');
						const desc = $(item)
							.find('.kt-widget1__item .kt-widget1__desc')
							.text()
							.split('\n')
							.filter(item => item !== '');

						return {
							title,
							link,
							desc,
						};
					}),
			};
		});
	console.log('ủa', data);

	return data;
};

const Home = () => {
	const { setAuthenticated } = useAuthContext();

	useEffect(() => {
		getCategory();
	}, []);
	return (
		<Container
			header={{
				title: 'Hi, Luan',
			}}>
			<SectionContainer title="Hôm nay">
				<TodaySection />
			</SectionContainer>
			<SectionContainer title="Điểm danh">
				<DayOffSection />
			</SectionContainer>
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

export default Home;
