module.exports = {
	trailingSlash: false,
	async redirects() {
		return [
			{
				source: "/perguntas",
				destination: "/faq",
				permanent: true,
			},
		];
	},
};
