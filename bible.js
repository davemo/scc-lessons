const imageToAscii = require('image-to-ascii');
const colors = require("./colors");

exports.verse = function() {
  console.log(colors.FgYellow, `
    Anyone who lives without blame walks safely.
    But anyone who takes a crooked path will get caught.
      -- Proverbs 10:9
  `);
}

exports.theme = function() {
  imageToAscii('./img/theme.jpg', (err, converted) => {
    console.log(err || converted);
  })
}

exports.bottomLine = function() {
  imageToAscii('./img/bottom-line.jpg', (err, converted) => {
    console.log(err || converted);
  })
}

exports.versei = function() {
  imageToAscii('./img/verse.jpg', (err, converted) => {
    console.log(err || converted);
  })
}

exports.characters = {
  david: () => {
    imageToAscii('./img/David.png', (err, converted) => {
      console.log(err || converted);
    })
  },
  ahimelek: () => {
    imageToAscii('./img/Ahimelek.png', (err, converted) => {
      console.log(err || converted);
    })
  },
  Saul: () => {
    imageToAscii('./img/Saul.png', (err, converted) => {
      console.log(err || converted);
    })
  },
  doeg: () => {
    imageToAscii('./img/Doeg.png', (err, converted) => {
      console.log(err || converted);
    })
  }
}

