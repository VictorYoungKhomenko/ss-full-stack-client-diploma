/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
	},
	images: {
		domains: [
			'localhost',
			'lh3.googleusercontent.com',
			'media.pitchfork.com',
			'upload.wikimedia.org',
			'partycity.scene7.com',
			'play-lh.googleusercontent.com',
			'encrypted-tbn0.gstatic.com'
		]
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
