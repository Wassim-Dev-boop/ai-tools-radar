import { LegalTemplate } from './LegalTemplate'

export const TermsOfServicePage = () => {
  return (
    <LegalTemplate
      title="Terms of Service"
      description="Terms of service template for AI Tools Radar."
      canonicalPath="/legal/terms-of-service"
    >
      <p>Last updated: April 5, 2026</p>
      <h2>Acceptance of terms</h2>
      <p>By using this website, you agree to these terms and applicable local laws.</p>
      <h2>Content disclaimer</h2>
      <p>
        Tool information is provided for educational purposes. Users should independently verify pricing, features, and vendor terms.
      </p>
      <h2>Permitted use</h2>
      <p>You may use the site for lawful research and comparison. Automated scraping at abusive scale is not allowed.</p>
      <h2>Liability limitation</h2>
      <p>
        The website owner is not liable for direct or indirect losses resulting from tool choices, third-party platforms, or temporary downtime.
      </p>
    </LegalTemplate>
  )
}
