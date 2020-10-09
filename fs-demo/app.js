const fs = require ('fs');

fs.writeFile ('./data/mytext.txt','You are awesome \n',(err) => {
        if(err){
            throw err ;
        } else {
            console.log ('Data written successfully')
        }
})

fs.appendFile('./data/mytext.txt','You are beautifull \n',(err) => {
    if(err){
        throw err ;
    } else {
        console.log ('Data append successfully')
    }
} )

var text = [process.argv[2],process.argv[3],process.argv[4]]
console.log (text);
fs.writeFile ('./data/input.txt',text.toString(),(err) => {
    if(err){
        throw err ;
    } else {
        console.log ('Data written successfully')
    }
})


const prompt = require('prompt-sync')();
let file_name = prompt('Please enter the file name to create:');
const path = './data/'+file_name
try {
  if (fs.existsSync(path)) {
    file_name = prompt('file name already exist, Please enter the new file name to create:');
  }
  fs.writeFile ('./data/'+file_name,'You are awesome \n',(err) => {
    if(err){
        throw err ;
    } else {
        console.log ('Data written successfully')
    }
})
} catch(err) {
  console.error(err)
}