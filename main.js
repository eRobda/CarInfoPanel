const { app, BrowserWindow, screen } = require('electron');

let mainWindow;

function createWindow() {
  const mainScreen = screen.getPrimaryDisplay();
  const dimensions = mainScreen.size;

  mainWindow = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
    fullscreen: true
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
