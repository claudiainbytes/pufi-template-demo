/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
				'icoUmbrellaHover': "url('../img/icons/ico-umbrella-hover.png')",
				'icoBrandLive': "url('../img/icons/brandlive.png')",
				'footerLogo': "url('../img/icons/footer-logo.png')",
				'footerLogoDark': "url('../img/icons/footer-logo-dark.png')",
				'iconsGuarantee': "url('../img/icons/guarantee.png')",
				'imgProduct1': "url('../img/img-prod-1.jpg')",
				'imgProduct2': "url('../img/img-prod-2.jpg')",
				'imgProduct3': "url('../img/img-prod-3.jpg')",
				'imgProduct4': "url('../img/img-prod-4.jpg')",
				'imgItem1': "url('../img/img-item-1.png')",
				'imgItem2': "url('../img/img-item-2.png')",
				'imgItem3': "url('../img/img-item-3.png')",
				'imgItem4': "url('../img/img-item-4.png')"
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
				'center-footer-logo': "-8px -4px",
				'center-brandlive-logo': "-12px center",
				'center-guarantee': "-12px center"
			},
			fontFamily: {
				Actor: ["Actor", "sans-serif"],
				Nunito: ["Nunito", "sans-serif"],
			},
			fontSize: {
				'footer': ['0.7rem', {
				  lineHeight: '1rem',
				  letterSpacing: '-0.01em',
				  fontWeight: '500',
				}]
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
