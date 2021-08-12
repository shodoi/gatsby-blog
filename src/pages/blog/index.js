import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="Blog Posts">
			{data.allMicrocmsBlog.edges.map(({ node }) => (
				<article key={node.blogId}>
					<h2>{node.title}</h2>
					<span>{node.publishedAt}</span>
					<div
						dangerouslySetInnerHTML={{
							__html: `${node.content}`,
						}}
					></div>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
			edges {
				node {
					title
					content
					blogId
					publishedAt
				}
			}
		}
	}
`;

export default BlogPage;
