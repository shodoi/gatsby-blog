require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.X_API_KEY);

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Gatsby Blog",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-microcms",
			options: {
				apiKey: process.env.X_API_KEY,
				serviceId: "showweb",
				apis: [
					{
						endpoint: "blog",
					},
				],
			},
		},
	],
};
