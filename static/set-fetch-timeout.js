// static/set-fetch-timeout.js
(function () {
  const originalFetch = window.fetch;

  window.fetch = function (resource, options = {}) {
    const timeout = 30000; // 30s timeout
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const opts = {
      ...options,
      signal: controller.signal,
    };

    return originalFetch(resource, opts).finally(() => clearTimeout(id));
  };
})();