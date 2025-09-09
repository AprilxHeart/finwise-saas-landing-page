import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    ตัวเลขที่พิสูจน์ความเป็นเลิศ
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    ประสบการณ์และความเชี่ยวชาญที่สั่งสมมานาน สร้างความมั่นใจให้ลูกค้า
                </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <div key={stat.title} className="text-center group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats