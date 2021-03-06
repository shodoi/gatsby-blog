import * as React from "react";
import { Link, graphql } from "gatsby";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data, pageContext }) => {
	const {
		breadcrumb: { crumbs },
	} = pageContext;

	return (
		<Layout>
			<Seo title="My Blog" />
			<Breadcrumb
				crumbs={crumbs}
				crumbSeparator=" - "
				// crumbLabel={customCrumbLabel}
			/>
			{data.allMicrocmsBlog.edges.map(({ node }) => (
				<article key={node.blogId}>
					<h2>
						<Link to={`${node.blogId}`}>{node.title}</Link>
					</h2>
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
