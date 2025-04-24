import Divider from "@/components/Divider";
import Icon from "@/components/icons/Icon";
import { education, profile, techStack, workExperience } from "@/constants/aboutSection";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-dvh py-16">
            <p className="text-5xl font-semibold text-center py-1.5 mb-10 animated-rgb-text">
                About Me
            </p>
            <div className="grid grid-cols-3">
                <div className="flex flex-col items-center py-6 px-8 border-r-1 border-neutral-600 space-y-4">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <div className="absolute inset-0 p-[5px] rounded-full bg-gradient-to-r from-[#545edc] via-[#a54099] to-[#ff6e39] animate-spin" />
                        <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden bg-white z-10">
                            <Image
                                src={profile.image}
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <p className="text-justify">{profile.description}</p>
                    <p className="italic">{profile.location}</p>
                </div>
                <div className="col-span-2 py-6 px-8">
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{workExperience.title}</p>
                        {workExperience.items.map((item, index) => (
                            <div key={index} className="border-l-3 border-neutral-200 pl-6">
                                <div className="mb-2">
                                    <div className="flex justify-between">
                                        <p>{item.company}</p>
                                        <p>{item.location}</p>
                                    </div>
                                    <div className="flex justify-between italic highlight-text">
                                        <p>{item.position}</p>
                                        <p>{item.duration}</p>
                                    </div>
                                </div>
                                <ul className="list-disc marker:text-white text-white pl-5">
                                    {item.responsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <Divider />
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{education.title}</p>
                        <div className="mb-2">
                            <div className="flex justify-between">
                                <p>{education.details.school}</p>
                                <p>{education.details.duration}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>{education.details.degree}</p>
                                <p>{education.details.honors}</p>
                            </div>
                        </div>
                        <ul className="list-disc marker:text-white text-white pl-5">
                            {education.details.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <Divider />
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{techStack.title}</p>
                        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            {techStack.items.map((tech, index) => (
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
            </div>
        </section>
    );
};

export default About;
