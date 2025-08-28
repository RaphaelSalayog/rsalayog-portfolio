"use client";

import Button from "@/components/Button";
import Moon from "@/components/Moon";
import StarField from "@/components/StarField";

const Home = () => {
    return (
        <section id="home" className="min-h-dvh flex flex-col justify-center pt-36">
            <StarField />
            <div className="flex flex-col items-center z-10">
                <div className="max-w-[90%] flex flex-col items-center text-center space-y-4 md:max-w-[80%] xl:max-w-[75%]">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        Hi, I'm Raphael Salayog
                    </h1>
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6 md:mb-8">
                        Software Developer
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10">
                        A Full Stack Developer passionate about transforming ideas into fast,
                        functional, and beautiful digital experiences.
                    </p>
                    <div className="grid grid-cols-1 gap-y-3 w-full text-base sm:text-lg sm:grid-cols-2 sm:gap-x-3 md:w-[100%] lg:w-[90%] xl:w-[80%]">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/rsalayog?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            className="!rounded-full"
                        >
                            <span className="animate-handwave">👋</span> Let's Connect
                        </Button>
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1p-EGgKvtNZqTxMAZf2jKW04h6ZDiMuXC/view?usp=sharing",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            className="!rounded-full"
                        >
                            My Resume
                        </Button>
                    </div>
                </div>
            </div>
            <Moon />
        </section>
    );
};

export default Home;
