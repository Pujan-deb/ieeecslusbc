"use client";

import AchievementSection from "@/components/Homepage/AchievementSection/Achievement";
import ActivitySection from "@/components/Homepage/ActivitySection/ActivitySection";
import HeroSection from "@/components/Homepage/HeroSection";
import IntroSection from "@/components/Homepage/IntroSection";
import JoinUsSection from "@/components/Homepage/JoinUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-6 lg:mx-52">
        <IntroSection />
        <ActivitySection />
        <AchievementSection />
      </div>
      <JoinUsSection />
    </>
  );
}
