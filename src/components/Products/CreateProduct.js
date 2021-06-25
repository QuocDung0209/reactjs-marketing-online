import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Form } from 'react-final-form'; // Contains Field, FormSpy
import { sleep, composeValidators, required, minLength } from '../../helpers/validators';

// Components core
import Input from '../CustomInput/Input';
import CustomButton from '../CustomButtons/Button';
import ImageUpload from '../UploadImage/ImageUpload';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '150px',
        height: '150px',
        color: theme.palette.text.secondary,
    },
    textCenter: {
        textAlign: 'center',
    }
}));

export default function CreateProduct() {
    const classes = useStyles();

    const onSubmit = async values => {
        await sleep(500);
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.textCenter}>Create Product</h1>
            <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
                render={({
                    submitError,
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values
                }) => (
                    <form onSubmit={handleSubmit} className={classes.paddingTop}>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={4}>
                                <ImageUpload />
                            </Grid>
                            <Grid item xs={4} style={{ paddingTop: '20px' }}>
                                <Input
                                    name="tag"
                                    label="Tag"
                                    validate={composeValidators(required, minLength(5))}
                                />
                                <Input
                                    name="author"
                                    label="Author"
                                    validate={required}
                                />
                                <Input
                                    name="name"
                                    label="Name"
                                    placeholder="Product title"
                                    validate={required}
                                />
                                <Input
                                    name="rating"
                                    label="Rating"
                                    type="number"
                                    validate={required}
                                />
                                <Input
                                    name="price"
                                    label="Price"
                                    validate={required}
                                />
                                <Input
                                    name="comments"
                                    label="Comments"
                                    type="number"
                                    validate={required}
                                />
                                <Input
                                    name="saleOff"
                                    label="Sale Off"
                                    validate={required}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Input
                                    name="summary"
                                    label="Summary"
                                    textarea
                                    validate={required}
                                />
                            </Grid>
                            <Grid item xs={8} className={classes.textCenter}>
                                <CustomButton
                                    type="submit"
                                    color="success"
                                    outline={true}
                                    size="sm"
                                    round={true}
                                >Create</CustomButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </div>
    );
}