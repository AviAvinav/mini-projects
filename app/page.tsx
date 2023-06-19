import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto flex flex-col items-center justify-center pt-32">
			<h1 className="text-6xl text-center font-bold">
				Avi&apos;s Mini Projects
			</h1>
			<p className="w-3/4 mt-10 text-lg text-gray-400">
				Hi 👋, thanks for visiting! This website will contains my mini projects,
				as in small UI stuff or maybe other things that I just want to try
				building. The aim of this is to help me practice, I will keep the code
				public just in case anyone else may benefit from it.
				<br />
				<br />
				You can find the code here:{" "}
				<a
					href="https://github.com/AviAvinav/mini-projects"
					className="underline text-white decoration-dotted"
				>
					Github Repo
				</a>
			</p>
			<div className="mt-10 flex flex-col w-3/4 items-center justify-center space-y-5">
				<Project name="Text in a circle" path="text-in-a-circle" />
				<Project name="Grandient text" path="gradient-text" />
				<Project name="Skew scroll" path="skewed-scrolling" />
			</div>
		</div>
	);
}

function Project({ name, path }: { name: string; path: string }) {
	return (
		<Link
			className="w-full py-3 px-5 border-[1px] border-[#e0e0e020] hover:bg-[#e0e0e020] hover:border-white transition ease-in-out duration-100 rounded-md bg-[#1e1e1e] bg-opacity-50"
			href={`/${path}`}
		>
			<h2 className="text-xl">{name}</h2>
		</Link>
	);
}
