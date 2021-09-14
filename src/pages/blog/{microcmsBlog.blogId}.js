import * as React from "react";
import { graphql } from "gatsby";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data, pageContext }) => {
	const {
		breadcrumb: { crumbs },
	} = pageContext;

	return (
		<Layout>
			<Seo title={data.microcmsBlog.title} />
			<Breadcrumb
				crumbs={crumbs}
				crumbSeparator=" - "
				crumbLabel={data.microcmsBlog.title}
			/>
			<span>{data.microcmsBlog.createdAt}</span>
			<div
				dangerouslySetInnerHTML={{
					__html: `${data.microcmsBlog.childConvertHtml.convertedHtml}`,
				}}
			></div>
		</Layout>
	);
};

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
