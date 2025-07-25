// pages/privacy-policy.tsx
export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how we collect, use, and share your
        personal information when you use our application MeetLyzer.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Personal information such as email address for authentication
          purposes.
        </li>
        <li>Basic usage data to improve app performance and features.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. How We Use Information
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To authenticate users and provide access to the App.</li>
        <li>To improve the functionality and user experience.</li>
        <li>To communicate important updates or security notices.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Data Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not sell, trade, or rent users personal information. We may share
        data with service providers who help us operate the App, subject to
        strict confidentiality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Retention</h2>
      <p className="mb-4">
        We retain user information only for as long as necessary to fulfill the
        purposes outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. User Rights</h2>
      <p className="mb-4">
        Users have the right to access, update, or delete their personal data.
        Please contact us at{" "}
        <span className="font-medium">phanloi971@gmail.com</span> for any
        requests.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        6. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be
        posted on this page with a revised date.
      </p>

      <p className="text-sm text-gray-600 mt-10">Last updated: July 25, 2025</p>
    </main>
  );
}
