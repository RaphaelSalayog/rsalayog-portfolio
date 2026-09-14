import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/constants/aboutSection";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="section-spacing">
            <div className="page-shell">
                <Reveal>
                    <SectionHeading
                        title="About Me"
                        description="The person behind the interface—and the thinking that shapes the work."
                    />
                </Reveal>
                <div className="about-layout">
                    <Reveal className="relative" delay={0.08}>
                        <div className="portrait-orbit" aria-hidden="true" />
                        <div className="portrait-frame">
                            <Image
                                src={profile.image}
                                alt="Raphael Salayog in Bulacan, Philippines"
                                fill
                                sizes="(max-width: 767px) 88vw, 42vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </Reveal>
                    <Reveal className="about-copy" delay={0.16}>
                        <p className="about-lead">
                            I build interfaces that feel considered, then connect them to the
                            systems that make them useful.
                        </p>
                        <p>{profile.description}</p>
                        <div className="location-line">
                            <span className="location-line__mark" aria-hidden="true" />
                            {profile.location}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
