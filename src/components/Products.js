import * as React from "react";
import "./Products.css";
import CardProduct from "./Card";
import data from "../fakeJson.json";
import { Grid } from "@material-ui/core";

const Products = () => {
  return (
    <Grid container className="productsPage">
      {data.products.map((product) => {
        return (
          <Grid>
            <CardProduct
              key={product.item_id}
              img={product.img}
              imgHover={product.img_hover}
              id={product.item_id}
              name={product.item_name}
              price={product.price}
              rate={product.rate}
              review={product.reviews}
              colors={product.colors}
              colorsImage={product.colorsImg}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
