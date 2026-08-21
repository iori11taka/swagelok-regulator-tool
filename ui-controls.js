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

    if (!backdrop || !helpDrawer || !settingsModal) return;

    // =========================================
    // PANEL / MODAL CONTROL
    // =========================================

    function showBackdrop() {
      backdrop.hidden = false;
      document.body.classList.add("panel-open");
    }

    function hideBackdropIfIdle() {
      if (
        !helpDrawer.classList.contains("open") &&
        !settingsModal.classList.contains("open")
      ) {
        backdrop.hidden = true;
        document.body.classList.remove("panel-open");
      }
    }

    function openHelp() {
      settingsModal.classList.remove("open");
      settingsModal.setAttribute("aria-hidden", "true");

      helpDrawer.classList.add("open");
      helpDrawer.setAttribute("aria-hidden", "false");

      showBackdrop();
    }

    function closeHelpPanel() {
      helpDrawer.classList.remove("open");
      helpDrawer.setAttribute("aria-hidden", "true");

      hideBackdropIfIdle();
    }

    function openSettings() {
      helpDrawer.classList.remove("open");
      helpDrawer.setAttribute("aria-hidden", "true");

      settingsModal.classList.add("open");
      settingsModal.setAttribute("aria-hidden", "false");

      showBackdrop();
    }

    function closeSettingsPanel() {
      settingsModal.classList.remove("open");
      settingsModal.setAttribute("aria-hidden", "true");

      hideBackdropIfIdle();
    }

    function closeAll() {
      helpDrawer.classList.remove("open");
      settingsModal.classList.remove("open");

      helpDrawer.setAttribute("aria-hidden", "true");
      settingsModal.setAttribute("aria-hidden", "true");

      backdrop.hidden = true;

      document.body.classList.remove("panel-open");
    }

    // =========================================
    // OPEN BUTTONS
    // =========================================

    helpButton?.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      openHelp();
    });

    settingsButton?.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      openSettings();
    });

    // =========================================
    // CLOSE BUTTONS
    // =========================================

    closeHelp?.addEventListener("click", function (event) {
      event.stopPropagation();
      closeHelpPanel();
    });

    closeSettings?.addEventListener("click", function (event) {
      event.stopPropagation();
      closeSettingsPanel();
    });

    // =========================================
    // CLICK ON DARK BACKDROP
    // =========================================

    backdrop.addEventListener("click", closeAll);

    // =========================================
    // PREVENT CLICKS INSIDE MODALS FROM CLOSING
    // =========================================

    settingsModal.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    helpDrawer.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    // =========================================
    // CLICK OUTSIDE PANEL / MODAL
    // =========================================

    document.addEventListener("click", function (event) {

      // SETTINGS
      if (settingsModal.classList.contains("open")) {

        const clickedInsideSettings =
          settingsModal.contains(event.target);

        const clickedSettingsButton =
          settingsButton?.contains(event.target);

        if (
          !clickedInsideSettings &&
          !clickedSettingsButton
        ) {
          closeSettingsPanel();
        }
      }

      // HELP
      if (helpDrawer.classList.contains("open")) {

        const clickedInsideHelp =
          helpDrawer.contains(event.target);

        const clickedHelpButton =
          helpButton?.contains(event.target);

        if (
          !clickedInsideHelp &&
          !clickedHelpButton
        ) {
          closeHelpPanel();
        }
      }

    });

    // =========================================
    // ESC KEY
    // =========================================

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAll();
      }
    });

    // =========================================
    // SETTINGS
    // =========================================

    const theme = byId("themeSetting");
    const language = byId("languageSetting");
    const units = byId("defaultUnitsSetting");

    function resolvedTheme(value) {

      if (value !== "system") {
        return value;
      }

      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        ? "dark"
        : "light";
    }

    function applyTheme(value) {

      document.documentElement.dataset.theme =
        resolvedTheme(value);

      localStorage.setItem(
        "regTool.theme",
        value
      );
    }

    // =========================================
    // THEME
    // =========================================

    const storedTheme =
      localStorage.getItem("regTool.theme") || "light";

    if (theme) {

      theme.value = storedTheme;

      applyTheme(storedTheme);

      theme.addEventListener(
        "change",
        function () {
          applyTheme(theme.value);
        }
      );
    }

    // =========================================
    // LANGUAGE
    // =========================================

    if (language) {

      language.value =
        localStorage.getItem("regTool.language") || "es";

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

    // =========================================
    // DEFAULT UNITS
    // =========================================

    if (units) {

      units.value =
        localStorage.getItem("regTool.defaultUnits") ||
        "metric";

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

  // =========================================
  // START
  // =========================================

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initUiControls
    );

  } else {

    initUiControls();

  }

})();