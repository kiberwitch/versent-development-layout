/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./pages/**/*.{html,js}',
		'./src/**/*.{js,ts,jsx,tsx,html}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'not-found': "url('./assets/img/bg/bg-not-found-page.webp')",
				'section-tilda-techniques': "url('./assets/img/bg/bg-section-tilda-techniques.phg')",
			},
            boxShadow: {
                navbar: '0 2px 4px 0 rgba(0,0,0,0.1),0 7px 7px 0 rgba(0,0,0,0.09),0 16px 10px 0 rgba(0,0,0,0.05),0 29px 12px 0 rgba(0,0,0,0.01),0 45px 13px 0 rgba(0,0,0,0),0 -4px 12px 0 rgba(0,0,0,0.05)',
            }
		},
	},
	plugins: [],
}