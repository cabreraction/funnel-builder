// external dependencies
import Image from "next/image";

// internal modules
import { 
  TIndividualFeature, 
  TFeaturesSummaryComponent, 
} from "@/core/models/funnel.model";

export function FeaturesSummary({
  id, 
  summary,
  position,
}: {
  id: string;
  position: number;
  summary: TFeaturesSummaryComponent
}) {
  const bg = position % 2 === 0 ? "" : "bg-[#F3F4F6] py-10";
  return (
    <div 
      id={id} 
      className={`flex w-full justify-center px-6 lg:px-10 ${bg}`}>
      <div className="w-full lg:w-[90%] xl:w-[70%] items-center flex flex-col gap-y-8">
        <h2 className="text-center text-xl xl:text-4xl font-bold">{summary.title}</h2>
        <div className="flex flex-col lg:flex-row flex-wrap gap-x-4 gap-y-8 justify-center">
          {summary.features.map((feature, index) => (
            <Feature key={index} index={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature({feature, index}: {index: number; feature: TIndividualFeature}) {
  return (
    <div className={`flex gap-x-4 lg:flex-col gap-y-2 items-center w-full lg:w-auto ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image src={feature.iconUrl} width={512} height={512} alt="" className="w-[100px]" />
      <p className="lg:w-[250px] text-lg text-center text-wrap whitespace-normal">{feature.description}</p>
    </div>
  );
}