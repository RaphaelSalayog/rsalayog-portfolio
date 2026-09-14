import About from "@/sections/About";
import ContactMe from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import PersonalProjects from "@/sections/PersonalProjects";
import TechStack from "@/sections/TechStack";

export default function Page() {
    return (
        <div className="overflow-clip">
            <main>
                <Home />
                <TechStack />
                <About />
                <Experience />
                <PersonalProjects />
                <Education />
                <ContactMe />
            </main>
            <footer className="page-shell border-t border-orbit/50 py-8">
                <div className="flex flex-col gap-2 text-sm text-moonlight/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>Designed and developed by Raphael Salayog.</p>
                    <a className="quiet-link w-fit" href="#home">
                        Back to the stars
                    </a>
                </div>
            </footer>
        </div>
    );
}
