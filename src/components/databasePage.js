export function renderDatabasePage(name) {
  return `
    <section class="card">
      <div class="view-tabs">
        <button class="view-tab active" data-view="table">Table</button>
        <button class="view-tab" data-view="board">Board</button>
        <button class="view-tab" data-view="calendar">Calendar</button>
        <button class="view-tab" data-view="list">List</button>
      </div>
      <div id="view-container">${tableView(name)}</div>
    </section>
  `;
}

export function attachDatabaseInteractions(root) {
  const tabs = root.querySelectorAll('.view-tab');
  const container = root.querySelector('#view-container');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const view = tab.dataset.view;
      if (view === 'table') container.innerHTML = tableView('');
      if (view === 'board') container.innerHTML = boardView();
      if (view === 'calendar') container.innerHTML = '<div class="calendar-placeholder">Calendar database with filtered entries.</div>';
      if (view === 'list') container.innerHTML = '<div class="list-view">Minimal linked list layout of records and properties.</div>';
      if (view === 'board') attachDnD(container);
    });
  });
  attachDnD(container);
}

function tableView(name) {
  return `
    <table class="db-table">
      <thead><tr><th>${name || 'Item'}</th><th>Status</th><th>Tags</th><th>Date</th><th>Relation</th><th>Rollup</th><th>Done</th><th>Progress</th></tr></thead>
      <tbody>
        <tr>
          <td contenteditable="true">Draft system notes</td>
          <td><span class="tag doing">Doing</span></td>
          <td>PKM, Writing</td>
          <td><input type="date" /></td>
          <td>Project: Knowledge Vault</td>
          <td>3 linked tasks</td>
          <td><input type="checkbox" /></td>
          <td><div class="progress"><span style="width:45%"></span></div></td>
        </tr>
        <tr>
          <td contenteditable="true">Weekly review</td>
          <td><span class="tag todo">To do</span></td>
          <td>Planning</td>
          <td><input type="date" /></td>
          <td>Area: Personal Ops</td>
          <td>8 notes</td>
          <td><input type="checkbox" checked /></td>
          <td><div class="progress"><span style="width:80%"></span></div></td>
        </tr>
      </tbody>
    </table>
  `;
}

function boardView() {
  return `
    <div class="board">
      <div class="column" data-column="todo"><h4>To do</h4><div class="task" draggable="true">Create sprint plan</div><div class="task" draggable="true">Capture meeting notes</div></div>
      <div class="column" data-column="doing"><h4>Doing</h4><div class="task" draggable="true">Design goals dashboard</div></div>
      <div class="column" data-column="done"><h4>Done</h4><div class="task" draggable="true">Setup weekly journal template</div></div>
    </div>
  `;
}

function attachDnD(root) {
  const tasks = root.querySelectorAll('.task');
  const columns = root.querySelectorAll('.column');
  tasks.forEach((task) => {
    task.addEventListener('dragstart', () => task.classList.add('dragging'));
    task.addEventListener('dragend', () => task.classList.remove('dragging'));
  });
  columns.forEach((column) => {
    column.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggable = root.querySelector('.dragging');
      if (draggable) column.appendChild(draggable);
    });
  });
}
