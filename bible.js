const colors = require("./colors");

exports.verse = function() {
  console.log(colors.FgYellow, `
    Anyone who lives without blame walks safely.
    But anyone who takes a crooked path will get caught.
      -- Proverbs 10:9
  `);
}
