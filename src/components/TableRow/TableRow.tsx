import { FunctionComponent } from 'react';
import './TableRow.css';
import TableData from '../TableData/TableData';
import DownloadLink from '../DownloadLink/DownloadLink';

type TableRowProps = {
  orderDate: string;
  orderType: string;
  receiptUrl: string;
  receiptFilename: string;
};

const TableRow: FunctionComponent<TableRowProps> = ({
  orderDate,
  orderType,
  receiptUrl,
  receiptFilename,
}) => {
  return (
    <tr className="order__row">
      <TableData className="text-2 text--dark-1 table order__date">
        {orderDate}
      </TableData>

      <TableData className="text-2 text--dark-1 order__type">
        {orderType}
      </TableData>

      <TableData className="order__receipt">
        <DownloadLink href={receiptUrl} filename={receiptFilename} />
      </TableData>
    </tr>
  );
};

export default TableRow;
