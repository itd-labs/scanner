(() => {
  const options = document.currentScript?.dataset;
  if (options?.qaOnly === 'true' &&
      new URLSearchParams(location.search).get('antifraud_qa') !== '1') return;
  if (window.top !== window.self || !('MutationObserver' in window)) return;

  const sameOriginPaths = new Set(
    (options?.captchaPaths ?? '/captcha/widget.html,/captcha-swipe/widget.html')
      .split(',').filter(path => path.startsWith('/') && !path.startsWith('//'))
  );
  let started = false;
  const observer = new MutationObserver(changes => {
    for (const change of changes) {
      if (change.type === 'attributes') consider(change.target);
      else for (const node of change.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        consider(node);
        for (const frame of node.querySelectorAll('iframe[src]')) consider(frame);
      }
      if (started) return;
    }
  });

  function consider(frame) {
    if (started || !(frame instanceof HTMLIFrameElement) || !frame.hasAttribute('src')) return;
    let url;
    try { url = new URL(frame.src, location.href); } catch { return; }
    const turnstile = url.origin === 'https://challenges.cloudflare.com' &&
      url.pathname.startsWith('/cdn-cgi/challenge-platform/');
    const turnstileWrapper = url.origin === 'https://captcha.xn--d1ah4a.com' &&
      url.pathname === '/cf.html';
    const captchaPage = url.origin === location.origin && sameOriginPaths.has(url.pathname);
    if (!turnstile && !turnstileWrapper && !captchaPage) return;

    started = true;
    observer.disconnect();
    // The login form receives neither a Checkpoint token nor a dependency on its timing.
    const mount = () => {
      const collector = document.createElement('iframe');
      collector.title = 'Фоновая проверка безопасности';
      collector.tabIndex = -1;
      collector.setAttribute('aria-hidden', 'true');
      collector.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      collector.referrerPolicy = 'no-referrer';
      Object.assign(collector.style, {
        position: 'fixed', width: '1px', height: '1px', border: '0',
        top: '0', left: '0', opacity: '0', pointerEvents: 'none',
      });
      collector.src = '/static/antifraud/widget.html?action=auth&silent=1&network=1';
      document.body.append(collector);
      setTimeout(() => collector.remove(), 30000);
    };
    if (typeof requestIdleCallback === 'function') requestIdleCallback(mount, { timeout: 1200 });
    else setTimeout(mount, 300);
  }

  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
  for (const frame of document.querySelectorAll('iframe[src]')) consider(frame);
})();
