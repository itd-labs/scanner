(() => {
  const local = document.currentScript?.dataset;
  if (
    local?.qaOnly === "true" &&
    new URLSearchParams(location.search).get("antifraud_qa") !== "1"
  ) {
    return;
  }
  if (window.top !== window.self || !("MutationObserver" in window)) {
    return;
  }
  const local_2 = new Set(
    (local?.captchaPaths ?? "/captcha/widget.html,/captcha-swipe/widget.html")
      .split(",")
      .filter(
        (arg) => arg.startsWith("./site/index.html") && !arg.startsWith("//"),
      ),
  );
  let local_3 = false;
  const local_4 = new MutationObserver((arg) => {
    for (const local of arg) {
      if (local.type === "attributes") {
        fn(local.target);
      } else {
        for (const local of local.addedNodes) {
          if (local.nodeType !== Node.ELEMENT_NODE) {
            continue;
          }
          fn(local);
          for (const local of local.querySelectorAll("iframe[src]")) {
            fn(local);
          }
        }
      }
      if (local_3) {
        return;
      }
    }
  });
  function fn(arg) {
    if (
      local_3 ||
      !(arg instanceof HTMLIFrameElement) ||
      !arg.hasAttribute("src")
    ) {
      return;
    }
    let local;
    try {
      local = new URL(arg.src, location.href);
    } catch {
      return;
    }
    const local_2 =
      local.origin === "https://challenges.cloudflare.com" &&
      local.pathname.startsWith("/cdn-cgi/challenge-platform/");
    const local_3 =
      local.origin === "https://captcha.xn--d1ah4a.com" &&
      local.pathname === "/cf.html";
    const local_4 =
      local.origin === location.origin && local_2.has(local.pathname);
    if (!local_2 && !local_3 && !local_4) {
      return;
    }
    local_3 = true;
    local_4.disconnect();
    const local_5 = () => {
      const local = document.createElement("iframe");
      local.title = "Фоновая проверка безопасности";
      local.tabIndex = -1;
      local.setAttribute("aria-hidden", "true");
      local.setAttribute("sandbox", "allow-scripts allow-same-origin");
      local.referrerPolicy = "no-referrer";
      Object.assign(local.style, {
        position: "fixed",
        width: "1px",
        height: "1px",
        border: "0",
        top: "0",
        left: "0",
        opacity: "0",
        pointerEvents: "none",
      });
      local.src =
        "/static/antifraud/widget.html?action=auth&silent=1&network=1";
      document.body.append(local);
      setTimeout(() => local.remove(), 30000);
    };
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(local_5, {
        timeout: 1200,
      });
    } else {
      setTimeout(local_5, 300);
    }
  }
  local_4.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src"],
  });
  for (const local of document.querySelectorAll("iframe[src]")) {
    fn(local);
  }
})();
