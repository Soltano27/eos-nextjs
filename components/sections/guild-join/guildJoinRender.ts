// ═══════════════════════════════════════════════════════════════════════
// NEURO GUILD SIGNUP FORM  (route: guild-join)
//
// Submits into a real Google Form ("Neuro Guild Membership Signup"),
// created via Apps Script on 2026-09-28:
//   Edit form:      https://docs.google.com/forms/d/1uzpvVwXg_8UhEws4M0vL-J7PhduM4B8Bq1GZ4x7sTo4/edit
//   Public form:    https://docs.google.com/forms/d/e/1FAIpQLSeg_j0p8kyzJlIwWbhb_yJwN2iqhRpUx6T1Hd1pxa7YRxIGkw/viewform
//   Response Sheet: https://docs.google.com/spreadsheets/d/1R9jz6uxAMGt_gvKIgDkwD_n-IsaXBHqFABlV2QGcKPA/edit
//
// Submission uses a plain `fetch(..., { mode: "no-cors" })` POST — no
// backend, no iframe hack. Responses land straight in the Sheet above.
// See submitGuildForm() in public/inline-scripts/block-09.js for the
// actual submit logic (constants are duplicated there since that file is
// a plain script, not a module, and can't import from here).
//
// ⚠️ If the form's questions are ever edited/reordered in the Google Form
// UI, the entry IDs below may change — re-check them (view page source of
// the public form, search "entry.") before assuming a field mismatch is a
// bug in this code.
// ═══════════════════════════════════════════════════════════════════════

export const GUILD_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeg_j0p8kyzJlIwWbhb_yJwN2iqhRpUx6T1Hd1pxa7YRxIGkw/formResponse";

export const GUILD_FORM_FIELDS = {
  name: "entry.877209908",
  email: "entry.1722318382",
  whatsapp: "entry.1872585205",
  ageRange: "entry.2081883543",
  consent: "entry.1809377616",
};

// Must exactly match the option text typed into the Google Form question.
export const AGE_RANGE_OPTIONS = {
  explorer: "18–24 (Explorer)",
  builder: "25–35 (Builder)",
};

export const CONSENT_OPTIONS = {
  yes: "Yes, I consent",
  no: "No, I do not consent",
};

export function renderGuildJoinView(): string {
  return `<!-- ══════════════════════════════
     NEURO GUILD — MEMBERSHIP SIGNUP
══════════════════════════════ -->
<div id="view-guild-join" class="page-view">
  <div style="background:var(--navy);padding:100px 60px 80px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-150px;right:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,191,165,0.12) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="max-width:620px;position:relative;z-index:1;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
        <span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.6);text-transform:uppercase;cursor:pointer;" data-route="programs-guild">The Neuro Guild</span>
        <span style="color:rgba(255,255,255,0.2);font-size:12px;">/</span>
        <span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.9);text-transform:uppercase;">Join</span>
      </div>
      <h1 style="font-family:var(--serif);font-size:44px;font-weight:900;color:var(--white);line-height:1.1;margin-bottom:16px;letter-spacing:-1px;">Join the Guild.</h1>
      <p style="font-size:16px;color:rgba(255,255,255,0.65);line-height:1.65;">Takes about a minute. A few details so we know who's in the room, then you're part of it — monthly events, the online community, and everything the Guild offers.</p>
    </div>
  </div>

  <div style="background:var(--white);padding:80px 60px;">
    <div style="max-width:560px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;gap:22px;" id="guild-join-form">

        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Full Name</label>
          <input id="gj-name" type="text" placeholder="Your full name" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;transition:border-color 0.2s;background:var(--bg);" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"/>
        </div>

        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Email Address</label>
          <input id="gj-email" type="email" placeholder="your@email.com" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;transition:border-color 0.2s;background:var(--bg);" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"/>
        </div>

        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">WhatsApp Number</label>
          <input id="gj-whatsapp" type="tel" placeholder="e.g. 0812 345 6789" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;transition:border-color 0.2s;background:var(--bg);" onfocus="this.style.borderColor='var(--teal)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"/>
        </div>

        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Age Range</label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <label style="display:flex;flex-direction:column;gap:4px;padding:16px;border:1.5px solid rgba(10,58,110,0.15);border-radius:12px;cursor:pointer;background:var(--bg);transition:border-color 0.2s,background 0.2s;" class="gj-age-option">
              <input type="radio" name="gj-age" value="explorer" style="margin-bottom:6px;accent-color:var(--teal);"/>
              <span style="font-size:13px;font-weight:700;color:var(--navy);">Explorer</span>
              <span style="font-size:12px;color:var(--dim);">18–24</span>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;padding:16px;border:1.5px solid rgba(10,58,110,0.15);border-radius:12px;cursor:pointer;background:var(--bg);transition:border-color 0.2s,background 0.2s;" class="gj-age-option">
              <input type="radio" name="gj-age" value="builder" style="margin-bottom:6px;accent-color:var(--teal);"/>
              <span style="font-size:13px;font-weight:700;color:var(--navy);">Builder</span>
              <span style="font-size:12px;color:var(--dim);">25–35</span>
            </label>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,rgba(0,191,165,0.06),rgba(10,58,110,0.04));border:1.5px solid rgba(0,191,165,0.25);border-radius:14px;padding:20px;margin-top:6px;">
          <div style="display:flex;gap:12px;align-items:flex-start;">
            <div style="width:36px;height:36px;border-radius:10px;background:rgba(0,191,165,0.15);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">📸</div>
            <div>
              <div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:6px;">Photo &amp; Video Consent</div>
              <p style="font-size:12.5px;color:var(--dim);line-height:1.65;margin-bottom:14px;">We love capturing moments from Guild events — group photos, activity shots, the odd candid laugh. We'd like your permission to use images or videos that include you across our social media, website, and promotional materials. You can withdraw this anytime by emailing us.</p>
              <div style="display:flex;flex-direction:column;gap:10px;">
                <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:13px;color:var(--ink);">
                  <input type="radio" name="gj-consent" value="yes" style="accent-color:var(--teal);width:16px;height:16px;"/>
                  Yes, I consent to EOS using my photo/video from Guild events
                </label>
                <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:13px;color:var(--ink);">
                  <input type="radio" name="gj-consent" value="no" style="accent-color:var(--teal);width:16px;height:16px;"/>
                  No, please don't use my photo or video
                </label>
              </div>
            </div>
          </div>
        </div>

        <button onclick="submitGuildForm()" style="background:var(--teal);color:#fff;border:none;border-radius:100px;padding:16px 36px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--sans);transition:background 0.2s;margin-top:8px;" onmouseenter="this.style.background='#00a892'" onmouseleave="this.style.background='var(--teal)'">Join the Guild</button>

        <div id="gj-success" style="display:none;background:rgba(0,191,165,0.08);border:1px solid rgba(0,191,165,0.3);border-radius:10px;padding:16px 20px;font-size:14px;color:#015C51;line-height:1.6;">
          ✅ You're in. Welcome to the Neuro Guild — keep an eye on your email and WhatsApp for what's next.
        </div>
        <div id="gj-error" style="display:none;background:rgba(220,38,38,0.06);border:1px solid rgba(220,38,38,0.25);border-radius:10px;padding:16px 20px;font-size:13px;color:#991B1B;line-height:1.6;">
          Please fill in your name, email, WhatsApp number, age range, and let us know your photo/video consent choice.
        </div>
      </div>

      <button class="back-btn" data-route="programs-guild" style="margin-top:32px;">← Back to The Neuro Guild</button>
    </div>
  </div>
</div>`;
}
