import { LegalTemplate } from './LegalTemplate'

export const PrivacyPolicyPage = () => {
  return (
    <LegalTemplate
      title="Privacy Policy"
      description="Privacy policy template for AI Tools Radar."
      canonicalPath="/legal/privacy-policy"
    >
      <p>Last updated: April 5, 2026</p>
      <h2>Information we collect</h2>
      <p>
        We may collect basic analytics information, contact form submissions, and newsletter opt-in details. We do not sell personal data.
      </p>
      <h2>How we use data</h2>
      <p>
        Data is used to improve content quality, respond to user requests, prevent abuse, and understand site performance.
      </p>
      <h2>Cookies and tracking</h2>
      <p>
        We may use essential and analytics cookies. If advertising is enabled, third-party providers such as Google may use cookies to serve relevant ads.
      </p>
      <h2>Data rights</h2>
      <p>
        You can request data access, correction, or deletion by contacting the site owner through the contact page.
      </p>
    </LegalTemplate>
  )
}
