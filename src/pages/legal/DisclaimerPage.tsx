import { LegalTemplate } from './LegalTemplate'

export const DisclaimerPage = () => {
  return (
    <LegalTemplate
      title="Disclaimer"
      description="Editorial and affiliate disclaimer template for AI Tools Radar."
      canonicalPath="/legal/disclaimer"
    >
      <p>Last updated: April 5, 2026</p>
      <h2>Editorial purpose</h2>
      <p>
        Content on this website is informational and should not be considered legal, financial, or professional advice.
      </p>
      <h2>Affiliate disclosure</h2>
      <p>
        Some outbound links may become affiliate links in the future. This does not affect editorial rankings or review methodology.
      </p>
      <h2>External links</h2>
      <p>
        We are not responsible for third-party content, policies, or service changes on external websites.
      </p>
    </LegalTemplate>
  )
}
