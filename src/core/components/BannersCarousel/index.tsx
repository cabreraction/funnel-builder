// external dependencies
import Image from "next/image";
import { Carousel } from "flowbite-react";

// internal modules
import { TBannersCarousel } from "@/core/models/funnel.model";

export function BannersCarousel({
  id,
  position,
  carouselConfig
}: {
  id: string;
  position: number;
  carouselConfig: TBannersCarousel
}) {
  const bg = position % 2 === 0 ? "" : "bg-[#F3F4F6] py-10";
  return (
    <div id={id} className={`px-6 lg:px-10 flex justify-center ${bg}`}>
      <Carousel className="h-auto xl:w-[70%]" pauseOnHover slideInterval={5000}>
        {carouselConfig.banners.map((banner) => (
          <div key={banner.id} className="relative w-full" style={{ paddingBottom: '66.7%' }}> {/* 3:2 aspect ratio */}
            <Image 
              layout="fill"
              className="absolute top-0 left-0 w-full h-full object-contain" 
              alt={banner.altText}
              src={banner.imageUrl} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}