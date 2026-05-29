// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ══════════════════════════════
     NAV
══════════════════════════════ -->
<nav>
  <div class="nav-logo" data-route="home">E<span>O</span>S</div>

  <div class="nav-links">

    <div class="nav-item">
      <a data-route="about">About <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="about-legacy">Our Legacy</a>
        <a data-route="about-mission">Mission &amp; Vision</a>
        <a data-route="about-pillars">Our Pillars</a>
        <a data-route="about-team">Team</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="programs">Programmes <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="programs-culture">Brain Culture Lab</a>
        <a data-route="programs-guild">The Neuro Guild</a>
        <a data-route="programs-cbhi">Community Brain Health Initiative</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="neuroed">NeuroED Africa <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="neuroed-fellowship">Neuro Champions Fellowship</a>
        <a data-route="neuroed-elearning">eLearning Platform</a>
        <a data-route="neuroed-alumni">NCF Alumni</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="innovation">Innovation <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="innovation-mima">MIMA — Neuro Chatbot</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="resources">Resources <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="resources-brain-age">Know Your Brain Age</a>
        <a data-route="resources-healthy">Healthy Choices Quiz</a>
        <a data-route="resources-receipts">Brain Receipts</a>
        <a data-route="resources-firstaid">NeuroFirst Aid</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="media">Media &amp; Publications <span class="dropdown-arrow">▾</span></a>
      <div class="dropdown">
        <a data-route="media-impact">Impact Report</a>
        <a data-route="media-research">Research &amp; Policy Papers</a>
        <a data-route="media-gallery">Photo Gallery &amp; Videos</a>
        <a data-route="media-news">EOS in the News &amp; Awards</a>
      </div>
    </div>

    <div class="nav-item">
      <a data-route="cortex">The Cortex Printout</a>
    </div>

  </div>

  <button class="nav-cta" data-route="programs-guild">Join the Guild</button>
</nav>`;

export default function Nav() {
  return <div data-section="Nav" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
