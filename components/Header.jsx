import React from "react";

const Header = () => {
	return (
		<header className="pt-4 md:pt-8">
			<div className="container max-w-screen-xl mx-auto px-4">
				<nav className="flex items-center justify-between mb-10">
					<div className="flex gap-2 items-center justify-between">
						<img src="/assets/image/navbar-logo.png" alt="Logo" />
						<h1 className="text-gray-700 text-2xl font-bold">Subjectily</h1>
					</div>

					{/* <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
						Get my CV
					</button> */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
