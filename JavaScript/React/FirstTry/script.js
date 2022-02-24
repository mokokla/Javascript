
const fs = require('fs')

try {
  const data = fs.readFileSync('C:/Users/morit/Documents/HTL 4.Klasse 2021-22/BET/Arbeitsblatt_Bitcoin_4cWI.docx', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

