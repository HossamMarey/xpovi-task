import HeroSection from "@/components/Home/HeroSection";
import MainHead from "@/components/Seo/MainHead";
import MainLayout from "@/layouts/index";

export default function Home() {
  return (
    <MainLayout>
      <MainHead title="Home" />
      <HeroSection />
    </MainLayout>
  );
}
