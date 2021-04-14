import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Mateusz'
	}
});

export default app;