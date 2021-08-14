import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Gatsby Blog" />
			<p>Content</p>
		</Layout>
	);
};

export default IndexPage;
