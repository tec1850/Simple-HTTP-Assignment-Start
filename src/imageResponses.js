const fs = require('fs');

const getImage = (request, response) => {
  const spongegar = fs.readFileSync('./client/spongegar.png');
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports.getImage = getImage;
