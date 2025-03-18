
## Running the project

Ensure you have ros2_jazzy installed (I do not know if it will work with humble).

```bash
# create a new project in the current directory
npm i

# create a new project in my-app
npm dev run
```

## How it works

1. A script in ```/src/lib exists``` `mermaid.ts` which uses `rclnodejs` to get information.
2. It is then saved in a file in the same dir `mermaid-output.ts` from which it is then exported to ```/src/routes/App.svelte```

## DAG

1. This application for the sole purpose of the gsoc excercises is using [mermaid](https://mermaid.js.org/) to create and render the DAG


## Why?

### Svelte

1. Extremely concise components can be written in svelte
2. Although not used in this project, [Runes](https://svelte.dev/blog/runes) are extremely powerful and could be used to make development very efficient.

### Mermaid

1. Extremely easy to use.
2. Minimal setup time.
3. Easy to pickup for a first timer.
