#!/usr/bin/env node

import { program } from 'commander';

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .parse();
