// external dependencies
import { Table, Button } from "flowbite-react";

// internal modules
import { TPricingComponent } from "@/core/models/funnel.model";

export function PricingComponent({
  id,
  position,
  pricingConfig
}: {
  id: string;
  position: number;
  pricingConfig: TPricingComponent
}) {
  const { title, features, options } = pricingConfig;
  const bg = position % 2 === 0 ? "" : "bg-[#F3F4F6] py-10";
  return (
    <div id={id} className={`flex w-full justify-center py-10 px-6 lg:px-10 ${bg}`}>
      <div className="w-full lg:w-[90%] xl:w-[70%] items-center flex flex-col gap-y-8">
        <h2 className="text-center text-xl xl:text-4xl font-bold">{title}</h2>
        <PricingTable features={features} options={options} />
      </div>
    </div>
  );
}

function PricingTable({features, options}: Omit<TPricingComponent, 'title'>) {
  return (
    <div className="overflow-x-auto w-full">
      <Table className="lg:!text-lg ">
        <Table.Head>
          <Table.HeadCell>Feature</Table.HeadCell>
          {options.map((option, index) => (
            <Table.HeadCell key={index} className="text-center">{option.title}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {features.map((feature, featureIndex) => (
            <Table.Row key={featureIndex}>
              <Table.Cell className="p-2 lg:p-4">{feature}</Table.Cell>
              {options.map((option, optionIndex) => (
                <Table.Cell key={optionIndex} className="text-center">
                  {option.featuresIncluded[featureIndex] ? '✔️' : '❌'}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell></Table.Cell>
            {options.map((option, optionIndex) => (
              <Table.Cell key={optionIndex} className="text-center">
                <Button target="_blank" className="bg-[#E63946] hover:!bg-[#C02636] focus:outline-none focus:ring-0" href={option.buttonUrl}>{option.buttonLabel}</Button>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}