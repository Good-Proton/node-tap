// The <Static> section that appends results as the tests run
// Each log entry can be one of:
// - A finished test
// - A failed Result object (on the root test)
// - a stderr or stdout message

import { Box, Static, Text } from 'ink'
import React, { FC } from 'react'
import {
  ConsoleLog,
  isConsoleLog,
  isStdioLog,
  isTestLog,
  LogEntry,
  StdioLog,
  TestLog,
  useLog,
} from '../../hooks/use-log.js'
import { TapReportOpts } from '../../index.js'
import { TestSummary } from './test-summary.js'

export const TestLogLine: FC<TestLog> = ({ test, previous }) => (
  <Box paddingTop={!!previous && !isTestLog(previous) ? 1 : 0}>
    <TestSummary test={test} />
  </Box>
)

export const ConsoleLogLine: FC<ConsoleLog> = ({ text, previous }) => (
  <Box paddingTop={!!previous && !isConsoleLog(previous) ? 1 : 0}>
    <Text>{text.trimEnd()}</Text>
  </Box>
)

export const StdioLogLine: FC<StdioLog> = ({
  name,
  fd,
  text,
  previous: p,
}) => {
  const prefix =
    isStdioLog(p) && p.fd === fd && p.name === name ? (
      <></>
    ) : fd ? (
      <Box gap={1} paddingTop={1}>
        {fd === 1 ? (
          <Text color="cyan" bold dimColor>{`1>`}</Text>
        ) : fd === 2 ? (
          <Text color="red" bold dimColor>{`2>`}</Text>
        ) : (
          <></>
        )}
        <Text dimColor>{name}</Text>
      </Box>
    ) : (
      <Box paddingTop={1}>
        <Text dimColor>{name}</Text>
      </Box>
    )

  const t = String(text).trim()
  return (
    <Box flexDirection="column">
      {prefix}
      <Box>
        <Text>{t}</Text>
      </Box>
    </Box>
  )
}

export const Log: FC<TapReportOpts> = ({ tap, config }) => {
  if (tap.results) return <></>

  const logs = useLog(tap, config)
  return (
    <Static items={logs}>
      {(log, key) => <LogLine {...log} key={key} />}
    </Static>
  )
}

const LogLine: FC<LogEntry> = log =>
  isTestLog(log) ? (
    <TestLogLine {...log} />
  ) : isStdioLog(log) ? (
    <StdioLogLine {...log} />
  ) : (
    <ConsoleLogLine {...log} />
  )
