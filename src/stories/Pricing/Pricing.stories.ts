import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PricingComponent } from '@/core/components/Pricing';

const pricingMock = {
  position: 1,
  id: "pricing",
  pricingConfig:  {
    "title": "Hypertrophy Business Funnel Pricing",
    "options": [
        {
            "price": "$19.99",
            "title": "Basic",
            "buttonUrl": "https://stripe.com/",
            "buttonLabel": "Purchase",
            "featuresIncluded": [
                true,
                false,
                false,
                false,
                false
            ]
        },
        {
            "price": "$49.99",
            "title": "Standard",
            "buttonUrl": "https://stripe.com/",
            "buttonLabel": "Purchase",
            "featuresIncluded": [
                true,
                true,
                true,
                false,
                false
            ]
        },
        {
            "price": "$99.99",
            "title": "Premium",
            "buttonUrl": "https://stripe.com/",
            "buttonLabel": "Purchase",
            "featuresIncluded": [
                true,
                true,
                true,
                true,
                true
            ]
        }
    ],
    "features": [
        "Access to basic workout plans",
        "Weekly progress tracking",
        "Personalized diet plans",
        "One-on-one coaching sessions",
        "Access to premium content"
    ]
  }
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Pricing',
  component: PricingComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { ...pricingMock },
} satisfies Meta<typeof PricingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...pricingMock },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/* export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}; */
