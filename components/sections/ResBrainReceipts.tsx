// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ════════════════════════════════════════════
     BRAIN RECEIPTS
════════════════════════════════════════════ -->
<div id="view-resources-receipts-full" class="page-view">
  <div style="background:var(--navy);padding:80px 60px 60px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;cursor:pointer;" data-route="resources">Resources</span><span style="color:rgba(255,255,255,0.2);font-size:12px;">/</span><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.5);text-transform:uppercase;">Brain Receipts</span></div>
    <h1 style="font-family:var(--serif);font-size:48px;font-weight:900;color:var(--white);line-height:1.05;margin-bottom:16px;letter-spacing:-1px;">Your personalised<br/>brain health score.</h1>
    <p style="font-size:16px;color:rgba(255,255,255,0.5);max-width:500px;line-height:1.7;">Enter your numbers. See where you stand. Understand what each one means for your brain.</p>
  </div>
  <div style="background:var(--bg);padding:60px;">
    <div style="max-width:700px;margin:0 auto;">
      <div style="background:var(--white);border-radius:20px;padding:40px;border:1px solid rgba(10,58,110,0.08);margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;"><div style="width:24px;height:2px;background:var(--blue);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--blue);text-transform:uppercase;">Enter Your Numbers</span></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px;">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Blood Pressure (Systolic)</label>
            <input id="br-bp" type="number" placeholder="e.g. 120" min="80" max="220" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;background:var(--bg);" oninput="brUpdate()"/>
            <div style="font-size:11px;color:var(--dim);margin-top:4px;">Normal: below 120 mmHg</div>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Blood Sugar (Fasting, mg/dL)</label>
            <input id="br-bs" type="number" placeholder="e.g. 90" min="50" max="400" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;background:var(--bg);" oninput="brUpdate()"/>
            <div style="font-size:11px;color:var(--dim);margin-top:4px;">Normal: 70–99 mg/dL</div>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Age</label>
            <input id="br-age" type="number" placeholder="e.g. 24" min="11" max="35" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;background:var(--bg);" oninput="brUpdate()"/>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">BMI (optional)</label>
            <input id="br-bmi" type="number" placeholder="e.g. 22" min="14" max="50" step="0.1" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;background:var(--bg);" oninput="brUpdate()"/>
            <div style="font-size:11px;color:var(--dim);margin-top:4px;">Normal: 18.5–24.9</div>
          </div>
        </div>
        <div id="br-result" style="display:none;">
          <div style="height:1px;background:rgba(10,58,110,0.08);margin-bottom:24px;"></div>
          <div style="font-size:10px;font-weight:800;letter-spacing:0.2em;color:var(--blue);text-transform:uppercase;margin-bottom:16px;">Your Brain Receipt</div>
          <div id="br-cards" style="display:flex;flex-direction:column;gap:10px;"></div>
          <div id="br-summary" style="background:var(--navy);border-radius:12px;padding:20px 24px;margin-top:20px;font-size:13px;color:rgba(255,255,255,0.6);line-height:1.75;"></div>
        </div>
      </div>
      <div style="background:rgba(10,132,200,0.06);border:1px solid rgba(10,132,200,0.12);border-radius:14px;padding:20px 24px;font-size:13px;color:var(--dim);line-height:1.7;">📌 Don't know your numbers? EOS's quarterly free clinic events include blood pressure and blood sugar screening — free of charge. <span style="color:var(--blue);cursor:pointer;font-weight:600;" data-route="programs-cbhi">Learn about our clinics →</span></div>
    </div>
  </div>
  
</div>`;

export default function ResBrainReceipts() {
  return <div data-section="ResBrainReceipts" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
