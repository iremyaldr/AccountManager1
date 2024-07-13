import { Grid, TextField } from "@mui/material";
import React,{useState} from "react";
import useForm from "./useForm";

const styles = theme=>({
    root:{}
    '& .MuiTextField-root':{
        margin: theme.spacing(1),
        minWidth:230
    },
})
const initialFieldValues = {
    AccountName :'',
    UserName:'',
    Password:'',
    Category:'',
    CreatedAt:'',
    SharedWith:''
}
const accountInfoForm = (props) =>{

    const {
        values,
        setValues, 
        handleInputChange

    } = useForm(initialFieldValues)

    return(
        <form autoComplete="off" noValidate>
            <Grid container>
                <Grid item xs={6}>
                <TextField
                    name ="AccountName"
                    variant="outlined"
                    label="Account Name"
                    value={values.AccountName}
                    onChange={handleInputChange}
                />
                  <TextField
                    name ="UserName"
                    variant="outlined"
                    label="User Name"
                    value={values.UserName}
                    onChange={handleInputChange}
                />
                  <TextField
                    name ="Password"
                    variant="outlined"
                    label="Password"
                    value={values.Password}
                    onChange={handleInputChange}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    name ="Category"
                    variant="outlined"
                    label="Category"
                    value={values.Category}
                    onChange={handleInputChange}
                />
                  <TextField
                    name ="CreatedAt"
                    variant="outlined"
                    label="CreatedAt"
                    value={values.CreatedAt}
                    onChange={handleInputChange}
                />
                  <TextField
                    name ="SharedWith"
                    variant="outlined"
                    label="Shared With"
                    value={values.SharedWith}
                    onChange={handleInputChange}
                />
                </Grid>
            </Grid>
        </form>
    );

}
export default withStyles(styles)(accountInfoForm);