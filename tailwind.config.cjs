module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'InterVariable',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				serif: 'Computer Modern Serif'
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.black'),
						'--tw-prose-headings': theme('colors.black'),
						'--tw-prose-code': theme('colors.orange.700'),
						'--tw-prose-pre-code': theme('colors.black'),
						'--tw-prose-pre-bg': theme('colors.gray.100'),

						'font-synthesis': 'none',
						'[class~="lead"]': {
							color: theme('colors.gray.900'),
							fontWeight: theme('fontWeight.medium'),
							letterSpacing: theme('letterSpacing.tight')
						},
						'h1, h2': {
							fontFamily: theme('fontFamily.serif'),
							fontWeight: 400
						},
						'h2, h3': {
							fontWeight: 500,
							lineHeight: theme('lineHeight.snug')
						},
						blockquote: {
							fontWeight: null,
							color: theme('colors.gray.600'),
							borderWidth: theme('borderWidth.DEFAULT'),
							borderColor: theme('colors.gray.200'),
							borderRadius: theme('borderRadius.md'),
							backgroundColor: theme('colors.gray.50'),
							paddingLeft: theme('padding.6'),
							paddingRight: theme('padding.6'),
							marginTop: theme('spacing.5'),
							marginBottom: theme('spacing.5'),
							borderLeftWidth: null,
							borderLeftColor: null,
							quotes: null,
							fontStyle: null
						},
						'blockquote p:first-of-type::before': {
							content: null
						},
						'blockquote p:last-of-type::after': {
							content: null
						},
						a: {
							fontWeight: null,
							transitionProperty: theme('transitionProperty.colors'),
							transitionDuration: theme('transitionDuration.200'),
							transitionTimingFunction: theme('transitionTimingFunction.DEFAULT')
						},
						'a:hover': {
							color: theme('colors.orange.500')
						},
						'figure img': {
							borderRadius: theme('borderRadius.lg'),
							backgroundColor: theme('colors.gray.50')
						},
						'code::before': {
							content: null
						},
						'code::after': {
							content: null
						},
						code: {
							fontWeight: '400',
							fontSize: '96.85%',
							letterSpacing: '-0.025rem',
							'-webkit-font-feature-settings': '"liga" on, "calt" on', 
							backgroundColor: theme('colors.orange.100'),
							borderRadius: theme('borderRadius.sm'),
							padding: '0 0.2em',
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
