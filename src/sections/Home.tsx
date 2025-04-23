import Button from "@/components/Button";
import Moon from "@/components/Moon";
import StarField from "@/components/StarField";

const Home = () => {
    return (
        <section className="min-h-dvh flex flex-col justify-center">
            <StarField />
            <div className="flex flex-col items-center">
                <div className="max-w-[60%] flex flex-col items-center text-center space-y-4">
                    <h1 className="text-6xl font-bold">Hi, I'm Raphael Salayog</h1>
                    <h2 className="text-5xl font-bold">Software Developer</h2>
                    <p className="text-xl">
                        Focusing primarily on front-end technologies and will continuously broaden
                        my expertise by exploring back-end technologies.
                    </p>
                    <div className="grid grid-cols-2 gap-x-3 w-[50%] text-lg">
                        <Button className="rounded-full">👋 Let's Connect</Button>
                        <Button className="rounded-full">My Resume</Button>
                    </div>
                </div>
            </div>
            <Moon />
        </section>
    );
};

export default Home;
