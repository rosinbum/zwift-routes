import React from 'react';
import NoIcon from '@material-ui/icons/CancelOutlined';
import YesIcon from '@material-ui/icons/CheckCircleOutline';
import { green, grey } from '@material-ui/core/colors';

export interface CompletedIconProps {
  isCompleted?: boolean;
}

/** Component to display the correct completion icon */
const CompletedIcon: React.SFC<CompletedIconProps> = 
  ({ isCompleted = false }: CompletedIconProps) => {
    return isCompleted 
      ? <YesIcon data-testid="is-completed-icon" fontSize="large" style={{ color: green[500] }} />
      : <NoIcon data-testid="not-completed-icon" fontSize="large" style={{ color: grey[500] }} />
  };

export default CompletedIcon;
