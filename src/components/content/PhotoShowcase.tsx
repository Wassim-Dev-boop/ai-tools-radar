import type { VisualItem } from '../../data/visuals'

interface PhotoShowcaseProps {
  title: string
  subtitle: string
  photos: VisualItem[]
}

export const PhotoShowcase = ({ title, subtitle, photos }: PhotoShowcaseProps) => {
  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <p className="max-w-xl text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <article
            key={`${photo.src}-${index}`}
            className="group photo-card animate-reveal-up overflow-hidden rounded-2xl border border-slate-200 bg-white"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-4">
              <p className="text-sm font-medium leading-6 text-slate-700">{photo.alt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}