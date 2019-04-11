const PDFWindow = require('electron-pdf-window')
const path = require("path");
const url = require("url");
var connect = require('connect');
var serveStatic = require('serve-static');
const process = require('process');

const { app, BrowserWindow,ipcMain } = require('electron');
let win;


function createWindow () {

  const documentationPath = __dirname + '/src/assets/documentation/';
  //
  connect().use(serveStatic(documentationPath, {redirect:true, fallthrough:true})).listen(8080, function(){
    console.log('Server running on 8080, serving ' + documentationPath + '...');
  });

  // SSL/TSL: this is the self signed certificate support
  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
  });

  // Create the browser window.
  win = new BrowserWindow({ width: 1280, height: 1024,
    webPreferences: {
      plugins: true
    } });

  win.setFullScreen(true);
  win.setMenu(null);

  ipcMain.on('url', (event,arg) => {
    let child = new BrowserWindow(
      {
        parent: win, width: 1024, height: 800, enableLargerThanScreen: true,
        webPreferences: {
          webSecurity: false,
          nodeIntegration: false,
          allowRunningInsecureContent: true,
        }
      });

    PDFWindow.addSupport(child);
    console.log('Opening url: ' + arg);

    child.loadURL(arg);
    child.once('ready-to-show', () => {
      child.show();
    });
  });

  PDFWindow.addSupport(win);

  // and load the index.html of the app.
  win.loadFile('./dist/nova-util-angular/index.html');

  // Open the DevTools.
  //win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
};


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

// On macOS it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
if (process.platform !== 'darwin') {       app.quit()     }   });

app.on('activate', () => {

  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {       createWindow()     }
});

ipcMain.on('rdp', (event, arg) => {
    console.log('do rdp ' + arg.hostName + ' ' + arg.username + '/' + arg.password );
    var child = require('child_process');

    var cmd = process.env.RDP_COMMAND_NAME;
    var mask = process.env.RDP_COMMAND_PARAMS;
    var command = mask.replace("$machine",arg.hostName)
                      .replace("$user",arg.username)
                      .replace("$password",arg.password);

    console.log("Running " + cmd + " " + command);

    var childProcess = child.spawn(cmd,command.split(","));

    childProcess.on('exit', function (code, signal) {
      console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
    });

    childProcess.stdout.on('data', (data) => {
      console.log(`child stdout:\n${data}`);
    });

    childProcess.stderr.on('data', (data) => {
      console.error(`child stderr:\n${data}`);
    });



  }
);
