/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
				'headerLogo': "url('../img/icons/header-logo.png')",	
				'imgSlide1': "url('../img/img-slide-1.jpg')",
				'imgSlide2': "url('../img/img-slide-2.jpg')",
				'imgSlide3': "url('../img/img-slide-3.jpg')",
				'icoCart': "url('../img/icons/ico-cart.png')",
				'icoCartHover': "url('../img/icons/ico-cart-hover.png')",
				'icoPuff': "url('../img/icons/ico-puff.png')",
				'icoPuffHover': "url('../img/icons/ico-puff-hover.png')",
				'icoNap': "url('../img/icons/ico-nap.png')",
				'icoNapHover': "url('../img/icons/ico-nap-hover.png')",
				'icoUmbrella': "url('../img/icons/ico-umbrella.png')",
				'icoUmbrellaHover': "url('../img/icons/ico-umbrella-hover.png')"
			},
			backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#FF5733',
				'terciary': '#DC143C',
			}),
      		textColor: theme =>({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#FF5733',
				'terciary': '#DC143C',
			}),
			borderColor: theme =>({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#FF5733',
				'terciary': '#DC143C',
			}),	
			backgroundPosition: {
				'center-20-percent': "20% top",
			},
			fontFamily: {
				Actor: ["Actor", "sans-serif"],
				Nunito: ["Nunito", "sans-serif"],
			},
			variants: {
				width: ["responsive", "hover", "focus"]
			},
			screens: {
				'min-1024': '1024px',
				'min-1089': '1089px',
				'min-1090': '1090px'
			}
		  }
		},
  plugins: [],
}
