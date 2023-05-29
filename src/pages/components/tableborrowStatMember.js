import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponentBorrowStatMember(prop) {
    const { data = [] } = prop;

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">MemberID</TableCell>
                        <TableCell align="right">Member Name</TableCell>
                        <TableCell align="right">Statistic Borrowed</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data && data.map((row) => (
                        <TableRow
                            key={row.staff_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{row.member_id}</TableCell>
                            <TableCell align="right">{row.MemberName}</TableCell>
                            <TableCell align="right">{row.statisticsborrowbooks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}