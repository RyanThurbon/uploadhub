"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Start with essential tools to boost your uploading.",
    monthlyPrice: 9.99,
    annualPrice: 4.99,
    link: "#",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    name: "Professional",
    description: "Unlock enhanced features and premium content to supercharge your uploading.",
    monthlyPrice: 19.99,
    annualPrice: 11.99,
    link: "#",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    name: "Enterprise",
    description: "Ultimate customization and dedicated support for all your needs.",
    monthlyPrice: 39.99,
    annualPrice: 29.99,
    link: "#",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col justify-center space-y-4 items-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200 text-center">
          Fair pricing, unfair advantage.
        </p>
        <p className="text-md max-w-xl text-gray-700 md:text-center dark:text-gray-300 text-center">
          Get started with Uploadhub today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("M")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "M"
              ? "relative bg-primary text-white "
              : "text-gray-700 hover:bg-primary/50 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Monthly
          {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle("A")}
          className={cn(
            `rounded-lg px-4 py-2 text-sm font-medium `,
            billingCycle === "A"
              ? "relative bg-primary text-white "
              : "text-gray-700 hover:bg-primary/50 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Annual
          {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex max-w-[95%] md:w-full md:max-w-2xl lg:max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="w-full rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600">
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-primary font-semibold">{plan.name}</p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>${billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}</span>
                <span className="text-sm font-medium">/{billingCycle === "M" ? "month" : "year"}</span>
              </motion.p>
            </AnimatePresence>
            <Link href={plan.link}>
              <motion.button
                whileTap={{ scale: 0.985 }}
                className="mt-8 w-full rounded-lg bg-priamry py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-primary" size={18} />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden  py-12 text-black lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-primary"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function PricingSection() {
  return <Pricing />;
}
