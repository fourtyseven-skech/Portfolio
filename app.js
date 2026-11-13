(function () {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  let lang = store.get("lang") || ((navigator.language || "fr").startsWith("fr") ? "fr" : "en");
  const t = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] ?? o.fr ?? "" : o ?? "");
  const ui = (k) => esc(t(S.ui[k]));

  // icônes : traits droits, bouts carrés, un point d'accent
  const P = (d, dot) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"><path d="${d}"/>${dot ? `<circle cx="${dot[0]}" cy="${dot[1]}" r="1.8" fill="#f96302" stroke="none"/>` : ""}</svg>`;
  const ICON = {
    about: P("M4 20v-3a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v3M10 4v4", [10, 3.4]),
    skills: P("M4 6h16M4 12h10M4 18h13", [19, 12]),
    projects: P("M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z", [17, 17]),
    clients: P("M4 20V9h6v11M14 20V4h6v16M7 13h0M17 9h0", [17, 14]),
    education: P("M3 9l9-4 9 4-9 4zM7 11v5c2 2 8 2 10 0v-5", [12, 9]),
    timeline: P("M5 4v16M5 7h8M5 12h12M5 17h6", [18, 12]),
    contact: P("M3 6h18v12H3zM3 7l9 7 9-7", [12, 14]),
  };

  const tags = (a) => `<div class="tags">${(a || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;
  const twoTone = (a, b) => `<span class="dim">${a} </span>${b}`;
  const head = (key, no, word, pos, tone, titleKey) => `
    <div class="wm ${pos}"><sup>${no}</sup>${esc(word)}</div>
    <div class="wrap">
      <div class="shead rv">${ICON[key] || ""}${ui(key === "about" ? "profile" : key)}</div>
      <h2 class="h2 rv">${twoTone(ui(titleKey + "1"), ui(titleKey + "2"))}</h2>`;

  const statusClass = (p) => (/valid|livr|live|en ligne|deliver/i.test(t(p.status)) ? "green" : /cours|ongoing|prépar|prepar/i.test(t(p.status)) ? "warm" : "");
  const split = (title) => { const w = title.split(" "); const k = Math.max(2, Math.ceil(w.length / 2)); return [esc(w.slice(0, k).join(" ")), esc(w.slice(k).join(" "))]; };
  const lg = (x) => `<span class="chip">${x.before ? `<em>${esc(t(x.before))}</em>` : ""}<img src="${esc(x.src)}" alt="${esc(x.name)}" style="--h:${x.h || 36}px"${x.ink ? ' class="ink"' : ""}></span>`;
  const logos = (g) => (g && g.length ? `<div class="logos">${g.map((grp) => `<div class="lg"><span class="lg-l">${esc(t(grp.label))}</span><div class="lg-r">${grp.items.map(lg).join("")}</div></div>`).join("")}</div>` : "");
  const metrics = (m) => (m && m.length ? `<div class="mets">${m.map((x) => `<div class="met"><b>${esc(x.value)}</b><span>${esc(t(x.label))}</span></div>`).join("")}</div>` : "");

  const order = S.projectOrder || S.projects.map((p) => p.id);
  const projects = order.map((id) => S.projects.find((p) => p.id === id)).filter(Boolean);
  const TONES = ["white", "sun", "night", "dawn", "white", "blue", "sun", "night", "dawn", "white"];

  function build() {
    document.documentElement.lang = lang;
    document.title = `${S.name} · ${t(S.title)}`;
    const initials = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    const marquee = ["Architecture", "Data & IA", "Prévision", "MES", "TMS", "RAG", "Sécurité IA", "Supply chain"];
    const m = (marquee.map((w) => `<span>${esc(w)}</span>`).join(""));

    const sections = [
      ["about", ui("about")], ["skills", ui("skills")], ["projects", ui("projects")], ["clients", ui("clients")], ["education", ui("education")], ["timeline", ui("timeline")], ["contact", ui("contact")],
    ];
    $("#brand").textContent = S.name;
    $("#nav").innerHTML = sections.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
    document.querySelectorAll("[data-ui]").forEach((el) => (el.textContent = t(S.ui[el.dataset.ui])));
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.l === lang));

    const hero = `
      <section class="hero" id="hero">
        ${S.photo ? `<div class="hero-wm" aria-hidden="true"><span class="arc a1"></span><span class="arc a2"></span><img src="${esc(S.photo)}" alt=""><b>${esc(S.name.split(" ")[1] || S.name)}</b></div>` : ""}
        <div class="wrap">
          <div>
            <div class="who rv"><span>${esc(S.name)} · ${esc(t(S.title))}</span></div>
            <h1 class="h2 rv">${twoTone(ui("heroLine1"), `<em>${ui("heroLine2")}</em>`)}</h1>
            <p class="lead rv">${esc(t(S.tagline))}</p>
            <div class="cta rv"><a class="btn btn-action" href="#projects">${ui("cta")}</a><a class="btn btn-ghost" href="#contact">${ui("cta2")}</a></div>
          </div>
          <div class="stage rv" aria-hidden="true">
            <div class="f f1"><img src="assets/mes-overview.png" alt=""></div>
            <div class="f f2"><img src="assets/assistant-answer.png" alt=""></div>
            <div class="f f3"><img src="assets/tms-gps.png" alt=""></div>
          </div>
        </div>
      </section>
      <div class="marquee" aria-hidden="true"><div class="track">${m}${m}${m}${m}</div></div>`;

    const about = `
      <section class="band t-white" id="about">
        ${head("about", "01", "Profil", "r-t", "white", "aboutTitle")}
          <div class="about me-grid" style="margin-top:34px">
            <figure class="me rv"><span class="ring"></span><span class="arch"></span><img src="${esc(S.photo || "")}" alt="${esc(S.name)}"><figcaption><b>${esc(S.name)}</b><span>${esc(t(S.title))}</span></figcaption></figure>
            <div>${(S.about[lang] || S.about.fr).map((p) => `<p class="lead rv">${esc(p)}</p>`).join("")}
              <dl class="facts rv">${S.facts.map((f) => `<div><dt>${esc(t(f.k))}</dt><dd>${esc(t(f.v))}</dd></div>`).join("")}</dl>
            </div>
          </div>
          <div class="stats rv inline">
            <div class="stat"><b>4</b><span>${ui("stat1")}</span></div>
            <div class="stat"><b>${projects.length}</b><span>${ui("stat2")}</span></div>
            <div class="stat"><b>3</b><span>${ui("stat3")}</span></div>
          </div>
        </div>
      </section>`;

    const skills = `
      <section class="band t-blue" id="skills">
        ${head("skills", "02", "Compétences", "l-b", "blue", "skillsTitle")}
          <div class="skills rv">${S.skills.map((g) => `<div><h3>${esc(t(g.group))}</h3>${tags(g.items)}</div>`).join("")}</div>
        </div>
      </section>`;

    const index = `
      <section class="band t-sun" id="projects">
        ${head("projects", "03", "Projets", "r-t", "sun", "projectsTitle")}
          <div class="rows rv">${projects.map((p, i) => `
            <a class="row" href="#p-${esc(p.id)}">
              <span class="n">${String(i + 1).padStart(2, "0")}</span>
              <span class="tt"><i class="sq c${i % 5}"></i>${esc(t(p.title))}</span>
              <span class="dd">${esc(t(p.context)).slice(0, 150)}${t(p.context).length > 150 ? "…" : ""}</span>
              <span class="pill ${statusClass(p)}">${esc(t(p.status))}</span>
              <span class="dots" aria-hidden="true">${"<i></i>".repeat(9)}</span>
            </a>`).join("")}</div>
        </div>
      </section>`;

    const scenes = projects.map((p, i) => {
      const tone = TONES[i % TONES.length];
      const [a, b] = split(t(p.title));
      const hl = p.highlights && (p.highlights[lang] || p.highlights.fr);
      const imgs = p.images || [];
      const first = imgs[0];
      return `
      <section class="band t-${tone}" id="p-${esc(p.id)}">
        <div class="wm ${i % 2 ? "l-b" : "r-b"}"><sup>${String(i + 1).padStart(2, "0")}</sup>${esc(p.id.split("-")[0].slice(0, 10))}</div>
        <div class="wrap">
          <div class="scene ${i % 2 ? "flip" : ""}">
            <div class="txt rv">
              <div class="meta"><span>${ui("project")} ${String(i + 1).padStart(2, "0")}, ${esc(p.year)}</span><span class="pill ${statusClass(p)}">${esc(t(p.status))}</span></div>
              <h3 class="h3">${twoTone(a, b)}</h3>
              <p class="lead">${esc(t(p.context))}</p>
              ${logos(p.logos)}
              <dl><div><dt>${ui("role")}</dt><dd>${esc(t(p.role))}</dd></div><div><dt>${ui("outcome")}</dt><dd>${esc(t(p.outcome))}</dd></div></dl>
              ${metrics(p.metrics)}
              ${tags(p.stack)}
              ${p.link ? `<a class="link" href="${esc(p.link.url)}" target="_blank" rel="noopener">${ui("visit")} : ${esc(p.link.label)} →</a>` : ""}
            </div>
            ${first ? `<div class="media rv" data-p="${esc(p.id)}">
              <div class="shot ${esc(first.kind || "figure")}" title="${ui("zoom")}"><img src="${esc(first.src)}" alt="${esc(t(first.caption))}" loading="lazy"></div>
              <p class="cap">${esc(t(first.caption))}</p>
              ${imgs.length > 1 ? `<div class="tabs">${imgs.map((im, k) => `<button data-k="${k}" class="${k === 0 ? "on" : ""}" aria-label="${esc(t(im.caption))}"><img src="${esc(im.src)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
            </div>` : ""}
          </div>
          ${hl && hl.length ? `<div class="hlg rv"><h4>${ui("keyPoints")}</h4><ol>${hl.map((x, k) => `<li><span class="n">${String(k + 1).padStart(2, "0")}</span><p>${esc(x)}</p></li>`).join("")}</ol></div>` : ""}
        </div>
      </section>`;
    }).join("");

    const C = S.clients;
    const clients = C ? `
      <section class="band t-white" id="clients">
        ${head("clients", "04", "Clients", "r-t", "white", "clientsTitle")}
          <p class="lead rv">${ui("clientsIntro")}</p>
          <div class="cl rv">${C.groups.map((g) => `<div class="clc"><div class="lg-r">${g.reveal ? `<span class="rvl" tabindex="0"><img class="b" src="${esc(g.logos[1].src)}" alt="${esc(g.logos[1].name)}"><img class="a" src="${esc(g.logos[0].src)}" alt="${esc(g.logos[0].name)}"><em>${ui("exIdentity")}</em></span>` : g.logos.map(lg).join("")}</div><p>${esc(t(g.what))}</p></div>`).join("")}</div>
          <div class="nv rv"><h3>${ui("clientsNever")}</h3><ul>${(C.never[lang] || C.never.fr).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
      </section>
      <div class="strip"><p><b>${ui("stripLead")}</b> ${ui("stripText")}</p><a class="btn btn-dark btn-sm" href="#contact">${ui("cta2")}</a></div>` : "";

    const education = `
      <section class="band t-dawn" id="education">
        <div class="marks" aria-hidden="true">${(S.academicMarks || []).map((m) => `<img class="mark ${m.pos}" src="${esc(m.src)}" alt="">`).join("")}</div>
        <div class="wrap">
          <div class="shead rv">${ICON.education}${ui("education")}</div>
          <h2 class="h2 rv">${twoTone(ui("educationTitle1"), ui("educationTitle2"))}</h2>
          <div class="cols rv">${S.courses.map((g) => `<div><h3>${esc(t(g.group))}</h3><ul>${g.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>
        </div>
      </section>`;

    const timeline = `
      <section class="band t-night" id="timeline">
        ${head("timeline", "06", "Parcours", "r-b", "night", "timelineTitle")}
          <ul class="tl rv" style="padding:0">${S.timeline.map((e) => `<li><span class="p">${esc(e.period)}</span><div><h3>${esc(t(e.title))}</h3>${t(e.text) ? `<p>${esc(t(e.text))}</p>` : ""}</div></li>`).join("")}</ul>
        </div>
      </section>`;

    const l = S.links;
    const contact = `
      <section class="band t-white" id="contact">
        ${head("contact", "07", "Contact", "l-b", "white", "contactTitle")}
          <p class="lead rv">${ui("contactText")}</p>
          <a class="mail rv" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
          <div class="links rv">${[l.linkedin && `<a href="${esc(l.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`, l.github && `<a href="${esc(l.github)}" target="_blank" rel="noopener">GitHub</a>`].filter(Boolean).join("")}</div>
        </div>
      </section>`;

    $("#top").innerHTML = hero + about + skills + index + scenes + clients + education + timeline + contact;
    $("#footer").innerHTML = `<div class="wrap"><div class="big">${esc(S.name)}</div><small>${esc(t(S.confidentialNote))}</small><small>© ${new Date().getFullYear()}</small></div>`;
    observe();
  }

  let io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
  }

  // clics : onglets d'images et zoom
  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".tabs button");
    if (tab) {
      const media = tab.closest(".media"); const p = S.projects.find((x) => x.id === media.dataset.p); const im = p.images[+tab.dataset.k];
      media.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("on", b === tab));
      const shot = $(".shot", media); shot.className = `shot ${im.kind || "figure"}`; $("img", shot).src = im.src; $("img", shot).alt = t(im.caption);
      $(".cap", media).textContent = t(im.caption); return;
    }
    const shot = e.target.closest(".shot");
    if (shot) { const img = $("img", shot); $("#zoomImg").src = img.src; $("#zoomCap").textContent = img.alt; $("#zoom").showModal(); return; }
    if (e.target.id === "zoom" || e.target.id === "zoomClose") $("#zoom").close();
    const lb = e.target.closest(".lang button");
    if (lb) { lang = lb.dataset.l; store.set("lang", lang); const y = scrollY; build(); scrollTo(0, y); }
  });

  const prog = document.createElement("div");
  prog.id = "prog"; prog.setAttribute("aria-hidden", "true"); prog.innerHTML = "<i></i><b>0</b>";
  document.body.appendChild(prog);
  const upd = () => { const h = document.documentElement.scrollHeight - innerHeight; const v = h > 0 ? Math.min(100, Math.round((scrollY / h) * 100)) : 0; prog.lastChild.textContent = v; prog.firstChild.style.width = v + "%"; };
  addEventListener("scroll", upd, { passive: true }); upd();
  addEventListener("scroll", () => $("#hdr").classList.toggle("solid", scrollY > innerHeight * 0.75), { passive: true });
  build();
})();
