/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: [
    'src/**/*.js',
    '!src/server.js',
    '!src/monitor.js',
    '!src/utils/ambiente.js'
  ],
  thresholds: {
    high: 95,
    low: 85,
    break: 80
  },
  reporters: ['html', 'dashboard', 'clear-text', 'progress'],
  testRunner: 'command',
  commandRunner: {
    command: 'mocha --config test/.mocharc.js'
  }
  // coverageAnalysis: 'off'
}
