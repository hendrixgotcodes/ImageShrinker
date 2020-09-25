const {
  app,
  BrowserWindow,
  Menu,
  globalShortcut,
  ipcMain,
  shell,
  dialog,
} = require("electron");
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const os = require("os");
const path = require("path");

//Path to serve static files
const URL_Views = require("url").format({
  protocol: "file",
  slashes: true,
  pathname: require("path").join(__dirname, "views"),
});

const icoURL = require("url").format({
  protocol: "file",
  slashes: true,
  pathname: require("path").join(__dirname, "views", "img", "icon.ico"),
});

//Empty Menu Template
const menuTemplate = [];

//Detecting mac pcs
const isMac = process.platform === "darwin" ? true : false;

//Function  To Initiate Window

function createDefaultWindow() {
  const defaultWin = new BrowserWindow({
    height: 540,
    width: 420,
    resizable: false,
    center: true,
    icon: icoURL,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  defaultWin.loadURL(URL_Views);
  defaultWin.loadFile("./views/html/index.html");

  //Registering global shortcuts
  globalShortcut.register(isMac ? "Command+r" : "Ctrl+r", () => {
    defaultWin.reload();
  });

  globalShortcut.register(isMac ? "Command+Option+I" : "Ctrl+Shift+I", () => {
    defaultWin.webContents.toggleDevTools();
  });

  //Setting menuBar to null (Removing)
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.on("ready", () => {
  createDefaultWindow();
});

ipcMain.on("reduceImage", (e, options) => {
  options.fileDest = path.join(os.homedir(), "resized");
  reduceImage(options);
});

async function reduceImage({ imgPath, value, fileDest }) {
  console.log(fileDest);
  const slash = require("slash");

  value = value / 100;

  const files = await imagemin([slash(imgPath)], {
    destination: fileDest,
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [value, value],
      }),
    ],
  });

  shell.openPath(fileDest);
}

ipcMain.on("generateErrorMessage", messageShown => {
  createModal(messageShown);
});

function createModal(messageShown) {
  dialog.showErrorBox("", "Please select an image");
}
