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
        price: "66,000",
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
                "rounded-xl p-3 w-3/5 mx-auto ",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-100 focus:outline-none focus:ring-2"
              )}
            >
              <section className="w-full grid gap-8 md:grid-cols-2">
                {billing.map((bill) => (
                  <div
                    key={billing.id}
                    className="relative rounded-md p-3 bg-white"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {bill.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{bill.type}</li>
                      <li>{bill.price}</li>
                    </ul>
                    {bill.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <svg
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
                        <p className="text-sm font-normal leading-5 text-gray-500">
                          {feature}
                        </p>
                      </div>
                    ))}
                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
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
