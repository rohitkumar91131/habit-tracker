export function renderHeader(title) {
  return `
    <header class="topbar">
      <div class="top-left">
        <button class="icon-btn mobile-menu" id="mobileMenu">☰</button>
        <button class="icon-btn" id="toggleSidebar">≡</button>
        <strong>${title}</strong>
      </div>
      <div class="top-right">
        <input class="search" placeholder="Search everything..." />
        <button class="icon-btn">⏱</button>
        <button class="icon-btn">⋯</button>
      </div>
    </header>
  `;
}
