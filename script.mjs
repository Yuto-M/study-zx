#! /ur/bin/env zx
console.log('Hellow zx');
const count = parseInt(await $`ls -1 | wc -l`);
console.log(`Files count: ${count}`);

const name = await question('What is your username');
console.log(name);