// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second)

// writeFileSync('./content/result-sync.txt', `\nresult: ${first}, ${second}`, {flag:'a'}) //a: ghi tiep
const {readFile, writeFile} = require('fs')
readFile('./content/second.txt','utf8', (err, result)=> {
    if(err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `result: ${first}, ${second}`, (err,result)=> {
            if (err) {
                console.log(err)
                return;
            } 
            console.log(result)
        })
    
    })
    console.log(result);
})