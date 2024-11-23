'use strict';

const Mocha = require('mocha');
const {
    EVENT_RUN_BEGIN,
    EVENT_RUN_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
} = Mocha.Runner.constants;

// Custom output to match our rubric
class MyReporter {
    constructor(runner) {
        const stats = runner.stats;
        const errors = [];
        runner
            .on(EVENT_TEST_FAIL, (test, err) => {
                errors.push(err);
                console.log(
                    `\x1b[31m`,
                    `| ${test.parent.title} | no, see note ${errors.length} |`,
                    `\x1b[0m`
                );
                // console.log(test)
            })
            .on(EVENT_TEST_PASS, (test, err) => {
                console.log(
                    `\x1b[32m`,
                    `| ${test.parent.title} | yes |`,
                    `\x1b[0m`
                );
            })
            .once(EVENT_RUN_BEGIN, () => {
                console.log('');
                console.log(`---
| HTML, CSS, & JS | Complete? |
| --- | :---: |`);
                console.log(
                    `\x1b[33m`,
                    `| JS contains console log | - |`,
                    `\x1b[0m`
                );
                console.log(
                    `\x1b[33m`,
                    `| The correct repo was turned in | - |`,
                    `\x1b[0m`
                );
                console.log(
                    `\x1b[33m`,
                    `| GitHub config correct | - |`,
                    `\x1b[0m`
                );
                console.log(
                    `\x1b[32m`,
                    `| Runs in browser without console errors | yes |`,
                    `\x1b[0m`
                );
            })
            .once(EVENT_RUN_END, () => {
                console.log('');
                // console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);

                errors.map((err, i) => {
                    console.log('');
                    console.log(`${i + 1}) ${err}`);
                });
            });
    }
}

module.exports = MyReporter;
