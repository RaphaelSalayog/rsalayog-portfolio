import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/constants/aboutSection";

const Education = () => {
    return (
        <section className="section-spacing" aria-labelledby="education-heading">
            <div className="page-shell">
                <Reveal>
                    <SectionHeading
                        id="education-heading"
                        title={education.title}
                        description="The foundation that shaped my approach to software development."
                    />
                </Reveal>
                <Reveal className="education-layout" delay={0.08}>
                    <div>
                        <p className="education-school">{education.details.school}</p>
                        <h3>{education.details.degree}</h3>
                    </div>
                    <div className="education-meta">
                        <p>{education.details.duration}</p>
                        <p>{education.details.location}</p>
                        <p className="text-orchid">{education.details.honors}</p>
                    </div>
                    <ul className="education-highlights">
                        {education.details.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default Education;
