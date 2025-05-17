import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Our Menu"
      subtitle="Authentic Italian Flavors"
      tagline="Savor Every Bite"
      backgroundImage="/banner.jpg"
      showForks={false}
    />
  );
};

export default Hero;
