import { adConfig } from '../../config/site'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

interface AdSlotProps {
  label: string
  className?: string
}

export const AdSlot = ({ label, className = '' }: AdSlotProps) => {
  if (!adConfig.enabled) {
    return null
  }

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window.adsbygoogle || []).length === 0) {
        (window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <aside aria-label={label} className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-7k+er-j-q+3j"
        data-ad-client="ca-pub-2876502545774992"
        data-ad-slot="2908979413"
      />
    </aside>
  )
}
