import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Banner from '../components/Banners/Banner';
import Product from '../components/Products/Product';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '0 1rem',
    paddingTop: '72px !important',
    width: '99%',
  },

  welcome: {
    backgroundColor: "white",
    margin: "auto"
  },

  gridItem: {
    height: 550,
    backgroundColor: "white",
    marginTop: 40,
    margin: "auto"
  }
});

function Home(props) {
  const classes = useStyles();
  const { productList } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={12} xs={12} className={classes.welcome}>
          <Banner />
        </Grid>
        <Grid container spacing={2}>
          {productList.map(product => (
            <Grid item key={product.id}>
              <Product {...product}></Product>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    comments: PropTypes.number,
    summary: PropTypes.string,
    prices: PropTypes.string,
    sales: PropTypes.string,
  }))
}

const mapStateToProps = ({ products: { productList } }) => ({
  productList
});

export default connect(mapStateToProps)(Home);
