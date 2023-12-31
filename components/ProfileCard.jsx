import React from "react";

const ProfileCard = () => {
	return (
		<div className="max-w-3xl mx-auto">
			<center>
				<div className="py-10 bg-gray-800 shadow-md border border-gray-200 rounded-lg max-w-xs">
					<a href="/profile/one-more">
						<img
							className="rounded-full w-[150px] h-[150px] object-cover grayscale"
							src="https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702080000&semt=ais"
							alt=""
						/>
					</a>
					<div className="p-5">
						<a href="/profile/one-more">
							<h5 className="text-white font-bold text-xl tracking-tight mb-2">
								Kate Wolf
							</h5>
							<h4 className="text-white font-bold text-lg tracking-tight mb-2">
								Senior Backend Developer
							</h4>
						</a>
						<p className="font-normal text-white mb-3">
							In my many years of experience, I use @laravel for backend
							projects
						</p>
						<a
							href="/profile/one-more"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
							Read more
							<svg
								className="-mr-1 ml-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</a>
					</div>
				</div>
			</center>
		</div>
	);
};

export default ProfileCard;
