import Image from "next/image";

// Define the type for a single feature item
type Feature = {
    id: number;
    title: string;
    description?: string; // Optional property
    image: string;
};

// Define the props type for the component
type FeaturesSectionProps = {
    sectionTitle: string;
    sectionDescription: string;
    features: Feature[];
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
    sectionTitle,
    sectionDescription,
    features,
}) => {
    return (
        <div>
            {/* Section Title & Description */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-black text-transparent bg-clip-text">
                    {sectionTitle}
                </h1>
                <p className="text-md text-[#1a1b26cc]">{sectionDescription}</p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
                    >
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={400}   
                            height={300}  
                            className="object-cover rounded-md"
                        />
                        <div className="absolute top-[55%] left-0 w-full bg-[#1a1b26cc] overflow-hidden hover:bg-[#1a1f29cc] text-white cursor-pointer">
                            <h1 className="font-semibold py-3 px-6">{feature.title}</h1>
                            {feature.description && (
                                <p className="text-md py-3 px-6">{feature.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;