import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponentReqFreq(prop) {
    const { data = [] } = prop;

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Request Title</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Publisher</TableCell>
                        <TableCell align="right">PopularRequest</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data && data.map((row, key) => (
                        <TableRow
                            key={row.staff_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{row.request_title}</TableCell>
                            <TableCell align="right">{row.language}</TableCell>
                            <TableCell align="right">{row.publisher}</TableCell>
                            <TableCell align="right">{row.PopularRequest}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}