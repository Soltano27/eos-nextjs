// The static, non-Cortex placeholder pages (About, Programmes, Media, etc.)
// stay as plain markup here — nothing repetitive about them yet.
//
// The Cortex Printout section below is generated from a single data source:
// see ./cortex/cortexArticles.ts (the array — add new issues here) and
// ./cortex/cortexRender.ts (the templates that turn that data into HTML).
// Adding a new issue is now a one-file change: push one object onto
// cortexArticles, and its index card, article page, and prev/next nav on
// its neighbors are all generated automatically.
"use client";
import React from "react";
import {
  renderCortexIndexPage,
  renderAllCortexArticleViews,
} from "./cortex/cortexRender";

const OTHER_STUBS_HTML = `<!-- ══════════════════════════════
     ALL OTHER VIEWS (React Router stubs)
══════════════════════════════ -->
<div id="view-about"             class="page-view"><div class="placeholder-page"><h1>About EOS</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-about-legacy"      class="page-view"><div class="placeholder-page"><h1>Our Legacy</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-about-mission"     class="page-view"><div class="placeholder-page"><h1>Mission &amp; Vision</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-about-pillars"     class="page-view"><div class="placeholder-page"><h1>Our Pillars</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-about-team"        class="page-view"><div class="placeholder-page"><h1>Team</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-programs"          class="page-view"><div class="placeholder-page"><h1>Programmes</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-programs-culture"  class="page-view"><div class="placeholder-page"><h1>Brain Culture Lab</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-programs-guild"    class="page-view"><div class="placeholder-page"><h1>The Neuro Guild</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-programs-cbhi"     class="page-view"><div class="placeholder-page"><h1>Community Brain Health Initiative</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-neuroed-stub"           class="page-view"><div class="placeholder-page"><h1>NeuroED Africa</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-neuroed-fellowship"class="page-view"><div class="placeholder-page"><h1>Neuro Champions Fellowship</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-neuroed-elearning-stub" class="page-view"><div class="placeholder-page"><h1>eLearning Platform</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-neuroed-alumni"    class="page-view"><div class="placeholder-page"><h1>NCF Alumni</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-innovation-stub"        class="page-view"><div class="placeholder-page"><h1>Innovation</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-innovation-mima-stub"   class="page-view"><div class="placeholder-page"><h1>MIMA — Neuro Chatbot</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-resources"         class="page-view"><div class="placeholder-page"><h1>Resources</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-resources-brain-age" class="page-view"><div class="placeholder-page"><h1>Know Your Brain Age</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-resources-healthy" class="page-view"><div class="placeholder-page"><h1>Healthy Choices Quiz</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-resources-receipts"class="page-view"><div class="placeholder-page"><h1>Brain Receipts</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-resources-firstaid"class="page-view"><div class="placeholder-page"><h1>NeuroFirst Aid</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-media"             class="page-view"><div class="placeholder-page"><h1>Media &amp; Publications</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-media-impact"      class="page-view"><div class="placeholder-page"><h1>Impact Report</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-media-research"    class="page-view"><div class="placeholder-page"><h1>Research &amp; Policy Papers</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-media-gallery"     class="page-view"><div class="placeholder-page"><h1>Photo Gallery &amp; Videos</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>
<div id="view-media-news"        class="page-view"><div class="placeholder-page"><h1>EOS in the News &amp; Awards</h1><p>Full page coming in React.</p><button class="back-btn" data-route="home">← Back to Home</button></div></div>`;

const HTML =
  OTHER_STUBS_HTML +
  "\n\n" +
  renderCortexIndexPage() +
  "\n\n" +
  renderAllCortexArticleViews();

export default function OtherStubs() {
  React.useEffect(() => {
    const styleId = "ci-slider-styles";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = `
        .ci-issues-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; }
        .ci-issues-header .ci-grid-title { margin-bottom:0; border-bottom:none; padding-bottom:0; }
        .ci-slider-controls { display:flex; gap:0; border:1px solid rgba(10,58,110,0.15); border-radius:100px; overflow:hidden; }
        .ci-slider-btn { width:40px; height:40px; border-radius:0; border:none; border-right:1px solid rgba(10,58,110,0.1); background:var(--white); color:var(--navy); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s,color 0.2s; }
        .ci-slider-btn:last-child { border-right:none; }
        .ci-slider-btn:hover { background:var(--blue); color:#fff; }
        .ci-slider-wrap { overflow:hidden; width:100%; }
        .ci-slider-track { display:flex; gap:0; transition:transform 0.4s cubic-bezier(0.25,1,0.5,1); will-change:transform; }
        .ci-slider-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .ci-dot { width:8px; height:8px; border-radius:50%; background:rgba(10,58,110,0.15); border:none; cursor:pointer; transition:background 0.2s,transform 0.2s; padding:0; }
        .ci-dot.active { background:var(--blue); transform:scale(1.25); }
      `;
      document.head.appendChild(s);
    }

    let sliderCleanup: (() => void) | null = null;

    function initCortexSlider() {
      const track = document.getElementById("ci-track") as HTMLElement | null;
      const dotsWrap = document.getElementById("ci-dots") as HTMLElement | null;
      const prevBtn = document.getElementById(
        "ci-prev",
      ) as HTMLButtonElement | null;
      const nextBtn = document.getElementById(
        "ci-next",
      ) as HTMLButtonElement | null;
      if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

      // Only count visible cards
      const cards = Array.from(track.querySelectorAll(".article-card")).filter(
        (c) => (c as HTMLElement).style.display !== "none",
      ) as HTMLElement[];
      const totalCards = cards.length;
      if (totalCards === 0) return;

      const newPerPage = window.innerWidth <= 768 ? 1 : 3;

      // Idempotency guard — if this exact configuration is already wired up,
      // do nothing. Without this, the broad MutationObserver below would
      // re-run this whole function (and reset currentIndex to 0) on every
      // unrelated class change anywhere in the app, which is what made the
      // mobile slider look like it "moved once then stopped."
      if (
        track.dataset.sliderReady === "true" &&
        Number(track.dataset.totalCards) === totalCards &&
        Number(track.dataset.perPage) === newPerPage
      ) {
        return;
      }

      if (sliderCleanup) {
        sliderCleanup();
        sliderCleanup = null;
      }

      track.dataset.sliderReady = "true";
      track.dataset.totalCards = String(totalCards);
      track.dataset.perPage = String(newPerPage);

      let perPage = newPerPage;
      let currentIndex = 0;

      function setCardWidths() {
        const pct = 100 / perPage;
        // Reset all first
        Array.from(track!.querySelectorAll(".article-card")).forEach((c) => {
          const el = c as HTMLElement;
          if (el.style.display !== "none") {
            el.style.flex = `0 0 ${pct}%`;
            el.style.maxWidth = `${pct}%`;
            el.style.padding = perPage === 1 ? "0 8px" : "0 10px";
            el.style.boxSizing = "border-box";
          }
        });
      }

      function getStepPct() {
        return 100 / perPage;
      }
      function getMaxIndex() {
        return Math.max(0, totalCards - perPage);
      }

      function updateSlider() {
        track!.style.transform = `translateX(-${currentIndex * getStepPct()}%)`;
      }

      function buildDots() {
        dotsWrap!.innerHTML = "";
        const pages = Math.ceil(totalCards / perPage);
        for (let i = 0; i < pages; i++) {
          const d = document.createElement("button");
          d.className = "ci-dot" + (i === 0 ? " active" : "");
          d.setAttribute("aria-label", "Page " + (i + 1));
          const idx = i;
          d.addEventListener("click", () => {
            currentIndex = Math.min(idx * perPage, getMaxIndex());
            updateSlider();
            updateDots();
          });
          dotsWrap!.appendChild(d);
        }
      }

      function updateDots() {
        const activePage = Math.round(currentIndex / perPage);
        dotsWrap!.querySelectorAll(".ci-dot").forEach((d, i) => {
          d.classList.toggle("active", i === activePage);
        });
      }

      const onNext = () => {
        currentIndex =
          currentIndex < getMaxIndex()
            ? Math.min(currentIndex + perPage, getMaxIndex())
            : 0;
        updateSlider();
        updateDots();
      };

      const onPrev = () => {
        currentIndex =
          currentIndex > 0
            ? Math.max(currentIndex - perPage, 0)
            : getMaxIndex();
        updateSlider();
        updateDots();
      };

      setCardWidths();
      buildDots();
      prevBtn.addEventListener("click", onPrev);
      nextBtn.addEventListener("click", onNext);
      updateSlider();

      const handleResize = () => {
        const resizedPerPage = window.innerWidth <= 768 ? 1 : 3;
        // Mobile browsers fire `resize` when the address bar shows/hides on
        // scroll, even though the breakpoint hasn't actually changed. Ignore
        // those — only react to a real breakpoint flip (e.g. rotation).
        if (resizedPerPage === perPage) return;
        perPage = resizedPerPage;
        currentIndex = 0;
        track!.dataset.perPage = String(perPage);
        setCardWidths();
        buildDots();
        updateSlider();
        updateDots();
      };
      window.addEventListener("resize", handleResize);

      sliderCleanup = () => {
        prevBtn?.removeEventListener("click", onPrev);
        nextBtn?.removeEventListener("click", onNext);
        window.removeEventListener("resize", handleResize);
      };
    }

    const observer = new MutationObserver(() => {
      const view = document.getElementById("view-cortex");
      if (view && view.classList.contains("active")) {
        setTimeout(initCortexSlider, 100);
      }
    });
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });

    function initCortexFilter() {
      const cats = document.querySelectorAll(".cortex-index-cats .ci-cat");
      if (!cats.length) return;

      cats.forEach((cat) => {
        cat.addEventListener("click", () => {
          cats.forEach((c) => c.classList.remove("active"));
          cat.classList.add("active");

          const selected = (cat as HTMLElement).textContent?.trim() || "All";
          const track = document.getElementById("ci-track");
          const dotsWrap = document.getElementById("ci-dots");
          if (!track) return;

          const allCards = Array.from(
            track.querySelectorAll(".article-card"),
          ) as HTMLElement[];
          const isMobile = window.innerWidth <= 768;

          if (selected === "All") {
            allCards.forEach((c) => {
              c.style.display = "";
              c.style.flex = isMobile ? "0 0 100%" : "0 0 33.333%";
              c.style.maxWidth = isMobile ? "100%" : "33.333%";
              c.style.padding = isMobile ? "0 8px" : "0 10px";
              c.style.boxSizing = "border-box";
            });
          } else {
            allCards.forEach((c) => {
              const cardCat = (c.dataset.category || "").replace(/&amp;/g, "&");
              if (cardCat === selected) {
                c.style.display = "";
                c.style.flex = isMobile ? "0 0 100%" : "0 0 33.333%";
                c.style.maxWidth = isMobile ? "100%" : "33.333%";
                c.style.padding = isMobile ? "0 8px" : "0 10px";
                c.style.boxSizing = "border-box";
              } else {
                c.style.display = "none";
              }
            });
          }

          track.style.transform = "translateX(0)";
          if (dotsWrap) dotsWrap.innerHTML = "";
          // Force a fresh slider init after a filter change, since the
          // visible card count just changed — clear the readiness flag so
          // the idempotency guard above doesn't short-circuit this one.
          delete track.dataset.sliderReady;
          setTimeout(initCortexSlider, 50);
        });
      });
    }

    const filterObserver = new MutationObserver(() => {
      const view = document.getElementById("view-cortex");
      if (view && view.classList.contains("active")) {
        initCortexFilter();
        filterObserver.disconnect();
      }
    });
    filterObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      filterObserver.disconnect();
      if (sliderCleanup) sliderCleanup();
    };
  }, []);

  return (
    <div data-section="OtherStubs" dangerouslySetInnerHTML={{ __html: HTML }} />
  );
}
