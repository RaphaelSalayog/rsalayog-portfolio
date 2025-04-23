"use client";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Icon from "@/components/icons/Icon";
import Image from "next/image";

const qwe = ["React.js", "HTML", "CSS", "React.js", "HTML", "CSS", "React.js", "HTML", "CSS"];
const PersonalProjects = () => {
    return (
        <section className="min-h-dvh py-16">
            <p className="text-5xl font-semibold text-center py-1.5 mb-10 animated-rgb-text">
                Personal Projects
            </p>
            <div className="grid grid-cols-1 gap-y-4">
                <div className="relative flex min-h-96 p-8 rounded-2xl border border-neutral-600 overflow-hidden">
                    <div
                        className="peer absolute w-[65%] h-[90%] p-[5px] cursor-pointer rounded-lg bg-gradient-to-r from-[#545edc] via-[#a54099] to-[#ff6e39] top-1/5 left-1/2 z-10 transition-all duration-500 ease-in-out transform hover:-translate-x-1/2 hover:-translate-y-1/2 hover:top-1/2"
                        onClick={() => {}}
                    >
                        <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                            <Image
                                src="/zyamura.png"
                                alt="Profile Picture"
                                width={1000}
                                height={1000}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="peer-hover:blur-sm w-[48%] flex flex-col justify-between space-y-8 transition-all duration-300 ease-in-out">
                        <div className="space-y-4">
                            <p>CodeInsight AI</p>
                            <Divider />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam
                                cum. Cum tempore velit repellendus laborum dolorem aliquam, facere
                                at reprehenderit deleniti magni distinctio laudantium, sed fuga quam
                                amet quia.
                            </p>
                            <div>
                                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                    {qwe.map((tech, index) => (
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
                        <div className="grid grid-cols-2 gap-x-4 text-sm">
                            <Button>Github</Button>
                            <Button>Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalProjects;
