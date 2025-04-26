import Divider from "@/components/Divider";
import Icon from "@/components/icons/Icon";
import { education, profile, techStack, workExperience } from "@/constants/aboutSection";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-dvh py-16">
            <p className="text-3xl font-semibold text-center py-1.5 mb-10 animated-rgb-text sm:text-4xl md:text-5xl">
                About Me
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center border-r-0 border-neutral-600 space-y-4 md:border-r-1 md:py-6 md:px-8">
                    <div className="relative w-40 h-40 flex items-center justify-center md:w-48 md:h-48">
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
                    <p className="text-center sm:text-justify">{profile.description}</p>
                    <p className="italic">{profile.location}</p>
                </div>
                <div className="block md:hidden">
                    <Divider />
                </div>
                <div className="md:col-span-2 sm:py-6 sm:px-8">
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{workExperience.title}</p>
                        {workExperience.items.map((item, index) => (
                            <div key={index} className="border-l-3 border-neutral-200 pl-6">
                                <div className="mb-2">
                                    <div className="sm:flex sm:justify-between">
                                        <p>{item.company}</p>
                                        <p>{item.location}</p>
                                    </div>
                                    <div className="italic highlight-text sm:flex sm:justify-between">
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
                            <div className="sm:flex sm:justify-between">
                                <p>{education.details.school}</p>
                                <p>{education.details.duration}</p>
                            </div>
                            <div className="sm:flex sm:justify-between italic">
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
