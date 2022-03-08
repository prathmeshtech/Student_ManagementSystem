import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import students from "./../APIs/students";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <section className="container main-container">
    <Paper className={classes.root}>
      <div className='container table-container'>
      <h1 className="main-heading text-center">Student Management Table</h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="center">Id</CustomTableCell>
            <CustomTableCell align="center">Name</CustomTableCell>
            <CustomTableCell align="center">Age</CustomTableCell>
            <CustomTableCell align="center">DOB</CustomTableCell>
            <CustomTableCell align="center">Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((curElem) => {
            const {id, name, age, dob, fees} = curElem;

            return (
                <TableRow className={classes.row} key={id}>
                  <CustomTableCell align="center" component="th" scope="row">
                    {id}
                  </CustomTableCell>
                  <CustomTableCell align="center">{name}</CustomTableCell>
                  <CustomTableCell align="center">{age}</CustomTableCell>
                  <CustomTableCell align="center">{dob}</CustomTableCell>
                  <CustomTableCell align="center">
                    <DeleteIcon/>
                    <EditIcon/>  
                  </CustomTableCell>
                </TableRow>
            )
          })
        }

        </TableBody>
      </Table>
      </div>
    </Paper>
    </section>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);