import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Driftlss",
  description: "Privacy policy for Driftlss Agency and its client services.",
};

const display = { fontFamily: "var(--font-display)" };
const body = { fontFamily: "var(--font-body)" };

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-[#FAF6F0] px-8 pt-32 pb-24 max-md:px-6 max-md:pt-24 max-md:pb-16">
      <div className="max-w-[720px] mx-auto">
        <p style={body} className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-teal-600 mb-6">
          Legal
        </p>
        <h1 style={display} className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-[#1A1A18] mb-12">
          Privacy Policy
        </h1>
        <div style={body} className="text-[0.95rem] font-light text-[#4A4A45] leading-relaxed space-y-6">
          <p className="text-[#8A8A82] text-sm">Last updated: March 21, 2026</p>

          <p>
            Driftlss Agency (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates websites and digital services
            for therapy practices. This Privacy Policy describes how we collect, use, and protect your information.
          </p>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Information We Collect</h2>
          <p>We may collect the following information through our websites, contact forms, and advertising platforms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, and phone number</li>
            <li>Business or practice information</li>
            <li>Messages submitted through contact forms</li>
            <li>Information provided through Meta (Facebook) Lead Ad forms, including responses to custom questions</li>
            <li>Usage data such as pages visited and interactions with website features</li>
          </ul>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and provide requested services</li>
            <li>Manage leads and client relationships through our CRM systems</li>
            <li>Send relevant communications about our services</li>
            <li>Improve our websites and services</li>
            <li>Fulfill advertising and marketing purposes on behalf of our clients</li>
          </ul>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our clients (the therapy practices whose websites we build and manage) to fulfill service inquiries</li>
            <li>Service providers such as email delivery (Resend), hosting (Vercel), and database (Supabase) platforms</li>
            <li>Advertising platforms (Meta/Facebook) for lead generation on behalf of our clients</li>
          </ul>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide our services and fulfill the purposes
            described in this policy. You may request deletion of your data at any time by contacting us.
          </p>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Data Deletion</h2>
          <p>
            To request deletion of your personal data, please contact us at{" "}
            <a href="mailto:admin@driftlss.com" className="text-teal-600 hover:underline">admin@driftlss.com</a>.
            We will process your request within 30 days.
          </p>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Cookies</h2>
          <p>
            Our websites may use essential cookies for functionality. We do not use tracking cookies for advertising
            purposes on our own sites. Third-party services integrated into our sites may set their own cookies.
          </p>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 style={display} className="text-xl font-normal text-[#1A1A18] pt-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p>
            Driftlss Agency<br />
            Fox Cities, WI<br />
            <a href="mailto:admin@driftlss.com" className="text-teal-600 hover:underline">admin@driftlss.com</a>
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}
