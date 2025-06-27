
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
			<div className="max-w-4xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
				<div className="font-mono text-sm font-medium text-primary dark:text-white">sylvester.dev</div>
				<ThemeToggle />
			</div>
		</header>
	);
}
