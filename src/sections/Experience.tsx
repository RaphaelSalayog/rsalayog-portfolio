import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { workExperience } from "@/constants/aboutSection";

const Experience = () => {
    return (
        <section id="experience" className="section-spacing">
            <div className="page-shell">
                <Reveal>
                    <SectionHeading
                        title={workExperience.title}
                        description="Professional experience building and improving production-facing web applications."
                    />
                </Reveal>
                <div className="experience-timeline">
                    {workExperience.items.map((item, index) => (
                        <Reveal key={item.company} className="experience-entry" delay={index * 0.08}>
                            <span className="experience-entry__node" aria-hidden="true" />
                            <div className="experience-entry__header">
                                <div>
                                    <h3>{item.position}</h3>
                                    <p className="text-moonlight/75">{item.company}</p>
                                </div>
                                <div className="experience-entry__meta">
                                    <p>{item.duration}</p>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                            <ul className="experience-list">
                                {item.responsibilities.map((responsibility) => (
                                    <li key={responsibility}>{responsibility}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
