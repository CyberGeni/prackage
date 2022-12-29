import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HorizontalTab() {
  let [plans] = useState({
    "Monthly billing": [
      {
        id: 1,
        type: "Standard plan",
        price: "100,000",
        billing: "Billed monthly",
        features: [
          "C&D list media coverage",
          '8 hrs daily errands a.k.a. "Get things done!"',
          "Image management",
          "Profile update",
          "Priority cha and email support",
          "Unlimited consultation",
          "Customised birthday cards",
          "Executive bio",
          "Event invitation",
          "Dedicated personal brand manager",
          "Personal brand roadmap",
        ],
      },
      {
        id: 2,
        type: "Jumpstart plan",
        price: "",
        billing: "Request a call",
        features: [
          "Chaperone services",
          "SEO & link building",
          "Pickup services",
          "Content production",
          "Full Website design and development",
          "Photography",
          "Media appearances",
        ],
      },
    ],
    "Quarterly billing": [
      {
        id: 1,
        type: "Standard plan",
        price: "66,000",
        billing: "Billed quarterly",
        features: [
          "C&D list media coverage",
          '8 hrs daily errands a.k.a. "Get things done!"',
          "Image management",
          "Profile update",
          "Priority cha and email support",
          "Unlimited consultation",
          "Customised birthday cards",
          "Executive bio",
          "Event invitation",
          "Dedicated personal brand manager",
          "Personal brand roadmap",
        ],
        button: "Pay now",
      },
      {
        id: 2,
        type: "Jumpstart plan",
        price: "",
        billing: "Request a call",
        features: [
          "Chaperone services",
          "SEO & link building",
          "Pickup services",
          "Content production",
          "Full Website design and development",
          "Photography",
          "Media appearances",
        ],
        button: "Request a call",
      },
    ],
  });
  console.log(plans);
  return (
    <div className="mx-auto w-full py-8 bg-blue-50">
      <h1 className="bg-white text-center text-3xl text-gray-600 font-semibold pt-16">Choose one that fits</h1>
      <Tab.Group>
        <div className="bg-white w-full py-4 pb-16">
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-50 border border-blue-100 p-1 max-w-md mx-auto">
          {Object.keys(plans).map((plan) => (
            <Tab
              key={plan}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-100 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-gray-500 hover:bg-white/[0.12] hover:bg-blue-100"
                )
              }
            >
              {plan}
            </Tab>
          ))}
        </Tab.List>
        </div>
        <Tab.Panels className="mt-2 mx-auto">
          {Object.values(plans).map((billing, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl p-3 w-4/5 md:w-5/6 mx-auto ",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-100 focus:outline-none focus:ring-2"
              )}
            >
              <section className="grid gap-6 md:gap-8 md:grid-cols-2">
                {billing.map((bill) => (
                  <div
                    key={billing.id}
                    className="relative rounded-md bg-white"
                  >
                    <div className="flex justify-between items-center px-4 py-6 border-b gap-1">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {bill.type}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {bill.billing}
                        </p>
                      </div>
                      <div className="flex justify-end flex-wrap items-start">
                        {bill.price && 
                          <span className="text-2xl font-extrabold mx-1">N</span>
                        }
                        <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900">
                          {bill.price}
                        </p>
                        {bill.price &&
                          <span className="self-end text-gray-600 mb-1.5 mx-1">per month</span>
                        }
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-gray-700 px-4 pt-3 pb-2">FEATURES</h4>
                    <div className="grid space-y-3 px-4">
                      
                      {bill.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" rx="12" fill="#D1E9FF" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.096 7.39016L9.93602 14.3002L8.03602 12.2702C7.68602 11.9402 7.13602 11.9202 6.73602 12.2002C6.34602 12.4902 6.23602 13.0002 6.47602 13.4102L8.72602 17.0702C8.94602 17.4102 9.32601 17.6202 9.75601 17.6202C10.166 17.6202 10.556 17.4102 10.776 17.0702C11.136 16.6002 18.006 8.41016 18.006 8.41016C18.906 7.49016 17.816 6.68016 17.096 7.38016V7.39016Z"
                            fill="#2F80ED"
                          />
                        </svg>
                        <p className="text-wrap w-fit text-sm font-normal leading-5 text-gray-500">
                          {feature}
                        </p>
                      </div>
                    ))}
                    </div>
                    <div>
                      <button></button>
                      <button></button>
                    </div>            
                  </div>
                ))}
              </section>

            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
