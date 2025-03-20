"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What is Model United Nations?",
      answer:
        "Ever dreamt of wielding diplomatic immunity without the pesky paparazzi? Model United Nations (MUN) is your golden ticket! Step into the polished shoes of UN delegates, debate pressing global issues, draft resolutions, and experience the thrill of international politics—all without the need for a security detail.",
    },
    {
      question: "Who can participate in AIT MUN?",
      answer:
        "Are you a high school or college student with aspirations of global domination—er, we mean, diplomacy? Whether you're a novice negotiator or a seasoned statesperson, AIT MUN welcomes all who are ready to engage in the art of political persuasion.",
    },
    {
      question: "How do I register for AIT MUN?",
      answer:
        "Eager to join the ranks of future world leaders? Navigate to our website, click the 'Register Now' button, and follow the prompts. It's simpler than passing a unanimous resolution in the General Assembly.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Ah, the budgetary inquiry! Yes, there is a registration fee, but consider it a strategic investment in your burgeoning political career—or at the very least, excellent fodder for your future memoirs.",
    },
    {
      question: "What should I prepare before the conference?",
      answer:
        "Besides your best power suit? Delve into the intricacies of your assigned country, master your committee's agenda, and hone your oratory skills. Remember, in the world of diplomacy, a well-placed quote can be as disarming as a well-aimed...sanction.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "Concerned about your diplomatic quarters? Fear not! We offer accommodation options for our esteemed out-of-town delegates. Details are available on our logistics page. Rest assured, your stay will be more comfortable than a late-night parliamentary session.",
    },
    {
      question: "How can my organization sponsor AIT MUN?",
      answer:
        "Looking to align your brand with the next generation of global influencers? Reach out to us at aitpunemun@gmail.com, and let's negotiate a partnership that's as mutually beneficial as a well-crafted trade agreement.",
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
            aitpunemun@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

