import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Modal, Typography } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    viewdetails: string,
    duration: string,
) {
    return { name, viewdetails, duration, };
}

const rows = [
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
    createData('1.Frozen yoghurt', 'view details', '6 month'),
];


export default function CourseTable() {

    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [selectedCourse, setSelectedCourse] = React.useState(null);
    const handleViewDetails = (row) => {
        setSelectedCourse(row);
        setIsModalOpen(true);
    }
    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    }
    return (
        <>
            <Modal
                keepMounted
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box
                    sx={style}
                >
                    {
                        selectedCourse &&
                        <>
                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                {selectedCourse?.name}
                            </Typography><Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </>
                    }
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant="text" sx={{ textTransform: 'none' }} onClick={() => handleViewDetails(row)}>  {row.viewdetails}</Button>
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
