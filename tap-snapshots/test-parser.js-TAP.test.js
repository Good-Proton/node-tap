/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP bailout-no-raison.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": "GERONIMMMOOOOOO!!!",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": "GERONIMMMOOOOOO!!!",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 3,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 6,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 5,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 5,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 6,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 5,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 9,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 99997,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 99998,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 99999,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100000,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100001,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100002,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100003,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100004,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100005,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99997,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99998,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 99999,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100000,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100001,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100002,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100003,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100004,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 100005,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 9,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 99997,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 99998,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 99999,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100000,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100001,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100002,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100003,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100004,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 100005,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 136211425,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 136211426,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 136211425,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 136211426,
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 2,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 136211425,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 136211426,
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 2,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "callback happened",
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "child test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should come last",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "Bail out! # no they aren't\\n",
      ],
      Array [
        "bailout",
        "# no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# no they aren't",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    Bail out! # no they aren't\\n",
  ],
  Array [
    "bailout",
    "# no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! # no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# no they aren't",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "my kids are fine",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "my kids are fine",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "my kids are fine",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "Bail out!\\n",
      ],
      Array [
        "bailout",
        "",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": true,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "Bail out! # no they aren't\\n",
      ],
      Array [
        "bailout",
        "# no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# no they aren't",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    Bail out! # no they aren't\\n",
  ],
  Array [
    "bailout",
    "# no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! # no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# no they aren't",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "no they aren't",
          "fullname": "my kids are fine",
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "no they aren't",
              "fullname": "my kids are fine",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "no they aren't",
      "fullname": "my kids are fine",
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "my kids are fine",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
          "fullname": "please sir, my son, he is sick",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "# please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please sir, my son, he is sick",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please sir, my son, he is sick",
          "diag": Object {
            "some": "diag",
          },
          "buffered": true,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
          "fullname": "please sir, my son, he is sick",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please sir, my son, he is sick",
      "diag": Object {
        "some": "diag",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please sir, my son, he is sick",
          "diag": Object {
            "some": "diag",
          },
          "buffered": true,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
          "fullname": "please sir, my son, he is sick",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "# please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please sir, my son, he is sick",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "please sir, my son, he is sick",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "i got better",
          "fullname": "please sir, my son, he is sick",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "i got better",
      "fullname": "please sir, my son, he is sick",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "please sir, my son, he is sick",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "please sir, my son, he is sick",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # child\\n",
  ],
  Array [
    "bailout",
    "# child",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# child",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "child",
          "diag": Object {
            "some": "diagnostics",
          },
          "buffered": true,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "child",
          "diag": Object {
            "some": "diagnostics",
          },
          "buffered": true,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "child",
      "diag": Object {
        "some": "diagnostics",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # 1\\n",
  ],
  Array [
    "bailout",
    "# 1",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# 1",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "1",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "1",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "1",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Should output debugger message",
          "fullname": "test/debug-test.js",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should output debugger message",
      "fullname": "test/debug-test.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should output debugger message",
      "fullname": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 537.383,
      "name": "test/debug-test.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Should output debugger message",
          "fullname": "test/debug-test.js",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should output debugger message",
      "fullname": "test/debug-test.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should output debugger message",
      "fullname": "test/debug-test.js",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 537.383,
      "name": "test/debug-test.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # all hell broke lose\\n",
  ],
  Array [
    "bailout",
    "# all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": "# all hell broke lose",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke lose",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke lose",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negociations\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negociations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negociations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negociations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 7,
      "fail": 4,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke lose",
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 9,
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 10,
          "fullname": "",
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # all hell broke loose\\n",
  ],
  Array [
    "bailout",
    "# all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": "# all hell broke loose",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke loose",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "basset hounds got long ears",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "name": "all hell broke loose",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 4  # TODO if I heard a voice from heaven ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "if I heard a voice from heaven ...",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 4,
      "todo": "if I heard a voice from heaven ...",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 4,
      "todo": "if I heard a voice from heaven ...",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok say \\"live without loving\\",\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "say \\"live without loving\\",",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "say \\"live without loving\\",",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "say \\"live without loving\\",",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6 I'd beg off.\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "I'd beg off.",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "name": "I'd beg off.",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "name": "I'd beg off.",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negotiations\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negotiations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negotiations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 7,
      "skip": "contract negotiations",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8 Girls are such exquisite hell\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Girls are such exquisite hell",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "Girls are such exquisite hell",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "Girls are such exquisite hell",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 Elegy 9B           # TOdO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "todo": true,
      "name": "Elegy 9B",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "todo": true,
      "name": "Elegy 9B",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": true,
      "id": 9,
      "todo": true,
      "name": "Elegy 9B",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 7,
      "fail": 3,
      "bailout": false,
      "todo": 2,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "name": "all hell broke loose",
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 10,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "Bail out! # please keep my diags\\n",
  ],
  Array [
    "bailout",
    "# please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please keep my diags",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# before 1\\n",
      ],
      Array [
        "comment",
        "# before 1\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "child",
        },
      ],
      Array [
        "line",
        "# before 2\\n",
      ],
      Array [
        "comment",
        "# before 2\\n",
      ],
      Array [
        "line",
        "ok 2\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "fullname": "child",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # before 1\\n",
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "    # before 2\\n",
  ],
  Array [
    "line",
    "    ok 2\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "child",
    },
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "comment",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# after plan\\n",
  ],
  Array [
    "comment",
    "# after plan\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "Bail out! # please keep my diags\\n",
  ],
  Array [
    "bailout",
    "# please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# please keep my diags",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "please keep my diags",
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "please keep my diags",
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 6,
      "pass": 6,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "The object isa Board",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Board size is zero",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "The object isa Tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Get possible places to put the Tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Placing the tile produces no error",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "name": "Board size is 1",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 6,
      "pass": 6,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Before console.log",
          "fullname": "Test newlines in tap and console.log",
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "After console.log",
          "fullname": "Test newlines in tap and console.log",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Before console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Before console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "After console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "After console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 4.137,
      "name": "Test newlines in tap and console.log",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "Before console.log",
          "fullname": "Test newlines in tap and console.log",
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "After console.log",
          "fullname": "Test newlines in tap and console.log",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Before console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Before console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "After console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "After console.log",
      "fullname": "Test newlines in tap and console.log",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 4.137,
      "name": "Test newlines in tap and console.log",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "created Board",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "diag": Object {
        "message": "Board layout",
        "severity": "comment",
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "00000",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Interlock activated",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Megathrusters are go",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Head formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Blazing sword formed",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Robeast destroyed",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should match pattern provided",
          "diag": Object {
            "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
        },
      ],
      Array [
        "line",
        "Bail out! # should match pattern provided\\n",
      ],
      Array [
        "bailout",
        "# should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# should match pattern provided",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": null,
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should match pattern provided",
              "diag": Object {
                "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "should match pattern provided",
      "diag": Object {
        "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "should match pattern provided",
      "diag": Object {
        "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
    },
  ],
  Array [
    "line",
    "    Bail out! # should match pattern provided\\n",
  ],
  Array [
    "bailout",
    "# should match pattern provided",
  ],
  Array [
    "line",
    "Bail out! # should match pattern provided\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# should match pattern provided",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should match pattern provided",
          "diag": Object {
            "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should match pattern provided",
              "diag": Object {
                "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "should match pattern provided",
      "diag": Object {
        "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "should match pattern provided",
      "diag": Object {
        "found": "\\n# Subtest: nope\\n\\n    not ok 1 - nope\\n      ---\\n      still: the string\\n      ...\\n\\n    1..1 # nope\\nnot ok 1 - nope # time=123\\n  ---\\n  this: is fine\\n  ...\\n\\n1..1\\n",
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - -t 0.2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "-t 0.2",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "-t 0.2",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP die.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP die.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 10,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 7,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 11,
      "pass": 11,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a continuation line",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Not a \\\\# TODO",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Not a \\\\# SKIP",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Escaped \\\\\\\\\\\\#",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update profile",
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update profile",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 43.094,
          "name": "update profile",
          "fullname": "test/01c-user-updates.js",
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update email",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 24.16,
          "name": "update email",
          "fullname": "test/01c-user-updates.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update email",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update email",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 339.14,
      "name": "test/01c-user-updates.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update profile",
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update profile",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 43.094,
          "name": "update profile",
          "fullname": "test/01c-user-updates.js",
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "should be equivalent",
              "fullname": "test/01c-user-updates.js update email",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 24.16,
          "name": "update email",
          "fullname": "test/01c-user-updates.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update profile",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update email",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equivalent",
      "fullname": "test/01c-user-updates.js update email",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 339.14,
      "name": "test/01c-user-updates.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "maybe a child",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "maybe a child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "maybe a child",
    },
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "maybe a child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "maybe a child",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "maybe a child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "maybe a child",
    },
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "maybe a child",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "bailout",
    "# de-indenting the yamlish wrongly.",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# de-indenting the yamlish wrongly.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n  severity: fail\\n",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "line",
    "ok 2 But this is not garbage\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "But this is not garbage",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "But this is not garbage",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "But this is not garbage",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3 truncating the yamlish\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  here: is some yaml\\n",
  ],
  Array [
    "line",
    "  i: guess\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "name": "truncating the yamlish",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "name": "truncating the yamlish",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "name": "truncating the yamlish",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  here: is some yaml\\n  i: guess\\n",
  ],
  Array [
    "line",
    "not ok 4 this is truncated weirdly\\n",
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "name": "this is truncated weirdly",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 4,
      "name": "this is truncated weirdly",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 4,
      "name": "this is truncated weirdly",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 1,
      "fail": 3,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 3,
          "name": "truncating the yamlish",
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 4,
          "name": "this is truncated weirdly",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 573,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "Couldn't connect to database.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "database handle",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 573,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "database handle",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "Couldn't connect to database.",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "name": "database handle",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 2,
      "fail": 2,
      "bailout": false,
      "todo": 2,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Creating test program",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test program runs, no error",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 3,
      "todo": "halting problem unsolved",
      "name": "infinite loop",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 4,
      "todo": "halting problem unsolved",
      "name": "infinite loop 2",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 2,
      "fail": 2,
      "bailout": false,
      "todo": 2,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "one",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "two",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "four",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.234,
          "name": "true is ok",
          "fullname": "first",
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1.234,
          "name": "doag is also okay",
          "fullname": "first",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.234,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.234,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.234,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.234,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 2.589,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.001,
          "name": "no plan",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 1,
              "skip": "for no raisin",
              "name": "granddaughter",
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 1001,
              "name": "grandson",
              "diag": Object {
                "ok": 1,
                "this": "is not tap",
                "it": "is yaml",
              },
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 3,
              "todo": true,
              "name": "grandchild",
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 1,
              "fail": 2,
              "bailout": false,
              "todo": 1,
              "skip": 1,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1200,
          "name": "this passes",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.001,
      "name": "no plan",
      "fullname": "second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.001,
      "name": "no plan",
      "fullname": "second",
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "skip": "for no raisin",
      "name": "granddaughter",
      "fullname": "second this passes",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": false,
      "id": 1,
      "skip": "for no raisin",
      "name": "granddaughter",
      "fullname": "second this passes",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 1001,
      "name": "grandson",
      "diag": Object {
        "ok": 1,
        "this": "is not tap",
        "it": "is yaml",
      },
      "fullname": "second this passes",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 1001,
      "name": "grandson",
      "diag": Object {
        "ok": 1,
        "this": "is not tap",
        "it": "is yaml",
      },
      "fullname": "second this passes",
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "todo": true,
      "name": "grandchild",
      "fullname": "second this passes",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 3,
      "todo": true,
      "name": "grandchild",
      "fullname": "second this passes",
    },
  ],
  Array [
    "extra",
    "          ---\\n          ok: 1\\n          this: is not tap or yaml\\n          it: is garbage\\n",
  ],
  Array [
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.2,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.234,
          "name": "true is ok",
          "fullname": "first",
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1.234,
          "name": "doag is also okay",
          "fullname": "first",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.234,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.234,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.234,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.234,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 2.589,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 1.001,
          "name": "no plan",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 1,
              "skip": "for no raisin",
              "name": "granddaughter",
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 1001,
              "name": "grandson",
              "diag": Object {
                "ok": 1,
                "this": "is not tap",
                "it": "is yaml",
              },
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": false,
              "id": 3,
              "todo": true,
              "name": "grandchild",
              "fullname": "second this passes",
            },
          ],
          Array [
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 1,
              "fail": 2,
              "bailout": false,
              "todo": 1,
              "skip": 1,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 1200,
          "name": "this passes",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.001,
      "name": "no plan",
      "fullname": "second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 1.001,
      "name": "no plan",
      "fullname": "second",
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "skip": "for no raisin",
      "name": "granddaughter",
      "fullname": "second this passes",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": false,
      "id": 1,
      "skip": "for no raisin",
      "name": "granddaughter",
      "fullname": "second this passes",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 1001,
      "name": "grandson",
      "diag": Object {
        "ok": 1,
        "this": "is not tap",
        "it": "is yaml",
      },
      "fullname": "second this passes",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 1001,
      "name": "grandson",
      "diag": Object {
        "ok": 1,
        "this": "is not tap",
        "it": "is yaml",
      },
      "fullname": "second this passes",
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "todo": true,
      "name": "grandchild",
      "fullname": "second this passes",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 3,
      "todo": true,
      "name": "grandchild",
      "fullname": "second this passes",
    },
  ],
  Array [
    "extra",
    "          ---\\n          ok: 1\\n          this: is not tap or yaml\\n          it: is garbage\\n",
  ],
  Array [
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 1.2,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 0,
                  "comment": "no tests found",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 0,
                  "pass": 0,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "comment": "no tests found",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 0,
              "comment": "no tests found",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 0,
              "pass": 0,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "comment": "no tests found",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 5.26,
          "name": "boom",
          "fullname": "index.js",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 5.26,
      "name": "boom",
      "fullname": "index.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 5.26,
      "name": "boom",
      "fullname": "index.js",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # index.js\\n",
  ],
  Array [
    "bailout",
    "# index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# index.js",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 201.609,
          "name": "index.js",
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "timeout": 30000,
            "results": Object {
              "ok": false,
              "count": 1,
              "pass": 1,
              "plan": Object {
                "start": 1,
                "end": 1,
              },
            },
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 0,
                  "comment": "no tests found",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 0,
                  "pass": 0,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "comment": "no tests found",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 0,
              "comment": "no tests found",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 0,
              "pass": 0,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "comment": "no tests found",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 5.26,
          "name": "boom",
          "fullname": "index.js",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 5.26,
      "name": "boom",
      "fullname": "index.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 5.26,
      "name": "boom",
      "fullname": "index.js",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "time": 201.609,
      "name": "index.js",
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "timeout": 30000,
        "results": Object {
          "ok": false,
          "count": 1,
          "pass": 1,
          "plan": Object {
            "start": 1,
            "end": 1,
          },
        },
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 201.609,
          "name": "index.js",
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "timeout": 30000,
            "results": Object {
              "ok": false,
              "count": 1,
              "pass": 1,
              "plan": Object {
                "start": 1,
                "end": 1,
              },
            },
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should be equivalent",
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
          },
          "fullname": "foo",
        },
      ],
      Array [
        "line",
        "Bail out! # should be equivalent\\n",
      ],
      Array [
        "bailout",
        "# should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": "# should be equivalent",
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": null,
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should be equivalent",
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
              },
              "fullname": "foo",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "should be equivalent",
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
      },
      "fullname": "foo",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "should be equivalent",
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
      },
      "fullname": "foo",
    },
  ],
  Array [
    "line",
    "    Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": false,
          "id": 1,
          "name": "should be equivalent",
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
          },
          "fullname": "foo",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": false,
          "count": 1,
          "pass": 0,
          "fail": 1,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [
            Result {
              "ok": false,
              "id": 1,
              "name": "should be equivalent",
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
              },
              "fullname": "foo",
            },
          ],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "name": "should be equivalent",
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
      },
      "fullname": "foo",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "name": "should be equivalent",
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\nyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
      },
      "fullname": "foo",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - foo # time=13.457ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 0\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    fail: 1\\n",
  ],
  Array [
    "line",
    "    time: 13.457\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "time": 13.457,
      "name": "foo",
      "diag": Object {
        "results": Object {
          "plan": Object {
            "start": 1,
            "end": 1,
          },
          "count": 1,
          "pass": 0,
          "ok": false,
          "fail": 1,
          "time": 13.457,
        },
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=22.566ms\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "time": 13.457,
          "name": "foo",
          "diag": Object {
            "results": Object {
              "plan": Object {
                "start": 1,
                "end": 1,
              },
              "count": 1,
              "pass": 0,
              "ok": false,
              "fail": 1,
              "time": 13.457,
            },
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP lone_not_bug.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP lone_not_bug.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP mismatched-child-assert.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: some child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: some child\\n",
      ],
      Array [
        "line",
        "ok 1 - this is fine\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "this is fine",
          "fullname": "some child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - this is fine\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "some child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "some child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - different name\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP mismatched-child-assert.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: some child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: some child\\n",
      ],
      Array [
        "line",
        "ok 1 - this is fine\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "this is fine",
          "fullname": "some child",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - this is fine\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "some child",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "fullname": "some child",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - different name\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "different name",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP missing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP missing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 6,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no_nums.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no_nums.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 3,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-numbers.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # we are bad\\n",
  ],
  Array [
    "bailout",
    "# we are bad",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# we are bad",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "we are bad",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-numbers.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok we are good\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "we are good",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 we are bad\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "we are bad",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok we are zesty!\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "we are zesty!",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "we are zesty!",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "we are zesty!",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "we are bad",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP no-plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-enough.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-enough.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "ok 1 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 - should be equivalent # TODO but we will fix it later\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 2,
      "todo": "but we will fix it later",
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 - should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 4.\\n",
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-with-trailing-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok-with-trailing-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# fail  1\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "Bail out! # should be equivalent\\n",
  ],
  Array [
    "bailout",
    "# should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# should be equivalent",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP not-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# pass  3\\n",
  ],
  Array [
    "line",
    "# fail  1\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 3,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "name": "should be equivalent",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset-mismatch.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "first test id does not match plan start",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset-mismatch.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 4,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "first test id does not match plan start",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP offset.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "8..11\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 8,
      "end": 11,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 8,
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP offset.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "8..11\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 8,
      "end": 11,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(11)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 8,
        "end": 11,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4 # just some plan comment\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
      "comment": "just some plan comment",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "just some plan comment",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4 # just some plan comment\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
      "comment": "just some plan comment",
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "just some plan comment",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP one-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP one-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_err_mix.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "one\\n",
  ],
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "line",
    "three\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_err_mix.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "one\\n",
  ],
  Array [
    "extra",
    "one\\n",
  ],
  Array [
    "line",
    "three\\n",
  ],
  Array [
    "extra",
    "three\\n",
  ],
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "no tests found",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "comment": "no tests found",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out_of_order.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 2 - Test that argument passing works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - Test that passing arguments as references work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - Test a normal sub\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6 - Detach test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 10 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 12 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 13 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..15\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 15,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "line",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "line",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "line",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 10,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 15,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP out_of_order.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 2 - Test that argument passing works\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Test that argument passing works",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - Test that passing arguments as references work\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "Test that passing arguments as references work",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - Test a normal sub\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Test a normal sub",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 6 - Detach test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 6,
      "name": "Detach test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 8 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 8,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 9 - Nested thread test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 9,
      "name": "Nested thread test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 10 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 10,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 11 - Wanted 7, got 7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 11,
      "name": "Wanted 7, got 7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 12 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 12,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 13 - Wanted 8, got 8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 13,
      "name": "Wanted 8, got 8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..15\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 15,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "extra",
    "ok 1\\n",
  ],
  Array [
    "line",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "extra",
    "ok 5 - Check that Config::threads is true\\n",
  ],
  Array [
    "line",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "extra",
    "ok 7 - Detach test\\n",
  ],
  Array [
    "line",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 14 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "extra",
    "ok 15 - Check so that tid for threads work for main thread\\n",
  ],
  Array [
    "line",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(15)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 10 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 10,
      "pass": 10,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 15,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP out-of-order.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 2 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP out-of-order.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "should be equivalent",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 2 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "should be equal",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "(unnamed assert)",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP outside-plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 234,
          "name": "pretty big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 5,
          "name": "less big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP outside-plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 234 - pretty big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 234,
      "name": "pretty big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - less big\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "less big",
      "tapError": "id greater than plan end",
      "plan": Object {
        "start": 1,
        "end": 3,
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - three\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "three",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": true,
          "id": 234,
          "name": "pretty big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
          "fullname": "",
        },
        Result {
          "ok": true,
          "id": 5,
          "name": "less big",
          "tapError": "id greater than plan end",
          "plan": Object {
            "start": 1,
            "end": 3,
          },
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 0,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out! # empty\\n",
  ],
  Array [
    "bailout",
    "# empty",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": "# empty",
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "empty",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-buffered.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160810' from local date.\\n",
  ],
  Array [
    "line",
    "not ok 1 - empty {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: empty\\n",
      ],
      Array [
        "line",
        "1..0\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 0,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 0,
          "pass": 0,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..0\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "buffered": true,
      "name": "empty",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - my_test {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_test",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_test",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_test",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_test",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "my_test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - my_test_plan {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_test_plan",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_test_plan",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_test_plan",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_test_plan",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "my_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 4 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "ok 5 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 4,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "buffered": true,
          "name": "empty",
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "ok 2 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP perl-test2-streamed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "comment",
    "# Seeded srand with seed '20160809' from local date.\\n",
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test\\n",
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Subtest: my_streamy_test\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "Subtest: my_streamy_test",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my_streamy_test_plan\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - subtest event A\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "subtest event A",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "line",
        "ok 2 - subtest event B\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "subtest event B",
          "fullname": "my_streamy_test_plan",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - subtest event A\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "subtest event A",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "    ok 2 - subtest event B\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "subtest event B",
      "fullname": "my_streamy_test_plan",
    },
  ],
  Array [
    "line",
    "ok 2 - Subtest: my_streamy_test_plan\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "Subtest: my_streamy_test_plan",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "subtest",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 99,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-post.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "subtest",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 99,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(99)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 2,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 99,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-pre.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "subtest",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-in-bad-places-pre.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "extra",
    "1..2\\n",
  ],
  Array [
    "line",
    "ok subtest {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "subtest",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "subtest",
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "subtest",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "line",
    "ok yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: lamy\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: lamy\\n",
  ],
  Array [
    "line",
    "1..99\\n",
  ],
  Array [
    "extra",
    "1..99\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid-strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "plan end cannot be less than plan start",
          "plan": Object {
            "start": 100,
            "end": 1,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid-strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "plan end cannot be less than plan start",
          "plan": Object {
            "start": 100,
            "end": 1,
          },
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "extra",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP plan-invalid.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "100..1\\n",
  ],
  Array [
    "extra",
    "100..1\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "pragma +custom\\n",
  ],
  Array [
    "pragma",
    "custom",
    true,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 1,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child-strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "extra",
    "pragma +strict\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "pragma +strict\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child-strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "tap version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "extra",
    "pragma +strict\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "pragma +strict\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "extra",
    "pragma +foo\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "extra",
    "pragma +foo\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: true\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP pragma-mid-yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - some yaml\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  ok: true\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "some yaml",
      "fullname": "",
    },
  ],
  Array [
    "extra",
    "  ---\\n  ok: true\\n",
  ],
  Array [
    "line",
    "pragma +foo\\n",
  ],
  Array [
    "pragma",
    "foo",
    true,
  ],
  Array [
    "line",
    "  name: some yaml\\n",
  ],
  Array [
    "extra",
    "  name: some yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP schwern-todo-quiet.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "line",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "line",
    "#     expected: '42'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP schwern-todo-quiet.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "comment",
    "#   Failed test at ../../andy/schwern.pl line 17.\\n",
  ],
  Array [
    "line",
    "#          got: '23'\\n",
  ],
  Array [
    "comment",
    "#          got: '23'\\n",
  ],
  Array [
    "line",
    "#     expected: '42'\\n",
  ],
  Array [
    "comment",
    "#     expected: '42'\\n",
  ],
  Array [
    "line",
    "not ok 3 # TODO Roman numerials still not a built in type\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 3,
      "todo": "Roman numerials still not a built in type",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 3,
      "todo": "Roman numerials still not a built in type",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": false,
      "id": 3,
      "todo": "Roman numerials still not a built in type",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "comment",
    "#   Failed (TODO) test at ../../andy/schwern.pl line 20.\\n",
  ],
  Array [
    "line",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "comment",
    "#          got: 'XXIII'\\n",
  ],
  Array [
    "line",
    "#     expected: '23'\\n",
  ],
  Array [
    "comment",
    "#     expected: '23'\\n",
  ],
  Array [
    "line",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "comment",
    "# Looks like you failed 1 test of 3.\\n",
  ],
  Array [
    "line",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 3,
      "pass": 1,
      "fail": 2,
      "bailout": false,
      "todo": 1,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP schwern.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - 42\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP schwern.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - 42\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "42",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP sequence_misparse.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 # skipped on foobar system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP sequence_misparse.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 # skipped on foobar system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "# skipped on foobar system",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "comment",
    "# 1234567890123456789012345678901234567890\\n",
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": true,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP simple_fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "not ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "fail",
    Result {
      "ok": false,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 3,
      "fail": 2,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Result {
          "ok": false,
          "id": 2,
          "fullname": "",
        },
        Result {
          "ok": false,
          "id": 5,
          "fullname": "",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml_missing_version13.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml_missing_version13.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple_yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP simple.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip_nomsg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 # Skip\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip_nomsg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "ok 1 # Skip\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-nonempty.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..1 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "line",
    "ok 1 found some spare flux in bottom drawer\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-nonempty.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..1 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "line",
    "ok 1 found some spare flux in bottom drawer\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "found some spare flux in bottom drawer",
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-assert.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient skipping",
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
        "comment": "SKIP Insufficient skipping",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-assert.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient skipping\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient skipping",
    },
  ],
  Array [
    "line",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "extra",
    "ok 1 - should not be asserting\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient skipping",
        "comment": "SKIP Insufficient skipping",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-test.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all-with-test.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "line",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "comment",
    "# test count(1) != plan(0)\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Plan of 1..0, but test points encountered",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient positron flux",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-all.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "comment",
    "# TAP emitted by Test::More 0.98\\n",
  ],
  Array [
    "line",
    "1..0 # SKIP Insufficient positron flux\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "SKIP Insufficient positron flux",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "SKIP Insufficient positron flux",
        "comment": "SKIP Insufficient positron flux",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 does not count as failure # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 does not count as failure # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": false,
      "id": 1,
      "skip": true,
      "name": "does not count as failure",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 0,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip-one-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 totally fine # SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 1,
      "skip": true,
      "name": "totally fine",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    # skip rain delay\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skip.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2    # skip rain delay\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": "rain delay",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_nomsg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_nomsg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_v13.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall_v13.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipall.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # skipping: rope\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 0,
      "comment": "skipping: rope",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 0,
      "pass": 0,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 0,
        "skipAll": true,
        "skipReason": "skipping: rope",
        "comment": "skipping: rope",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipping-a-few.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 4,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP skipping-a-few.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 5,
    },
  ],
  Array [
    "line",
    "ok 1 - approved operating system\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "approved operating system",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# $^0 is solaris\\n",
  ],
  Array [
    "comment",
    "# $^0 is solaris\\n",
  ],
  Array [
    "line",
    "ok 2 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 3,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 4,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 - # SKIP no /sys directory\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 5,
      "skip": "no /sys directory",
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# skip: 4\\n",
  ],
  Array [
    "comment",
    "# skip: 4\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 5,
      "pass": 5,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 4,
      "plan": FinalPlan {
        "start": 1,
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP space_after_plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5 \\n",
  ],
  Array [
    "extra",
    "1..5 \\n",
  ],
  Array [
    "line",
    "ok 1 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP space_after_plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5 \\n",
  ],
  Array [
    "extra",
    "1..5 \\n",
  ],
  Array [
    "line",
    "ok 1 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 5 \\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 5,
      "name": "",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 5,
      "pass": 5,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP stdout_stderr.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP stdout_stderr.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 4,
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 4,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 4,
      "pass": 4,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP strict.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "Nonsense!\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP strict.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "pragma +strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    true,
  ],
  Array [
    "line",
    "Nonsense!\\n",
  ],
  Array [
    "extra",
    "Nonsense!\\n",
  ],
  Array [
    "line",
    "pragma -strict\\n",
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "line",
    "Doesn't matter.\\n",
  ],
  Array [
    "extra",
    "Doesn't matter.\\n",
  ],
  Array [
    "line",
    "ok 1 All OK\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "All OK",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": false,
      "count": 1,
      "pass": 1,
      "fail": 1,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [
        Object {
          "tapError": "Non-TAP data encountered in strict mode",
          "data": "Nonsense!\\n",
        },
      ],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
          "fullname": "first",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 12.34,
      "buffered": true,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "second",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 12.34,
      "buffered": true,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "third",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "third",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "third",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "time": 43.21,
      "name": "third",
      "diag": Object {
        "some": "diagnostic",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-diags-time.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 3,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=12.34ms {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
          "fullname": "first",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 12.34,
      "buffered": true,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - second { # time=12.34ms\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok x\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "x",
          "fullname": "second",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok x\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "second",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "time": 12.34,
      "buffered": true,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - third # time=43.21ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostic\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "line",
        "ok y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "third",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok y\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "third",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "third",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "time": 43.21,
      "name": "third",
      "diag": Object {
        "some": "diagnostic",
      },
      "buffered": true,
      "fullname": "",
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 3,
      "pass": 3,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-todo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - tbd # TODO foo {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "tbd",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "tbd",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "tbd",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - skippy # skip {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "skippy",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "skippy",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "skippy",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 1,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer-todo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - tbd # TODO foo {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: tbd\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "tbd",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "tbd",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "tbd",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "todo",
    Result {
      "ok": true,
      "id": 1,
      "todo": "foo",
      "buffered": true,
      "name": "tbd",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - skippy # skip {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: skippy\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "fullname": "skippy",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "skippy",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "fullname": "skippy",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "skip",
    Result {
      "ok": true,
      "id": 2,
      "skip": true,
      "buffered": true,
      "name": "skippy",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# todo: 1\\n",
  ],
  Array [
    "comment",
    "# todo: 1\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 1,
      "skip": 1,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - nesting {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - first {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - second {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "buffered": true,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - first {\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    ok 2 - second {\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-buffer.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - nesting {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "ok 1 - first {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "ok 2 - second {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "buffered": true,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - first {\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    ok 2 - second {\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-leading.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 8.987,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 5.988,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=55.292ms\\n",
  ],
  Array [
    "comment",
    "# time=55.292ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-leading.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: test/test/ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 8.987,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 5.988,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=55.292ms\\n",
  ],
  Array [
    "comment",
    "# time=55.292ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-mixed-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-mixed-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-noindent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-comment-noindent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest: first\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: first\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js nesting first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "# Subtest: second\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: second\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js nesting second",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: first\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest: second\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# time=55.292ms\\n",
      ],
      Array [
        "comment",
        "# time=55.292ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest: first\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js nesting first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "line",
    "        # Subtest: second\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js nesting second",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=55.292ms\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "line",
    "# time=223.468ms\\n",
  ],
  Array [
    "comment",
    "# time=223.468ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-confusing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "a brace looks like this x",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "a brace looks like this",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "a brace looks like this x",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "a brace looks like this x",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "a brace looks like this",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "a brace looks like this",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "a brace looks like this",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-confusing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "a brace looks like this x",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "a brace looks like this",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "a brace looks like this x",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "a brace looks like this x",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "a brace looks like this",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "y",
      "fullname": "a brace looks like this",
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "a brace looks like this",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-heading.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-heading.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "not a subtest",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "y",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "not a subtest",
      "fullname": "x",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "not a subtest",
      "fullname": "x",
    },
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-maybe-child-unfulfilled.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# just a comment\\n",
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: fake\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "line",
        "ok 1 - not a subtest\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "not a subtest",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "y",
          "fullname": "x",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: fake\\n",
  ],
  Array [
    "line",
    "    ok 1 - not a subtest\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "not a subtest",
      "fullname": "x",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "not a subtest",
      "fullname": "x",
    },
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - y\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "name": "x",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-mixing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x1 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x1",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x1 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x1 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "x1",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x2 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x2",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x2 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x2 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "x2",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x3 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x3",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x3 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x3 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "x3",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x4 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x4",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x4 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x4 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "x4",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x5 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x5",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x5 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x5 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "x5",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x6 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x6",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x6 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x6 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "x6",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x7 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x7",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x7 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x7 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "x7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x8 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x8",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x8 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x8 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "x8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x9 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x9",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x9 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x9 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "x9",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-mixing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x1 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x1",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x1 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x1 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "buffered": true,
      "name": "x1",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x2 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x2",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x2 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x2 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "buffered": true,
      "name": "x2",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x3 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x3",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x3 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x3 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 3,
      "buffered": true,
      "name": "x3",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x4 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x4",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x4 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x4 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 4,
      "name": "x4",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x5 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x5",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x5 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x5 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 5,
      "name": "x5",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x6 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x6",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x6 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x6 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 6,
      "name": "x6",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x7 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "buffered": true,
          "name": "y",
          "fullname": "x7",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x7 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x7 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 7,
      "name": "x7",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x8 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x8",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x8 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x8 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 8,
      "name": "x8",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "ypoint",
              "fullname": "x9 y",
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 1,
              "pass": 1,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "name": "y",
          "fullname": "x9",
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 1,
          "pass": 1,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x9 y",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "ypoint",
      "fullname": "x9 y",
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 9,
      "name": "x9",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 9,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 9,
      "pass": 9,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-leading-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-leading-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: ../tap/test/test/ok.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: ../tap/test/test/ok.js\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "../tap/test/test/ok.js",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "../tap/test/test/ok.js",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "../tap/test/test/ok.js",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "../tap/test/test/ok.js",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "../tap/test/test/ok.js",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "nesting",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "nesting",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: nesting\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "nesting",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "nesting",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "nesting",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "nesting",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: nesting\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "nesting",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "nesting",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "first",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment-mid-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "first",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "first",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "first",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "first",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "first",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-no-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "line",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "1..2\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 2,
                },
              ],
              Array [
                "line",
                "ok 1 - true is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "true is ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 2 - doag is also okay\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "doag is also okay",
                  "fullname": "",
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 2,
                  "pass": 2,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 2,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    1..2\\n",
          ],
          Array [
            "line",
            "    ok 1 - true is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - doag is also okay\\n",
          ],
          Array [
            "line",
            "ok 1 - first # time=8.987ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "time": 8.987,
              "name": "first",
              "fullname": "",
            },
          ],
          Array [
            "line",
            "# Subtest\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "line",
                "ok 1 - but that is ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 1,
                  "name": "but that is ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 2 - this passes\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 2,
                  "name": "this passes",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "ok 3 - nested ok\\n",
              ],
              Array [
                "assert",
                Result {
                  "ok": true,
                  "id": 3,
                  "name": "nested ok",
                  "fullname": "",
                },
              ],
              Array [
                "line",
                "1..3\\n",
              ],
              Array [
                "plan",
                Object {
                  "start": 1,
                  "end": 3,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "ok": true,
                  "count": 3,
                  "pass": 3,
                  "fail": 0,
                  "bailout": false,
                  "todo": 0,
                  "skip": 0,
                  "plan": FinalPlan {
                    "start": 1,
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "comment": "",
                  },
                  "failures": Array [],
                },
              ],
            ],
          ],
          Array [
            "line",
            "    ok 1 - but that is ok\\n",
          ],
          Array [
            "line",
            "    ok 2 - this passes\\n",
          ],
          Array [
            "line",
            "    ok 3 - nested ok\\n",
          ],
          Array [
            "line",
            "    1..3\\n",
          ],
          Array [
            "line",
            "ok 2 - second # time=5.988ms\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "time": 5.988,
              "name": "second",
              "fullname": "",
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        1..2\\n",
      ],
      Array [
        "line",
        "        ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "    ok 1 - first # time=8.987ms\\n",
      ],
      Array [
        "line",
        "    # Subtest\\n",
      ],
      Array [
        "line",
        "        ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "        ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "        ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "        1..3\\n",
      ],
      Array [
        "line",
        "    ok 2 - second # time=5.988ms\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - nesting # time=28.647ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 28.647,
          "name": "nesting",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "ok 2 - this passes\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "name": "this passes",
          "fullname": "",
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest\\n",
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            1..2\\n",
  ],
  Array [
    "line",
    "            ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        ok 1 - first # time=8.987ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 8.987,
      "name": "first",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        # Subtest\\n",
  ],
  Array [
    "line",
    "            ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "            1..3\\n",
  ],
  Array [
    "line",
    "        ok 2 - second # time=5.988ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "time": 5.988,
      "name": "second",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - nesting # time=28.647ms\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 28.647,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - ../tap/test/test/ok.js # time=205.826ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "time": 205.826,
      "name": "../tap/test/test/ok.js",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment-indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment-indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: ok.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: nesting\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "start": 1,
          "end": 2,
        },
      ],
      Array [
        "line",
        "# Subtest: first\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: first\\n",
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 2,
            },
          ],
          Array [
            "line",
            "ok 1 - true is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "true is ok",
              "fullname": "nesting first",
            },
          ],
          Array [
            "line",
            "ok 2 - doag is also okay\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "doag is also okay",
              "fullname": "nesting first",
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 2,
              "pass": 2,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "    ok 1 - true is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - doag is also okay\\n",
      ],
      Array [
        "line",
        "ok 1 - first # time=11.345ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 1,
          "time": 11.345,
          "name": "first",
          "fullname": "nesting",
        },
      ],
      Array [
        "line",
        "# Subtest: second\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: second\\n",
          ],
          Array [
            "line",
            "ok 1 - but that is ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 1,
              "name": "but that is ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 2 - this passes\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 2,
              "name": "this passes",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "ok 3 - nested ok\\n",
          ],
          Array [
            "assert",
            Result {
              "ok": true,
              "id": 3,
              "name": "nested ok",
              "fullname": "nesting second",
            },
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "start": 1,
              "end": 3,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "ok": true,
              "count": 3,
              "pass": 3,
              "fail": 0,
              "bailout": false,
              "todo": 0,
              "skip": 0,
              "plan": FinalPlan {
                "start": 1,
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "comment": "",
              },
              "failures": Array [],
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - but that is ok\\n",
      ],
      Array [
        "line",
        "    ok 2 - this passes\\n",
      ],
      Array [
        "line",
        "    ok 3 - nested ok\\n",
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "ok 2 - second # time=3.613ms\\n",
      ],
      Array [
        "assert",
        Result {
          "ok": true,
          "id": 2,
          "time": 3.613,
          "name": "second",
          "fullname": "nesting",
        },
      ],
      Array [
        "complete",
        FinalResults {
          "ok": true,
          "count": 2,
          "pass": 2,
          "fail": 0,
          "bailout": false,
          "todo": 0,
          "skip": 0,
          "plan": FinalPlan {
            "start": 1,
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "comment": "",
          },
          "failures": Array [],
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # Subtest: first\\n",
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "        ok 1 - true is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "true is ok",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "        ok 2 - doag is also okay\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "doag is also okay",
      "fullname": "nesting first",
    },
  ],
  Array [
    "line",
    "    ok 1 - first # time=11.345ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: second\\n",
  ],
  Array [
    "line",
    "        ok 1 - but that is ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 1,
      "name": "but that is ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 2 - this passes\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        ok 3 - nested ok\\n",
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 3,
      "name": "nested ok",
      "fullname": "nesting second",
    },
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "    ok 2 - second # time=3.613ms\\n",
  ],
  Array [
    "line",
    "ok 1 - nesting # time=36.045ms\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 1,
      "time": 36.045,
      "name": "nesting",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "ok 2 - this passes\\n",
  ],
  Array [
    "assert",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "result",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "pass",
    Result {
      "ok": true,
      "id": 2,
      "name": "this passes",
      "fullname": "",
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "start": 1,
      "end": 2,
    },
  ],
  Array [
    "line",
    "# time=66.857ms\\n",
  ],
  Array [
    "comment",
    "# time=66.857ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "ok": true,
      "count": 2,
      "pass": 2,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": FinalPlan {
        "start": 1,
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "comment": "",
      },
      "failures": Array [],
    },
  ],
]
`

exports[`test/parser.js TAP subtest-stream-no-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest\\n",
  ],