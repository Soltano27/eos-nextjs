"use client";
import React, { useState, useEffect } from "react";

interface MobNavSection {
  route: string;
  label: string;
  childId: string;
  arrowId: string;
  children: { route: string; label: string }[];
}

const sections: MobNavSection[] = [
  {
    route: "about",
    label: "About",
    childId: "mob-about",
    arrowId: "mob-about-arrow",
    children: [
      { route: "about-legacy", label: "Our Legacy" },
      { route: "about-mission", label: "Mission & Vision" },
      { route: "about-pillars", label: "Our Pillars" },
      { route: "about-team", label: "Team" },
    ],
  },
  {
    route: "programs",
    label: "Programmes",
    childId: "mob-progs",
    arrowId: "mob-progs-arrow",
    children: [
      { route: "programs-culture", label: "Brain Culture Lab" },
      { route: "programs-guild", label: "The Neuro Guild" },
      { route: "programs-cbhi", label: "Community Brain Health Initiative" },
    ],
  },
  {
    route: "neuroed",
    label: "NeuroED Africa",
    childId: "mob-ned",
    arrowId: "mob-ned-arrow",
    children: [
      { route: "neuroed-fellowship", label: "Neuro Champions Fellowship" },
      { route: "neuroed-elearning", label: "eLearning Platform" },
      { route: "neuroed-alumni", label: "NCF Alumni" },
    ],
  },
  {
    route: "innovation",
    label: "Innovation",
    childId: "mob-innov",
    arrowId: "mob-innov-arrow",
    children: [{ route: "innovation-mima", label: "MIMA — Neuro Chatbot" }],
  },
  {
    route: "resources",
    label: "Resources",
    childId: "mob-res",
    arrowId: "mob-res-arrow",
    children: [
      { route: "resources-brain-age", label: "Know Your Brain Age" },
      { route: "resources-healthy", label: "Healthy Choices Quiz" },
      { route: "resources-receipts", label: "Brain Receipts" },
      { route: "resources-firstaid", label: "NeuroFirst Aid" },
    ],
  },
  {
    route: "media",
    label: "Media & Publications",
    childId: "mob-media",
    arrowId: "mob-media-arrow",
    children: [
      { route: "media-impact", label: "Impact Report" },
      { route: "media-research", label: "Research & Policy Papers" },
      { route: "media-gallery", label: "Photo Gallery & Videos" },
      { route: "media-news", label: "EOS in the News & Awards" },
    ],
  },
];

declare global {
  interface Window {
    closeMobNav: () => void;
    openMobNav: () => void;
    eosNavigate: (route: string, keepNavOpen?: boolean) => void;
  }
}

export default function MobileNav() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    window.openMobNav = () => {
      setOpenSection(null);
    };
  }, []);

  const handleParentClick = (route: string) => {
    setOpenSection((prev) => (prev === route ? null : route));
  };

  const handleChildClick = (route: string) => {
    window.eosNavigate?.(route);
  };

  const handleClose = () => {
    setOpenSection(null);
    window.closeMobNav?.();
  };

  return (
    <div data-section="MobileNav">
      <div className="mob-nav-overlay" id="mob-nav">
        <div className="mob-nav-head">
          <div className="mob-nav-logo">
            E<span>O</span>S
          </div>
          <button
            className="mob-close-btn"
            onClick={handleClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mob-nav-body">
          {sections.map((section) => {
            const isOpen = openSection === section.route;
            return (
              <div className="mob-nav-section" key={section.route}>
                <div
                  className="mob-nav-top-link"
                  data-route={section.route}
                  onClick={() => handleParentClick(section.route)}
                >
                  {section.label}{" "}
                  <span
                    className="mob-nav-arrow"
                    id={section.arrowId}
                    style={{
                      display: "inline-block",
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▾
                  </span>
                </div>

                {isOpen && (
                  <div className="mob-nav-children" id={section.childId}>
                    {section.children.map((child) => (
                      <div
                        key={child.route}
                        className="mob-nav-child"
                        data-route={child.route}
                        onClick={() => handleChildClick(child.route)}
                      >
                        {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div
            className="mob-nav-standalone"
            data-route="cortex"
            onClick={() => window.eosNavigate?.("cortex")}
          >
            The Cortex Printout
          </div>

          <div
            className="mob-nav-standalone"
            data-route="contact"
            onClick={() => window.eosNavigate?.("contact")}
          >
            Contact
          </div>

          <button
            className="mob-nav-cta"
            data-route="programs-guild"
            onClick={() => window.eosNavigate?.("programs-guild")}
          >
            Join the Guild
          </button>
        </div>
      </div>
    </div>
  );
}
