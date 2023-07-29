import './fixtures/chalk.js'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'
import { Minimal } from '@tapjs/core'
import {TimedOut} from '../dist/timed-out.js'
import {sleep} from './fixtures/sleep.js'

t.test('time out a test with SIGALRM', async t => {
  const test = new Minimal({ name: 'timeout' })
  const app = render(<TimedOut test={test} />)
  t.equal(app.lastFrame(), '')
  await sleep(64)
  test.emit('timeout', { expired: 'timeout', signal: 'SIGALRM' })
  await sleep(64)
  t.matchSnapshot(app.lastFrame())
})

t.test('time out a test with no signal', async t => {
  const test = new Minimal({ name: 'timeout' })
  const app = render(<TimedOut test={test} />)
  t.equal(app.lastFrame(), '')
  await sleep(64)
  test.emit('timeout', { expired: 'timeout' })
  await sleep(64)
  t.matchSnapshot(app.lastFrame())
})
