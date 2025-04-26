import About from "@/sections/About";
import ContactMe from "@/sections/Contact";
import Home from "@/sections/Home";
import PersonalProjects from "@/sections/PersonalProjects";

export default function Page() {
    return (
        <div>
            <main>
                <Home />
                <div className="flex justify-center">
                    <div className="max-w-[90%] md:max-w-[80%] xl:max-w-[75%]">
                        <About />
                        <PersonalProjects />
                        <ContactMe />
                    </div>
                </div>
            </main>
            <footer className="py-10 ">
                <p className="text-center">
                    Developed by <span className="highlight-text">Raphael Salayog</span>
                </p>
            </footer>
        </div>
    );
}
