const fse = require('fs-extra')

fse.ensureDirSync('/newFolder')

fse.ensureFileSync('newFolder/newFile')

fse.ensureDirSync('secondFolder')

fse.moveSync('newFolder/newFile', 'secondFolder/newFile')

fse.ensureDirSync('thirdFolder')

fse.copySync('secondFolder/newFile', 'thirdFolder/myNewFile')

fse.removeSync('secondFolder/newFile')

fse.removeSync('thirdFolder/myNewFile')

fse.removeSync('newFolder')

fse.removeSync('secondFolder')

fse.removeSync('thirdFolder')