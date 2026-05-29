// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ════════════════════════════════════════════
     HEALTHY CHOICES CHECK
════════════════════════════════════════════ -->
<div id="view-resources-healthy-full" class="page-view">
  <div style="background:var(--navy);padding:80px 60px 60px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;cursor:pointer;" data-route="resources">Resources</span><span style="color:rgba(255,255,255,0.2);font-size:12px;">/</span><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:rgba(255,255,255,0.5);text-transform:uppercase;">Healthy Choices Check</span></div>
    <h1 style="font-family:var(--serif);font-size:48px;font-weight:900;color:var(--white);line-height:1.05;margin-bottom:16px;letter-spacing:-1px;">What is your brain actually working with?</h1>
    <p style="font-size:16px;color:rgba(255,255,255,0.5);max-width:500px;line-height:1.7;">Score your daily habits across five key domains. See what your brain has to work with every day.</p>
  </div>
  <div style="background:var(--bg);padding:60px;">
    <div style="max-width:680px;margin:0 auto;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" id="hcc-cards">
        <div class="hcc-card" style="background:var(--white);border-radius:16px;padding:28px;border:1px solid rgba(10,58,110,0.08);">
          <div style="font-size:24px;margin-bottom:12px;">😴</div>
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px;">Sleep</div>
          <div style="font-size:12px;color:var(--dim);margin-bottom:16px;">How many hours of sleep do you get on a typical night?</div>
          <input type="range" min="0" max="10" value="5" id="hcc-sleep" oninput="hccUpdate()" style="width:100%;accent-color:var(--blue);cursor:pointer;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;"><span>0 hrs</span><span id="hcc-sleep-val" style="color:var(--blue);font-weight:700;">5 hrs</span><span>10 hrs</span></div>
        </div>
        <div class="hcc-card" style="background:var(--white);border-radius:16px;padding:28px;border:1px solid rgba(10,58,110,0.08);">
          <div style="font-size:24px;margin-bottom:12px;">🏃</div>
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px;">Exercise</div>
          <div style="font-size:12px;color:var(--dim);margin-bottom:16px;">How many days per week do you exercise?</div>
          <input type="range" min="0" max="7" value="2" id="hcc-exercise" oninput="hccUpdate()" style="width:100%;accent-color:var(--purple);cursor:pointer;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;"><span>0 days</span><span id="hcc-exercise-val" style="color:var(--purple);font-weight:700;">2 days</span><span>7 days</span></div>
        </div>
        <div class="hcc-card" style="background:var(--white);border-radius:16px;padding:28px;border:1px solid rgba(10,58,110,0.08);">
          <div style="font-size:24px;margin-bottom:12px;">💧</div>
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px;">Hydration</div>
          <div style="font-size:12px;color:var(--dim);margin-bottom:16px;">How many glasses of water daily?</div>
          <input type="range" min="0" max="12" value="4" id="hcc-water" oninput="hccUpdate()" style="width:100%;accent-color:var(--teal);cursor:pointer;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;"><span>0</span><span id="hcc-water-val" style="color:var(--teal);font-weight:700;">4 glasses</span><span>12+</span></div>
        </div>
        <div class="hcc-card" style="background:var(--white);border-radius:16px;padding:28px;border:1px solid rgba(10,58,110,0.08);">
          <div style="font-size:24px;margin-bottom:12px;">😤</div>
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px;">Stress</div>
          <div style="font-size:12px;color:var(--dim);margin-bottom:16px;">Rate your average daily stress (10 = extremely stressed)</div>
          <input type="range" min="0" max="10" value="6" id="hcc-stress" oninput="hccUpdate()" style="width:100%;accent-color:#ef4444;cursor:pointer;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;"><span>None</span><span id="hcc-stress-val" style="color:#ef4444;font-weight:700;">6/10</span><span>Max</span></div>
        </div>
      </div>
      <div style="background:var(--white);border-radius:16px;padding:28px;border:1px solid rgba(10,58,110,0.08);margin-top:16px;">
        <div style="font-size:24px;margin-bottom:12px;">🍎</div>
        <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:12px;">Diet Quality</div>
        <div style="font-size:12px;color:var(--dim);margin-bottom:14px;">How would you describe your overall diet?</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;" id="hcc-diet-opts">
          <button onclick="hccDiet(0,this)" style="padding:9px 18px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid rgba(10,58,110,0.15);background:var(--bg);color:var(--dim);font-family:var(--sans);transition:all 0.15s;">Mostly fast food</button>
          <button onclick="hccDiet(1,this)" style="padding:9px 18px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid rgba(10,58,110,0.15);background:var(--bg);color:var(--dim);font-family:var(--sans);transition:all 0.15s;">Mixed</button>
          <button onclick="hccDiet(2,this)" style="padding:9px 18px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid rgba(10,58,110,0.15);background:var(--bg);color:var(--dim);font-family:var(--sans);transition:all 0.15s;">Mostly balanced</button>
          <button onclick="hccDiet(3,this)" style="padding:9px 18px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid rgba(10,58,110,0.15);background:var(--bg);color:var(--dim);font-family:var(--sans);transition:all 0.15s;">Very healthy</button>
        </div>
      </div>
      <div style="background:var(--navy);border-radius:16px;padding:28px;margin-top:20px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:0.1em;">Your Brain Health Score</div>
          <div id="hcc-score" style="font-family:var(--serif);font-size:36px;font-weight:900;color:var(--teal);">--</div>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px;margin-bottom:12px;"><div id="hcc-score-bar" style="height:100%;border-radius:3px;background:linear-gradient(90deg,var(--blue),var(--teal));width:0%;transition:width 0.4s;"></div></div>
        <div id="hcc-feedback" style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.7;">Adjust the sliders to calculate your score.</div>
      </div>
    </div>
  </div>
  
</div>`;

export default function ResHealthyChoices() {
  return (
    <div
      data-section="ResHealthyChoices"
      dangerouslySetInnerHTML={{ __html: HTML }}
    />
  );
}
