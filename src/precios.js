import { TableContainer, Table, TableHead, TableBody, TableFooter, TableRow, TableCell, TablePagination, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';


const Precios = () => {

    const useStyles = makeStyles({
        pagination: {
            background: "black",
            color: "white",
            fontSize: "16px",
            fontFamily: "var(--second-font)",
            "& button": {
                "&:disabled": {
                    color: "var(--color-green1)",
                },
            },
        },
        cellHead: {
            background: "var(--color-black)",
            color: "var(--color-white)",
            textTransform: "uppercase",
            fontSize: "16px",
            borderBottom: "8px solid var(--color-gray)",
            fontFamily: "var(--second-font)",
        },
        cellBody: {
            fontFamily: "var(--main-font)",
            background: "var(--color-white)",
            color: "var(--color-black)",
            borderBottom: "8px solid var(--color-gray)",
            width: "fit-content",
            fontSize: "16px",
        },
    });


    const dataTable = [
        { N: "3024", Articulo: "Aerogenerador Eólico Hummer 5000w", Precio: "$400.000" },
        { N: "12499", Articulo: "Molino Eólico 400 W Turbina Aerogenerador Con Controlador", Precio: "$675.000" },
        { N: "1291", Articulo: "Molino Generador Eólica Sunnily De 600w / 24v", Precio: "$198.700" },
        { N: "3811", Articulo: "Aerogenerador PIPEPETROL MODELO S2-400 5 BLADE", Precio: "$53.000" },
        { N: "6684", Articulo: "Molino De Viento Brisa Ii De 6´", Precio: "$96.408" },
        { N: "1760", Articulo: "Batería Solar Eólica De Ciclo Profundo Vzh 12 V 65 Aa", Precio: "$14.350" },
        { N: "8968", Articulo: "Kit Solar Inversor 2000w 220v Panel Energia Casa Campo M8", Precio: "$78.060" },
        { N: "3954", Articulo: "Panel Solar 320w 24v Calidad A", Precio: "$15.291" },
        { N: "8545", Articulo: "Kit Solar Inversor 1000w 220v Panel Energia Casa Campo M3", Precio: "$40.910" },
        { N: "3953", Articulo: "Kit Solar Completo Autoinstalable Energia Panel Bateria K1", Precio: "$31.500" },
        { N: "5010", Articulo: "Kit Panel Solar Completo Con Inversor Bateria De Gel S10", Precio: "$60.000" },
        { N: "8138", Articulo: "Kit Panel Solar 1", Precio: "$520.000" },
        { N: "7149", Articulo: "Kit Panel Solar 2", Precio: "$645.000" },
        { N: "5218", Articulo: "Kit Panel Solar 3", Precio: "$700.000" },
    ];

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    return (
        <div className="bg-gray prices">
            <TableContainer className="container prices__table">
                <Table>
                    <TableHead>
                        <TableRow key={dataTable.N}>
                            <TableCell className={classes.cellHead}>Nº</TableCell>
                            <TableCell className={classes.cellHead}>Articulo</TableCell>
                            <TableCell className={classes.cellHead}>Precio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((celda, i) => (
                            <TableRow key={i}>
                                <TableCell className={classes.cellBody} >{celda.N}</TableCell>
                                <TableCell className={classes.cellBody} >{celda.Articulo}</TableCell>
                                <TableCell className={classes.cellBody} >{celda.Precio}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10]}
                            count={dataTable.length}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            className={classes.pagination}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Precios;