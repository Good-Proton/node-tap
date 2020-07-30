require('@babel/register')({
    plugins: [[
        'istanbul', {
            exclude: [
                'coverage/**',
                'packages/*/test/**',
                'test/**',
                'test{,-*}.js',
                '**/*{.,-}test.js',
                '**/__tests__/**',
                '**/{ava,babel,jest,nyc,rollup,webpack}.config.js',
            ],
            cache: true,
            excludeNodeModules: true,
            produceSourceMaps: true
        }
    ]]
});

const fs = require('fs');
require('electron').app.on('quit', () => {
    if (global.__coverage__) {
        fs.writeFileSync(`.nyc_output/${Date.now()}-${process.pid}.json`, JSON.stringify(global.__coverage__));
    }
});