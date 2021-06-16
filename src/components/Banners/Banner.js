import React from "react";
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

export default function Banner() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5} className={classes.marginAuto}>
                        <Card>
                            <Carousel {...settings}>
                                <div>
                                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Yellowstone National Park, United States
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Somewhere Beyond, United States
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://www.udacity.com/blog/wp-content/uploads/2018/04/Udacity-How-to-Process-Images-with-TensorFlow.png" alt="Third slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Yellowstone National Park, United States
                                        </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
