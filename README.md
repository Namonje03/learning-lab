# React Hooks Practice Project

This workspace contains small React examples used to practice core hooks and a Vite-based demo app.

Folders:

- `react_hooks` — lightweight demo components showing `useState`, `useEffect`, and `useRef`.
- `react-app` — a Vite + React starter app that can be used to import and run the demo components.

Hook demos (in `react_hooks`):

- `useStateDemo.tsx` — Counter component demonstrating `useState` for local component state.
- `useEffectHook.jsx` — Effect demo that logs a message on mount using `useEffect`.
- `useRefHook.jsx` — Input focus demo using `useRef` to access a DOM node and call `.focus()`.

Quick usage notes:

- To run the Vite demo app (open `react-app`):

	1. Install dependencies:

		 npm install

	2. Start the dev server:

		 npm run dev

	The app uses Vite and the available scripts are `dev`, `build`, `preview`, and `lint` (see `react-app/package.json`).

- To try a hook component in the demo app, import it from the `react_hooks` folder. Example:

	import Counter from "../react_hooks/useStateDemo";

- Note: `useStateDemo.tsx` is written in TypeScript; the other demos are `.jsx` files. You can use them directly in a JavaScript or TypeScript React project.

Additional context:

- ESLint and Vite configuration live in `react-app` for development and linting.
- These examples are intentionally minimal — feel free to expand them, add tests, or wire them into the demo app pages.


