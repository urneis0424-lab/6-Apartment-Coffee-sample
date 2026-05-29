import { storeData } from '../data/store'

export default function Parking() {
  return (
    <section id="parking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="section-subtitle">PARKING</p>
        <h2 className="section-title">駐車場</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden">
            <img
              src="/images/parking.jpg"
              alt="駐車場"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4 bg-stone-50 border-t border-stone-100">
              <p className="text-xs text-stone-400 text-center">店舗駐車場</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-800 mb-1">
                  駐車場あり
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {storeData.parking.note}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-800 mb-1">公共交通機関でのアクセス</p>
                <p className="text-sm text-stone-500">
                  金沢駅より徒歩圏内
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
