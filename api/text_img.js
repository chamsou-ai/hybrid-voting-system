const txt = require('tesseract.js')
txt.recognize('capture.png','eng').then(output => console.log(output.data.text))