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

require('./electron');