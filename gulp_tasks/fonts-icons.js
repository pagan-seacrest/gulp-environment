const {src, dest} = require ("gulp");

const fonts = () => src('./src/fonts/*').pipe(dest('./dist/fonts'));

exports.fonts = fonts;