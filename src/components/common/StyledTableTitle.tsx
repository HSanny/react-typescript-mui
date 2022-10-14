import { useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import StyledTableCell from './StyledTableCell';

interface TitleProps {
    children: ReactNode,
}

const StyledTableTitle = ({ children = null}: TitleProps) => {
    const theme = useTheme();
    return (
        <StyledTableCell
            sx={{
                '&.MuiTableCell-body': { bgcolor: theme.palette.action.hover },
            }}
        >
            {children}
        </StyledTableCell>
    );
};
export default StyledTableTitle;