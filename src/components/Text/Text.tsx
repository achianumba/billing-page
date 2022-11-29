import { FunctionComponent } from 'react';
import './Text.css';

type TextProps = {
  content: string;
  className?: string | null;
};

const Text: FunctionComponent<TextProps> = ({ content, className }) => {
  return (
    <p className={className ? `text-1 ${className}` : 'text-1'}>{content}</p>
  );
};

export default Text;
