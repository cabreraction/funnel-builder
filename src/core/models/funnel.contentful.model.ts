// internal modules
import { TFunnelComponent } from "./funnel.model";

export type TContentfulFunnel = {
  funnel: {
    title: string;
    brand: string;
    'funnel-config': TFunnelComponent[];
  }
}