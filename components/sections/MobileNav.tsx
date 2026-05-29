// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ════════════════════════════════════════════
     SITE-WIDE RESPONSIVE — ALL BREAKPOINTS
     Mobile-first · Hamburger nav · Full coverage
════════════════════════════════════════════ -->


<!-- MOBILE NAV HTML — inserted after <nav> tag -->
<div class="mob-nav-overlay" id="mob-nav">
  <div class="mob-nav-head">
    <div class="mob-nav-logo">E<span>O</span>S</div>
    <button class="mob-close-btn" onclick="closeMobNav()" aria-label="Close menu">✕</button>
  </div>
  <div class="mob-nav-body">

    <!-- About -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('about','mob-about')" data-route="about">About <span class="mob-nav-arrow" id="mob-about-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-about">
        <div class="mob-nav-child" data-route="about-legacy" onclick="mobRoute(this)">Our Legacy</div>
        <div class="mob-nav-child" data-route="about-mission" onclick="mobRoute(this)">Mission &amp; Vision</div>
        <div class="mob-nav-child" data-route="about-pillars" onclick="mobRoute(this)">Our Pillars</div>
        <div class="mob-nav-child" data-route="about-team" onclick="mobRoute(this)">Team</div>
      </div>
    </div>

    <!-- Programmes -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('programs','mob-progs')" data-route="programs">Programmes <span class="mob-nav-arrow" id="mob-progs-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-progs">
        <div class="mob-nav-child" data-route="programs-culture" onclick="mobRoute(this)">Brain Culture Lab</div>
        <div class="mob-nav-child" data-route="programs-guild" onclick="mobRoute(this)">The Neuro Guild</div>
        <div class="mob-nav-child" data-route="programs-cbhi" onclick="mobRoute(this)">Community Brain Health Initiative</div>
      </div>
    </div>

    <!-- NeuroED -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('neuroed','mob-ned')" data-route="neuroed">NeuroED Africa <span class="mob-nav-arrow" id="mob-ned-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-ned">
        <div class="mob-nav-child" data-route="neuroed-fellowship" onclick="mobRoute(this)">Neuro Champions Fellowship</div>
        <div class="mob-nav-child" data-route="neuroed-elearning" onclick="mobRoute(this)">eLearning Platform</div>
        <div class="mob-nav-child" data-route="neuroed-alumni" onclick="mobRoute(this)">NCF Alumni</div>
      </div>
    </div>

    <!-- Innovation -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('innovation','mob-innov")" data-route="innovation">Innovation <span class="mob-nav-arrow" id="mob-innov-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-innov">
        <div class="mob-nav-child" data-route="innovation-mima" onclick="mobRoute(this)">MIMA — Neuro Chatbot</div>
      </div>
    </div>

    <!-- Resources -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('resources','mob-res')" data-route="resources">Resources <span class="mob-nav-arrow" id="mob-res-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-res">
        <div class="mob-nav-child" data-route="resources-brain-age" onclick="mobRoute(this)">Know Your Brain Age</div>
        <div class="mob-nav-child" data-route="resources-healthy" onclick="mobRoute(this)">Healthy Choices Quiz</div>
        <div class="mob-nav-child" data-route="resources-receipts" onclick="mobRoute(this)">Brain Receipts</div>
        <div class="mob-nav-child" data-route="resources-firstaid" onclick="mobRoute(this)">NeuroFirst Aid</div>
      </div>
    </div>

    <!-- Media -->
    <div class="mob-nav-section">
      <div class="mob-nav-top-link" onclick="mobNavParent('media','mob-media')" data-route="media">Media &amp; Publications <span class="mob-nav-arrow" id="mob-media-arrow">▾</span></div>
      <div class="mob-nav-children" id="mob-media">
        <div class="mob-nav-child" data-route="media-impact" onclick="mobRoute(this)">Impact Report</div>
        <div class="mob-nav-child" data-route="media-research" onclick="mobRoute(this)">Research &amp; Policy Papers</div>
        <div class="mob-nav-child" data-route="media-gallery" onclick="mobRoute(this)">Photo Gallery &amp; Videos</div>
        <div class="mob-nav-child" data-route="media-news" onclick="mobRoute(this)">EOS in the News &amp; Awards</div>
      </div>
    </div>

    <!-- Cortex standalone -->
    <div class="mob-nav-standalone" data-route="cortex" onclick="mobRoute(this)">The Cortex Printout</div>

    <!-- Contact standalone -->
    <div class="mob-nav-standalone" data-route="contact" onclick="mobRoute(this)">Contact</div>

    <button class="mob-nav-cta" data-route="programs-guild" onclick="mobRoute(this)">Join the Guild</button>
  </div>
</div>



<!-- FOOTER -->`;

export default function MobileNav() {
  return <div data-section="MobileNav" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
