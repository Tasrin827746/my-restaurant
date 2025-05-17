import Image from "next/image";
import { FC } from "react";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface PastaSectionProps {
  title: string;
  imageSrc: string;
  items: MenuItem[];
  imageRight?: boolean;
 bgColor?: string;
}

const Menu: FC<PastaSectionProps> = ({
  title,
  imageSrc,
  items,
  imageRight = false,
  bgColor = "bg-white",
}) => {
  return (
    <div className={bgColor}>
     
      <section id="menu"
        className={`flex flex-col md:flex-row items-center justify-center p-12 gap-8 max-w-6xl mx-auto ${
          imageRight ? "md:flex-row-reverse" : ""
        }`}
      >
        
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt="Menu Image"
            width={600}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold font-serif mb-4">{title}</h2>
          <hr className="border-gray-300 w-16 mb-4" />
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <span className="text-lg font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};


export default Menu;
