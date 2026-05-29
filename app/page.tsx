import ClientScripts from "@/components/ClientScripts";
import ImageSlotTagger from "@/components/ImageSlotTagger";
import {
  Nav,
  HomeView,
  OtherStubs,
  NeuroedOverview,
  NeuroedElearning,
  InnovationMima,
  AboutIndex,
  AboutLegacy,
  AboutMission,
  AboutPillars,
  AboutTeam,
  ProgramsIndex,
  ProgramsCulture,
  ProgramsGuild,
  ProgramsCbhi,
  Contact,
  ResourcesIndex,
  ResBrainAge,
  ResHealthyChoices,
  ResNeurofirstAid,
  ResBrainReceipts,
  MediaImpact,
  MediaResearch,
  MediaGallery,
  MediaNews,
  MediaIndex,
  NcfAlumni,
  MobileNav,
  Footer,
} from "@/components/sections";

/**
 * Section order EXACTLY mirrors the original <body> order from the source HTML,
 * so DOM order, CSS cascade interaction, and routing-by-ID all keep working.
 */
export default function Page() {
  return (
    <>
      <Nav />
      <HomeView />
      <OtherStubs />
      <NeuroedOverview />
      <NeuroedElearning />
      <InnovationMima />
      <AboutIndex />
      <AboutLegacy />
      <AboutMission />
      <AboutPillars />
      <AboutTeam />
      <ProgramsIndex />
      <ProgramsCulture />
      <ProgramsGuild />
      <ProgramsCbhi />
      <Contact />
      <ResourcesIndex />
      <ResBrainAge />
      <ResHealthyChoices />
      <ResNeurofirstAid />
      <ResBrainReceipts />
      <MediaImpact />
      <MediaResearch />
      <MediaGallery />
      <MediaNews />
      <MediaIndex />
      <NcfAlumni />
      <MobileNav />
      <Footer />
      <ClientScripts />
      <ImageSlotTagger />
    </>
  );
}
