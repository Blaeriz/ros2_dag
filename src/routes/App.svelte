<script lang="ts">
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
    import { mermaidStr } from '$lib/mermaid-output';

    let testDiagram = mermaidStr;
    let container: HTMLSpanElement;

    // Initialize Mermaid
    mermaid.initialize({ startOnLoad: false, theme: 'dark' });

    async function renderDiagram() {
    if (!container) return;

    try {
        console.log('Rendering Mermaid diagram...');
        const { svg } = await mermaid.render('graphDiv', testDiagram.trim(), container);
        container.innerHTML = svg;

        // Make sure container fills the screen
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';

        // Get the dynamically added SVG and apply styles
        const svgElement = container.querySelector('svg');
        if (svgElement) {
            svgElement.setAttribute('width', '100%');
            svgElement.setAttribute('height', '100%');
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');

            // If Mermaid wrapped it in a div, adjust that too
            const svgWrapper = container.querySelector('div');
            if (svgWrapper) {
                svgWrapper.style.width = '100%';
                svgWrapper.style.height = '100%';
            }
        }
    } catch (err) {
        console.error('Mermaid rendering failed:', err);
        container.innerHTML = '<p>Error rendering diagram</p>';
    }


}

    // Render once the component is mounted
    onMount(() => {
        renderDiagram();
    });
</script>

<main>
    <span bind:this={container}></span>
</main>

<style>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Prevents scrollbars */
}

span {
    width: 100%;
    height: 100%;
}

</style>
