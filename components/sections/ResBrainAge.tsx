// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ════════════════════════════════════════════
     BRAIN AGE QUIZ
════════════════════════════════════════════ -->
<div id="view-resources-brain-age-full" class="page-view">
  <div style="background:var(--navy);padding:80px 60px 60px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;cursor:pointer;" data-route="resources">Resources</span><span style="color:rgba(255,255,255,0.2);font-size:12px;">/</span><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.5);text-transform:uppercase;">Brain Age Quiz</span></div>
    <h1 style="font-family:var(--serif);font-size:48px;font-weight:900;color:var(--white);line-height:1.05;margin-bottom:16px;letter-spacing:-1px;">How old is your brain?</h1>
    <p style="font-size:16px;color:rgba(255,255,255,0.5);max-width:500px;line-height:1.7;">Answer 10 questions honestly. This tool scores your lifestyle habits and gives you a brain age estimate — no registration needed.</p>
  </div>
  <div style="background:var(--bg);padding:60px;">
    <div style="max-width:640px;margin:0 auto;">
      <div id="baq-quiz">
        <div style="background:var(--white);border-radius:20px;padding:40px;border:1px solid rgba(10,58,110,0.08);">
          <div id="baq-progress-wrap" style="margin-bottom:32px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <span style="font-size:11px;font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:0.1em;" id="baq-q-count">Question 1 of 10</span>
              <span style="font-size:11px;color:var(--dim);" id="baq-pct">0%</span>
            </div>
            <div style="height:4px;background:var(--bg);border-radius:2px;"><div id="baq-bar" style="height:100%;border-radius:2px;background:linear-gradient(90deg,var(--blue),var(--teal));width:10%;transition:width 0.3s;"></div></div>
          </div>
          <div id="baq-question" style="font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:28px;line-height:1.35;"></div>
          <div id="baq-options" style="display:flex;flex-direction:column;gap:10px;"></div>
        </div>
        <div id="baq-result" style="display:none;background:var(--white);border-radius:20px;padding:48px;border:1px solid rgba(10,58,110,0.08);text-align:center;">
          <div id="baq-score-display" style="font-family:var(--serif);font-size:72px;font-weight:900;color:var(--blue);line-height:1;margin-bottom:8px;"></div>
          <div style="font-size:14px;color:var(--dim);margin-bottom:24px;">Your estimated brain age</div>
          <div id="baq-verdict" style="font-family:var(--serif);font-size:22px;color:var(--navy);margin-bottom:16px;"></div>
          <div id="baq-advice" style="font-size:14px;color:var(--dim);line-height:1.8;margin-bottom:32px;max-width:420px;margin-left:auto;margin-right:auto;"></div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button onclick="baqReset()" style="background:var(--blue);color:#fff;border:none;border-radius:100px;padding:14px 28px;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans);">Retake Quiz</button>
            <button class="btn-ghost" style="border-color:rgba(10,58,110,0.2);color:var(--navy);" data-route="resources-firstaid">Learn NeuroFirst Aid</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>`;

export default function ResBrainAge() {
  return <div data-section="ResBrainAge" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
