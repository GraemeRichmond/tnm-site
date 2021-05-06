import React from "react";

import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Zoom,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import countries from "./countries";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.gold,
    color: theme.palette.common.grey,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableContent = (props) => {
  return (
    <TableContainer component={Paper} style={{ borderRadius: "1em" }}>
      <Table className={props.classes.table} aria-label="table of countries">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <Tooltip
              title="Gini Cooefficient"
              TransitionComponent={Zoom}
              placement="top-start"
            >
              <StyledTableCell align="left">Gini</StyledTableCell>
            </Tooltip>
            <Tooltip
              title="Human Development Index"
              TransitionComponent={Zoom}
              placement="top-start"
            >
              <StyledTableCell align="left">HDI</StyledTableCell>
            </Tooltip>
            <Tooltip
              title="Population"
              TransitionComponent={Zoom}
              placement="top-start"
            >
              <StyledTableCell align="left">Pop.</StyledTableCell>
            </Tooltip>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <StyledTableRow key={country.name}>
              <StyledTableCell component="th" scope="row">
                {country.name}
              </StyledTableCell>
              <StyledTableCell align="left">{country.Gini}</StyledTableCell>
              <StyledTableCell align="left">{country.HDI}</StyledTableCell>
              <StyledTableCell align="left">
                {country.Population}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
