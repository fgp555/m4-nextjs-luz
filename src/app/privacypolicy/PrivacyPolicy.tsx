const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-black text-white p-6 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-0">Privacy Policy</h2>
            <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Introduction</h3>
                <p className="mb-6">
                    At AppleCenter, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Information We Collect</h3>
                <p className="mb-6">
                    We collect personal data such as your name, email address, and phone number, as well as usage data through cookies to enhance your experience on our site.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Use of Information</h3>
                <p className="mb-6">
                    We use your information to process transactions, improve our services, and communicate with you. We do not sell your information to third parties.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Data Protection</h3>
                <p className="mb-6">
                    We implement advanced security measures to protect your personal information from unauthorized access, alteration, or destruction. These include encryption, secure servers, and regular security assessments.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Your Rights</h3>
                <p className="mb-6">
                    You can access, correct, or request deletion of your data.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-pink-0">Contact Us</h3>
                <p className="mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at [Your Email Address]. We are committed to resolving any concerns you may have about your privacy.
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
