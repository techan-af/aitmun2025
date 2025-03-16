"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What is Model United Nations?",
      answer:
        "Model United Nations (MUN) is an educational simulation where students roleplay as delegates representing different countries in United Nations committees. Participants research, debate, and develop solutions to global challenges while following diplomatic protocols.",
    },
    {
      question: "Who can participate in AIT MUN?",
      answer:
        "AIT MUN is open to college and university students from all academic backgrounds. We welcome both experienced MUN participants and newcomers who are interested in international relations, diplomacy, and public speaking.",
    },
    {
      question: "What is the theme for this year's AIT MUN?",
      answer:
        "This year's theme is centered around World War II, exploring its historical context and drawing parallels to contemporary global challenges. Each committee will address specific aspects related to this pivotal period in world history.",
    },
    {
      question: "How do I register for AIT MUN?",
      answer:
        "Registration is available through our online form accessible via the 'Register Now' button on our website. You'll need to provide your personal information, academic details, and committee preferences.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, there is a registration fee that covers conference materials, meals during the event, certificates, and potential awards. Fee details are available on the registration page, with early bird discounts for those who register before the deadline.",
    },
    {
      question: "What should I prepare before the conference?",
      answer:
        "Delegates should research their assigned country's position on the committee topics, prepare a position paper, and familiarize themselves with MUN rules of procedure. Background guides and research resources will be provided after registration.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "We offer accommodation options for outstation delegates at additional cost. Details about accommodation arrangements and fees are available during the registration process.",
    },
    {
      question: "How can my organization sponsor AIT MUN?",
      answer:
        "We offer various sponsorship tiers (Gold, Silver, and others) with different benefits and visibility options. Please contact our sponsorship team at sponsors@aitmun.org for detailed information about partnership opportunities.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-navy">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-theme-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">Find answers to common questions about AIT MUN.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-lg py-4 text-theme-navy hover:text-theme-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions? Feel free to reach out to us.</p>
            <a href="mailto:info@aitmun.org" className="text-theme-navy hover:text-theme-blue font-medium">
              info@aitmun.org
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

