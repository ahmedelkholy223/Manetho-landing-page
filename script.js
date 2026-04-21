(function () {
  const analyticsTarget = window;

  function track(eventName, payload) {
    const event = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      ...payload,
    };

    analyticsTarget.dataLayer = analyticsTarget.dataLayer || [];
    analyticsTarget.dataLayer.push(event);

    if (typeof analyticsTarget.dispatchEvent === 'function') {
      analyticsTarget.dispatchEvent(new CustomEvent('manetho:analytics', { detail: event }));
    }
  }

  document.querySelectorAll('[data-track-cta]').forEach((element) => {
    element.addEventListener('click', () => {
      track('cta_click', {
        cta_id: element.dataset.trackCta,
        cta_label: element.textContent.trim(),
      });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.seen) {
          entry.target.dataset.seen = '1';
          track('section_view', {
            section_id: entry.target.dataset.trackSection,
          });
        }
      });
    },
    {
      rootMargin: '0px 0px -20% 0px',
      threshold: 0.3,
    }
  );

  document.querySelectorAll('[data-track-section]').forEach((section) => observer.observe(section));
})();
