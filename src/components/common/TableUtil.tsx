import { useTheme, TableRow } from '@mui/material';
import StyledTableCell from "./StyledTableCell";

export const GenerateTableCell = (detailRows : any          ) => {
    const theme = useTheme();
    if (!detailRows) return null;
    const { first, second } = detailRows;
    const maxRow = Math.max(first.length, second.length);
    const rows = new Array(maxRow).fill(1);
    const returnValue = rows.map((_, index) => {
        const firstColCell = first[index] ? first[index] : { title: '', value: ''};
        const secondColCell = second[index] ? second[index] : { title: '', value: ''};
        return (
            <TableRow
                key={firstColCell.title + secondColCell.title}
            >
                <StyledTableCell sx={{'&.MuiTableCell-body': { bgcolor: theme.palette.action.hover, width: '20%' }}}>
                    {firstColCell.title}
                </StyledTableCell>
                <StyledTableCell sx={{'&.MuiTableCell-body': { bgcolor: theme.palette.action.hover, width: '30%' }}}>
                    {firstColCell.value}
                </StyledTableCell>
                <StyledTableCell sx={{'&.MuiTableCell-body': { bgcolor: theme.palette.action.hover, width: '20%' }}}>
                    {secondColCell.value}
                </StyledTableCell>
                <StyledTableCell sx={{'&.MuiTableCell-body': { bgcolor: theme.palette.action.hover, width: '30%' }}}>
                    {secondColCell.value}
                </StyledTableCell>
            </TableRow>
        );
    })
    return returnValue;
};