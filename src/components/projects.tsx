import Image from "next/image";
import { projects } from "@/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-12 mb-36" id="projects">
      {projects.map(({ id, img, icon, title, description }) => (
        <Card key={id} className="shadow-sm ring-[2px] ring-[#00000014]">
          <CardHeader className="lg:min-h-[8rem]">
            <Image
              src={img}
              alt={title}
              width={400}
              height={330}
              className="object-contain self-center mb-3"
            />
            <Image
              src={icon}
              alt='foldericon'
              width={25}
              height={25}
              className="object-contain mb-3"
            />
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
