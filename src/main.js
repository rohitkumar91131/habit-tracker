import { renderSidebar, sidebarItems } from './components/sidebar.js';
import { renderHeader } from './components/header.js';
import { renderDashboard } from './components/dashboard.js';
import { renderDatabasePage, attachDatabaseInteractions } from './components/databasePage.js';
import { renderEditor } from './components/editor.js';

const state = {
  activePage: 'Dashboard',
  sidebarCollapsed: false,
};

function renderApp() {
  const app = document.getElementById('app');
  const pageContent = state.activePage === 'Dashboard'
    ? `${renderDashboard()}${renderEditor()}`
    : `${renderDatabasePage(state.activePage)}${renderEditor()}`;

  app.innerHTML = `
    <div class="app-layout">
      ${renderSidebar(state.activePage)}
      <div class="main-shell">
        ${renderHeader(state.activePage)}
        <main class="workspace">${pageContent}</main>
      </div>
    </div>
  `;

  bindAppInteractions();

  if (state.activePage !== 'Dashboard') {
    attachDatabaseInteractions(document.querySelector('.workspace'));
  }

  if (window.gsap) {
    gsap.from('.card', {
      opacity: 0,
      y: 10,
      stagger: 0.05,
      duration: 0.35,
      ease: 'power1.out',
      clearProps: 'all',
    });
  }
}

function bindAppInteractions() {
  const sidebar = document.getElementById('sidebar');
  if (state.sidebarCollapsed && window.innerWidth > 760) sidebar.classList.add('collapsed');

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.activePage = button.dataset.page;
      renderApp();
    });
  });

  document.getElementById('toggleSidebar')?.addEventListener('click', () => {
    if (window.innerWidth <= 760) {
      sidebar.classList.toggle('open');
      return;
    }
    state.sidebarCollapsed = !state.sidebarCollapsed;
    sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
  });

  document.getElementById('mobileMenu')?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  window.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.querySelector('.search')?.focus();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'b') {
      event.preventDefault();
      document.getElementById('toggleSidebar')?.click();
    }
  }, { once: true });

  const editableCells = document.querySelectorAll('[contenteditable="true"]');
  editableCells.forEach((cell) => {
    cell.addEventListener('input', () => {
      cell.dataset.savedAt = String(Date.now());
    });
  });
}

renderApp();

window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  if (window.innerWidth > 760) sidebar.classList.remove('open');
});

console.info('Second Brain Tracker loaded with Notion-inspired layout.');
console.table(sidebarItems);
