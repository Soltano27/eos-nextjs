// AUTO-GENERATED from original HTML — markup preserved byte-for-byte.
// Mounted via dangerouslySetInnerHTML so all inline handlers (onclick="ps2('home')" etc.)
// continue to work with the original vanilla JS attached on window.
"use client";
import React from "react";

const HTML = `<!-- ════════════════════════════════════════════
     CONTACT (routes: contact)
════════════════════════════════════════════ -->
<div id="view-contact-full" class="page-view">
  <div style="background:var(--navy);padding:100px 60px 80px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-150px;right:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,191,165,0.1) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="max-width:680px;position:relative;z-index:1;">
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:28px;"><div style="width:6px;height:6px;border-radius:50%;background:var(--teal);"></div><span style="font-size:10px;font-weight:700;letter-spacing:0.22em;color:var(--teal);text-transform:uppercase;">Get in Touch</span></div>
      <h1 style="font-family:var(--serif);font-size:56px;font-weight:900;color:var(--white);line-height:1.05;margin-bottom:24px;letter-spacing:-1px;">Talk to EOS.</h1>
      <p style="font-size:17px;color:rgba(255,255,255,0.55);line-height:1.75;max-width:500px;">Whether you want to join the Guild, bring EOS to your school, partner with us, or just ask a question — we want to hear from you.</p>
    </div>
  </div>

  <div style="background:var(--white);padding:100px 60px;">
    <div style="display:grid;grid-template-columns:1fr 400px;gap:80px;max-width:1080px;margin:0 auto;">

      <!-- FORM -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:36px;"><div style="width:24px;height:2px;background:var(--blue);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--blue);text-transform:uppercase;">Send a Message</span></div>
        <div style="display:flex;flex-direction:column;gap:20px;" id="contact-form">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div>
              <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Full Name</label>
              <input id="cf-name" type="text" placeholder="Your full name" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;transition:border-color 0.2s;background:var(--bg);" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"/>
            </div>
            <div>
              <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Email Address</label>
              <input id="cf-email" type="email" placeholder="your@email.com" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;transition:border-color 0.2s;background:var(--bg);" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"/>
            </div>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Subject</label>
            <select id="cf-subject" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;background:var(--bg);transition:border-color 0.2s;appearance:none;cursor:pointer;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'">
              <option value="">Select a subject...</option>
              <option>Join the Neuro Guild</option>
              <option>Apply for the Fellowship</option>
              <option>Bring EOS to My School</option>
              <option>Partnership Enquiry</option>
              <option>Media &amp; Press</option>
              <option>Funding &amp; Grants</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Message</label>
            <textarea id="cf-message" placeholder="Tell us what's on your mind..." rows="6" style="width:100%;padding:14px 16px;border:1px solid rgba(10,58,110,0.15);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);outline:none;resize:vertical;transition:border-color 0.2s;background:var(--bg);line-height:1.6;" onfocus="this.style.borderColor='var(--blue)'" onblur="this.style.borderColor='rgba(10,58,110,0.15)'"></textarea>
          </div>
          <div>
            <button onclick="submitContactForm()" style="background:var(--blue);color:#fff;border:none;border-radius:100px;padding:16px 36px;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--sans);transition:background 0.2s;" onmouseenter="this.style.background='var(--navy)'" onmouseleave="this.style.background='var(--blue)'">Send Message</button>
          </div>
          <div id="cf-success" style="display:none;background:rgba(0,191,165,0.08);border:1px solid rgba(0,191,165,0.3);border-radius:10px;padding:16px 20px;font-size:14px;color:#015C51;line-height:1.6;">
            ✅ Message sent. We'll get back to you at the email you provided.
          </div>
        </div>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:36px;"><div style="width:24px;height:2px;background:var(--blue);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--blue);text-transform:uppercase;">Contact Details</span></div>
        <div style="display:flex;flex-direction:column;gap:20px;margin-bottom:40px;">
          <div style="display:flex;gap:16px;align-items:flex-start;">
            <div style="width:40px;height:40px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">📧</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Email</div>
              <a href="mailto:info@theeosfoundation.org" style="font-size:14px;color:var(--blue);text-decoration:none;font-weight:500;">info@theeosfoundation.org</a>
            </div>
          </div>
          <div style="display:flex;gap:16px;align-items:flex-start;">
            <div style="width:40px;height:40px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">📞</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Phone</div>
              <a href="tel:+2348179330662" style="font-size:14px;color:var(--blue);text-decoration:none;font-weight:500;">08179330662</a>
            </div>
          </div>
          <div style="display:flex;gap:16px;align-items:flex-start;">
            <div style="width:40px;height:40px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">📍</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Address</div>
              <div style="font-size:14px;color:var(--dim);line-height:1.6;">5 Kola Iyaomolere Street<br/>Ogudu Ori-Oke, Lagos<br/>Nigeria</div>
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;"><div style="width:24px;height:2px;background:var(--blue);border-radius:1px;"></div><span style="font-size:10px;font-weight:800;letter-spacing:0.22em;color:var(--blue);text-transform:uppercase;">Follow EOS</span></div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="https://www.instagram.com/theeosfoundation?igsh=MTN4Y3hzbmVub3l1Mw==" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg);border-radius:10px;text-decoration:none;transition:background 0.2s;" onmouseenter="this.style.background='rgba(10,132,200,0.06)'" onmouseleave="this.style.background='var(--bg)'">
            <span style="font-size:18px;">📸</span><div><div style="font-size:12px;font-weight:700;color:var(--navy);">Instagram</div><div style="font-size:11px;color:var(--dim);">@theeosfoundation</div></div>
          </a>
          <a href="https://www.linkedin.com/company/the-emmanuel-olatunde-sanya-foundation/" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg);border-radius:10px;text-decoration:none;transition:background 0.2s;" onmouseenter="this.style.background='rgba(10,132,200,0.06)'" onmouseleave="this.style.background='var(--bg)'">
            <span style="font-size:18px;">💼</span><div><div style="font-size:12px;font-weight:700;color:var(--navy);">LinkedIn</div><div style="font-size:11px;color:var(--dim);">The Emmanuel Olatunde Sanya Foundation</div></div>
          </a>
          <a href="https://youtube.com/@theeosfoundation?si=0mYE2fzeZ-JrO_6J" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg);border-radius:10px;text-decoration:none;transition:background 0.2s;" onmouseenter="this.style.background='rgba(10,132,200,0.06)'" onmouseleave="this.style.background='var(--bg)'">
            <span style="font-size:18px;">▶️</span><div><div style="font-size:12px;font-weight:700;color:var(--navy);">YouTube</div><div style="font-size:11px;color:var(--dim);">@theeosfoundation</div></div>
          </a>
          <a href="https://www.facebook.com/share/1BfAWeVLuH/" target="_blank" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg);border-radius:10px;text-decoration:none;transition:background 0.2s;" onmouseenter="this.style.background='rgba(10,132,200,0.06)'" onmouseleave="this.style.background='var(--bg)'">
            <span style="font-size:18px;">👥</span><div><div style="font-size:12px;font-weight:700;color:var(--navy);">Facebook</div><div style="font-size:11px;color:var(--dim);">EOS Foundation</div></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

export default function Contact() {
  return (
    <div data-section="Contact" dangerouslySetInnerHTML={{ __html: HTML }} />
  );
}
