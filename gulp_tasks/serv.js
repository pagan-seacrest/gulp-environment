const browserSync = require("browser-sync").create();

const serv = () => {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        browser: "opera",
    });
};
exports.browsersync = browserSync;
exports.serv = serv;
