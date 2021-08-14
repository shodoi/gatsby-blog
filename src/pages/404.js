import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
	return (
		<Layout>
			<Seo title="404: Not found" />
			<h1>404 Not Found</h1>
		</Layout>
	);
};

export default NotFoundPage;
