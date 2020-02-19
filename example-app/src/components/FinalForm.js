import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import "../css/Form.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const FinalForm = () => {
  const [open, setOpen] = useState(false);

  const handleNo = () => {
    setOpen(false);
  };

  const handleYes = event => {
    setOpen(false);
  };

  const onSubmit = async values => {
    await sleep(1000);
    setOpen(true);
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.age) {
      errors.age = "Required";
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        errors
      }) => (
        <div>
          <form onSubmit={handleSubmit}>
            <table cellSpacing="10px" cellPadding="10px">
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <Field name="name">
                      {props => (
                        <div>
                          <TextField
                            //   name={props.input.name}
                            //   value={props.input.value}
                            {...props.input}
                            //   onChange={props.input.onChange}
                            placeholder="Name*"
                          />
                          {props.meta.touched && props.meta.error && (
                            <span>{props.meta.error}</span>
                          )}
                          {/* <pre>{JSON.stringify(props, undefined, 2)}</pre> */}
                        </div>
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Age</label>
                  </td>
                  <td>
                    <Field name="age">
                      {props => (
                        <div>
                          <TextField
                            name={props.input.name}
                            value={props.input.value}
                            onChange={props.input.onChange}
                            type="number"
                            placeholder="Age*"
                          />
                          {props.meta.touched && props.meta.error && (
                            <span>{props.meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" align="right">
                    <input type="submit" value="Save" disabled={submitting} />
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </form>
          <Dialog
            open={open}
            onClose={() => false}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Save this information?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleNo} color="primary">
                <Link
                  to="/info"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  No
                </Link>
              </Button>
              <Button
                onClick={handleYes}
                color="primary"
                autoFocus
                type="submit"
              >
                <Link
                  to={{
                    pathname: "/",
                    search: `?name=${values.name}&age=${values.age}`
                  }}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Yes
                </Link>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    />
  );
};

export default FinalForm;
