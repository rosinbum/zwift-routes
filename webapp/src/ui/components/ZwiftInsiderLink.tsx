import React from 'react';
import { ZwiftRoute } from 'src/models';
import ZwiftInsiderIcon from 'src/assets/zwiftinsider.png';

export interface ZwiftInsiderLinkProps {
  route: ZwiftRoute;
  size?: string;
}

const ZwiftInsiderLink: React.SFC<ZwiftInsiderLinkProps> 
  = ({ route, size = '2rem' }: ZwiftInsiderLinkProps) => {

    if (route.zwiftInsiderLink) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={route.zwiftInsiderLink.toString()}>
          <img 
            src={ZwiftInsiderIcon} 
            alt="Zwift Insider"
            style={{ height: size, width: size }} 
          />
        </a>
      );
    }

    return(<span />);
  };

export default ZwiftInsiderLink;
