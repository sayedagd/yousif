// Remove corev15.css and pagelayouts15.css
var head = document.getElementsByTagName("head")[0];
var cssLinks = document.querySelectorAll(
  'link[href*="corev15.css"], link[href*="pagelayouts15.css"]'
);
for (var i = 0; i < cssLinks.length; i++) {
  head.removeChild(cssLinks[i]);
}

// Print the page with print button
document.getElementById("printPageButton").addEventListener("click", () => {
  window.print();
});

// Header Search Dropdown closing toggle
document.addEventListener("DOMContentLoaded", () => {
  const searchDropdown = document.getElementById("searchDropdown");
  const searchFormDropdown = document.getElementById("searchFormDropdown");
  const closeSearchForm = document.getElementById("closeSearchForm");

  // Close search form when close button is clicked
  closeSearchForm.addEventListener("click", () => {
    searchFormDropdown.classList.remove("show");
  });

  // Toggle dropdown visibility
  searchDropdown.addEventListener("click", (e) => {
    e.preventDefault();
    searchFormDropdown.classList.toggle("show");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (
      !searchDropdown.contains(e.target) &&
      !searchFormDropdown.contains(e.target)
    ) {
      searchFormDropdown.classList.remove("show");
    }
  });
});

// Translations
document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      // Menu Translations
      menuHome: "Home",
      menuStandards: "Standards",
      menuTraining: "Training",
      menuSharing: "Sharing Files",
      menuLang: "العربية",
      userName: "User Name",
      userRole: "Manager",
      copyWrites: "All rights reserved to the General Court of Audit © 2024",
    },
    ar: {
      // Menu Translations
      menuHome: "الرئيسية",
      menuStandards: "المعايير والأدلة",
      menuTraining: "التدريب",
      menuSharing: "مشاركة الملفات",
      menuLang: "English",
      userName: "اسم المستخدم",
      userRole: "مدير",
      copyWrites: "جميع الحقوق محفوظة لديوان العام للمحاسبة © 2024",
    },
  };

  document.getElementById("lang-toggle").addEventListener("click", function () {
    var htmlTag = document.documentElement;
    const islamicDateElement = document.getElementById("islamicDate");
    const gregorianDateElement = document.getElementById("gregorianDate");

    if (htmlTag.lang === "en") {
      htmlTag.lang = "ar";
      htmlTag.dir = "rtl";
      htmlTag.className = "rtl";
      document
        .getElementById("style-library")
        .setAttribute("href", "./css/gca-rtl.css");
    } else {
      htmlTag.lang = "en";
      htmlTag.dir = "ltr";
      htmlTag.className = "ltr";
      document
        .getElementById("style-library")
        .setAttribute("href", "./css/gca-ltr.css");
    }
  });

  const langToggle = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");

  let currentLang = "en";

  const updateTextContent = (lang) => {
    // Menu Translation
    document.getElementById("menu-home").textContent =
      translations[lang].menuHome;
    document.getElementById("menu-standards").textContent =
      translations[lang].menuStandards;
    document.getElementById("menu-training").textContent =
      translations[lang].menuTraining;
    document.getElementById("menu-sharing").textContent =
      translations[lang].menuSharing;
    document.getElementById("lang-label").textContent =
      translations[lang].menuLang;
    document.getElementById("user-name").textContent =
      translations[lang].userName;
    document.getElementById("user-role").textContent =
      translations[lang].userRole;

    // footer copywrites
    document.querySelectorAll(".footer-copyright").forEach((element) => {
      element.textContent = translations[lang].copyWrites;
    });
  };

  // Toggle Language
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    updateTextContent(currentLang);
  });

  // Initial Language Setup
  updateTextContent(currentLang);
});

const links = document.querySelectorAll('#sidebar .nav-link[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Show resault");

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const vh = window.innerHeight * 0.3;
      window.scrollTo({
        top: targetElement.offsetTop - vh,
        behavior: "smooth",
      });
    }
  });
});
