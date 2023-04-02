import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const WithLineNumbers = ({exampleCode, lng}) => (
    <Highlight {...defaultProps} code={exampleCode} language={lng}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default WithLineNumbers;
