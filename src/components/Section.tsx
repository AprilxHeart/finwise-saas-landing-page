import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
    className?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children, className = "" }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`py-16 lg:py-24 ${className}`}>
            <div className="text-center mb-16">
                <SectionTitle>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                </SectionTitle>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
            </div>
            {children}
        </section>
    )
}

export default Section