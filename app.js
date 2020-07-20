const fs = require('fs')
const yargs = require('yargs');

//get filename from command line
const fileName = yargs.argv._[0];
var out;
//check if user enter the args
if (fileName != undefined) {
    //read the filenames file
    //parse the JSON in file
    //add the filename to the object
    //convert object to JSON and update the file 
    //Create the file 
    fs.readFile('filenames.txt', function (err, result) {
        if (err) {
            console.log(err);
        } else {

            if (result != "") {
                //parse the JSON 
                out = JSON.parse(result);
                var fileNamesArray = out.filenames;
                if (fileNamesArray.includes(fileName))
                    console.log("File already exists with that name. Please enter different filename");
                else
                {
                    //update the filenames array in filenames file
                    fileNamesArray.push(fileName);
                    fs.writeFile('filenames.txt', JSON.stringify(out), function (err) {
                        if (err) { console.log(err) }
                    })

                    //create the file 
                    fs.writeFile('./Files/' + fileName + '.txt', 'You are awesome', function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            }
        }
    })
}
