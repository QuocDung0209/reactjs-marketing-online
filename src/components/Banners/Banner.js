import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/scss/plugins/_plugin-react-slick.scss';
import { container } from '../../assets/jss/base';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Card from "../Card/Card.js";

const useStyles = makeStyles({
    section: {
        padding: 0
    },
    container,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    }
});

function Banner(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const { banners } = props;

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5} className={classes.marginAuto}>
                        <Card>
                            <Carousel {...settings}>
                                {banners.map(banner => (
                                    <React.Fragment key={banner.id}>
                                        <img src={banner.imageUrl} alt="Banners" className="slick-image" />
                                        <div className="slick-caption">
                                            <h4>
                                                <LocationOn className="slick-icons" />
                                                Binh Duong, Viet Nam
                                            </h4>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </Carousel>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

Banner.defaultProps = {
    banners: [],
};

Banner.propsTypes = {
    banners: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string | PropTypes.number,
        imageUrl: PropTypes.string,
        link: PropTypes.string,
    }))
};

const mapStateToProps = ({ products: { banners } }) => ({
    banners
})

export default connect(mapStateToProps)(Banner);
