import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechStackMarquee from "@/components/TechStackMarquee";
import { techStack } from "@/constants/aboutSection";

const TechStack = () => {
    return (
        <section className="tech-section" aria-labelledby="tech-stack-heading">
            <div className="page-shell">
                <Reveal>
                    <SectionHeading
                        id="tech-stack-heading"
                        title={techStack.title}
                        description="A practical toolkit spanning interfaces, services, data, and delivery."
                    />
                </Reveal>
            </div>
            <Reveal delay={0.08}>
                <TechStackMarquee items={techStack.items} />
            </Reveal>
        </section>
    );
};

export default TechStack;
