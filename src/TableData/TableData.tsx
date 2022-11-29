import { FunctionComponent } from 'react';
import './TableData.css';

type TableDataProps = {
  content: String;
  className?: string | null;
};

const TableData: FunctionComponent<TableDataProps> = ({
  content,
  className,
}) => {
  return <td className={className ? `td ${className}` : `td`}>{content}</td>;
};

export default TableData;
