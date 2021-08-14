import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => (
	<Layout>
		<Seo title={data.microcmsBlog.title} />
		<span>{data.microcmsBlog.createdAt}</span>
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
