/*
    
*/
var program = require('commander');
const md = require('markdown-it')()
  .use(require('markdown-it-decorate'));
var fs = require('fs');
  
program
    .version('0.1.0')
    .usage('[options] <file ...>')
    .option('-o --output <path>', 'output filename')
    .parse(process.argv);

if(program.args[0] && program.output) {
    fs.readFile(program.args[0], function(err, data){
        if(err) {
            return console.error(err);
        }
        data_str = data.toString();
        fs.writeFile(program.output, md.render(data_str), function(err, data){
            if(err) {
                return console.error(err);
            }
        });
    })
}
