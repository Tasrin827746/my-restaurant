import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Reserve a Table"
      subtitle="Experience Italian Excellence"
      tagline="Book Now & Enjoy Authentic Cuisine"
      backgroundImage="/banner.jpg"
      showForks={false}
    />
  );
};

export default Hero;
