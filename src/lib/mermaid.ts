import rclnodejs from 'rclnodejs';
import { writeFileSync } from 'fs';

export async function generateMermaid(): Promise<string> {
    if (typeof rclnodejs.init !== 'function') {
        throw new Error('rclnodejs.init is not a function. Check module compatibility.');
    }

    await rclnodejs.init();
    const node = rclnodejs.createNode('ros2_info_node');
    let mermaidStr = 'graph TD;\n';

    mermaidStr += '    subgraph "Nodes"\n';
    const nodes: string[] = node.getNodeNames();
    nodes.forEach((n: string) => {
        const nodeId = n.replace(/\//g, '_');
        mermaidStr += `        ${nodeId}["${n}"];\n`;
    });
    mermaidStr += '    end\n';

    mermaidStr += '    subgraph "Topics"\n';
    const topics = node.getTopicNamesAndTypes();
    topics.forEach(({ name, types }) => {
        const topicId = name.replace(/\//g, '_');
        mermaidStr += `        ${topicId}(("${name}<br>Type: ${types.join(', ')}"));\n`;
    });
    mermaidStr += '    end\n';

    nodes.forEach((n: string) => {
        const pubs = node.getPublisherNamesAndTypesByNode(n, '');
        if (pubs.length > 0) {
            const nodeId = n.replace(/\//g, '_');
            pubs.forEach(({ name, types }) => {
                const topicId = name.replace(/\//g, '_');
                mermaidStr += `    ${nodeId} --> |Publishes| ${topicId};\n`;
            });
        }
    });

    nodes.forEach((n: string) => {
        const subs = node.getSubscriptionNamesAndTypesByNode(n, '');
        if (subs.length > 0) {
            const nodeId = n.replace(/\//g, '_');
            subs.forEach(({ name, types }) => {
                const topicId = name.replace(/\//g, '_');
                mermaidStr += `    ${topicId} --> |Subscribes| ${nodeId};\n`;
            });
        }
    });

    node.destroy();
    rclnodejs.shutdown();
    return mermaidStr;
}

// Run and save the output
generateMermaid()
    .then((mermaidStr) => {
        const output = `export const mermaidStr = \`${mermaidStr.replace(/`/g, '\\`')}\`;`;
        writeFileSync('src/lib/mermaid-output.ts', output);
        console.log('Mermaid string saved to src/lib/mermaid-output.ts');
    })
    .catch((err) => {
        console.error('Error generating Mermaid string:', err);
    });