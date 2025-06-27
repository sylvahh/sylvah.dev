
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Footer } from "@/components/Footer"
import { Separator } from "@/components/ui/separator";
import { OpenSource } from "@/components/OpenSource"

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<Hero />
				<Separator className="w-full" />
				<Experience />
				<Separator className="w-full" />
				<Projects />
				<Separator className="w-full" />
				<OpenSource />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
