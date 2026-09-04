(function () {
  "use strict";
  const D = window.STUDENT_COURSE;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let activeCycle = "representation";
  let activeFilter = "all";
  let activeAssessment = 0;

  function cycleFor(key) { return D.cycles.find(cycle => cycle.key === key); }

  function renderCycles() {
    $("#cycleTabs").innerHTML = D.cycles.map(cycle => `
      <button class="${cycle.key === activeCycle ? "active" : ""}" data-cycle="${cycle.key}" style="--cycle:${cycle.color}">
        <span>0${cycle.number}</span><b>${cycle.name}</b>
      </button>`).join("");
    const cycle = cycleFor(activeCycle);
    $("#cyclePanel").style.setProperty("--cycle", cycle.color);
    $("#cyclePanel").innerHTML = `
      <div class="cycle-question"><small>The question you will learn to answer</small><h3>${cycle.question}</h3><p>${cycle.business}</p><span class="verdict">${cycle.verdict}</span></div>
      <div class="cycle-study"><small>Focal study</small><h4>${cycle.title}</h4><p>${cycle.paper} · <i>${cycle.journal}</i></p><b>${cycle.data}</b></div>
      <div class="cycle-methods"><small>Methods you will use</small><div>${cycle.methods.map(method => `<span>${method}</span>`).join("")}</div></div>
      <div class="cycle-output"><small>What you will make</small><p>${cycle.make}</p></div>
      <div class="cycle-result"><small>What the course reconstruction found</small><p>${cycle.result}</p></div>`;
    $$('[data-cycle]').forEach(button => button.addEventListener("click", () => {
      activeCycle = button.dataset.cycle;
      renderCycles();
    }));
  }

  function renderClasses() {
    const filters = [["all", "All 13"], ["learn", "Learn"], ["execute", "Execute"], ["defend", "Defend"], ["capstone", "Capstone"]];
    $("#classFilters").innerHTML = filters.map(([key, label]) => `<button data-filter="${key}" class="${activeFilter === key ? "active" : ""}">${label}</button>`).join("");
    const classes = D.classes.filter(item => activeFilter === "all" || item.type === activeFilter);

    function classCard(item) {
      const cycle = cycleFor(item.cycle);
      const color = cycle?.color || "#9c2038";
      const label = cycle ? `Cycle ${cycle.number} · ${cycle.name}` : "Final conference";
      return `<article class="class-card" style="--cycle:${color}">
        <button data-class-open="${item.n}" aria-expanded="false" aria-controls="class-detail-${item.cycle}"><span class="class-number">${String(item.n).padStart(2, "0")}</span><span><time>Class ${item.n} of 13</time><small>${label} · ${item.type}</small><b>${item.title}</b></span><i>+</i></button>
      </article>`;
    }

    const rows = [...D.cycles.map(cycle => ({
      key: cycle.key,
      number: `Cycle ${cycle.number}`,
      name: cycle.name,
      range: `Classes ${cycle.number * 3 - 2}–${cycle.number * 3}`,
      color: cycle.color,
      items: classes.filter(item => item.cycle === cycle.key)
    })), {
      key: "capstone", number: "Final conference", name: "Capstone", range: "Class 13", color: "#9c2038",
      items: classes.filter(item => item.cycle === "capstone")
    }].filter(row => row.items.length);

    $("#classGrid").innerHTML = rows.map(row => `
      <section class="semester-cycle-row ${row.key === "capstone" ? "capstone-row" : ""}" style="--cycle:${row.color}">
        <header><div><span>${row.number}</span><h3>${row.name}</h3></div><small>${row.range}</small></header>
        <div class="cycle-class-grid ${activeFilter !== "all" ? "filtered" : ""} ${row.items.length === 1 ? "solo" : ""}">${row.items.map(classCard).join("")}</div>
        <article class="class-inline-modal" id="class-detail-${row.key}" data-class-detail role="region" aria-live="polite" hidden></article>
      </section>`).join("");
    $$('[data-filter]').forEach(button => button.addEventListener("click", () => { activeFilter = button.dataset.filter; renderClasses(); }));

    function closeClassDetail(row) {
      const panel = $("[data-class-detail]", row);
      panel.hidden = true;
      panel.innerHTML = "";
      delete panel.dataset.openClass;
      $$(".class-card", row).forEach(card => card.classList.remove("open"));
      $$('[data-class-open]', row).forEach(button => {
        button.setAttribute("aria-expanded", "false");
        $("i", button).textContent = "+";
      });
    }

    $$('[data-class-open]').forEach(button => button.addEventListener("click", () => {
      const row = button.closest(".semester-cycle-row");
      const panel = $("[data-class-detail]", row);
      const item = D.classes.find(entry => entry.n === Number(button.dataset.classOpen));
      const selectedAgain = panel.dataset.openClass === String(item.n) && !panel.hidden;
      if (selectedAgain) {
        closeClassDetail(row);
        return;
      }

      $$(".class-card", row).forEach(card => card.classList.remove("open"));
      $$('[data-class-open]', row).forEach(other => {
        other.setAttribute("aria-expanded", "false");
        $("i", other).textContent = "+";
      });
      button.closest(".class-card").classList.add("open");
      button.setAttribute("aria-expanded", "true");
      $("i", button).textContent = "−";
      panel.dataset.openClass = String(item.n);
      panel.hidden = false;
      panel.innerHTML = `<header><div><small>Class ${item.n} of 13</small><h4>${item.title}</h4></div><button type="button" data-close-class aria-label="Close class details">×</button></header>
        <div class="class-modal-grid"><section><small>Before class</small><p>${item.before}</p></section><section><small>Inside class</small><p>${item.inside}</p></section><section><small>Carry forward</small><p>${item.after}</p></section></div>`;
      $("[data-close-class]", panel).addEventListener("click", () => {
        closeClassDetail(row);
        button.focus();
      });
    }));
  }

  function renderAssessment() {
    const selected = D.assessments[activeAssessment];
    $("#assessmentList").innerHTML = D.assessments.map((item, index) => `<button data-assessment="${index}" class="${index === activeAssessment ? "active" : ""}"><span style="--item:${item.color}"></span><b>${item.label}</b><em>${item.weight}%</em></button>`).join("");
    $("#selectedWeight").textContent = `${selected.weight}%`;
    $("#selectedLabel").textContent = selected.label;
    $(".assessment-meter").style.setProperty("--selected", selected.color);
    $(".assessment-meter").style.setProperty("--portion", `${selected.weight}%`);
    const detailCard = $("#assessmentDetail");
    detailCard.innerHTML = `<small>What you submit</small><p>${selected.detail}</p><small>What strong work demonstrates</small><p>${selected.strong}</p>`;
    detailCard.style.height = `${Math.ceil($("#assessmentList").getBoundingClientRect().height)}px`;
    $$('[data-assessment]').forEach(button => button.addEventListener("click", () => { activeAssessment = Number(button.dataset.assessment); renderAssessment(); }));
  }

  window.addEventListener("resize", () => {
    const list = $("#assessmentList");
    const detail = $("#assessmentDetail");
    if (list && detail) detail.style.height = `${Math.ceil(list.getBoundingClientRect().height)}px`;
  });

  function readChecks() {
    try { return JSON.parse(localStorage.getItem("busin6306-student-ready") || "[]"); } catch (_) { return []; }
  }
  function writeChecks(values) {
    try { localStorage.setItem("busin6306-student-ready", JSON.stringify(values)); } catch (_) {}
  }
  function renderChecklist() {
    const checked = readChecks();
    $("#checklist").innerHTML = D.checklist.map((label, index) => `<label><input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""}><span></span><b>${label}</b></label>`).join("");
    const count = checked.length;
    $("#checkCount").textContent = `${count} of ${D.checklist.length} ready`;
    $("#checkBar").style.width = `${100 * count / D.checklist.length}%`;
    $$('[data-check]').forEach(input => input.addEventListener("change", () => {
      writeChecks($$('[data-check]:checked').map(item => Number(item.dataset.check)));
      renderChecklist();
    }));
  }

  function renderFaq() {
    $("#faq").innerHTML = D.faq.map(([question, answer], index) => `<article><button aria-expanded="false" data-faq="${index}"><b>${question}</b><span>+</span></button><p>${answer}</p></article>`).join("");
    $$('[data-faq]').forEach(button => button.addEventListener("click", () => {
      const article = button.closest("article");
      const open = article.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      $("span", button).textContent = open ? "−" : "+";
    }));
  }

  function initHeaderNavigation() {
    const links = $$('.site-header nav a[href^="#"]');
    const items = links.map(link => ({ link, id: link.hash.slice(1), section: document.getElementById(link.hash.slice(1)) })).filter(item => item.section);
    let frame = 0;
    let lockedUntil = 0;
    const activate = id => links.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    const update = () => {
      frame = 0;
      if (Date.now() < lockedUntil) return;
      const marker = ($(".site-header")?.offsetHeight || 0) + 24;
      let current = null;
      let upcoming = null;
      const activationBand = Math.max(marker, Math.min(window.innerHeight * 0.35, marker + 260));
      items.forEach(item => {
        const top = item.section.getBoundingClientRect().top;
        if (top <= marker) current = item;
        else if (!upcoming && top <= activationBand) upcoming = item;
      });
      if (upcoming) current = upcoming;
      activate(current?.id || "");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    links.forEach(link => link.addEventListener("click", () => {
      lockedUntil = Date.now() + 1000;
      activate(link.hash.slice(1));
      window.setTimeout(schedule, 1050);
    }));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
  }

  $$('[data-scroll]').forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: "smooth" })));
  $("#resetChecks").addEventListener("click", () => { writeChecks([]); renderChecklist(); });
  renderCycles(); renderClasses(); renderAssessment(); renderChecklist(); renderFaq(); initHeaderNavigation();
})();
