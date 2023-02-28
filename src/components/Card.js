import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import "./Card.css";
import {
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Rating from "material-ui-rating";
import { useStyles } from "./UseStyles";
import { useState } from "react";

export default function CardProduct(props) {
  const [img, setImg] = useState(props.img);
  const classes = useStyles();

  const mainImg = () => {
    setImg(props.img);
  };

  const changeImg = () => {
    setImg(props.imgHover);
  };
  const ColorsImg = (props) => {
    const classes = useStyles();
    return (
      <div className="colorsImg">
        {props.colors.map((color) => {
          function changeImgById() {
            var e = color.id;
            const image = props.imgs.find((item) => item.id === color.id);
            setImg(image.colorImg);
          }
          return (
            <CardMedia
              className={classes.imgColor}
              component="img"
              key={color.id}
              image={color.color}
              id={color.id}
              onMouseOver={changeImgById}
              onMouseLeave={mainImg}
            ></CardMedia>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={img}
            onMouseOver={changeImg}
            onMouseLeave={mainImg}
          />
          <CardContent>
            <Typography className={classes.label}>NEW COLOR</Typography>
            <div className="grid">
              <ColorsImg colors={props.colors} imgs={props.colorsImage} />
              <Button className={classes.button} variant="contained">
                More
              </Button>
            </div>
            <Link className={classes.link} size="small" color="black">
              {props.name}
            </Link>
            <Typography className={classes.price}>{props.price}</Typography>
            <div className="grid">
              <Rating
                precision={0.5}
                className={classes.rate}
                value={props.rate}
                max={5}
                readOnly
              />
              <Typography className={classes.viewer} color="black">
                ({props.review} Reviews)
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
