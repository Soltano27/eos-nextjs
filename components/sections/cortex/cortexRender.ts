// Render functions for The Cortex Printout.
// These consume `cortexArticles` (see cortexArticles.ts) and produce the exact
// same HTML structure/classes the rest of the app already expects — nothing
// about routing, CSS, or the slider JS in OtherStubs.tsx needs to change.

import { CortexArticle, cortexArticles } from "./cortexArticles";

const issueLabel = (num: number) => `ISSUE ${String(num).padStart(3, "0")}`;

function renderArticleCard(a: CortexArticle): string {
  return `
        <div class="article-card" data-route="${a.id}" data-category="${a.category}">
          <div class="article-img" style="background:linear-gradient(135deg,${a.gradFrom},${a.gradTo})">
            <span class="article-issue">${issueLabel(a.num)}</span>
          </div>
          <div class="article-body">
            <div class="article-cat" style="color:${a.cardColor}">${a.category}</div>
            <h4>${a.cardTitle}</h4>
            <p>${a.cardExcerpt}</p>
            <a class="read-more" data-route="${a.id}">Read More <span>→</span></a>
          </div>
        </div>`;
}

function renderFeaturedCard(a: CortexArticle): string {
  return `
    <div class="ci-featured" data-route="${a.id}">
      <div class="ci-feat-img" style="background:linear-gradient(135deg,${a.gradFrom},${a.gradTo})">
        <span class="ci-feat-issue">${issueLabel(a.num)}</span>
      </div>
      <div class="ci-feat-body">
        <span class="ci-feat-label">Featured Article</span>
        <div class="ci-feat-cat" style="color:${a.cardColor}">${a.category}</div>
        <h2>${a.cardTitle}</h2>
        <p>${a.featuredExcerpt ?? a.cardExcerpt}</p>
        <a class="read-more" data-route="${a.id}" style="margin-top:24px;font-size:14px">Read Full Article <span>→</span></a>
      </div>
    </div>`;
}

// Newest issue first, matching the existing slider order.
function newestFirst(): CortexArticle[] {
  return [...cortexArticles].sort((x, y) => y.num - x.num);
}

// The very first published issue stays the pinned "Featured Article" slot,
// same as it always has — pass a different id here if that should change.
export function renderCortexIndexPage(
  featuredId: string = "cortex-article-1",
): string {
  const featured =
    cortexArticles.find((a) => a.id === featuredId) ?? cortexArticles[0];
  const cardsHtml = newestFirst().map(renderArticleCard).join("");

  return `<!-- ══════════════════════════════
     CORTEX INDEX PAGE
══════════════════════════════ -->
<div id="view-cortex" class="page-view">
  <div class="cortex-index-hero">
    <div class="cortex-index-inner">
      <div class="section-label" style="--lbl-col:#00BFA5"><span style="color:#00BFA5">The Cortex Printout</span></div>
      <h1>Brain Health.<br/>Written Honestly.</h1>
      <p>Our biweekly publication covering everything from stress and sleep to stroke and social connection — accurate, engaging, and built for young Nigerians who want to understand their brain.</p>
      <div class="cortex-index-cats">
        <span class="ci-cat active">All</span>
        <span class="ci-cat">Physical Brain Health</span>
        <span class="ci-cat">Mental Health &amp; Performance</span>
        <span class="ci-cat">Technology &amp; The Brain</span>
        <span class="ci-cat">Women's Neuro Health</span>
        <span class="ci-cat">Brain Identity &amp; Culture</span>
      </div>
    </div>
  </div>
  <div class="cortex-index-body">
    <!-- Featured -->${renderFeaturedCard(featured)}
    <!-- Grid of all issues -->
    <div class="ci-issues-header">
      <h3 class="ci-grid-title">All Issues</h3>
      <div class="ci-slider-controls">
        <button class="ci-slider-btn" id="ci-prev" aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="ci-slider-btn" id="ci-next" aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
    <div class="ci-slider-wrap">
      <div class="ci-slider-track" id="ci-track">${cardsHtml}
      </div>
    </div>
    <div class="ci-slider-dots" id="ci-dots"></div>
    <div style="text-align:center;padding:40px 0 80px">
      <button class="back-btn" data-route="home">← Back to Home</button>
    </div>
  </div>
</div>`;
}

function renderArticleView(
  a: CortexArticle,
  prev: CortexArticle | null,
  next: CortexArticle | null,
): string {
  const bylineDate =
    a.bylineDate ??
    "Published by EOS · Youth Brain Health Culture Organisation";
  const tocHtml = a.toc
    .map(
      (t) => `        <a class="art-toc-item" href="${t.href}">${t.text}</a>`,
    )
    .join("\n");
  const ktHtml = a.keyTakeaways
    .map((k) => `          <li>${k}</li>`)
    .join("\n");

  const navButtons = [
    prev
      ? `<button class="art-back-btn" data-route="${prev.id}">← Previous Issue</button>`
      : "",
    `<button class="art-back-btn" data-route="cortex">← All Issues</button>`,
    next
      ? `<button class="art-back-btn" data-route="${next.id}">Next Issue →</button>`
      : "",
  ]
    .filter(Boolean)
    .join("\n        ");

  return `<!-- ══════════════════════════════
     CORTEX ARTICLE ${a.num} — ${a.cardTitle.toUpperCase()}
══════════════════════════════ -->
<div id="view-${a.id}" class="page-view">
  <div class="art-hero" style="background:linear-gradient(135deg,${a.gradFrom} 0%,${a.gradTo} 100%)">
    <div class="art-hero-inner">
      <div class="art-breadcrumb">
        <span data-route="cortex" style="cursor:pointer;opacity:0.6;transition:opacity 0.2s">The Cortex Printout</span>
        <span style="opacity:0.3;margin:0 8px">/</span>
        <span style="opacity:0.9">Issue ${String(a.num).padStart(3, "0")}</span>
      </div>
      <div class="art-meta-row">
        <span class="art-issue-badge">${issueLabel(a.num)}</span>
        <span class="art-cat-badge" style="background:${a.badgeBg};color:${a.badgeColor}">${a.category}</span>
      </div>
      <h1 class="art-title">${a.title}</h1>
      <p class="art-deck">${a.deck}</p>
      <div class="art-byline">
        <img src="/images/team-3.jpg" alt="Author" loading="lazy" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
        <div>
          <div class="art-byline-name">The Cortex Printout</div>
          <div class="art-byline-date">${bylineDate}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="art-layout">
    <aside class="art-sidebar">
      <div class="art-toc">
        <div class="art-toc-title">In This Article</div>
${tocHtml}
      </div>
      <div class="art-key-takeaways">
        <div class="art-kt-title">Key Takeaways</div>
        <ul class="art-kt-list">
${ktHtml}
        </ul>
      </div>
    </aside>
    <article class="art-body">
${a.bodyHtml}
      <div class="art-nav-footer">
        ${navButtons}
      </div>
    </article>
  </div>
</div>`;
}

// All article views, in issue-number order, with prev/next wired up
// automatically from array position. This is the entire payoff: add one
// object to cortexArticles.ts and the nav footers on its neighbors update
// themselves too.
export function renderAllCortexArticleViews(): string {
  const ordered = [...cortexArticles].sort((x, y) => x.num - y.num);
  return ordered
    .map((a, i) => {
      const prev = i > 0 ? ordered[i - 1] : null;
      const next = i < ordered.length - 1 ? ordered[i + 1] : null;
      return renderArticleView(a, prev, next);
    })
    .join("\n\n");
}

// Convenience for HomeView.tsx: the newest issue, for the "Latest from EOS"
// card and as the first card in the homepage preview slider.
export function getLatestCortexArticle(): CortexArticle {
  return newestFirst()[0];
}

// Convenience for HomeView.tsx's own preview slider (no data-category attr
// there, since that slider doesn't filter — otherwise identical to the
// index page cards).
export function renderHomeArticleCard(a: CortexArticle): string {
  return `
  <div class="article-card" data-route="${a.id}">
    <div class="article-img" style="background:linear-gradient(135deg,${a.gradFrom},${a.gradTo})">
      <span class="article-issue">${issueLabel(a.num)}</span>
    </div>
    <div class="article-body">
      <div class="article-cat" style="color:${a.cardColor}">${a.category}</div>
      <h4>${a.cardTitle}</h4>
      <p>${a.cardExcerpt}</p>
      <a class="read-more" data-route="${a.id}">Read More <span>→</span></a>
    </div>
  </div>`;
}

export function renderHomeCortexSlider(): string {
  return newestFirst().map(renderHomeArticleCard).join("");
}

export function renderHomeLatestCard(): string {
  const a = getLatestCortexArticle();
  return `
<div class="latest-card" data-route="${a.id}">
  <div class="latest-card-img" style="background:linear-gradient(135deg,${a.gradFrom},${a.gradTo})">
    <span class="latest-card-issue">THE CORTEX PRINTOUT</span>
  </div>
  <div class="latest-card-body">
    <div class="latest-card-cat" style="color:${a.cardColor}">${a.category} · Issue ${String(a.num).padStart(3, "0")}</div>
    <h4>${a.cardTitle}</h4>
    <p>${a.cardExcerpt}</p>
    <a class="read-more" data-route="${a.id}">Read Article <span>→</span></a>
  </div>
</div>`;
}
