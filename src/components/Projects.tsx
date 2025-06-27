import { ExternalLink, Github } from "lucide-react"
import { projects } from "../constants/data"

export function Projects() {

  return (
		<section className="py-20 px-6 sm:px-8 bg-muted/10">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-12">Projects</h2>

				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group p-6 dark:bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/20 transition-all duration-300"
						>
							<div className="flex items-start justify-between mb-4">
								<h3 className="text-xl font-semibold  transition-colors duration-200">
									{project.title}
								</h3>
								<span className="font-mono text-sm text-muted-foreground">{project.year}</span>
							</div>

							<p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="px-3 py-1 text-sm font-mono bg-primary/75 text-primary-foreground dark:bg-muted dark:text-muted-foreground rounded-md"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex items-center gap-4">
							{project.github && <a
									href={project.github}
									className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-4 w-4" />
									Code
								</a>}

								{project.live && (
									<a
										href={project.live}
										className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="h-4 w-4" />
										Live Demo
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
