import { storeData } from '../data/store'

const ABOUT_HEADING = '隠れ家のような空間'

export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 leading-tight mb-2">
              {ABOUT_HEADING}
            </h2>
            <div className="w-12 h-0.5 bg-primary-700 mb-8" />
            <div className="space-y-4 text-stone-600 leading-relaxed">
              {storeData.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/about.jpg"
              alt={storeData.name}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-800 rounded-lg opacity-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-stone-400 rounded-lg opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
