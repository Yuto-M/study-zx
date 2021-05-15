#! /usr/bin/env zx
console.log('Hellow zx');
const count = parseInt(await $`ls -1 | wc -l`);
console.log(`Files count: ${count}`);

console.log(chalk.blue('Hello world!'))


const content = await fs.readFile('./test-assets/src/src-list');
console.log(`content is \n${content}`);

fs.writeFile('./test-assets/output/test.txt', 'uwagaki', function (err) {
    if (err) { throw err; }
    console.log('test.txtが作成されました');
});




// 対話的に処理する時はquestion()を使う
// const name = await question('What is your username ');
// console.log(name);