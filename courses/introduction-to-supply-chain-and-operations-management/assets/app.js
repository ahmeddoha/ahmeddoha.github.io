(function () {
  "use strict";
  const D = window.BUSI2301;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let activeModule = D.modules[0].key;
  let activeFilter = "all";
  let activeAssessment = 0;

  function moduleFor(key) { return D.modules.find(module => module.key === key); }
  function rowFor(key) { return D.rows.find(row => row.key === key); }

  function renderModules() {
    $("#cycleTabs").innerHTML = D.modules.map(module => `
      <button type="button" class="${module.key === activeModule ? "active" : ""}" data-module="${module.key}" style="--cycle:${module.color}" aria-pressed="${module.key === activeModule}">
        <span>0${module.number}</span><b>${module.name}</b>
      </button>`).join("");
    const module = moduleFor(activeModule);
    const panel = $("#cyclePanel");
    panel.style.setProperty("--cycle", module.color);
    panel.innerHTML = `
      <div class="cycle-question"><small>The operating decision</small><h3>${module.question}</h3><p>${module.business}</p><span class="verdict">${module.verdict}</span></div>
      <div class="cycle-study"><small>Classes in this decision arc · ${module.classes.length}</small><ol class="module-case-list">${module.classes.map(classTitle => `<li>${classTitle}</li>`).join("")}</ol><p><b>Analytical focus:</b> ${module.focus}</p><b>${module.evidence}</b></div>
      <div class="cycle-methods"><small>Frameworks you will use</small><div>${module.methods.map(method => `<span>${method}</span>`).join("")}</div></div>
      <div class="cycle-output"><small>Decision output</small><p>${module.make}</p></div>
      <div class="cycle-result"><small>What this enables next</small><p>${module.carry}</p></div>`;
    $$('[data-module]').forEach(button => button.addEventListener("click", () => {
      activeModule = button.dataset.module;
      renderModules();
    }));
  }

  function closeClassDetail(row, restoreFocus) {
    const panel = $("[data-class-detail]", row);
    const openButton = $("[data-class-open][aria-expanded='true']", row);
    panel.hidden = true;
    panel.innerHTML = "";
    delete panel.dataset.openClass;
    panel.removeAttribute("aria-labelledby");
    $$(".class-card", row).forEach(card => card.classList.remove("open"));
    $$('[data-class-open]', row).forEach(button => {
      button.setAttribute("aria-expanded", "false");
      $("i", button).textContent = "+";
    });
    if (restoreFocus && openButton) openButton.focus();
  }

  function renderClasses() {
    const filters = [["all", "All 13"], ["frame", "Foundation"], ["design", "System design"], ["flow", "Network + flow"], ["plan", "Planning"], ["integrate", "Quality + integration"]];
    $("#classFilters").innerHTML = filters.map(([key, label]) => `<button type="button" data-filter="${key}" class="${activeFilter === key ? "active" : ""}" aria-pressed="${activeFilter === key}">${label}</button>`).join("");
    const visible = D.classes.filter(item => activeFilter === "all" || item.type === activeFilter);
    const rows = D.rows.map(row => ({...row, items: visible.filter(item => item.group === row.key)})).filter(row => row.items.length);
    const card = (item, row) => `<article class="class-card" style="--cycle:${row.color}">
      <button type="button" data-class-open="${item.n}" aria-expanded="false" aria-controls="class-detail-${row.key}"><span class="class-number">${String(item.n).padStart(2, "0")}</span><span><span class="class-sequence">Class ${item.n} of 13</span><small>${row.label} · ${item.type}</small><b>${item.title}</b></span><i aria-hidden="true">+</i></button>
    </article>`;
    $("#classGrid").innerHTML = rows.map(row => `
      <section class="semester-cycle-row" style="--cycle:${row.color}">
        <header><div><span>${row.label}</span><h3>${row.name}</h3></div><small>${row.range}</small></header>
        <div class="cycle-class-grid ${activeFilter !== "all" ? "filtered" : ""} ${row.items.length === 1 ? "solo" : ""}">${row.items.map(item => card(item, row)).join("")}</div>
        <article class="class-inline-modal" id="class-detail-${row.key}" data-class-detail role="region" aria-live="polite" hidden></article>
      </section>`).join("");
    $$('[data-filter]').forEach(button => button.addEventListener("click", () => { activeFilter = button.dataset.filter; renderClasses(); }));
    $$('[data-class-open]').forEach(button => button.addEventListener("click", () => {
      const row = button.closest(".semester-cycle-row");
      const panel = $("[data-class-detail]", row);
      const item = D.classes.find(entry => entry.n === Number(button.dataset.classOpen));
      if (panel.dataset.openClass === String(item.n) && !panel.hidden) return closeClassDetail(row, true);
      $$(".semester-cycle-row").forEach(other => { if (other !== row) closeClassDetail(other, false); });
      closeClassDetail(row, false);
      button.closest(".class-card").classList.add("open");
      button.setAttribute("aria-expanded", "true");
      $("i", button).textContent = "−";
      panel.dataset.openClass = String(item.n);
      panel.hidden = false;
      panel.setAttribute("aria-labelledby", `class-heading-${item.n}`);
      panel.innerHTML = `<header><div><small>Class ${item.n} of 13</small><h4 id="class-heading-${item.n}">${item.title}</h4></div><button type="button" data-close-class aria-label="Close class details">×</button></header>
        <div class="class-modal-grid"><section><small>Before class</small><p>${item.before}</p></section><section><small>Inside class</small><p>${item.inside}</p></section><section><small>Carry forward</small><p>${item.after}</p></section></div>`;
      const closeButton = $("[data-close-class]", panel);
      closeButton.addEventListener("click", () => closeClassDetail(row, true));
      closeButton.focus({preventScroll:true});
    }));
  }

  function sizeAssessmentDetail() {
    const list = $("#assessmentList");
    const detail = $("#assessmentDetail");
    if (!list || !detail) return;
    detail.style.height = window.innerWidth > 1050 ? `${Math.ceil(list.getBoundingClientRect().height)}px` : "auto";
  }
  function renderAssessment() {
    const selected = D.assessments[activeAssessment];
    $("#assessmentList").innerHTML = D.assessments.map((item, index) => `<button type="button" data-assessment="${index}" class="${index === activeAssessment ? "active" : ""}" aria-pressed="${index === activeAssessment}"><span style="--item:${item.color}"></span><b>${item.label}</b><em>${item.weight}%</em></button>`).join("");
    $("#selectedWeight").textContent = `${selected.weight}%`;
    $("#selectedLabel").textContent = selected.label;
    $(".assessment-meter").style.setProperty("--selected", selected.color);
    $(".assessment-meter").style.setProperty("--portion", `${selected.weight}%`);
    $("#assessmentDetail").innerHTML = `<small>What you produce</small><p>${selected.detail}</p><small>What strong work demonstrates</small><p>${selected.strong}</p>`;
    sizeAssessmentDetail();
    $$('[data-assessment]').forEach(button => button.addEventListener("click", () => { activeAssessment = Number(button.dataset.assessment); renderAssessment(); }));
  }

  function readChecks() {
    try { return JSON.parse(localStorage.getItem("busi2301-student-ready") || "[]"); } catch (_) { return []; }
  }
  function writeChecks(values) {
    try { localStorage.setItem("busi2301-student-ready", JSON.stringify(values)); } catch (_) {}
  }
  function renderChecklist() {
    const checked = readChecks();
    $("#checklist").innerHTML = D.checklist.map((label, index) => `<label><input type="checkbox" data-check="${index}" ${checked.includes(index) ? "checked" : ""}><span aria-hidden="true"></span><b>${label}</b></label>`).join("");
    $("#checkCount").textContent = `${checked.length} of ${D.checklist.length} ready`;
    $("#checkBar").style.width = `${100 * checked.length / D.checklist.length}%`;
    $$('[data-check]').forEach(input => input.addEventListener("change", () => {
      writeChecks($$('[data-check]:checked').map(item => Number(item.dataset.check)));
      renderChecklist();
    }));
  }

  function renderFaq() {
    $("#faq").innerHTML = D.faq.map(([question, answer], index) => `<article><button type="button" id="faq-control-${index}" aria-expanded="false" aria-controls="faq-answer-${index}" data-faq="${index}"><b>${question}</b><span aria-hidden="true">+</span></button><p id="faq-answer-${index}" aria-labelledby="faq-control-${index}" hidden>${answer}</p></article>`).join("");
    $$('[data-faq]').forEach(button => button.addEventListener("click", () => {
      const article = button.closest("article");
      const open = article.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
      $("span", button).textContent = open ? "−" : "+";
    }));
  }

  function initHeaderNavigation() {
    const header = $(".site-header");
    const nav = $("#course-navigation");
    const toggle = $(".menu-toggle");
    const links = $$('a[href^="#"]', nav);
    const items = links.map(link => ({link, section: document.getElementById(link.hash.slice(1))})).filter(item => item.section);
    let frame = 0;
    let lockedUntil = 0;
    const closeMenu = restoreFocus => {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      $("span", toggle).textContent = "Menu";
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("menu-open", opening);
      toggle.setAttribute("aria-expanded", String(opening));
      $("span", toggle).textContent = opening ? "Close" : "Menu";
    });
    const activate = id => links.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
    const update = () => {
      frame = 0;
      if (Date.now() < lockedUntil) return;
      const marker = ($(".site-header")?.offsetHeight || 0) + 24;
      let current = null;
      items.forEach(item => { if (item.section.getBoundingClientRect().top <= marker) current = item; });
      activate(current ? current.section.id : "");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    links.forEach(link => link.addEventListener("click", () => {
      lockedUntil = Date.now() + 800;
      activate(link.hash.slice(1));
      closeMenu(false);
      window.setTimeout(schedule, 850);
    }));
    document.addEventListener("click", event => {
      if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(event.target)) closeMenu(false);
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
    });
    addEventListener("scroll", schedule, {passive:true});
    addEventListener("resize", () => {
      if (window.innerWidth > 1050) closeMenu(false);
      sizeAssessmentDetail();
      schedule();
    });
    schedule();
  }

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    const row = $(".semester-cycle-row [data-class-detail]:not([hidden])")?.closest(".semester-cycle-row");
    if (row) closeClassDetail(row, true);
  });
  $$('[data-scroll]').forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView({behavior:"smooth"})));
  $("#resetChecks").addEventListener("click", () => { writeChecks([]); renderChecklist(); });
  renderModules();
  renderClasses();
  renderAssessment();
  renderChecklist();
  renderFaq();
  initHeaderNavigation();
})();
