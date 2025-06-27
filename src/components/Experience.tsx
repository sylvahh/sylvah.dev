import { experiences } from "../constants/data";

export function Experience() {
	return (
		<section className="py-20 px-6 sm:px-8">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-12">Experience</h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<div key={index} className="relative pl-8 border-l-2 border-border">
							<div className="absolute -left-2 top-0 w-4 h-4 bg-background border-2 border-border rounded-full" />

							<div className="space-y-3">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
									<h3 className="text-xl font-semibold">{exp.title}</h3>
									<span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
								</div>

								<h4 className="text-lg text-primary dark:text-white/50 font-medium">
									{exp.company}
								</h4>

								<p className="text-muted-foreground leading-relaxed">{exp.description}</p>

								<div className="flex flex-wrap gap-2 pt-2">
									{exp.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 text-sm font-mono bg-primary/75 text-primary-foreground dark:bg-muted dark:text-muted-foreground rounded-md"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
