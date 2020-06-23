module.exports = {
  functional:
    "import React from 'react'\r\n\r\nexport default function {{name}}() {\r\n  return (\r\n    <div>\r\n      \r\n    </div>\r\n  )\r\n}\r\n",
  class:
    "import React, { Component } from 'react';\r\n\r\nexport default class {{name}} extends Component {\r\n  render() {\r\n    return <div>\r\n      \r\n    </div>;\r\n  }\r\n}\r\n",
  index: "import {{name}} from './{{name}}';\r\n\r\nexport default {{name}};\r\n"
};
