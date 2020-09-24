const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

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
    height: 520,
    width: 420,
    resizable: false,
    center: true,
    icon: `${__dirname}/views/`,
    webPreferences: {
      nodeIntegration: true
    }
  });

  defaultWin.loadURL(URL_Views);
  defaultWin.loadFile("./views/html/index.html");

  //Setting menuBar to null (Removing)

  const menu = Menu.buildFromTemplate(menuTemplate);
  //Registering global shortcuts
  globalShortcut.register(isMac ? "Command+r" : "Ctrl+r", () => {
    defaultWin.reload();
  });

  globalShortcut.register(isMac ? "Command+Option+I" : "Ctrl+Shift+I",()=>{
    defaultWin.webContents.toggleDevTools();
  })

  Menu.setApplicationMenu(menu);
}

app.on("ready", () => {
  createDefaultWindow();
});
