import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: (children.props.className || '') + " text-2xl lg:text-4xl lg:leading-tight font-bold text-foreground dark:text-gray-100 transition-colors"
    });
};

export default SectionTitle;