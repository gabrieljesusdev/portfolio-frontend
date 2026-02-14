"use client";

import React from "react";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";
import HeaderSection from "@/components/sections/header";
import ProjectsSection from "@/components/sections/projects";
import OthersPortfoliosSection from "@/components/sections/othersportfolios";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import BudgetSection from "@/components/sections/budget";
import { useFetchProjects } from "@/queries/projects/get";
import Separator from "@/components/ui/Separator";
import Loading from "@/components/layout/loading";

export default function Home() {
  const { data, isLoading } = useFetchProjects();
  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar />
      <Separator />

      <main>
        <HeaderSection />
        <Separator />

        <ProjectsSection projects={data || []} />
        <Separator />

        <OthersPortfoliosSection />
        <Separator />

        <AboutSection />
        <Separator />

        <ContactSection />
        <Separator />

        <BudgetSection />
      </main>
      <Footer />
    </>
  );
}
