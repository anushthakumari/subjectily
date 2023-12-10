import React from "react";
import Link from "next/link";

const ProfileCard = () => {
	return (
		<div className="max-w-3xl mx-auto">
			<div className="bg-gray-800 shadow-md border border-gray-200 rounded-lg max-w-xs">
				<a href="/profile/one-more">
					<img
						className="rounded-t-lg"
						// src="https://flowbite.com/docs/images/blog/image-1.jpg"
						src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds"
						alt=""
					/>
				</a>
				<div className="p-5">
					<a href="/profile/one-more">
						<h5 className="text-white font-bold text-2xl tracking-tight mb-2">
							Kate Wolf
						</h5>
						<h4 className="text-white font-bold text-xl tracking-tight mb-2">
							Senior Backend Developer
						</h4>
					</a>
					<p className="font-normal text-white mb-3">
						In my many years of experience, I use @laravel for backend projects
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
		</div>
	);
};

export default ProfileCard;
