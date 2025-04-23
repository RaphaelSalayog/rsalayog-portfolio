import { IconList } from "./IconList";

const Icon = ({ name, className }: { name: string; className?: string }) => {
    const icon = IconList.find((icon) => icon.name === name);
    if (icon) {
        return <div className={className} dangerouslySetInnerHTML={{ __html: icon.svg }} />;
    }
};

export default Icon;
