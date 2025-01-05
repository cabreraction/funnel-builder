// external dependencies
import Image from "next/image";
import { HR, Card, Blockquote } from "flowbite-react";

// internal modules
import { TIndividualTestimonial } from "@/core/models/funnel.model";

export function Testimonials({id, position, testimonials, title}: { 
  id: string;
  title: string; 
  position: number;
  testimonials: TIndividualTestimonial[] 
}) {
  const bg = position % 2 === 0 ? "" : "bg-[#F3F4F6] py-10";
  return (
    <div id={id} className={`px-6 lg:px-10 flex w-full justify-center ${bg}`}>
      <div className="w-full xl:w-[70%] items-center flex flex-col gap-y-8">
        <h2 className="text-xl xl:text-4xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonial({testimonial}: {testimonial: TIndividualTestimonial}) {
  return (
    <Card className="flex flex-col gap-y-4 w-full md:w-[45%] lg:w-[32%]">
      <Blockquote className="text-lg">{testimonial.content}</Blockquote>
      <HR />
      <div className="flex flex-col items-center">
        <Image src={testimonial.userImageUrl} width={512} height={512} alt="" className="rounded-full w-[150px] mb-4" />
        <p className="text-lg font-bold">{testimonial.userName}</p>
        <p className="text-sm">{testimonial.userDetails}</p>
      </div>
    </Card>
  );
}