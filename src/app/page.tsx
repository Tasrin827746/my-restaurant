import HappyHours from "@/components/Home/HappyHours";
import HeroBanner from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Review";
import TopItems from "@/components/Home/TopItem";

export default function Home() {
  return (
    <>
    <HeroBanner />
    <TopItems />
    <HappyHours />
    <Testimonials />
    </>
  );
}
