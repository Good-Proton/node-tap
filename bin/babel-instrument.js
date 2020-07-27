require('@babel/register')({
    plugins: ['istanbul']
});

const fs = require('fs');
require('electron').app.on('quit', () => {
    if (global.__coverage__) {
        fs.writeFileSync(`.nyc_output/${Date.now()}-${process.pid}.json`, JSON.stringify(global.__coverage__));
    }
})