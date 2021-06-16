import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import Button from '../CustomButtons/Button';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '0.5rem !important',
        marginBottom: '0 !important',
    },
    footer: {
        position: 'relative',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textCenter: {
        textAlign: 'center',
    },
    title: {
        maxWidth: '250px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    date: {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '14px',
        color: '#417FC6',
        marginBottom: '1rem',
    },
    price: {
        textAlign: 'center',
        paddingTop: '15px',
    },
    summary: {
        maxWidth: '250px',
        paddingTop: '0.75rem',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    }
}))

const Product = (props) => {
    const classes = useStyles();

    const {
        imageUrl,
        name,
        author,
        date,
        rating,
        comments,
        summary,
        prices,
        sales
    } = props;

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.textCenter}>
                <img src={imageUrl} alt={name} width={200} />
            </CardHeader>
            <CardBody>
                <div className={classes.title}>{name}</div>
                <div className={classes.date}>{author} | {date}</div>
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <Rating name="read-only" size="small" value={rating} precision={0.25} readOnly />
                    </Grid>
                    <Grid>
                        <Badge badgeContent={comments} color="error">
                            <CommentIcon />
                        </Badge>
                        <Button justIcon={true} color="transparent">
                            <ShareIcon ></ShareIcon>
                        </Button>
                    </Grid>
                </Grid>
                <Box component="div" m={1} className={classes.summary}>
                    {summary}
                </Box>
                <div className={classes.price}>
                    <Chip style={{ marginRight: '0.75rem', fontWeight: 'bold' }} size="small" label={prices} color="primary" />
                    <Chip size="small" label={sales} color="secondary" />
                </div>
            </CardBody>
            <CardFooter className={classes.footer}>
                <Button style={{ marginRight: '0.75rem' }} color="success" outline={true} size="sm" round>
                    Chi tiết
                </Button>
                <Button color="warning" outline={true} size="sm" round>
                    Mua ngay
                </Button>
            </CardFooter>
        </Card>
    )
}

Product.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    comments: PropTypes.number,
    summary: PropTypes.string,
    prices: PropTypes.string,
    sales: PropTypes.string,
};

export default Product;