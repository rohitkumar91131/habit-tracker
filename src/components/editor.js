export function renderEditor() {
  return `
    <section class="card">
      <h2 class="h2">Page Editor</h2>
      <div class="editor-area">
        <div class="block"><strong>Heading 1:</strong> Knowledge Management Workflow</div>
        <div class="block">• Bullet block with linked reference to <u>[[Project Notes]]</u></div>
        <div class="block">▶ Toggle block: Click to reveal hidden details</div>
        <div class="callout">💡 Callout block: Capture ideas quickly and process later.</div>
        <div class="divider"></div>
        <div class="block">Inline editing supported. Changes save instantly.</div>
      </div>
    </section>
  `;
}
