(function () {
  "use strict";

  function byId(id) {
    return document.getElementById(id);
  }

  function initUiControls() {
    const helpButton = byId("helpButton");
    const settingsButton = byId("settingsButton");

    const helpDrawer = byId("helpDrawer");
    const settingsModal = byId("settingsModal");

    const backdrop = byId("uiBackdrop");

    const closeHelp = byId("closeHelpButton");
    const closeSettings = byId("closeSettingsButton");

    if (!backdrop || !helpDrawer || !settingsModal) {
      return;
    }

    // =====================================================
    // OPEN / CLOSE HELP
    // =====================================================

    function openHelp() {
      settingsModal.classList.remove("open");
      settingsModal.setAttribute("aria-hidden", "true");

      helpDrawer.classList.add("open");
      helpDrawer.setAttribute("aria-hidden", "false");

      backdrop.hidden = false;
      document.body.classList.add("panel-open");
    }

    function closeHelpPanel() {
      helpDrawer.classList.remove("open");
      helpDrawer.setAttribute("aria-hidden", "true");

      hideBackdropIfIdle();
    }

    // =====================================================
    // OPEN / CLOSE SETTINGS
    // =====================================================

    function openSettings() {
      helpDrawer.classList.remove("open");
      helpDrawer.setAttribute("aria-hidden", "true");

      settingsModal.classList.add("open");
      settingsModal.setAttribute("aria-hidden", "false");

      backdrop.hidden = false;
      document.body.classList.add("panel-open");
    }

    function closeSettingsPanel() {
      settingsModal.classList.remove("open");
      settingsModal.setAttribute("aria-hidden", "true");

      hideBackdropIfIdle();
    }

    // =====================================================
    // CLOSE EVERYTHING
    // =====================================================

    function closeAll() {
      helpDrawer.classList.remove("open");
      settingsModal.classList.remove("open");

      helpDrawer.setAttribute("aria-hidden", "true");
      settingsModal.setAttribute("aria-hidden", "true");

      backdrop.hidden = true;

      document.body.classList.remove("panel-open");
    }

    // =====================================================
    // BACKDROP
    // =====================================================

    function hideBackdropIfIdle() {
      const helpOpen =
        helpDrawer.classList.contains("open");

      const settingsOpen =
        settingsModal.classList.contains("open");

      if (!helpOpen && !settingsOpen) {
        backdrop.hidden = true;
        document.body.classList.remove("panel-open");
      }
    }

    // =====================================================
    // OPEN BUTTONS
    // =====================================================

    if (helpButton) {
      helpButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        openHelp();
      });
    }

    if (settingsButton) {
      settingsButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        openSettings();
      });
    }

    // =====================================================
    // X BUTTONS
    // =====================================================

    if (closeHelp) {
      closeHelp.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        closeHelpPanel();
      });
    }

    if (closeSettings) {
      closeSettings.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        closeSettingsPanel();
      });
    }

    // =====================================================
    // CLICK ON BACKDROP
    // =====================================================

    backdrop.addEventListener("click", function () {
      closeAll();
    });

    // =====================================================
    // CLICK OUTSIDE SETTINGS CARD
    // =====================================================

    settingsModal.addEventListener("click", function (event) {
      /*
        settingsModal ocupa todo el área del modal.

        Si el usuario hace clic directamente sobre esa área
        oscura y NO sobre el cuadro interior, event.target
        será settingsModal.
      */

      if (event.target === settingsModal) {
        closeSettingsPanel();
      }
    });

    // =====================================================
    // HELP DRAWER
    // =====================================================

    helpDrawer.addEventListener("click", function (event) {
      /*
        Evita que un clic dentro del panel de ayuda
        se propague hacia otros elementos.
      */

      event.stopPropagation();
    });

    // =====================================================
    // ESC KEY
    // =====================================================

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAll();
      }
    });

    // =====================================================
    // SETTINGS
    // =====================================================

    const theme = byId("themeSetting");
    const language = byId("languageSetting");
    const units = byId("defaultUnitsSetting");

    // =====================================================
    // THEME
    // =====================================================

    function resolvedTheme(value) {
      if (value !== "system") {
        return value;
      }

      const prefersDark =
        window.matchMedia &&
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      return prefersDark
        ? "dark"
        : "light";
    }

    function applyTheme(value) {
      const resolved =
        resolvedTheme(value);

      document.documentElement.dataset.theme =
        resolved;

      localStorage.setItem(
        "regTool.theme",
        value
      );
    }

    const storedTheme =
      localStorage.getItem("regTool.theme") ||
      "light";

    if (theme) {
      theme.value =
        storedTheme;

      applyTheme(
        storedTheme
      );

      theme.addEventListener(
        "change",
        function () {
          applyTheme(
            theme.value
          );
        }
      );
    }

    // =====================================================
    // FOLLOW SYSTEM THEME
    // =====================================================

    if (window.matchMedia) {
      const systemTheme =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        );

      systemTheme.addEventListener(
        "change",
        function () {
          const stored =
            localStorage.getItem(
              "regTool.theme"
            );

          if (stored === "system") {
            applyTheme("system");
          }
        }
      );
    }

    // =====================================================
    // LANGUAGE
    // =====================================================

    if (language) {
      const storedLanguage =
        localStorage.getItem(
          "regTool.language"
        ) || "es";

      language.value =
        storedLanguage;

      language.addEventListener(
        "change",
        function () {
          localStorage.setItem(
            "regTool.language",
            language.value
          );
        }
      );
    }

    // =====================================================
    // DEFAULT UNITS
    // =====================================================

    if (units) {
      const storedUnits =
        localStorage.getItem(
          "regTool.defaultUnits"
        ) || "metric";

      units.value =
        storedUnits;

      units.addEventListener(
        "change",
        function () {
          localStorage.setItem(
            "regTool.defaultUnits",
            units.value
          );

          const mainUnits =
            byId("unitSystem");

          if (mainUnits) {
            mainUnits.value =
              units.value;

            mainUnits.dispatchEvent(
              new Event(
                "change",
                {
                  bubbles: true
                }
              )
            );
          }
        }
      );
    }
  }

  // =====================================================
  // INITIALIZE
  // =====================================================

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initUiControls
    );
  } else {
    initUiControls();
  }
})();