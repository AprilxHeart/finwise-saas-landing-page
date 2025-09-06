import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-luxury-black via-secondary to-primary bg-[linear-gradient(to_right,#2c2c2c_1px,transparent_1px),linear-gradient(to_bottom,#2c2c2c_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,rgba(212,175,55,0.1),transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl watch-text-shadow">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5 text-gray-200">{ctaDetails.subheading}</p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                            <a 
                                href={ctaDetails.facebookUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary-accent text-luxury-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                ดูใน Facebook
                            </a>
                            <a 
                                href={ctaDetails.lineUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-gray-100 text-luxury-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                สั่งซื้อผ่าน Line
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA