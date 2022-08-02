import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
const program = new Command();

program
  .option('-c, --color <type>', 'input color', 'red')
  .option('-i, --init', 'init cli');
program.parse();
console.log(chalk[program.opts().color](program.opts().color));
if (program.opts().init) {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'test',
        message: '是否启动皮卡丘',
        default: true,
      },
    ])
    .then((answers) => {
      console.log('结果为:');
      console.log(answers);
    });
}
