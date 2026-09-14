"use client";

import Icon from "@/components/icons/Icon";
import * as marquee from "@zag-js/marquee";
import { normalizeProps, useMachine } from "@zag-js/react";
import { useReducedMotion } from "framer-motion";
import { useId } from "react";

interface MarqueeLaneProps {
    items: string[];
    reverse?: boolean;
    label: string;
}

const TechnologyPill = ({ name }: { name: string }) => (
    <span className="tech-pill">
        <Icon name={name} className="size-4 shrink-0" />
        <span>{name}</span>
    </span>
);

const MarqueeLane = ({ items, reverse = false, label }: MarqueeLaneProps) => {
    const prefersReducedMotion = useReducedMotion();
    const service = useMachine(marquee.machine, {
        id: useId(),
        autoFill: true,
        pauseOnInteraction: true,
        paused: Boolean(prefersReducedMotion),
        reverse,
        speed: 30,
        spacing: "0.875rem",
        translations: { root: label },
    });
    const api = marquee.connect(service, normalizeProps);

    if (prefersReducedMotion) {
        return (
            <ul className="tech-static-list" aria-label={label}>
                {items.map((item) => (
                    <li key={item}>
                        <TechnologyPill name={item} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div
            {...api.getRootProps()}
            className="tech-marquee"
            tabIndex={0}
            onFocus={api.pause}
            onBlur={api.resume}
        >
            <div {...api.getViewportProps()}>
                {Array.from({ length: api.contentCount }).map((_, contentIndex) => (
                    <div key={contentIndex} {...api.getContentProps({ index: contentIndex })}>
                        {items.map((item) => (
                            <div key={item} {...api.getItemProps()}>
                                <TechnologyPill name={item} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TechStackMarquee = ({ items }: { items: string[] }) => {
    const midpoint = Math.ceil(items.length / 2);
    const firstLane = items.slice(0, midpoint);
    const secondLane = items.slice(midpoint);

    return (
        <div className="space-y-3">
            <MarqueeLane items={firstLane} label="Frontend and core technologies" />
            <MarqueeLane items={secondLane} reverse label="Backend, data, and development tools" />
        </div>
    );
};

export default TechStackMarquee;
