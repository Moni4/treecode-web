import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { services } from "@/constants";
import Image from "next/image";

export const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-36" id="services">
      {services.map(({ id, icon, title, description }) => (
        <Card key={id} className="shadow-3xl">
          <CardHeader className="lg:min-h-[9.6rem]">
            <span>{icon}</span>
            {/* <Image
              src={icon}
              alt="title"
              width={33}
              height={33}
              className="object-contain mb-3"
            /> */}
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <p className="text-xs lg:text-sm font-normal">{description}</p>
            </div>
          </CardContent>
          {/* <CardFooter>
            <button className="treecode-button text-sm">Ver más</button>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
};
