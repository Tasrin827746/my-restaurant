import HeroSection from '@/components/Reusable/Hero';

const Hero = () => {
  return (
    <HeroSection
      title="Who We Are"
      subtitle="Passionately Italian"
      tagline="Crafting Experiences Through Food"
      backgroundImage="/banner.jpg"
      showForks={false}
    />
  );
};

export default Hero;
