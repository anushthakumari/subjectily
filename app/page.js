import Script from "next/script";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
	return (
		<>
			<Header />
			<section className="h-[60vh] flex flex-col justify-center">
				<div className="">
					<center className="max-w-6xl mx-auto mb-8">
						<h1 className="text-gray-400 capitalize text-5xl font-bold mb-4 relative">
							<img
								src="/assets/image/hat.png"
								className="absolute transform rotate-12 z-[-1] left-[50%] top-[-65px] h-20"
							/>
							<span className="">
								Unlock <span className="text-black">Academic Excellence </span>
								with <span className="text-black">Subjectly.</span>
							</span>
							{/* <br />
							<span>
								Ask a<span className="text-black mx-2">Real expert</span>Today.
							</span> */}
						</h1>
						<h3 className="text-xl text-gray-400 capitalize font-bold">
							Connecting You with Expertise: Find PhD Thesis, Master&apos;s
							Dissertations, and Research Support in One Place
						</h3>
					</center>

					<div className="w-[95%] md:w-[60%] mx-auto rounded-lg overflow-hidden">
						<div className="md:flex">
							<div className="w-full p-3">
								<div className="relative">
									<i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
									<input
										type="text"
										className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
										placeholder="Search Experts Here..."
									/>
									<span className="absolute top-4 right-5 border-l pl-4">
										<i
											data-feather="search"
											className="text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="flex flex-col justify-center py-10 mb-20">
				<Container>
					<div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
					</div>
				</Container>
			</section>

			<section className="bg-black py-10 text-center">
				<div className="my-8">
					<h1 className="text-5xl font-bold">
						Elevate Your Research Journey with Subjectly
					</h1>
					<h2 className="text-2xl font-bold my-3">
						Connecting Scholars and Expertise for Exceptional Academic Success
					</h2>

					<button className="my-8 text-2xl font-bold rounded-full border-4 p-4 transition duration-250 ease-in-out hover:bg-white hover:text-black">
						Find Experts
					</button>
				</div>
			</section>

			<Footer />
			<Script src="/assets/js/feather.min.js" />
		</>
	);
}
