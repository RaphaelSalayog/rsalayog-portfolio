import Button from "@/components/Button";
import Moon from "@/components/Moon";
import StarField from "@/components/StarField";

const Home = () => {
    return (
        <section className="min-h-dvh">
            <div className="flex flex-col items-center">
                <div className="max-w-[60%] flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold">Hi, I'm Raphael Salayog</h1>
                    <p>Software Developer</p>
                    <p>
                        Focusing primarily on front-end technologies and will continuously broaden
                        my expertise by exploring back-end technologies.
                    </p>
                    <div className="grid grid-cols-2 gap-x-3 w-[50%]">
                        <Button>👋 Let's Connect</Button>
                        <Button>My Resume</Button>
                    </div>
                </div>
            </div>
            <StarField />
            <Moon />
        </section>
    );
};

export default Home;
