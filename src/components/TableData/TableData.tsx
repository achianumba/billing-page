import { FunctionComponent, ReactNode } from 'react';
import './TableData.css';

type TableDataProps = {
  className?: string | null;
  children: ReactNode;
};

const TableData: FunctionComponent<TableDataProps> = ({
  className,
  children,
}) => {
  return <td className={className ? `td ${className}` : `td`}>{children}</td>;
};

export default TableData;
