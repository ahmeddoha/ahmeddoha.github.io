/**
 * TEMPORARY PRE-LAUNCH CURTAIN — remove before the site is announced.
 *
 * Hides every page behind a passcode prompt until the visitor enters the code,
 * then remembers it in localStorage so it is asked once per browser.
 *
 * WHAT THIS IS NOT: security. The page's HTML is already in the response, so
 * anyone who opens the developer tools or reads the page source can see the
 * content without entering anything. It stops a casual visitor and (with the
 * noindex tag and robots.txt) keeps the site out of search results. Nothing
 * here is confidential — it is the same CV that is on the faculty page — so a
 * curtain is the right weight of tool. Do not put anything private behind it.
 *
 * TO REMOVE: delete this file, the <script> tag in src/app/layout.tsx, the
 * matching tags in public/courses/<slug>/index.html, the noindex meta, and
 * public/robots.txt. Grep for "curtain".
 */
(function () {
  var KEY = "adw-curtain";
  var CODE = "3494";

  try {
    if (window.localStorage.getItem(KEY) === "open") return;
  } catch (e) {
    /* private mode or storage blocked: fall through and ask */
  }

  var root = document.documentElement;
  root.style.visibility = "hidden";

  function mount() {
    root.style.visibility = "";

    var wrap = document.createElement("div");
    wrap.setAttribute("data-curtain", "");
    wrap.style.cssText =
      "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;" +
      "justify-content:center;background:#f6f6f5;font:400 15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#191919";

    var card = document.createElement("form");
    card.style.cssText =
      "background:#fff;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.08);" +
      "padding:32px 28px;width:min(360px,calc(100vw - 32px));text-align:center";

    var title = document.createElement("p");
    title.textContent = "Ahmed Doha";
    title.style.cssText = "margin:0 0 4px;font-size:18px;font-weight:600";

    var sub = document.createElement("p");
    sub.textContent = "This page is not public yet.";
    sub.style.cssText = "margin:0 0 20px;font-size:14px;color:#6b6b6b";

    var input = document.createElement("input");
    input.type = "password";
    input.inputMode = "numeric";
    input.autocomplete = "off";
    input.setAttribute("aria-label", "Passcode");
    input.placeholder = "Passcode";
    input.style.cssText =
      "width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid #e5e5e4;" +
      "border-radius:8px;font-size:15px;text-align:center;letter-spacing:.2em";

    var error = document.createElement("p");
    error.style.cssText =
      "margin:10px 0 0;font-size:13px;color:#b42318;min-height:18px;letter-spacing:0";

    var button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Enter";
    button.style.cssText =
      "margin-top:14px;width:100%;padding:10px 12px;border:0;border-radius:999px;" +
      "background:#191919;color:#fff;font-size:14px;font-weight:500;cursor:pointer";

    card.appendChild(title);
    card.appendChild(sub);
    card.appendChild(input);
    card.appendChild(error);
    card.appendChild(button);
    wrap.appendChild(card);
    document.body.appendChild(wrap);
    input.focus();

    card.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value.trim() !== CODE) {
        error.textContent = "Not that one.";
        input.value = "";
        input.focus();
        return;
      }
      try {
        window.localStorage.setItem(KEY, "open");
      } catch (err) {
        /* storage blocked: unlock for this page view only */
      }
      wrap.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
