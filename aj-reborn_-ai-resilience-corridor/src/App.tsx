/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./components/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Mechanism } from "./components/Mechanism";
import { PhoenixShowcase } from "./components/PhoenixShowcase";
import { SynergySection } from "./components/SynergySection";
import { FounderSection } from "./components/FounderSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <main className="relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <Mechanism />
        <PhoenixShowcase />
        <SynergySection />
        <FounderSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

