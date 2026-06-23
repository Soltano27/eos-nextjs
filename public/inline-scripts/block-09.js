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
