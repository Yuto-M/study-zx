#! /usr/bin/env zx
console.log('Hellow zx');
const count = parseInt(await $`ls -1 | wc -l`);
console.log(`Files count: ${count}`);

console.log(chalk.blue('Hello world!'))

const foo_list = ['foo'];
const bar_list = ['bar'];
const hoge_list = ['hoge'];

const content = await fs.readFile('./test-assets/src/src-list', 'utf-8');
const content_list = content.split("\n");

const output = {
  foo: [],
  bar: [],
  hoge: [],
  other: []
};
content_list.forEach(content_line => {
  if (content_line.match('foo')) {
    output.foo.push(content_line);
  } else if (content_line.match('bar')) {
    output.bar.push(content_line);
  } else if (content_line.match('hoge')) {
    output.hoge.push(content_line);
  } else {
    output.other.push(content_line);
  }
});


let categorized_list = '';
for (const [key, value] of Object.entries(output)) {
  categorized_list += `# ${key} \n`;
  if (value.length === 0) {
    continue;
  }
  value.forEach(ele => {
    categorized_list += `${ele} \n`;
  });
  categorized_list += "\n";
}
console.log(categorized_list);

fs.writeFile('./test-assets/output/test.txt', categorized_list, function (err) {
    if (err) { throw err; }
    console.log('test.txtが作成されました');
});




// 対話的に処理する時はquestion()を使う
// const name = await question('What is your username ');
// console.log(name);