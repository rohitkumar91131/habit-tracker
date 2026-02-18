export const sidebarItems = [
  'Dashboard',
  'Tasks',
  'Projects',
  'Goals',
  'Areas',
  'Resources',
  'Notes',
  'Journal',
  'Archive',
];

const iconMap = {
  Dashboard: '◻', Tasks: '✓', Projects: '▣', Goals: '◎', Areas: '⌂', Resources: '✦', Notes: '✎', Journal: '☰', Archive: '⌁',
};

export function renderSidebar(activePage) {
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-title">Second Brain</div>
      <nav>
        ${sidebarItems
          .map(
            (item) => `<button class="nav-btn ${item === activePage ? 'active' : ''}" data-page="${item}">
              <span class="icon">${iconMap[item] || '•'}</span>
              <span class="label">${item}</span>
            </button>`
          )
          .join('')}
      </nav>
    </aside>
  `;
}
