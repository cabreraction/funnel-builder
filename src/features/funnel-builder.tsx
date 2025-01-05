// internal modules
import { 
  TForm,
  TBannersCarousel,
  TFunnelComponent, 
  TPricingComponent,
  TTestimonialsComponent,
  TFeaturesSummaryComponent, 
} from "@/core/models/funnel.model";
import { Navbar } from "@/core/components/Navbar";
import { DynamicForm } from "@/core/components/Form";
import { TComponentMeta } from "@/core/components/Navbar";
import { PricingComponent } from "@/core/components/Pricing";
import { Testimonials } from "@/core/components/Testimonials";
import { FeaturesSummary } from "@/core/components/FeaturesSummary";
import { BannersCarousel } from "@/core/components/BannersCarousel";

export function FunnelBuilder({brand, components}: {
  brand: string; 
  components: TFunnelComponent[]
}) {
  const sortedComponents = components.sort((a, b) => a.position - b.position); 
  const componentsMeta = sortedComponents
    .filter(c => !!c.displayTitle)
    .map((component) => ({ id: component.id, displayTitle: component.displayTitle }));

  return (
    <div className="w-full relative">
      <Navbar brand={brand} components={componentsMeta as TComponentMeta[]} />
      <div className="w-full flex flex-col gap-y-4 xl:gap-y-10 py-4 xl:py-10">
      {sortedComponents.map((component) => (
        <div key={component.id} className="w-full">
          {renderComponent(component)}
        </div>
      ))}
    </div>
    </div>
    
  );
}

function renderComponent(component: TFunnelComponent) {
  switch (component.type) {
    case 'FEATURES_SUMMARY':
      return (
        <FeaturesSummary 
          id={component.id}
          position={component.position}
          summary={component.structure as TFeaturesSummaryComponent} 
        />
      );
    case 'TESTIMONIALS':
      const {title, testimonials} = component.structure as TTestimonialsComponent;
      return (
        <Testimonials 
          title={title}
          id={component.id}
          testimonials={testimonials}
          position={component.position}
        />
      );
    case 'FORM':
      return (
        <DynamicForm 
          id={component.id} 
          position={component.position}
          formConfig={component.structure as TForm} 
        />
      );
    case 'BANNERS_CAROUSEL':
      return (
        <BannersCarousel 
          id={component.id}
          position={component.position}
          carouselConfig={component.structure as TBannersCarousel} 
        />
      );
    case 'PRICING':
      return (
        <PricingComponent 
          id={component.id}
          position={component.position} 
          pricingConfig={component.structure as TPricingComponent} 
        />
      );
    default: 
      return null;
  }
}