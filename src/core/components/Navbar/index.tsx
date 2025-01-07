// external dependencies
// import Link from "next/link";
import { Navbar as FBNavbar } from "flowbite-react";

export type TComponentMeta = {
  id: string;
  displayTitle: string;
};

export function Navbar({brand, components}: {brand: string; components: TComponentMeta[]}) {
  return (
    <FBNavbar className="bg-[#1F2937] text-white sticky top-0 z-10" >
      <FBNavbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold">{brand}</span>
      </FBNavbar.Brand>
      <FBNavbar.Toggle />
      <FBNavbar.Collapse>
        {components.map((component) => (
            <FBNavbar.Link key={component.id} href={`#${component.id}`} className="text-white">
              {component.displayTitle}
            </FBNavbar.Link>
          ))}
      </FBNavbar.Collapse>
    </FBNavbar>
  );
}