import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Our Ratings"
      subtitle="Loved by Food Enthusiasts"
      tagline="Real Reviews, Real Flavors"
      backgroundImage="/banner.jpg"
      showForks={false}
    />
  );
};

export default Hero;
