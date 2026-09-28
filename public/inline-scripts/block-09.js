(function () {
  // Route aliases
  var map = {
    contact: "contact-full",
    resources: "resources-full",
    "resources-brain-age": "resources-brain-age-full",
    "resources-healthy": "resources-healthy-full",
    "resources-firstaid": "resources-firstaid-full",
    "resources-receipts": "resources-receipts-full",
    media: "media-full",
    "media-impact": "media-impact-full",
    "media-research": "media-research-full",
    "media-gallery": "media-gallery-full",
    "media-news": "media-news-full",
    "neuroed-alumni": "neuroed-alumni-full",
  };
  document.addEventListener(
    "click",
    function (e) {
      var el = e.target.closest("[data-route]");
      if (!el) return;
      var r = el.getAttribute("data-route");
      if (!map[r]) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      document.querySelectorAll(".page-view").forEach(function (v) {
        v.classList.remove("active");
      });
      var t = document.getElementById("view-" + map[r]);
      if (t) {
        t.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    true,
  );

  // Contact form submit
  window.submitContactForm = function () {
    var n = document.getElementById("cf-name").value.trim();
    var e = document.getElementById("cf-email").value.trim();
    var s = document.getElementById("cf-subject").value;
    var m = document.getElementById("cf-message").value.trim();
    if (!n || !e || !m) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    var mailto =
      "mailto:info@theeosfoundation.org?subject=" +
      encodeURIComponent("[EOS Website] " + (s || "General Enquiry")) +
      "&body=" +
      encodeURIComponent("Name: " + n + "\nEmail: " + e + "\n\n" + m);
    window.location.href = mailto;
    document.getElementById("cf-success").style.display = "block";
  };

  // Neuro Guild signup form submit
  // Points at the real "Neuro Guild Membership Signup" Google Form —
  // see the header comment in
  // components/sections/guild-join/guildJoinRender.ts for the form/sheet
  // links. This constant mirrors the one there since this is a plain
  // script, not a module, and can't import it directly — keep both in
  // sync if the form ever changes.
  var GUILD_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeg_j0p8kyzJlIwWbhb_yJwN2iqhRpUx6T1Hd1pxa7YRxIGkw/formResponse";
  var GUILD_FORM_FIELDS = {
    name: "entry.877209908",
    email: "entry.1722318382",
    whatsapp: "entry.1872585205",
    ageRange: "entry.2081883543",
    consent: "entry.1809377616",
  };
  var GUILD_AGE_RANGE_OPTIONS = {
    explorer: "18–24 (Explorer)",
    builder: "25–35 (Builder)",
  };
  var GUILD_CONSENT_OPTIONS = {
    yes: "Yes, I consent",
    no: "No, I do not consent",
  };

  window.submitGuildForm = function () {
    var name = document.getElementById("gj-name").value.trim();
    var email = document.getElementById("gj-email").value.trim();
    var whatsapp = document.getElementById("gj-whatsapp").value.trim();
    var ageEl = document.querySelector('input[name="gj-age"]:checked');
    var consentEl = document.querySelector('input[name="gj-consent"]:checked');
    var successEl = document.getElementById("gj-success");
    var errorEl = document.getElementById("gj-error");

    successEl.style.display = "none";
    errorEl.style.display = "none";

    if (!name || !email || !whatsapp || !ageEl || !consentEl) {
      errorEl.style.display = "block";
      return;
    }

    var ageLabel =
      ageEl.value === "explorer"
        ? GUILD_AGE_RANGE_OPTIONS.explorer
        : GUILD_AGE_RANGE_OPTIONS.builder;
    var consentLabel =
      consentEl.value === "yes"
        ? GUILD_CONSENT_OPTIONS.yes
        : GUILD_CONSENT_OPTIONS.no;

    var body = new URLSearchParams();
    body.append(GUILD_FORM_FIELDS.name, name);
    body.append(GUILD_FORM_FIELDS.email, email);
    body.append(GUILD_FORM_FIELDS.whatsapp, whatsapp);
    body.append(GUILD_FORM_FIELDS.ageRange, ageLabel);
    body.append(GUILD_FORM_FIELDS.consent, consentLabel);

    // no-cors: we can't read the response (Google doesn't send CORS
    // headers here), but the POST still lands and the Sheet still fills
    // in. This is the standard no-backend way to submit into a Google
    // Form from a static site.
    fetch(GUILD_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    })
      .then(function () {
        successEl.style.display = "block";
        document
          .getElementById("guild-join-form")
          .querySelectorAll("input")
          .forEach(function (el) {
            if (el.type === "radio") el.checked = false;
            else el.value = "";
          });
      })
      .catch(function () {
        errorEl.textContent =
          "Something went wrong submitting the form. Please try again, or reach us directly at info@theeosfoundation.org.";
        errorEl.style.display = "block";
      });
  };

  // Update footer with real details
  var footer = document.querySelector("footer");
  if (footer) {
    // Update email links — first is info@, second is theeoscharity@
    var emailLinks = footer.querySelectorAll(".footer-email");
    if (emailLinks[0]) {
      emailLinks[0].href = "mailto:info@theeosfoundation.org";
      emailLinks[0].textContent = "info@theeosfoundation.org";
    }
    if (emailLinks[1]) {
      emailLinks[1].href = "mailto:theeoscharity@gmail.com";
      emailLinks[1].textContent = "theeoscharity@gmail.com";
    }
    // Update address
    var addrSpans = footer.querySelectorAll(".address,.footer-brand p");
    addrSpans.forEach(function (el) {
      if (
        el.textContent.includes("Lagos") ||
        el.textContent.includes("Nigeria")
      ) {
        if (el.classList.contains("address")) {
          el.textContent = "5 Kola Iyaomolere Street, Ogudu Ori-Oke, Lagos";
        }
      }
    });
    // Update social links
    var socialLinks = footer.querySelectorAll(".footer-col a");
    socialLinks.forEach(function (a) {
      var t = a.textContent.trim();
      if (t === "Instagram")
        a.href =
          "https://www.instagram.com/theeosfoundation?igsh=MTN4Y3hzbmVub3l1Mw==";
      if (t === "LinkedIn")
        a.href =
          "https://www.linkedin.com/company/the-emmanuel-olatunde-sanya-foundation/";
      if (t === "YouTube")
        a.href = "https://youtube.com/@theeosfoundation?si=0mYE2fzeZ-JrO_6J";
      if (t === "Twitter / X") a.href = "#";
      if (t === "Substack") a.href = "#";
      if (t.includes("@")) a.href = "mailto:info@theeosfoundation.org";
      a.target = "_blank";
    });
    // Update copyright year
    var copy = footer.querySelector(".footer-bottom p");
    if (copy)
      copy.textContent =
        "© 2025 EOS Youth Brain Health Culture Organisation · Lagos, Nigeria";
  }

  // Update social CTAs section on homepage with real links
  document.querySelectorAll(".cta-card a").forEach(function (a) {
    var t = a.textContent.trim();
    if (t.includes("YouTube"))
      a.href = "https://youtube.com/@theeosfoundation?si=0mYE2fzeZ-JrO_6J";
    if (t.includes("Substack")) a.href = "#";
    if (t.includes("Instagram"))
      a.href =
        "https://www.instagram.com/theeosfoundation?igsh=MTN4Y3hzbmVub3l1Mw==";
    if (t.includes("LinkedIn"))
      a.href =
        "https://www.linkedin.com/company/the-emmanuel-olatunde-sanya-foundation/";
    a.target = "_blank";
  });

  // Nav CTA "Join the Guild" — already routes correctly
  // Update nav Join the Guild button href if it's an anchor
  document.querySelectorAll(".nav-cta").forEach(function (b) {
    b.setAttribute("data-route", "programs-guild");
  });
})();
