import ActionLink from "@/components/ActionLink";
import Reveal from "@/components/Reveal";
import Icon from "@/components/icons/Icon";

const ContactMe = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="page-shell">
                <Reveal className="contact-panel">
                    <div className="contact-orbit" aria-hidden="true" />
                    <div className="relative z-10 max-w-3xl">
                        <h2>Keep In Touch.</h2>
                        <p className="contact-lead">
                            I specialize in frontend development and bring full-stack experience
                            when a project calls for it. If you&apos;re building something thoughtful,
                            let&apos;s talk.
                        </p>
                        <a className="contact-phone quiet-link" href="tel:+639451472698">
                            (+63) 945-147-2698
                        </a>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ActionLink
                                href="https://mail.google.com/mail/u/0/?to=rsalayog0199@gmail.com&fs=1&tf=cm"
                                external
                            >
                                <Icon name="Email" className="size-5" />
                                Send an email
                            </ActionLink>
                            <ActionLink
                                href="https://www.linkedin.com/in/rsalayog?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                external
                                variant="secondary"
                            >
                                <Icon name="LinkedIn" className="size-5" />
                                Connect on LinkedIn
                            </ActionLink>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ContactMe;
