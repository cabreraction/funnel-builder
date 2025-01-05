import { TPricingComponent } from "@/core/models/funnel.model";

export const pricingComponentMock: TPricingComponent = {
  title: "Hypertrophy Business Funnel Pricing",
  features: [
    "Access to basic workout plans",
    "Weekly progress tracking",
    "Personalized diet plans",
    "One-on-one coaching sessions",
    "Access to premium content"
  ],
  options: [
    {
      title: "Basic",
      price: "$19.99",
      buttonUrl: "https://stripe.com/",
      buttonLabel: "Purchase",
      featuresIncluded: [true, false, false, false, false]
    },
    {
      title: "Standard",
      price: "$49.99",
      buttonUrl: "https://stripe.com/",
      buttonLabel: "Purchase",
      featuresIncluded: [true, true, true, false, false]
    },
    {
      title: "Premium",
      price: "$99.99",
      buttonUrl: "https://stripe.com/",
      buttonLabel: "Purchase",
      featuresIncluded: [true, true, true, true, true]
    }
  ]
};