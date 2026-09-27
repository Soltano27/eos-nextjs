// Render functions for The Neuro Guild's Upcoming Events.
// Consumes `events` (see eventsData.ts) and produces the HTML embedded into
// ProgramsGuild.tsx (the "Upcoming Events" section) and appended as
// standalone routable detail pages (see OtherStubs.tsx), the same way
// cortexRender.ts drives The Cortex Printout — add one object to
// eventsData.ts and its card, detail page, and back-nav all follow.

import { EventItem, EventSpeaker, events } from "./eventsData";

function upcoming(): EventItem[] {
  return events.filter((e) => e.status === "upcoming");
}

function renderSpeaker(s: EventSpeaker): string {
  const linkedin = s.linkedin
    ? `<a href="${s.linkedin}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--navy);text-decoration:none;">LinkedIn ↗</a>`
    : "";
  const instagram = s.instagram
    ? `<a href="https://instagram.com/${s.instagram}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--navy);text-decoration:none;">Instagram ↗</a>`
    : "";
  const links = [linkedin, instagram].filter(Boolean).join(
    `<span style="color:rgba(10,58,110,0.2);">•</span>`,
  );

  return `
        <div style="display:grid;grid-template-columns:120px 1fr;gap:24px;align-items:start;background:var(--bg);border-radius:16px;padding:24px;">
          <img src="${s.headshotSrc}" alt="${s.name}" loading="lazy" style="width:120px;height:120px;border-radius:14px;object-fit:cover;" />
          <div>
            <div style="font-size:10px;font-weight:800;letter-spacing:0.14em;color:var(--teal);text-transform:uppercase;margin-bottom:6px;">Guest Speaker</div>
            <h4 style="font-family:var(--serif);font-size:20px;color:var(--navy);margin-bottom:4px;">${s.name}</h4>
            <div style="font-size:13px;color:var(--dim);margin-bottom:2px;">${s.title} · ${s.institution}</div>
            <div style="font-size:12px;color:var(--dim);margin-bottom:14px;">${s.credentials}</div>
            <p style="font-size:14px;color:#334155;line-height:1.75;margin-bottom:14px;">${s.bio}</p>
            <div style="display:flex;gap:14px;">${links}</div>
          </div>
        </div>`;
}

function renderActivityChip(a: { emoji: string; label: string }): string {
  return `
        <div style="background:var(--white);border-radius:12px;padding:16px;text-align:center;box-shadow:0 1px 3px rgba(10,58,110,0.08);">
          <div style="font-size:22px;margin-bottom:6px;">${a.emoji}</div>
          <div style="font-size:12px;font-weight:700;color:var(--navy);">${a.label}</div>
        </div>`;
}

function renderHighlight(h: string): string {
  return `<li style="display:flex;align-items:baseline;gap:8px;font-size:14px;color:#334155;line-height:1.8;"><span style="color:var(--teal);">✓</span>${h}</li>`;
}

// ── Compact card for the "Upcoming Events" grid on the Neuro Guild page ──
function renderEventCard(e: EventItem): string {
  return `
        <div class="evt-card" data-route="${e.id}" style="background:var(--white);border-radius:20px;overflow:hidden;box-shadow:0 4px 16px rgba(10,58,110,0.1);cursor:pointer;transition:transform 0.15s ease;">
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:linear-gradient(135deg,${e.gradFrom},${e.gradTo});">
            <img src="${e.flyerSrc}" alt="${e.title} event flyer" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top center;" />
            <span style="position:absolute;top:14px;left:14px;font-size:9px;font-weight:800;letter-spacing:0.12em;color:var(--white);background:rgba(13,31,45,0.55);backdrop-filter:blur(6px);padding:6px 13px;border-radius:100px;text-transform:uppercase;">${e.seriesLabel}</span>
          </div>
          <div style="padding:24px;">
            <h3 style="font-family:var(--serif);font-size:22px;font-weight:900;color:var(--navy);margin-bottom:8px;">${e.title}</h3>
            <div style="font-size:13px;color:var(--dim);margin-bottom:16px;line-height:1.6;">${e.subtitle}</div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--navy);font-weight:600;margin-bottom:18px;">
              <span>📅 ${e.dateLabel}</span>
              <span>📍 ${e.location}</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <div style="font-size:13px;color:${e.cardColor};font-weight:800;">Early Bird ${e.earlyBirdPrice}</div>
              <a class="read-more" data-route="${e.id}">View Details <span>→</span></a>
            </div>
          </div>
        </div>`;
}

// Embedded in ProgramsGuild.tsx, right after the existing marketing content.
export function renderEventsSection(): string {
  const list = upcoming();
  if (list.length === 0) return "";

  const cardsHtml = list.map(renderEventCard).join("");

  return `
  <div style="background:var(--bg);padding:100px 60px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;"><div style="width:24px;height:2px;background:var(--teal);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;">Upcoming Events</span></div>
    <h2 style="font-family:var(--serif);font-size:32px;font-weight:900;color:var(--navy);margin-bottom:40px;max-width:600px;">Join us in person</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;">${cardsHtml}
    </div>
  </div>`;
}

// ── Full routable detail page per event ──
function renderEventDetailView(e: EventItem): string {
  const activitiesHtml = e.activities.map(renderActivityChip).join("");
  const highlightsHtml = e.highlights.map(renderHighlight).join("\n");
  const speakersHtml = e.speakers.map(renderSpeaker).join("\n");

  return `<!-- ══════════════════════════════
     NEURO GUILD EVENT ${e.num} — ${e.title.toUpperCase()}
══════════════════════════════ -->
<div id="view-${e.id}" class="page-view">
  <div style="background:linear-gradient(135deg,${e.gradFrom} 0%,${e.gradTo} 100%);padding:80px 60px;position:relative;overflow:hidden;">
    <div style="max-width:1040px;margin:0 auto;display:grid;grid-template-columns:320px 1fr;gap:56px;align-items:center;position:relative;z-index:1;">
      <img src="${e.flyerSrc}" alt="${e.title} event flyer" style="width:100%;border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,0.4);" />
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.6);text-transform:uppercase;cursor:pointer;" data-route="programs-guild">The Neuro Guild</span>
          <span style="color:rgba(255,255,255,0.2);font-size:12px;">/</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.9);text-transform:uppercase;">Events</span>
        </div>
        <span style="display:inline-block;font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;background:${e.badgeBg};color:${e.badgeColor};padding:5px 14px;border-radius:100px;margin-bottom:20px;">${e.seriesLabel}</span>
        <h1 style="font-family:var(--serif);font-size:44px;font-weight:900;color:var(--white);line-height:1.05;margin-bottom:14px;letter-spacing:-1px;">${e.title}</h1>
        <p style="font-size:17px;color:rgba(255,255,255,0.75);line-height:1.5;margin-bottom:20px;">${e.subtitle}</p>
        <p style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.75;margin-bottom:28px;">${e.deck}</p>
        <a href="${e.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:inline-block;text-decoration:none;">Join &amp; Register</a>
      </div>
    </div>
  </div>

  <div style="background:var(--white);padding:70px 60px;max-width:900px;margin:0 auto;">

    <!-- Key details -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:56px;">
      <div style="background:var(--bg);border-radius:14px;padding:20px;">
        <div style="font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Date</div>
        <div style="font-size:14px;font-weight:700;color:var(--navy);">${e.dateLabel}</div>
      </div>
      <div style="background:var(--bg);border-radius:14px;padding:20px;">
        <div style="font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Location</div>
        <div style="font-size:14px;font-weight:700;color:var(--navy);">${e.location}</div>
      </div>
      <div style="background:var(--bg);border-radius:14px;padding:20px;">
        <div style="font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Format</div>
        <div style="font-size:14px;font-weight:700;color:var(--navy);">${e.formatLabel}</div>
      </div>
      <div style="background:var(--bg);border-radius:14px;padding:20px;">
        <div style="font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Attendance</div>
        <div style="font-size:14px;font-weight:700;color:var(--navy);">${e.capacityLabel}</div>
      </div>
    </div>
    ${e.address ? `<p style="font-size:13px;color:var(--dim);margin-top:-40px;margin-bottom:56px;">📍 ${e.address}</p>` : ""}

    <!-- What's happening -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;"><div style="width:24px;height:2px;background:var(--teal);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;">What's Happening</span></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:56px;">${activitiesHtml}
    </div>

    <!-- More than a hangout -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;margin-bottom:56px;">
      <div>
        <h3 style="font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:18px;">More than a hangout</h3>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
${highlightsHtml}
        </ul>
      </div>
      <div style="background:var(--navy);border-radius:20px;padding:32px;">
        <div style="font-size:11px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">Tickets</div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;">
          <span style="font-size:14px;color:rgba(255,255,255,0.6);">Early Bird</span>
          <span style="font-family:var(--serif);font-size:24px;font-weight:800;color:var(--teal);">${e.earlyBirdPrice}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:24px;">
          <span style="font-size:14px;color:rgba(255,255,255,0.6);">Regular</span>
          <span style="font-family:var(--serif);font-size:24px;font-weight:800;color:var(--white);">${e.regularPrice}</span>
        </div>
        <a href="${e.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:block;text-align:center;text-decoration:none;">Join &amp; Register</a>
        <p style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:12px;text-align:center;">Limited seats available</p>
      </div>
    </div>

    <!-- Speaker(s) -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;"><div style="width:24px;height:2px;background:var(--teal);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;">Speaker</span></div>
    <div style="display:flex;flex-direction:column;gap:20px;margin-bottom:56px;">
${speakersHtml}
    </div>

    <button class="back-btn" data-route="programs-guild">← All Neuro Guild Events</button>
  </div>
</div>`;
}

// All event detail views, appended into the DOM the same way
// renderAllCortexArticleViews() is — see OtherStubs.tsx.
export function renderAllEventViews(): string {
  return events.map(renderEventDetailView).join("\n\n");
}
