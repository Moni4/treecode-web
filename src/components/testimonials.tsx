import { testimonials } from "@/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const Testimonials = () => {
  return (
    <div className="mt-10 rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};
