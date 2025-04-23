import { education, techStack, workExperience } from "@/constants/about-page-data";

const About = () => {
    return (
        <section className="min-h-dvh py-16">
            <p className="text-5xl font-semibold text-center mb-10 animated-rgb-text">About Me</p>
            <div className="grid grid-cols-3">
                <div className="flex flex-col items-center py-6 px-8 border-r-1 border-neutral-600 space-y-4">
                    <p>Picture</p>
                    <p className="text-justify">
                        I'm a passionate Full-Stack Developer who loves building dynamic,
                        user-friendly applications. I thrive on solving problems, creating seamless
                        experiences, and continuously expanding my skills. Always eager to learn and
                        grow, I'm currently looking for new opportunities to contribute and
                        innovate.
                    </p>
                    <p>Bulacan, Philippines</p>
                </div>
                <div className="col-span-2 py-6 px-8">
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{workExperience.title}</p>
                        {workExperience.items.map((item, index) => (
                            <div key={index} className="border-l-3 border-neutral-200 pl-6">
                                <div className="mb-2">
                                    <div className="flex justify-between">
                                        <p>{item.company}</p>
                                        <p>{item.duration}</p>
                                    </div>
                                    <div className="flex justify-between italic">
                                        <p>{item.position}</p>
                                        <p>{item.location}</p>
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
                    <div className="py-6">
                        <div className="w-full border-b-1 border-neutral-600" />
                    </div>
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
                    <div className="py-6">
                        <div className="w-full border-b-1 border-neutral-600" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg font-semibold">{techStack.title}</p>
                        <ul className="flex flex-wrap gap-4 text-sm">
                            {techStack.items.map((tech, index) => (
                                <li key={index} className="py-1 px-3 rounded-full border-1">
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
