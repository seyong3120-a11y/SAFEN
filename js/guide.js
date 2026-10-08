(() => {
  function initGuideTabs() {
    const tabList = document.querySelector('.guide-tabs');
    if (!tabList) return;

    const tabs = [...tabList.querySelectorAll('[role="tab"][data-tab]')];
    const entries = tabs.map((tab) => ({
      tab,
      panel: document.getElementById(tab.getAttribute('aria-controls'))
    }));
    if (!entries.length || entries.some(({ panel }) => !panel)) return;

    function selectTab(key, focus = false) {
      const active = entries.find(({ tab }) => tab.dataset.tab === key) || entries[0];
      entries.forEach(({ tab, panel }) => {
        const selected = tab === active.tab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panel.hidden = !selected;
      });
      if (focus) active.tab.focus();
    }

    function activate(tab, focus = false) {
      selectTab(tab.dataset.tab, focus);
      const url = new URL(window.location.href);
      url.hash = tab.dataset.tab;
      history.replaceState(null, '', url);
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          activate(tabs[next], true);
        }
      });
    });

    selectTab(window.location.hash.slice(1));
    window.addEventListener('hashchange', () => selectTab(window.location.hash.slice(1)));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGuideTabs, { once: true });
  } else {
    initGuideTabs();
  }
})();
