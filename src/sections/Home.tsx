"use client";

import Button from "@/components/Button";
import Moon from "@/components/Moon";
import StarField from "@/components/StarField";

const Home = () => {
    return (
        <section id="home" className="min-h-dvh flex flex-col justify-center pt-36">
            <StarField />
            <div className="flex flex-col items-center z-10">
                <div className="max-w-[90%] flex flex-col items-center text-center space-y-4 sm:max-w-[60%]">
                    <h1 className="text-4xl font-bold sm:text-6xl">Hi, I'm Raphael Salayog</h1>
                    <h2 className="text-3xl font-bold sm:text-5xl">Software Developer</h2>
                    <p className="text-base sm:text-xl">
                        A Full Stack Developer passionate about transforming ideas into fast,
                        functional, and beautiful digital experiences.
                    </p>
                    <div className="grid grid-cols-1 gap-y-3 w-[100%] text-base sm:w-[50%] sm:text-lg sm:grid-cols-2 sm:gap-x-3">
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
                                    "https://drive.google.com/file/d/13dSTRyEoRgtlh0K6urVI-fjhg1g_aT-U/view?usp=sharing",
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
