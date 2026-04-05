import { adConfig } from '../../config/site'

interface AdSlotProps {
  label: string
  className?: string
}

export const AdSlot = ({ label: _label, className: _className = '' }: AdSlotProps) => {
  if (!adConfig.enabled) {
    return null
  }

  // Auto Ads are injected by the global AdSense script in index.html.
  return null
}
