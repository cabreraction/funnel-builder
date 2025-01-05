type TComponentType = 
  'FORM'
  | 'PRICING'
  | 'TESTIMONIALS'
  | 'FEATURES_SUMMARY'
  | 'BANNERS_CAROUSEL';

export type TIndividualFeature = {
  iconUrl: string;
  description: string;
};

export type TFeaturesSummaryComponent = {
  title: string;
  features: TIndividualFeature[];
};

export type TIndividualTestimonial = {
  content: string;
  userName: string;
  userDetails: string;
  userImageUrl: string;
}

export type TTestimonialsComponent = {
  title: string;
  testimonials: TIndividualTestimonial[];
};

export type TFormField = {
  name: string;
  required: boolean;
  placeholder: string;
  inputType: 'input' | 'textarea';
  type: 'text' | 'email' | 'password';
};

export type TForm = {
  title: string;  
  actionUrl: string;
  fields: TFormField[];
  descriptiveText: string;
  submitButtonLabel: string;
};

export type TBannersCarousel = {
  banners: {
    id: string;
    altText: string;
    imageUrl: string;
  }[];
}

export type TPricingOption = {
  title: string;
  price: string;
  buttonUrl: string;
  buttonLabel: string;
  featuresIncluded: boolean[];
};

export type TPricingComponent = {
  title: string;
  options: any[];
  features: string[];
};

export type TFunnelComponent = {
  id: string;
  position: number;
  type: TComponentType;
  displayTitle?: string;
  structure: 
    TForm
    | TBannersCarousel
    | TPricingComponent
    | TTestimonialsComponent 
    | TFeaturesSummaryComponent;
};