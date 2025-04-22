import About from "@/sections/About";
import ContactMe from "@/sections/ContactMe";
import Home from "@/sections/Home";
import PersonalProjects from "@/sections/PersonalProjects";
import WorkExperience from "@/sections/WorkExperience";

export default function Page() {
    return (
        <div>
            <main>
                <Home />
                <About />
                <WorkExperience />
                <PersonalProjects />
                <ContactMe />
            </main>
            <footer></footer>
        </div>
    );
}
