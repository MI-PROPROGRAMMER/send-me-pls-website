import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "How does Send Me Pls work?",
      answer: "Simply place your order through our app, selecting items from multiple stores in the same shopping center. A Runner will shop for you and deliver everything in one go, saving you time and delivery fees."
    },
    {
      question: "What areas do you service?",
      answer: "We currently service the Somerset West area and surrounding regions in the Western Cape. We're constantly expanding to new areas. Check the app for availability in your location."
    },
    {
      question: "How much does delivery cost?",
      answer: "Delivery costs are transparent and calculated based on distance and the number of stores. You'll see the exact cost before confirming your order. No hidden fees."
    },
    {
      question: "Can I order from different stores at once?",
      answer: "Absolutely! That's our specialty. You can order from multiple stores within the same shopping center, and your Runner will collect everything in one trip."
    },
    {
      question: "How do I track my order?",
      answer: "Once your Runner accepts your order, you can track their progress in real-time through the app. You'll receive notifications at each stage of the delivery."
    },
    {
      question: "What if an item is out of stock?",
      answer: "Your Runner will contact you directly if any item is unavailable. You can choose a substitute or remove the item from your order."
    },
    {
      question: "How do I become a Runner?",
      answer: "Download the Runner app, complete your registration with required documents, and start accepting delivery jobs. It's that simple!"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, as well as digital payment methods through our secure app."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "There's no strict minimum, but keep in mind that delivery fees may make very small orders less economical. Check the app for current delivery rates."
    },
    {
      question: "What are your operating hours?",
      answer: "We operate Monday through Sunday, from 9:00 AM to 11:00 PM. Hours may vary by location and Runner availability."
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-center text-muted-foreground mb-12">Find answers to common questions about Send Me Pls</p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
