module.exports = {
  functional:
    'import React from "react";\r\n\r\nfunction {{name}}() {\r\n  return <div></div>;\r\n}\r\n\r\nexport default {{name}};\r\n',
  class:
    'import React, { Component } from "react";\r\n\r\nclass snippet extends Component {\r\n  render() {\r\n    return <div></div>;\r\n  }\r\n}\r\nexport default snippet;',
  index:
    "import {{name}} from './{{name}}';\r\n\r\nexport default {{name}};\r\n",
};
