const fs = require('fs');
const getResults = require('../scraper');
const nodeHtmlToImage = require('node-html-to-image')


let results = getResults();
results.then(data=> {
    nodeHtmlToImage({
        output: './resource/image.png',
        html: `<html><body>${data.tags}</body></html>`
    })
    .then(() => console.log('The image was created successfully!'))    
});

module.exports = results;
