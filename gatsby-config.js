require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "Gatsby Blog",
		description: "Gatsby Blog Test Site",
		author: "@show_web",
		siteUrl: "https://example.com",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-react-helmet",
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
					{
						endpoint: "service",
					},
				],
			},
		},
		{
			resolve: "@mako-tos/gatsby-transformer-for-microcms",
			options: {
				mediaType: "MicrocmsBlog",
				field: "content",
			},
		},
	],
};
