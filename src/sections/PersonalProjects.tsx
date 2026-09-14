"use client";

import ActionLink from "@/components/ActionLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/icons/Icon";
import { projects } from "@/constants/projectsSections";
import { AnimatePresence, m, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = (typeof projects.items)[number];

const ProjectTechList = ({ items }: { items: string[] }) => (
    <ul className="project-tech-list" aria-label="Technologies used">
        {items.map((tech) => (
            <li key={tech}>
                <Icon name={tech} className="size-3.5 shrink-0" />
                {tech}
            </li>
        ))}
    </ul>
);

const ProjectActions = ({ project }: { project: Project }) => (
    <div className="project-actions">
        <ActionLink href={project.video} external>
            View demo
        </ActionLink>
        <ActionLink href={project.sourceCode.frontend} external variant="secondary">
            <Icon name="GitHub" className="size-4" />
            Frontend
        </ActionLink>
        <ActionLink href={project.sourceCode.backend} external variant="quiet">
            <Icon name="GitHub" className="size-4" />
            Backend
        </ActionLink>
    </div>
);

interface ProjectStepProps {
    project: Project;
    index: number;
    activeIndex: number;
    onActive: (index: number) => void;
}

const ProjectStep = ({ project, index, activeIndex, onActive }: ProjectStepProps) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { margin: "-38% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) onActive(index);
    }, [index, isInView, onActive]);

    return (
        <article
            ref={ref}
            className={`project-step ${activeIndex === index ? "project-step--active" : ""}`}
        >
            <p className="project-count">
                Project {index + 1} of {projects.items.length}
            </p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ProjectTechList items={project.techStack} />
            <ProjectActions project={project} />
        </article>
    );
};

const MobileProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <Reveal className="mobile-project-card" delay={index * 0.06}>
        <m.a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-project-image"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.25 }}
            aria-label={`View ${project.title} demo`}
        >
            <Image
                src={project.image}
                alt={`${project.title} application interface`}
                fill
                sizes="(max-width: 1023px) 92vw, 50vw"
                className="object-cover object-top"
            />
        </m.a>
        <div className="space-y-5">
            <p className="project-count">
                Project {index + 1} of {projects.items.length}
            </p>
            <h3 className="font-display text-2xl text-starlight">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ProjectTechList items={project.techStack} />
            <ProjectActions project={project} />
        </div>
    </Reveal>
);

const PersonalProjects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const project = projects.items[activeProject];

    return (
        <section id="projects" className="section-spacing projects-section">
            <div className="page-shell">
                <Reveal>
                    <SectionHeading
                        title={projects.title}
                        description="Selected builds that explore real-time communication, business operations, and data-driven applications."
                    />
                </Reveal>

                <div className="hidden lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-16">
                    <div className="sticky top-28 h-[min(68vh,42rem)] self-start">
                        <div className="project-visual-shell">
                            <AnimatePresence mode="sync" initial={false}>
                                <m.a
                                    key={project.title}
                                    href={project.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 block overflow-hidden rounded-[1.6rem]"
                                    initial={{ opacity: 0, scale: 0.975, y: 14 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.015, y: -10 }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ scale: 1.012 }}
                                    aria-label={`View ${project.title} demo`}
                                >
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} application interface`}
                                        fill
                                        sizes="58vw"
                                        className="object-cover object-top"
                                        priority={activeProject === 0}
                                    />
                                </m.a>
                            </AnimatePresence>
                            <div className="project-visual-orbit" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        {projects.items.map((item, index) => (
                            <ProjectStep
                                key={item.title}
                                project={item}
                                index={index}
                                activeIndex={activeProject}
                                onActive={setActiveProject}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-8 lg:hidden">
                    {projects.items.map((item, index) => (
                        <MobileProjectCard key={item.title} project={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalProjects;
