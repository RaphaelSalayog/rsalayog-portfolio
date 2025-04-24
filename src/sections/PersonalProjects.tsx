"use client";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Icon from "@/components/icons/Icon";
import { projects } from "@/constants/projectsSections";
import Image from "next/image";

const PersonalProjects = () => {
    return (
        <section id="project" className="min-h-dvh py-16">
            <p className="text-5xl font-semibold text-center py-1.5 mb-10 animated-rgb-text">
                Personal Projects
            </p>
            <div className="grid grid-cols-1 gap-y-4">
                {projects.items.map((project, index) => (
                    <div
                        key={index}
                        className="relative flex min-h-96 p-8 rounded-2xl border border-neutral-600 overflow-hidden"
                    >
                        <div
                            onClick={() =>
                                window.open(project.video, "_blank", "noopener,noreferrer")
                            }
                            className="peer absolute w-[65%] h-[90%] p-[5px] cursor-pointer rounded-lg bg-gradient-to-r from-[#545edc] via-[#a54099] to-[#ff6e39] top-20 left-1/2 z-10 transition-all duration-500 ease-in-out transform hover:-translate-x-1/2 hover:-translate-y-1/2 hover:top-1/2"
                        >
                            <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                                <Image
                                    src={project.image}
                                    alt="Profile Picture"
                                    width={1000}
                                    height={1000}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="peer-hover:blur-sm w-[48%] flex flex-col justify-between space-y-8 transition-all duration-300 ease-in-out">
                            <div className="space-y-4">
                                <p className="font-semibold text-lg">{project.title}</p>
                                <Divider />
                                <p>{project.description}</p>
                                <div>
                                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                        {project.techStack.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center py-1 px-3 gap-2 rounded-full border-1 border-neutral-600"
                                            >
                                                <Icon name={tech} className="h-[14px] w-[14px]" />
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
                                <Button
                                    onClick={() =>
                                        window.open(
                                            project.sourceCode.frontend,
                                            "_blank",
                                            "noopener,noreferrer"
                                        )
                                    }
                                    className="flex items-center justify-center gap-x-2"
                                >
                                    <Icon name={"GitHub"} className="h-[14px] w-[14px]" />
                                    Frontend
                                </Button>
                                <Button
                                    onClick={() =>
                                        window.open(
                                            project.sourceCode.backend,
                                            "_blank",
                                            "noopener,noreferrer"
                                        )
                                    }
                                    className="flex items-center justify-center gap-x-2"
                                >
                                    <Icon name={"GitHub"} className="h-[14px] w-[14px]" />
                                    Backend
                                </Button>
                                <Button
                                    className="col-span-2"
                                    onClick={() =>
                                        window.open(project.video, "_blank", "noopener,noreferrer")
                                    }
                                >
                                    Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalProjects;
