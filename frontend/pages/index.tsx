import Head from "next/head";
import Menu from "../components/Menu";

export default function Home() {
	return (
		<>
			<Head>
				<title>/wdg/.one</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header>
					<h1>/wdg/.one</h1>
					<Menu />
				</header>
				<section>
					<h2>Submitting a project update</h2>
					<p>
						If you have a project you'd like to include an update for then make
						a post in the latest thread with the format of:
					</p>
					<code>
						:: my-project-title ::
						<br />
						dev:: anon
						<br />
						tools:: node, react, etc
						<br />
						link:: https://my.website.com
						<br />
						repo:: github.com/user/repo
						<br />
						progress:: sdgsghsghdsfgdfgsdf sfgsdfg sfgd sdg df gdsf g
					</code>
				</section>
			</main>
		</>
	);
}
