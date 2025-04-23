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
                <div className="flex justify-center">
                    <div className="max-w-[60%]">
                        <About />
                        <WorkExperience />
                        <PersonalProjects />
                        <ContactMe />
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
