"use client";
import ArrowDownIcon from "@/assets/icons/arrowDownIcon";
import GeneralPage from "@/components/page/generalPage";
import { useState } from "react";
import { motion } from "framer-motion";

const faq = [
  {
    category: "Product & Order",
    items: [
      {
        question: "Why can't I order wall fabric width more than 116 inches?",
        answer:
          "Our wall fabric has a maximum width of 116 inches due to manufacturing constraints. However, if you need a larger height, we can split the fabric into sections for printing. This allows us to maintain quality and ensure a seamless final result. Feel free to contact us for custom solutions that fit your specific requirements.",
      },
      {
        question:
          "Why does the square footage calculation differ from the size I input?",
        answer:
          "Our fabric is priced based on a standard height of 120 inches. When you place an order, we use this standard height to produce your fabric, which can result in some material waste. This waste is included in the pricing to ensure the quality and precision of the final product. If you have any questions about the calculation, please contact us for more details.",
      },
      {
        question: "Why is there a service fee on every order?",
        answer:
          "The service fee covers various costs associated with each order, including labor, machine setup, material waste, and other operational expenses. This fee helps us maintain high-quality standards and ensures efficient service. We do not have a minimum order requirement, but if you have multiple orders, please contact us to discuss potential options or discounts.",
      },
      {
        question:
          "Does the product calculation cover shipping and installation cost?",
        answer:
          "No, the price covers the cost of the products and the service fee only. Shipping and installation fees vary depending on the location. For a detailed quote and to discuss these additional costs, please contact us with your project details.",
      },
      {
        question: "Can I print anything I like on the fabric?",
        answer:
          "Absolutely! We can print any image on our fabric. We'll assess the quality of your photo to ensure it’s produced with vibrant colors and clear details. If you don’t have a specific image in mind, feel free to visit our inspiration page or share your ideas with us. We’re here to help you transform your space with creative solutions.",
      },
      {
        question:
          "How can I determine which wall covering is suitable for my space?",
        answer:
          "Contact us with details about your space, and we’ll recommend the best wall covering options to suit your needs. You’re also welcome to visit our showroom in Markham, Ontario, during office hours. There, you can explore different fabrics, colours and receive free samples to help you make an informed decision. Feel free to come by and experience our materials firsthand!",
      },
    ],
  },
  {
    category: "Installation",
    items: [
      {
        question: "Do you provide installation services?",
        answer:
          "Yes, we offer professional installation services in the Greater Toronto Area (GTA) and other locations. Please provide us with the details of your project, and we’ll be happy to arrange for our team to handle the installation. For installations outside of the GTA, please contact us to discuss available options.",
      },
    ],
  },
  {
    category: "Maintenance",
    items: [
      {
        question: "How long is the maintenance period covered?",
        answer:
          "The maintenance period lasts for 3 years from the completion of the project. During this time, we ensure that the wall covering remains securely in place and address any issues to prevent it from falling or detaching. If you have any concerns during this period, please contact us for assistance.",
      },
    ],
  },
];

export default function Page() {
  const [expandIndex, setExpandIndex] = useState<string[]>([]);

  const handleQuestionClick = (index: string) => {
    setExpandIndex((prev) =>
      expandIndex.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <GeneralPage title="Frequently Asked Questions">
      {faq.map((faqSection, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="text-xl pb-4 text-primary-text-highlight font-semibold">
            {faqSection.category}
          </div>
          <div>
            {faqSection.items.map((faq, questionIndex) => {
              const index = `${sectionIndex}-${questionIndex}`;
              const isExpand = expandIndex.includes(index);
              return (
                <div key={questionIndex}>
                  <div
                    className={`flex items-center justify-between w-full ${
                      isExpand
                        ? "border-primary-border-selected"
                        : "border-primary-border"
                    } border-b py-4 font-semibold`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    {faq.question}
                    <div
                      className={`transition-transform duration-300 ${
                        isExpand && "transform scale-y-[-1]"
                      }`}
                    >
                      <ArrowDownIcon />
                    </div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpand ? "auto" : 0,
                      marginTop: isExpand ? "1rem" : "0rem",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden text-sm`}
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </GeneralPage>
  );
}
