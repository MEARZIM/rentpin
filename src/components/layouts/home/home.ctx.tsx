import React from 'react'

const HomeCtx = () => {
    return (
        <>
            < section className="px-6 md:px-12 mb-20" >
                <div className="max-w-7xl mx-auto rounded-4xl md:rounded-[4rem] bg-linear-to-br from-[#006948] to-[#00855d] p-10 md:p-24 text-center text-white">
                    <h2 className="font-heading text-3xl md:text-6xl font-bold mb-6">Own a property?</h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Join 12,000+ owners who have cut out the brokers and found amazing tenants directly.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="bg-white text-[#006948] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all">
                            Add Listing
                        </button>
                        <button className="bg-[#00855d] border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-[#006948] transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default HomeCtx
