<script lang="ts">
  import App from './App.svelte';
</script>
  <App/>
  
  <style>
    @import url('https://fonts.googleapis.com/css?family=Rubik');
    :global(body) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: gray;
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
    }
    :global(.mermaid .subgraph rect) { fill: #444; stroke: #fff; }
    :global(.mermaid .node rect) { fill: #666; }
    :global(.mermaid .label) { color: #fff; }
  </style>
