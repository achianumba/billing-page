import { FunctionComponent } from 'react';
import './DownloadLink.css';

type DownloadLinkProps = {
  href: string;
  filename: string;
};

const DownloadLink: FunctionComponent<DownloadLinkProps> = ({
  href,
  filename,
}) => {
  return (
    <a
      href={href}
      download={filename}
      className="text-2 order__receipt__download"
    >
      Download
    </a>
  );
};

export default DownloadLink;
