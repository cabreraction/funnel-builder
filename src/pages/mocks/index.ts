import { formMock } from "./form";
import { bannersMock } from "./banners";
import { featuresSummaryMock } from "./features";
import { pricingComponentMock } from "./pricing";
import { testimonialsMock } from "./testimonials";
import { TFunnelComponent } from "@/core/models/funnel.model";

export const funnelMock: TFunnelComponent[] = [
  {
    id: 'abc123',
    position: 1,
    type: 'FEATURES_SUMMARY',
    displayTitle: 'Features',
    structure: featuresSummaryMock,
  },
  {
    id: 'def567',
    position: 2,
    type: 'BANNERS_CAROUSEL',
    structure: bannersMock,
  },
  {
    id: 'def456',
    position: 3,
    type: 'TESTIMONIALS',
    structure: testimonialsMock,
    displayTitle: 'Testimonials',
  },
  {
    id: 'def345',
    position: 4,
    type: 'PRICING',
    structure: pricingComponentMock,
    displayTitle: 'Pricing',
  },
  {
    id: 'ghi789',
    position: 5,
    type: 'FORM',
    structure: formMock,
    displayTitle: 'Contact Us',
  }
];