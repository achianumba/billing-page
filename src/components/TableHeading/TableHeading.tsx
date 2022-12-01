import { FunctionComponent } from 'react';
import './TableHeading.css';

type TableHeadingProps = {
  data: string;
  className?: string | null;
};

const TableHeading: FunctionComponent<TableHeadingProps> = ({
  data,
  className,
}) => {
  return (
    <th scope="col" className={className ? `th ${className}` : 'th'}>
      {data}
    </th>
  );
};

export default TableHeading;
