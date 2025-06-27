import { openSource } from "../constants/data";

export function OpenSource() {
	return (
		<section className="py-20 px-6 sm:px-8 bg-muted/10">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-12">Open Source</h2>

				<div className="grid gap-8 md:grid-cols-2">
					{openSource.map((item, index) => (
						<div
							key={index}
							className="group py-3 px-6 dark:bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/20 transition-all duration-300"
						>
							<a href={item.github} className="" target="_blank" rel="noopener noreferrer">
								<h3 className="text-xl font-semibold  transition-colors duration-200">
									{item.title}
								</h3>
							</a>

							<p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

							<div className="flex flex-wrap gap-2">
								{item.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="px-3 py-1 text-sm font-mono bg-primary/75 text-primary-foreground dark:bg-muted dark:text-muted-foreground rounded-md"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
