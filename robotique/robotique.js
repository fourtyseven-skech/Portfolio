(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  const setLang = (l) => {
    document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.set === l));
    store.set("lang", l);
  };
  setLang(store.get("lang") || ((navigator.language || "fr").startsWith("fr") ? "fr" : "en"));
  document.addEventListener("click", (e) => {
    const lb = e.target.closest(".lang button");
    if (lb) { setLang(lb.dataset.set); return; }
    const shot = e.target.closest(".shot");
    if (shot) {
      const img = $("img", shot);
      const cap = shot.parentElement.querySelector("figcaption [data-l]:not([style*='none'])");
      $("#zoomImg").src = img.src;
      const visible = [...shot.parentElement.querySelectorAll("figcaption [data-l]")].find((n) => n.offsetParent !== null);
      $("#zoomCap").textContent = visible ? visible.textContent : img.alt;
      $("#zoom").showModal();
      return;
    }
    if (e.target.id === "zoom" || e.target.id === "zoomClose") $("#zoom").close();
  });
  addEventListener("scroll", () => $("#hdr").classList.toggle("solid", scrollY > innerHeight * 0.6), { passive: true });
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));
})();
