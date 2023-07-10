import axios, { AxiosRequestConfig } from 'axios';
import * as Cheerio from 'cheerio';

export const getHTML = async (url: string) => {
	return Cheerio.load(
		await new Promise(async res => {
			const { data } = await axios.get(url, {
				headers: {
					'accept':
						'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
					'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
					'sec-ch-ua':
						'"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
					'sec-ch-ua-mobile': '?0',
					'sec-ch-ua-platform': '"Windows"',
					'sec-fetch-dest': 'document',
					'sec-fetch-mode': 'navigate',
					'sec-fetch-site': 'cross-site',
					'sec-fetch-user': '?1',
					'upgrade-insecure-requests': '1',
					'cookie':
						'_gid=GA1.3.917296878.1688708306; _ga=GA1.3.1415595159.1688708306; _ga_PQRRSN07T3=GS1.1.1688720186.3.1.1688721117.0.0.0; _gat_gtag_UA_100471794_5=1; PHPSESSID=m2msdqg5b0rer9japmpetuk643; XSRF-TOKEN=eyJpdiI6InlvZGs3MkxHNyszTzMxc2tuZTc5c0E9PSIsInZhbHVlIjoiZ2RmN1ppb2dodEozRHVOMkhVTTM4c090WWlvaXVscDdkYThBWjljNWdXUjJnMTlGRktWVlZRbDMyK2kxa2grWCIsIm1hYyI6Ijk1YmU2NzJlMjFiYjA2ZDBhZDk0YjQ4MDNkOTQxNTNmNTNlOWJiNzE3ZTY0Mzc5MTEwYTZkOWI5NTlmYjQ3ZDgiLCJ0YWciOiIifQ%3D%3D; laravel_session=eyJpdiI6Inc4S3dvL2NTbzRrYjNpTnM1M1ErVFE9PSIsInZhbHVlIjoiYjVrRmlUSXNnOUdjRWoyV3NvRWpyZFBoOVVYbzUzVmtvOTcyVS9OT1YwWVhqaThXbXIzOGV1MXR0SmFJZUQvZ1BrZSt3dGFtcmplRVZXV0dMUUh0MjI0WndOWENFZ0RRWkdKcHNLeU5OVHk5S2puR2dROS9mYk80ckc0K1Z0RUMiLCJtYWMiOiI5OTE0OTUyMmUzMmYyNWYxNWUxZjNmNGU3OTdmMTJkZWIwYzQ0MDU0Y2QzZTAyN2UxYWUwYWE0NWZhMDNjMTljIiwidGFnIjoiIn0%3D',
					'Referer': 'https://ap.poly.edu.vn/',
					'Referrer-Policy': 'strict-origin-when-cross-origin',
				},
			} as AxiosRequestConfig);
			res(data as any);
		})
	);
};

// fetch('https://ap.poly.edu.vn/sinh-vien', {
// 	'headers': {
// 		'accept':
// 			'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
// 		'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
// 		'sec-ch-ua':
// 			'"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
// 		'sec-ch-ua-mobile': '?0',
// 		'sec-ch-ua-platform': '"Windows"',
// 		'sec-fetch-dest': 'document',
// 		'sec-fetch-mode': 'navigate',
// 		'sec-fetch-site': 'cross-site',
// 		'sec-fetch-user': '?1',
// 		'upgrade-insecure-requests': '1',
// 		'cookie':
// 			'_gid=GA1.3.917296878.1688708306; _ga=GA1.3.1415595159.1688708306; _ga_PQRRSN07T3=GS1.1.1688720186.3.1.1688721117.0.0.0; _gat_gtag_UA_100471794_5=1; PHPSESSID=m2msdqg5b0rer9japmpetuk643; XSRF-TOKEN=eyJpdiI6InlvZGs3MkxHNyszTzMxc2tuZTc5c0E9PSIsInZhbHVlIjoiZ2RmN1ppb2dodEozRHVOMkhVTTM4c090WWlvaXVscDdkYThBWjljNWdXUjJnMTlGRktWVlZRbDMyK2kxa2grWCIsIm1hYyI6Ijk1YmU2NzJlMjFiYjA2ZDBhZDk0YjQ4MDNkOTQxNTNmNTNlOWJiNzE3ZTY0Mzc5MTEwYTZkOWI5NTlmYjQ3ZDgiLCJ0YWciOiIifQ%3D%3D; laravel_session=eyJpdiI6Inc4S3dvL2NTbzRrYjNpTnM1M1ErVFE9PSIsInZhbHVlIjoiYjVrRmlUSXNnOUdjRWoyV3NvRWpyZFBoOVVYbzUzVmtvOTcyVS9OT1YwWVhqaThXbXIzOGV1MXR0SmFJZUQvZ1BrZSt3dGFtcmplRVZXV0dMUUh0MjI0WndOWENFZ0RRWkdKcHNLeU5OVHk5S2puR2dROS9mYk80ckc0K1Z0RUMiLCJtYWMiOiI5OTE0OTUyMmUzMmYyNWYxNWUxZjNmNGU3OTdmMTJkZWIwYzQ0MDU0Y2QzZTAyN2UxYWUwYWE0NWZhMDNjMTljIiwidGFnIjoiIn0%3D',
// 		'Referer': 'https://ap.poly.edu.vn/',
// 		'Referrer-Policy': 'strict-origin-when-cross-origin',
// 	},
// 	'body': null,
// 	'method': 'GET',
// });
