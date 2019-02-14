/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/format.js TAP gnarly object, many points of view > pretty 1`] = `
&ref_1 Object {
  "a": 1,
  "b": 2,
  "extra": true,
  "c": 3,
  "d": 4,
  "more": false,
  "e": Object {
    "f": Object {
      "g": 1,
    },
    "a": Array [
      2,
      3,
      4,
    ],
    "h": "asdf",
  },
  "p": Set {
    Object {
      "x": "y",
      "z": true,
    },
    Object {
      "a": 1,
    },
    Object {
      "b": 2,
    },
  },
  "s": Set {
    Object {
      "b": 2,
    },
    Object {
      "c": 3,
    },
    <*ref_1>,
  },
  "m": Map {
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    } => 1,
    Object {
      "b": 2,
    } => 2,
    Object {
      "c": "d",
    } => Object {
      "re": /ef/g,
    },
    1 => &ref_4 Object {
      "c": Object {
        "c": <*ref_4>,
        "b": Object {
          "b": 1,
          "d": <*ref_4>,
        },
      },
      "a": &ref_5 Array [
        1,
        <*ref_4>,
        <*ref_5>,
      ],
      "k": &ref_2 Object {
        "a": 1,
        "k": &ref_3 Object {
          "k": <*ref_2>,
          "i": Object {
            "i": 1,
            "k": <*ref_3>,
          },
        },
        "f": <*ref_1>,
        "c": <*ref_4>,
      },
      "f": <*ref_1>,
    },
    <*ref_1> => &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
  },
  "ao": Array [
    Object {
      "o": true,
    },
    Object {
      "o": true,
    },
    Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
    ],
  ],
  "om": Map {
    Object {
      "o": true,
    } => &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    } => Object {
      "o": true,
    },
  },
  "args": Arguments [
    1,
    2,
    3,
    Object {
      "o": true,
    },
  ],
  "buf": Buffer <68 6f 77 64 79>,
  "emp": Object {
    "b": Buffer <>,
    "a": Array [],
    "o": Object {},
    "m": Map {},
    "s": Set {},
  },
  "fns": Object {
    "name": [Function foo],
    "anon": [Function anon],
    "arr": [Function arr],
    "nameless": [Function],
  },
  "sym": Symbol(prince),
  "date": 2019-02-14T07:13:44.100Z,
  "n": null,
  "undef": undefined,
  "classy": Foo {},
}
`

exports[`test/format.js TAP gnarly object, many points of view > js 1`] = `
&ref_1 {
  "a": 1,
  "b": 2,
  "extra": true,
  "c": 3,
  "d": 4,
  "more": false,
  "e": {
    "f": {
      "g": 1,
    },
    "a": [
      2,
      3,
      4,
    ],
    "h": "asdf",
  },
  "p": new Set([
    {
      "x": "y",
      "z": true,
    },
    {
      "a": 1,
    },
    {
      "b": 2,
    },
  ]),
  "s": new Set([
    {
      "b": 2,
    },
    {
      "c": 3,
    },
    *ref_1,
  ]),
  "m": new Map([
    [&ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }, 1],
    [{
      "b": 2,
    }, 2],
    [{
      "c": "d",
    }, {
      "re": /ef/g,
    }],
    [1, &ref_4 {
      "c": {
        "c": *ref_4,
        "b": {
          "b": 1,
          "d": *ref_4,
        },
      },
      "a": &ref_5 [
        1,
        *ref_4,
        *ref_5,
      ],
      "k": &ref_2 {
        "a": 1,
        "k": &ref_3 {
          "k": *ref_2,
          "i": {
            "i": 1,
            "k": *ref_3,
          },
        },
        "f": *ref_1,
        "c": *ref_4,
      },
      "f": *ref_1,
    }],
    [*ref_1, &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }],
  ]),
  "ao": [
    {
      "o": true,
    },
    {
      "o": true,
    },
    [
      {
        "o": true,
      },
      {
        "o": true,
      },
    ],
  ],
  "om": new Map([
    [{
      "o": true,
    }, &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }],
    [&ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }, {
      "o": true,
    }],
  ]),
  "args": [
    1,
    2,
    3,
    {
      "o": true,
    },
  ],
  "buf": Buffer.from("686f776479", "hex"),
  "emp": {
    "b": Buffer.alloc(0),
    "a": [],
    "o": {},
    "m": new Map(),
    "s": new Set(),
  },
  "fns": {
    "name": [Function foo],
    "anon": [Function anon],
    "arr": [Function arr],
    "nameless": [Function],
  },
  "sym": Symbol(prince),
  "date": 2019-02-14T07:13:44.100Z,
  "n": null,
  "undef": undefined,
  "classy": {},
}
`

exports[`test/format.js TAP gnarly object, many points of view > tight 1`] = `
&1 {"a":1,"b":2,"extra":true,"c":3,"d":4,"more":false,"e":{"f":{"g":1,},"a":[2,3,4,],"h":"asdf",},"p":new Set([{"x":"y","z":true,},{"a":1,},{"b":2,},]),"s":new Set([{"b":2,},{"c":3,},*1,]),"m":new Map([[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},1],[{"b":2,},2],[{"c":"d",},{"re":/ef/g,}],[1,&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":*4,},"f":*1,}],[*1,&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},}],]),"ao":[{"o":true,},{"o":true,},[{"o":true,},{"o":true,},],],"om":new Map([[{"o":true,},&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},}],[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},{"o":true,}],]),"args":[1,2,3,{"o":true,},],"buf":Buffer.from("686f776479", "hex"),"emp":{"b":Buffer.alloc(0),"a":[],"o":{},"m":new Map(),"s":new Set(),},"fns":{"name":[Function foo],"anon":[Function anon],"arr":[Function arr],"nameless":[Function],},"sym":Symbol(prince),"date":2019-02-14T07:13:44.100Z,"n":null,"undef":undefined,"classy":{},}
`

exports[`test/format.js TAP gnarly object, many points of view different points of view > f.m 1`] = `
&ref_4 Map {
  &ref_1 Object {
    "a": 1,
    "k": &ref_2 Object {
      "k": <*ref_1>,
      "i": Object {
        "i": 1,
        "k": <*ref_2>,
      },
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
    "c": &ref_5 Object {
      "c": Object {
        "c": <*ref_5>,
        "b": Object {
          "b": 1,
          "d": <*ref_5>,
        },
      },
      "a": &ref_6 Array [
        1,
        <*ref_5>,
        <*ref_6>,
      ],
      "k": <*ref_1>,
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <68 6f 77 64 79>,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": [Function foo],
          "anon": [Function anon],
          "arr": [Function arr],
          "nameless": [Function],
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
      },
    },
  } => 1,
  Object {
    "b": 2,
  } => 2,
  Object {
    "c": "d",
  } => Object {
    "re": /ef/g,
  },
  1 => &ref_5 Object {
    "c": Object {
      "c": <*ref_5>,
      "b": Object {
        "b": 1,
        "d": <*ref_5>,
      },
    },
    "a": &ref_6 Array [
      1,
      <*ref_5>,
      <*ref_6>,
    ],
    "k": &ref_1 Object {
      "a": 1,
      "k": &ref_2 Object {
        "k": <*ref_1>,
        "i": Object {
          "i": 1,
          "k": <*ref_2>,
        },
      },
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <68 6f 77 64 79>,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": [Function foo],
          "anon": [Function anon],
          "arr": [Function arr],
          "nameless": [Function],
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
      },
      "c": <*ref_5>,
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        },
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        } => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
  },
  &ref_3 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_3>,
    },
    "m": <*ref_4>,
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      },
      &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      } => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <68 6f 77 64 79>,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": [Function foo],
      "anon": [Function anon],
      "arr": [Function arr],
      "nameless": [Function],
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
  } => &ref_1 Object {
    "a": 1,
    "k": &ref_2 Object {
      "k": <*ref_1>,
      "i": Object {
        "i": 1,
        "k": <*ref_2>,
      },
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
    "c": &ref_5 Object {
      "c": Object {
        "c": <*ref_5>,
        "b": Object {
          "b": 1,
          "d": <*ref_5>,
        },
      },
      "a": &ref_6 Array [
        1,
        <*ref_5>,
        <*ref_6>,
      ],
      "k": <*ref_1>,
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <68 6f 77 64 79>,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": [Function foo],
          "anon": [Function anon],
          "arr": [Function arr],
          "nameless": [Function],
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
      },
    },
  },
}
`

exports[`test/format.js TAP gnarly object, many points of view different points of view > k 1`] = `
&ref_1 Object {
  "a": 1,
  "k": &ref_2 Object {
    "k": <*ref_1>,
    "i": Object {
      "i": 1,
      "k": <*ref_2>,
    },
  },
  "f": &ref_3 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_3>,
    },
    "m": Map {
      <*ref_1> => 1,
      Object {
        "b": 2,
      } => 2,
      Object {
        "c": "d",
      } => Object {
        "re": /ef/g,
      },
      1 => &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_1>,
        "f": <*ref_3>,
      },
      <*ref_3> => <*ref_1>,
    },
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => <*ref_1>,
      <*ref_1> => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <68 6f 77 64 79>,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": [Function foo],
      "anon": [Function anon],
      "arr": [Function arr],
      "nameless": [Function],
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
  },
  "c": &ref_4 Object {
    "c": Object {
      "c": <*ref_4>,
      "b": Object {
        "b": 1,
        "d": <*ref_4>,
      },
    },
    "a": &ref_5 Array [
      1,
      <*ref_4>,
      <*ref_5>,
    ],
    "k": <*ref_1>,
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": Map {
        <*ref_1> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => <*ref_4>,
        <*ref_3> => <*ref_1>,
      },
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
  },
}
`

exports[`test/format.js TAP gnarly object, many points of view different points of view > k.k 1`] = `
&ref_1 Object {
  "k": &ref_3 Object {
    "a": 1,
    "k": <*ref_1>,
    "f": &ref_2 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_2>,
      },
      "m": Map {
        <*ref_3> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => &ref_4 Object {
          "c": Object {
            "c": <*ref_4>,
            "b": Object {
              "b": 1,
              "d": <*ref_4>,
            },
          },
          "a": &ref_5 Array [
            1,
            <*ref_4>,
            <*ref_5>,
          ],
          "k": <*ref_3>,
          "f": <*ref_2>,
        },
        <*ref_2> => <*ref_3>,
      },
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_3>,
        <*ref_3> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
    "c": &ref_4 Object {
      "c": Object {
        "c": <*ref_4>,
        "b": Object {
          "b": 1,
          "d": <*ref_4>,
        },
      },
      "a": &ref_5 Array [
        1,
        <*ref_4>,
        <*ref_5>,
      ],
      "k": <*ref_3>,
      "f": &ref_2 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_2>,
        },
        "m": Map {
          <*ref_3> => 1,
          Object {
            "b": 2,
          } => 2,
          Object {
            "c": "d",
          } => Object {
            "re": /ef/g,
          },
          1 => <*ref_4>,
          <*ref_2> => <*ref_3>,
        },
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_3>,
          <*ref_3> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <68 6f 77 64 79>,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": [Function foo],
          "anon": [Function anon],
          "arr": [Function arr],
          "nameless": [Function],
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
      },
    },
  },
  "i": Object {
    "i": 1,
    "k": <*ref_1>,
  },
}
`

exports[`test/format.js TAP gnarly object, many points of view different points of view > c 1`] = `
&ref_1 Object {
  "c": Object {
    "c": <*ref_1>,
    "b": Object {
      "b": 1,
      "d": <*ref_1>,
    },
  },
  "a": &ref_2 Array [
    1,
    <*ref_1>,
    <*ref_2>,
  ],
  "k": &ref_3 Object {
    "a": 1,
    "k": &ref_4 Object {
      "k": <*ref_3>,
      "i": Object {
        "i": 1,
        "k": <*ref_4>,
      },
    },
    "f": &ref_5 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_5>,
      },
      "m": Map {
        <*ref_3> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => <*ref_1>,
        <*ref_5> => <*ref_3>,
      },
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_3>,
        <*ref_3> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <68 6f 77 64 79>,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": [Function foo],
        "anon": [Function anon],
        "arr": [Function arr],
        "nameless": [Function],
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
    },
    "c": <*ref_1>,
  },
  "f": &ref_5 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_5>,
    },
    "m": Map {
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      } => 1,
      Object {
        "b": 2,
      } => 2,
      Object {
        "c": "d",
      } => Object {
        "re": /ef/g,
      },
      1 => <*ref_1>,
      <*ref_5> => &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
    },
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      } => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <68 6f 77 64 79>,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": [Function foo],
      "anon": [Function anon],
      "arr": [Function arr],
      "nameless": [Function],
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
  },
}
`

exports[`test/format.js TAP gnarly object, many points of view > tab 1`] = `
Object {
	"o": true,
}
`

exports[`test/format.js TAP gnarly object, many points of view > 3 space 1`] = `
Object {
   "o": true,
}
`

exports[`test/format.js TAP other misc > undefined 1`] = `
true
`

exports[`test/format.js TAP other misc > faked out seen() method 1`] = `
&ref_1 Object {
  "a": Object {
    "t": <*ref_1>,
  },
}
`