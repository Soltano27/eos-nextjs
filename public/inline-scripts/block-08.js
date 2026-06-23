function brUpdate() {
  var bp = parseInt(document.getElementById("br-bp").value) || 0;
  var bs = parseInt(document.getElementById("br-bs").value) || 0;
  var age = parseInt(document.getElementById("br-age").value) || 0;
  var bmi = parseFloat(document.getElementById("br-bmi").value) || 0;
  if (!bp && !bs && !age) return;
  document.getElementById("br-result").style.display = "block";
  var cards = [];
  if (bp) {
    var bps, bpc, bpa;
    if (bp < 120) {
      bps = "Normal";
      bpc = "var(--teal)";
      bpa =
        "Your blood pressure is in the healthy range. Keep it there with regular exercise and a low-salt diet.";
    } else if (bp < 130) {
      bps = "Elevated";
      bpc = "#f59e0b";
      bpa =
        "Slightly elevated. Watch your sodium intake, increase movement, and recheck in 3 months.";
    } else {
      bps = "High — Act Now";
      bpc = "#ef4444";
      bpa =
        "High blood pressure is a major risk factor for stroke. Please consult a doctor as soon as possible.";
    }
    cards.push({
      label: "Blood Pressure",
      value: bp + " mmHg",
      status: bps,
      color: bpc,
      advice: bpa,
    });
  }
  if (bs) {
    var bss, bsc, bsa;
    if (bs < 100) {
      bss = "Normal";
      bsc = "var(--teal)";
      bsa =
        "Healthy fasting blood sugar. Maintain with a balanced diet and regular activity.";
    } else if (bs < 126) {
      bss = "Prediabetes Range";
      bsc = "#f59e0b";
      bsa =
        "In the prediabetes range. Reduce sugar and refined carbs, increase movement, and consult a doctor.";
    } else {
      bss = "Diabetic Range";
      bsc = "#ef4444";
      bsa =
        "This reading is in the diabetic range. Uncontrolled blood sugar significantly damages the brain over time. Please see a doctor.";
    }
    cards.push({
      label: "Blood Sugar",
      value: bs + " mg/dL",
      status: bss,
      color: bsc,
      advice: bsa,
    });
  }
  if (bmi) {
    var bmis, bmic, bmia;
    if (bmi < 18.5) {
      bmis = "Underweight";
      bmic = "#f59e0b";
      bmia =
        "Being underweight can affect cognitive function. Focus on nutrient-dense foods including omega-3s.";
    } else if (bmi <= 24.9) {
      bmis = "Healthy Range";
      bmic = "var(--teal)";
      bmia =
        "Your BMI is in the healthy range — a positive indicator for brain health.";
    } else if (bmi <= 29.9) {
      bmis = "Overweight";
      bmic = "#f59e0b";
      bmia =
        "Overweight is associated with higher stroke risk. Regular movement and dietary changes make a real difference.";
    } else {
      bmis = "Obese Range";
      bmic = "#ef4444";
      bmia =
        "Obesity is a significant risk factor for stroke and cognitive decline. Please speak to a healthcare provider.";
    }
    cards.push({
      label: "BMI",
      value: bmi.toFixed(1),
      status: bmis,
      color: bmic,
      advice: bmia,
    });
  }
  var html = "";
  cards.forEach(function (c) {
    html +=
      '<div style="display:grid;grid-template-columns:1fr auto;gap:16px;align-items:start;padding:16px;background:var(--bg);border-radius:10px;border-left:3px solid ' +
      c.color +
      '"><div><div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:3px;">' +
      c.label +
      '</div><div style="font-size:12px;color:var(--dim);line-height:1.6;">' +
      c.advice +
      '</div></div><div style="text-align:right;flex-shrink:0;"><div style="font-family:var(--serif);font-size:18px;font-weight:700;color:' +
      c.color +
      '">' +
      c.value +
      '</div><div style="font-size:10px;font-weight:700;color:' +
      c.color +
      ';margin-top:2px;">' +
      c.status +
      "</div></div></div>";
  });
  document.getElementById("br-cards").innerHTML = html;
  document.getElementById("br-summary").innerHTML =
    '<strong style="color:#fff;">Important:</strong> This tool provides general educational information only. It does not replace a medical consultation. If any of your numbers are in the elevated or high-risk range, please speak to a qualified healthcare professional. EOS can help connect you to resources — <a href="mailto:info@theeosfoundation.org" style="color:var(--teal);">info@theeosfoundation.org</a>';
}
