(function () {
  "use strict";

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}<>/\\|+=-*#%";
  var digitAlphabet = "0123456789";

  function normalizePath(pathname) {
    if (!pathname) {
      return "/";
    }
    if (pathname.length > 1 && pathname.charAt(pathname.length - 1) !== "/") {
      return pathname + "/";
    }
    return pathname;
  }

  function setActiveNav() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".site-nav-link[data-route]")
    );

    if (!links.length) {
      return;
    }

    var currentPath = normalizePath(window.location.pathname);
    var activePath = "";

    links.forEach(function (link) {
      var linkPath = normalizePath(
        new URL(link.getAttribute("href"), window.location.origin).pathname
      );
      var route = link.getAttribute("data-route");
      var isPostsRoute = route === "/posts/";
      var isActive = currentPath === linkPath || (isPostsRoute && currentPath.indexOf(linkPath) === 0);

      if (isActive) {
        activePath = linkPath;
      }
    });

    links.forEach(function (link) {
      var linkPath = normalizePath(
        new URL(link.getAttribute("href"), window.location.origin).pathname
      );
      var active = linkPath === activePath;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function randomAsciiChunk() {
    var count = 8 + Math.floor(Math.random() * 10);
    var out = [];
    if (Math.random() > 0.6) {
      out.push("0x");
    }
    for (var i = 0; i < count; i++) {
      out.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return out.join("");
  }

  function randomDigitChunk() {
    var count = 9 + Math.floor(Math.random() * 14);
    var out = [];

    for (var i = 0; i < count; i++) {
      if (i > 0 && i % 4 === 0 && Math.random() > 0.55) {
        out.push(".");
      }
      out.push(digitAlphabet.charAt(Math.floor(Math.random() * digitAlphabet.length)));
    }

    return out.join("");
  }

  function buildDigitField() {
    var field = document.querySelector("[data-digit-field]");
    if (!field) {
      return;
    }

    var mobile = window.matchMedia("(max-width: 48rem)").matches;
    var nodeCount = mobile ? 72 : 150;

    field.innerHTML = "";

    for (var i = 0; i < nodeCount; i++) {
      var node = document.createElement("span");
      node.className = "digit-node";
      node.textContent = randomDigitChunk();
      node.style.left = Math.floor(Math.random() * 96) + "vw";
      node.style.top = Math.floor(Math.random() * 96) + "vh";
      node.style.setProperty("--digit-dx", Math.floor(Math.random() * 130 - 65) + "px");
      node.style.setProperty("--digit-dy", Math.floor(Math.random() * 130 - 65) + "px");
      node.style.animationDelay = (Math.random() * -11).toFixed(2) + "s";
      node.style.animationDuration = (7 + Math.random() * 8).toFixed(2) + "s";
      field.appendChild(node);
    }
  }

  function buildAsciiField() {
    var field = document.querySelector("[data-ascii-field]");
    if (!field) {
      return;
    }

    var mobile = window.matchMedia("(max-width: 48rem)").matches;
    var nodeCount = mobile ? 34 : 78;

    field.innerHTML = "";

    for (var i = 0; i < nodeCount; i++) {
      var node = document.createElement("span");
      node.className = "ascii-node";
      node.textContent = randomAsciiChunk();
      node.style.left = Math.floor(Math.random() * 94) + "vw";
      node.style.top = Math.floor(Math.random() * 94) + "vh";
      node.style.setProperty("--drift-x", Math.floor(Math.random() * 90 - 45) + "px");
      node.style.setProperty("--drift-y", Math.floor(Math.random() * 90 - 45) + "px");
      node.style.animationDelay = (Math.random() * -8).toFixed(2) + "s";
      node.style.animationDuration = (6 + Math.random() * 6).toFixed(2) + "s";
      field.appendChild(node);
    }
  }

  function scrambleToText(element, targetText) {
    var ticks = 0;
    var revealAt = 0;
    var maxTicks = 14;

    var timer = window.setInterval(function () {
      var chars = targetText.split("");
      var out = chars
        .map(function (char, idx) {
          if (char === " ") {
            return " ";
          }
          if (idx < revealAt) {
            return chars[idx];
          }
          return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        })
        .join("");

      element.textContent = out;
      revealAt += 0.8;
      ticks += 1;

      if (ticks >= maxTicks) {
        window.clearInterval(timer);
        element.textContent = targetText;
      }
    }, 26);
  }

  function setupScrambleHover() {
    var targets = Array.prototype.slice.call(
      document.querySelectorAll("[data-scramble]")
    );

    targets.forEach(function (el) {
      var finalText = (el.textContent || "").trim();
      if (!finalText) {
        return;
      }

      el.setAttribute("data-final", finalText);
      el.addEventListener("mouseenter", function () {
        scrambleToText(el, finalText);
      });
      el.addEventListener("focus", function () {
        scrambleToText(el, finalText);
      });
    });
  }

  function rotateProjects() {
    var chips = Array.prototype.slice.call(
      document.querySelectorAll("[data-project-chip]")
    );

    if (chips.length < 2) {
      return;
    }

    var pointer = 0;
    chips[pointer].classList.add("is-rotating");

    window.setInterval(function () {
      chips[pointer].classList.remove("is-rotating");
      pointer = (pointer + 1) % chips.length;
      chips[pointer].classList.add("is-rotating");
    }, 2300);
  }

  setActiveNav();
  setupScrambleHover();
  buildDigitField();
  buildAsciiField();
  rotateProjects();

  window.addEventListener("resize", function () {
    buildDigitField();
    buildAsciiField();
  });

  window.setInterval(function () {
    var digitNodes = document.querySelectorAll(".digit-node");
    if (!digitNodes.length) {
      return;
    }

    var swaps = Math.min(18, digitNodes.length);
    for (var i = 0; i < swaps; i++) {
      var idx = Math.floor(Math.random() * digitNodes.length);
      digitNodes[idx].textContent = randomDigitChunk();
    }
  }, 920);
})();
