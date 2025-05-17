import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Spicy"
      subtitle="Italian Special"
      tagline="Good Food | Good Mood"
      backgroundImage="/banner.jpg"
      showForks={true}
    />
  );
};

export default Hero;
