/** @type {import('tailwindcss').Config} */
export default {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		theme: {
			extend:{
				fontFamily: {
					'custom': ['ZCOOL XiaoWei', 'sans-serif'],
					'roboto': ['RobotoMono', 'sans-serif'],
					'geist': ['GeistSans', 'sans-serif'],
				},
				colors: {
					'title': '#E47777', /*#C82B2B*/
					'subtitle': '#545454',
					'light-accent-color': '#d84c4c',
					'gray-custom': '#71717a',
					
				},
				textShadow: {
        		'red': '0px 0px 10px rgba(255, 0, 0, 0.6)',
				'green' : '0px 0px 10px rgba(0, 255, 0, 0.6)',
        
      },
			}
		},
		plugins:[
			function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-red': {
				textShadow: '0px 0px 10px rgba(255, 0, 0, 0.6)',
				},

				'.text-shadow-green': {
				textShadow: '0px 0px 10px rgba(0, 255, 0, 0.6)',
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
			},
		],
	};
	

