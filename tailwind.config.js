  module.exports = {
    content: [
      './*.{html,js}',
      './src/**/*.{html,js}',
      './components/**/*.{html,js}',  // Por ejemplo, si tienes una carpeta 'components' ,
    ],
    theme: {
      extend: {
        colors: {  // Corrección de 'color' a 'colors'
          'negro-carbon': '#1B1B1D',         // Negro carbón
          'gris-ceniza-oscuro': '#2D2D2F',   // Gris ceniza oscuro
          'naranja-quemado': '#C75C27',      // Naranja quemado
          'oro-envejecido': '#B08D57',       // Oro envejecido
          'rojo-vino-profundo': '#5C1A1B',   // Rojo vino profundo
          'verde-oliva-oscuro': '#4E5B31',   // Verde oliva oscuro
          'blanco-humo': '#E0E0E0',          // Blanco humo
        },
        fontFamily: {
          'playfair': ['Playfair Display', 'serif'],  // Fuente personalizada
        },
        fontSize: {
          'titulo':'40%',
        },
      },
    },
    plugins: [],
  }
