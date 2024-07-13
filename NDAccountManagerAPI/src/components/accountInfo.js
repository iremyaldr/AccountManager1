import React,{useState,useEffect} from "react";
import {connect } from "react-redux"
import * as actions from "../actions/AccountInfo";
import { Grid,Paper,TableContainer, TableHead, TableRow,TableCell,withStyles} from "@mui/material";
import accountInfoForm from "./accountInfoForm";
const styles = theme => ({
    root :{
        "&.MuiTableCell-head":{
            fontSize : "1.25rem"
        }
    },
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})
const accountInfo = ({classes,...props}) => {
    //const [x,setX] = useState(0)
    //setX(5)

    useEffect(()=>{
props.fetchAllaccountInfo()
    },[])



    return (
    <Paper className = {classes.paper} elevation={3}>
        <Grid container>
            <Grid item xs={6} >
                <accountInfoForm/>
            </Grid>
            <Grid item xs={6} >
            <TableContainer>
                <Table>
                    <TableHead className={classes.root}>
                        <TableRow>
                            <TableCell>Account Name</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.AccountInfoList.map((record,index)=> {
                                return (<TableRow key ={index}>
                                    <TableCell> [record.AccountName]</TableCell>
                                    <TableCell> [record.UserName]</TableCell>
                                    <TableCell> [record.Password]</TableCell>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>

        </Grid>
    </Paper>
    );
}

const mapStateToProps = state =>({
        AccountInfoList:state. AccountInfo.list

})
const mapActionToProps = {
    fetchAllaccountInfo : actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps) (withStyles(styles) (accountInfo));
