(function () {
  function track(eventName, properties) {
    const detail = { event: eventName, properties: properties || {} };

    window.dispatchEvent(new CustomEvent("jip:analytics", { detail }));

    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: detail.properties });
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, detail.properties);
    }
  }

  window.jipAnalytics = { track };

  document.addEventListener("click", event => {
    const target = event.target.closest("[data-analytics-event]");
    if (!target) return;

    track(target.dataset.analyticsEvent, {
      label: target.dataset.analyticsLabel || target.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
      path: window.location.pathname
    });
  });
})();
