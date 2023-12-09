import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<section className="h-[60vh] flex flex-col justify-center">
				<div className="">
					<center className="max-w-6xl mx-auto mb-8">
						<h1 className="text-gray-400 capitalize text-5xl font-bold mb-4">
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
							Connecting You with Expertise: Find PhD Thesis, Master's
							Dissertations, and Research Support in One Place
						</h3>
					</center>

					<div className="w-[60%] mx-auto rounded-lg overflow-hidden">
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
		</>
	);
}
