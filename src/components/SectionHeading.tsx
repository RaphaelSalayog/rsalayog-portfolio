interface SectionHeadingProps {
    title: string;
    description?: string;
    align?: "left" | "center";
    id?: string;
}

const SectionHeading = ({ title, description, align = "left", id }: SectionHeadingProps) => {
    return (
        <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
            <h2 id={id}>{title}</h2>
            {description ? <p>{description}</p> : null}
        </div>
    );
};

export default SectionHeading;
