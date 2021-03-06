const colors = require('colors/safe')

// formatted server reply with automatic new line
const serverReply = (socket, message) => {
  socket.write(colors.green(`* ${message}\r\n`))
}

const userReply = (socket, name, message) => {
  socket.write(colors.cyan(`${name}: ${message}\r\n`))
}

const pmReply = (socket, name, message) => {
  socket.write(colors.blue.bgWhite(`PM from ${name}: ${message}\r\n`))
}

const gameReply = (socket, message) => {
  socket.write(colors.black.bold.bgGreen(`${message}\r\n`))
}

const getSocketByName = (sockets, name) => {
  for (const s of sockets) {
    if (name === s.nickname) {
      return s
    }
  }
}

module.exports = {
  serverReply: serverReply,
  userReply: userReply,
  pmReply: pmReply,
  gameReply: gameReply,
  getSocketByName: getSocketByName
}
