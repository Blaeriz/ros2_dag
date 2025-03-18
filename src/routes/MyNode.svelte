<script lang="ts">
    import { Node } from 'svelvet';
  
    function handleClick(e: CustomEvent) {
      const { detail } = e;
      detail.node.bgColor.set('red'); // Change background color on click
    }
  </script>
  
  <Node id="55" let:grabHandle let:selected on:nodeClicked={handleClick}>
    <div use:grabHandle class:selected class="my-component">
      <span>Click Me</span>
    </div>
  </Node>
  
  <style>
    .my-component {
      padding: 10px;
      background-color: black;
      border: 1px solid black;
      border-radius: 5px;
      cursor: grab;
    }
    .selected {
      border-color: blue;
    }
  </style>