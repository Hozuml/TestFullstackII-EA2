module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],


        files: [
            'app/components/**/*.test.tsx',
        ],

        preprocessors: {
            'app/**/*.tsx': ['typescript'] // Convierte TSX a JS
        },

        browsers: ['Edge'],
        reporters: ['progress'],

        singleRun: true
    });
};