const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-16 px-5 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-lg font-medium text-gray-700 mb-8">
                    ไว้วางใจโดยองค์กรชั้นนำ <span className="text-primary font-bold">1000+</span> แห่งทั่วประเทศไทย
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
                    {/* โรงพยาบาล */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">โรงพยาบาล</span>
                    </div>

                    {/* โรงงานอุตสาหกรรม */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">โรงงาน</span>
                    </div>

                    {/* โรงแรม */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">โรงแรม</span>
                    </div>

                    {/* ห้างสรรพสินค้า */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">ห้างสรรพสินค้า</span>
                    </div>

                    {/* ศูนย์การค้า */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">ศูนย์การค้า</span>
                    </div>

                    {/* อพาร์ทเมนต์ */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">อพาร์ทเมนต์</span>
                    </div>
                </div>

                {/* คำรับรอง */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">การรับรองคุณภาพระดับสากล</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700">ISO 9001</div>
                            <div className="text-xs text-gray-500">มาตรฐานคุณภาพ</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700">UL Listed</div>
                            <div className="text-xs text-gray-500">ความปลอดภัย</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700">CE Mark</div>
                            <div className="text-xs text-gray-500">มาตรฐานยุโรป</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700">TIS</div>
                            <div className="text-xs text-gray-500">มาตรฐานไทย</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos