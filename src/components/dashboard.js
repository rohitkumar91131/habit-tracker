const goals = [
  { name: 'Read 24 Books', progress: 42 },
  { name: 'Ship SaaS MVP', progress: 68 },
  { name: 'Run 10k', progress: 33 },
];

export function renderDashboard() {
  return `
    <section class="card">
      <h2 class="h2">Welcome back 👋</h2>
      <p class="muted">Here is your command center for tasks, projects, goals, and knowledge.</p>
    </section>

    <section class="card">
      <h2 class="h2">Quick Add</h2>
      <div class="quick-add">
        <button class="pill">+ Task</button>
        <button class="pill">+ Project</button>
        <button class="pill">+ Note</button>
        <button class="pill">+ Journal Entry</button>
      </div>
    </section>

    <div class="grid-2">
      <section class="card">
        <h2 class="h2">Task Overview</h2>
        <table class="db-table">
          <thead><tr><th>Task</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            <tr><td contenteditable="true">Write weekly review</td><td><span class="tag doing">Doing</span></td><td>Today</td></tr>
            <tr><td contenteditable="true">Plan sprint board</td><td><span class="tag todo">To do</span></td><td>Upcoming</td></tr>
            <tr><td contenteditable="true">Update docs</td><td><span class="tag done">Done</span></td><td>Today</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2 class="h2">Active Projects</h2>
        <div class="grid-3">
          <article class="card"><strong>Content OS</strong><p class="muted">4 tasks due</p></article>
          <article class="card"><strong>Q2 Roadmap</strong><p class="muted">2 blockers</p></article>
          <article class="card"><strong>Knowledge Vault</strong><p class="muted">7 linked notes</p></article>
        </div>
      </section>
    </div>

    <div class="grid-2">
      <section class="card">
        <h2 class="h2">Goal Progress</h2>
        ${goals.map((goal) => `<div style="margin-bottom:10px"><div class="muted" style="margin-bottom:4px">${goal.name}</div><div class="progress"><span style="width:${goal.progress}%"></span></div></div>`).join('')}
      </section>

      <section class="card">
        <h2 class="h2">Embedded Calendar</h2>
        <div class="calendar-placeholder">Month view widget with linked task and journal dates.</div>
      </section>
    </div>

    <div class="grid-2">
      <section class="card">
        <h2 class="h2">Linked Databases</h2>
        <ul class="muted">
          <li>Tasks filtered by Status = Doing</li>
          <li>Projects filtered by Priority = High</li>
          <li>Resources sorted by Last Updated</li>
        </ul>
      </section>

      <section class="card">
        <h2 class="h2">Recent Notes</h2>
        <ul class="muted">
          <li>Atomic habits summary</li>
          <li>Product brainstorming ideas</li>
          <li>Monday reflection journal</li>
        </ul>
      </section>
    </div>
  `;
}
