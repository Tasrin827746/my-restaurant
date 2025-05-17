import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Get in Touch"
      subtitle="We’re Here to Help"
      tagline="Let's Make Something Delicious Together"
      backgroundImage="/banner.jpg"
      showForks={false}
    />
  );
};

export default Hero;
