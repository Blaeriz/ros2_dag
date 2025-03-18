<script lang="ts">
  //import { Node, Svelvet } from 'svelvet';
  //import MyNode from '/home/blaeriz/ros2_dag/src/routes/MyNode.svelte';
  import App from './App.svelte';


</script>
  
  <!-- <Svelvet theme="dark" controls>
    <MyNode />
    <Node id="alpha" bgColor="red" label="Default Node" />
    
  </Svelvet> -->

  <!-- <Graph/> -->

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
