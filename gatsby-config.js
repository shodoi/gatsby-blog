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
		{
			resolve: `gatsby-plugin-breadcrumb`,
			options: {
				// useAutoGen: required 'true' to use autogen
				useAutoGen: true,
				// autoGenHomeLabel: optional 'Home' is default
				autoGenHomeLabel: `HOME`,
				// exclude: optional, include this array to exclude paths you don't want to
				// generate breadcrumbs for (see below for details).
				exclude: [
					`**/dev-404-page/**`,
					`**/404/**`,
					`**/404.html`,
					`**/offline-plugin-app-shell-fallback/**`,
				],
				// isMatchOptions: optional, include this object to configure the wildcard-match library.
				excludeOptions: {
					separator: ".",
				},
				// crumbLabelUpdates: optional, update specific crumbLabels in the path
				// crumbLabelUpdates: [
				// 	{
				// 		pathname: "/blog",
				// 		crumbLabel: "Blog",
				// 	},
				// ],
				// trailingSlashes: optional, will add trailing slashes to the end
				// of crumb pathnames. default is false
				trailingSlashes: true,
				// usePathPrefix: optional, if you are using pathPrefix above
				usePathPrefix: "/blog",
			},
		},
	],
};
