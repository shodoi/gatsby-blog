import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => (
	<Layout>
		<h1>{data.microcmsBlog.title}</h1>
		<span>{data.microcmsBlog.publishedAt}</span>
		<div
			dangerouslySetInnerHTML={{
				__html: `${data.microcmsBlog.content}`,
			}}
		></div>
	</Layout>
);

export const query = graphql`
	query ($id: String) {
		microcmsBlog(id: { eq: $id }) {
			title
			content
			blogId
			createdAt
		}
	}
`;

export default BlogPage;
