import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import path from 'node:path'


const createLoginWindow = (): void => {
  let loginWindow = new BrowserWindow({
    width: 320,
    height: 447,
    resizable: false,
    show: false,
    frame: false,
    title: 'CaLLCaLL',
    icon: path.join(__dirname, '../../resources/icons/im-logo.png'),
    maximizable: false,
    roundedCorners: true,
    transparent: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? {} : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    }
  })

  loginWindow.on('ready-to-show', () => {
    loginWindow.show()
  })

  ipcMain.on('close-login', () => loginWindow.close())

  ipcMain.on('login-success', () => {
    // loginWindow.close()
    createMainWindow()
  })

  loginWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    loginWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/#login`)
    console.log(`${process.env['ELECTRON_RENDERER_URL']}/#login`)
  } else {
    loginWindow.loadFile(join(__dirname, '../renderer/index.html'), {
      hash: '/login'
    })
  }
}

const createMainWindow = (): void => {
  let mainWindow = new BrowserWindow({
    width: 908,
    height: 587,
    resizable: true,
    show: false,
    icon: path.join(__dirname, '../../resources/icons/im-logo.png'),
    frame: false,
    title: 'CaLLCaLL',
    maximizable: true,
    roundedCorners: true,
    transparent: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? {} : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  ipcMain.on('close-main', () => mainWindow.close())

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/#main`)
    console.log(`${process.env['ELECTRON_RENDERER_URL']}/#main`)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'), {
      hash: '/main'
    })
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })


  createLoginWindow()

  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createLoginWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
