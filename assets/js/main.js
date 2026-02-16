(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("primary-nav");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".site-nav-list a[data-section]")
  );

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 52rem)").matches) {
          navList.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isCurrent = link.getAttribute("data-section") === id;
      link.classList.toggle("is-active", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  var sections = navLinks
    .map(function (link) {
      return document.getElementById(link.getAttribute("data-section"));
    })
    .filter(Boolean);

  if (sections.length > 0) {
    setActive("main");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.7]
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    if (window.location.hash) {
      var hashId = window.location.hash.replace("#", "");
      if (hashId) {
        setActive(hashId);
      }
    }
  } else if (window.location.pathname.indexOf("/posts/") !== -1) {
    setActive("posts");
  }
})();
