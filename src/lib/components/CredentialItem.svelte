<script>
  let { item } = $props();
</script>

<div class="item">
  <div class="row">
    <h3>{item.title}</h3>
    <span class="period">{item.period}</span>
  </div>
  <div class="org">{item.org}</div>
  <p class="note">{item.note}</p>
</div>

<style>
  .item {
    border-top: 1px solid var(--line);
    padding: 24px 0;
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: baseline;
  }

  h3 {
    margin: 0;
    font-size: 1.22rem;
    font-weight: 500;
    letter-spacing: -0.015em;
    max-width: 24ch;
  }

  .period {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.72rem;
    color: var(--text-faintest);
    white-space: nowrap;
  }

  .org {
    margin-top: 7px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .note {
    margin: 12px 0 0;
    font-size: 0.98rem;
    line-height: 1.55;
    color: var(--text-muted);
    max-width: 46ch;
  }
</style>
