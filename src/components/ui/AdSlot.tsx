import { adConfig } from '../../config/site'

interface AdSlotProps {
  label: string
  className?: string
}

export const AdSlot = ({ label, className = '' }: AdSlotProps) => {
  if (!adConfig.enabled) {
    return null
  }

  return (
    <aside
      aria-label={label}
      className={`rounded-xl border border-dashed border-slate-300 bg-white/80 p-4 text-center text-xs text-slate-500 ${className}`}
    >
      <p className="font-semibold uppercase tracking-wide text-slate-600">Ad slot</p>
      <p className="mt-1">{label}</p>
      <p className="mt-2 text-[11px]">
        Insert your AdSense unit here. Keep placements moderate to stay policy-compliant.
      </p>
    </aside>
  )
}
