import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => (
	<Layout pageTitle={data.microcmsBlog.title}>
		<span>{data.microcmsBlog.publishedAt}</span>
		<div
			dangerouslySetInnerHTML={{
				__html: `${data.microcmsBlog.childConvertHtml.convertedHtml}`,
			}}
		></div>
	</Layout>
);

export const query = graphql`
	query ($id: String) {
		microcmsBlog(id: { eq: $id }) {
			title
			blogId
			createdAt
			childConvertHtml {
				html
				plainText
				listOfContents
				convertedHtml
			}
		}
	}
`;

export default BlogPage;
