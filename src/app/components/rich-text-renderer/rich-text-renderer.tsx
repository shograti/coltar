import React, { JSX } from "react";
import styles from "./styles.module.css";

type RichTextNode = {
  type: string;
  text?: string;
  level?: number;
  ordered?: boolean;
  children?: RichTextNode[];
};

type Props = {
  node: RichTextNode;
};

export function RichTextRenderer({ node }: Props): JSX.Element | null {
  if (!node || typeof node !== "object") {
    return null;
  }

  const { type, children } = node;

  switch (type) {
    case "root":
      return (
        <div>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </div>
      );

    case "paragraph":
      return (
        <p className={styles.paragraph}>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </p>
      );

    case "text":
      return <span>{node.text}</span>;

    case "heading":
      return React.createElement(
        `h${node.level || 1}`,
        {},
        children &&
          children.map((child, index) => (
            <RichTextRenderer key={index} node={child} />
          ))
      );

    case "list":
      return node.ordered ? (
        <ol>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </ol>
      ) : (
        <ul>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </ul>
      );

    case "listitem":
      return (
        <li>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </li>
      );

    default:
      return (
        <div>
          {children &&
            children.map((child, index) => (
              <RichTextRenderer key={index} node={child} />
            ))}
        </div>
      );
  }

}
