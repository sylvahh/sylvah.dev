import { variables } from "@/constants/vars";
import { Mail } from "lucide-react"

export function Hero() {
  return (
		<section className="pt-32 pb-20 px-6 sm:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="animate-fade-in">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground">
						Hi, I'm Sylvester.
					</h1>

					<div className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
						<p className="mb-4">
							I design software <em>with</em> and <em>for</em> people. My background is in software
							and critical thinking.
						</p>
						<p className="font-medium">To the problem, I'm the remedy.</p>
					</div>

					<div className="flex items-center gap-2 text-lg flex-wrap">
						<span className="text-muted-foreground">Get in touch</span>
						<span className="hidden sm:inline text-2xl">👉</span>
						<span className="inline sm:hidden text-2xl">👇</span>
						<a
							href={`mailto:${variables.EMAIL}`}
							className="font-mono text-primary dark:text-white hover:text-primary-hover transition-colors duration-200 flex items-center gap-2 group"
						>
							<Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200 text-sm lg:text-base" />
							{variables.EMAIL}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
