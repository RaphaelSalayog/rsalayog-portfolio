"use client";

import Button from "@/components/Button";
import Icon from "@/components/icons/Icon";

const ContactMe = () => {
    return (
        <section id="contact" className="flex flex-col items-center pt-16 pb-44 text-center">
            <p className="text-5xl font-semibold text-center py-1.5 mb-10 animated-rgb-text">
                Keep In Touch.
            </p>
            <p>I'm currently specializing in Front-end Development.</p>
            <p className="mb-6">Feel free to get in touch and talk more about your projects.</p>
            <div className="w-1/2 space-y-6">
                <p className="highlight-text">(+63) 945-147-2698</p>
                <p className="text-[12px]">Or send a message</p>
                <div className="grid grid-cols-2 gap-x-4 text-sm font-semibold">
                    <Button
                        onClick={() =>
                            window.open(
                                "https://mail.google.com/mail/u/0/?to=rsalayog0199@gmail.com&fs=1&tf=cm",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                        className="flex items-center justify-center gap-x-2"
                    >
                        <Icon name={"Email"} className="h-[20px] w-[20px]" />
                        Email
                    </Button>
                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/rsalayog?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                        className="flex items-center justify-center gap-x-2"
                    >
                        <Icon name={"LinkedIn"} className="h-[20px] w-[20px]" />
                        LinkedIn
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
