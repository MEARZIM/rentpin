import { ChevronDown, Star } from 'lucide-react'


const RightSide = () => {
    return (
        <aside className="w-full lg:w-100 lg:shrink-0 lg:sticky lg:top-25">
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/40 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-3xl font-bold text-slate-900">$450</span>
                        <span className="text-slate-400 font-medium"> / night</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-sm bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> 4.98
                    </div>
                </div>

                <div className="grid grid-cols-2 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    <div className="p-4 border-r border-slate-100 bg-slate-50/30">
                        <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Check-In</p>
                        <p className="text-sm font-bold text-slate-800">Oct 24, 2024</p>
                    </div>
                    <div className="p-4 bg-slate-50/30">
                        <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Check-Out</p>
                        <p className="text-sm font-bold text-slate-800">Oct 31, 2024</p>
                    </div>
                    <div className="col-span-2 p-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Guests</p>
                            <p className="text-sm font-bold text-slate-800">2 Adults</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                    </div>
                </div>

                <button className="w-full py-5 bg-[#00855d] text-white rounded-2xl font-bold text-lg hover:bg-[#006948] transition-all shadow-lg shadow-emerald-900/10 active:scale-[0.98]">
                    Book Direct
                </button>

                <div className="pt-4 space-y-4 text-sm text-slate-600 border-t border-slate-100">
                    <div className="flex justify-between text-lg font-bold text-slate-900 border-t border-slate-100 pt-4">
                        <span>Total</span>
                        <span>$3,300</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default RightSide
