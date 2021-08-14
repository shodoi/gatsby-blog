import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
	return (
		<header>
			<h1>
				<Link to="/">{siteTitle}</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
