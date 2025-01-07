export default function FAQSection() {
    const faqs = [
      {
        question: "Can I book an appointment on behalf of someone else?",
        answer: "Yes, you can book an appointment for someone else. Just ensure their details are correctly entered during the booking process.",
      },
      {
        question: "Do I need a referral to see a Physiotherapist?",
        answer: "No, you don’t need a referral. You can book directly with a physiotherapist at your convenience.",
      },
      {
        question: "Do you have venue options for appointments?",
        answer: "Yes, we provide multiple venue options for your appointments. Please select the one most convenient for you.",
      },
      {
        question: "What if I have more questions that are not answered here?",
        answer: "Feel free to contact our support team via email or phone. We are here to assist you with any queries.",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <details className="group p-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                  {faq.question}
                  <span className="text-indigo-500 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    );
  }
  