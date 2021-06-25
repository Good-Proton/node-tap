const t = require('../');

const electron = require('electron');

t.test('is under electron', async t => {
    t.ok(process.versions.electron)

    await electron.app.whenReady()

    t.pass('electron app is ready');

    const w = new electron.BrowserWindow();
    w.show();

    await w.loadURL('http://example.org')

    w.destroy();

    t.pass('pass?');
});