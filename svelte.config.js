import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					'xmlhttprequest-ssl': './node_modules/engine.io-client/lib/xmlhttprequest.js'
				}
			}
		}
	}
};

export default config;
