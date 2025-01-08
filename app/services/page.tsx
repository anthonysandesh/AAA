import { ServicesHero } from "@/components/services/ServicesHero";

import { AIDevelopment } from "@/components/services/AIDevelopment";

import { AIAutomation } from "@/components/services/AIAutomation";

import { WhyChooseUs } from "@/components/services/WhyChooseUs";

import { ServicesCTA } from "@/components/services/ServicesCTA";



export const metadata = {

  title: 'AI Automation Services | Custom AI Solutions',

  description: 'Transform your business with our AI automation services. Custom AI solutions, workflow automation, and intelligent systems tailored to your needs.',

};



export default function ServicesPage() {

  return (

    <main className="pt-20">

      <ServicesHero />

      <AIDevelopment />

      <AIAutomation />

      <WhyChooseUs />

      <ServicesCTA />

    </main>

  );

}
