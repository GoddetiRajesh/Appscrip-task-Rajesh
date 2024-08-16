import { Component } from "react";
import { BallTriangle } from "react-loader-spinner";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Header from "../Header";
import ProductItem from "../ProductItem";
import Footer from "../Footer";

import "./index.css";

class Products extends Component {
  state = { isLoading: true, productsData: [], showFilters: true };

  componentDidMount() {
    this.getProductsData();
  }

  getProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    if (response.ok) {
      data.map((eachItem) => (eachItem["isFavourite"] = false));
      this.setState({ isLoading: false, productsData: data });
    }
  };

  updateFavouriteValue = (id) => {
    this.setState((prev) => ({
      productsData: prev.productsData.map((eachItem) => {
        if (eachItem.id === id) {
          return { ...eachItem, isFavourite: !eachItem.isFavourite };
        }
        return eachItem;
      }),
    }));
  };

  render() {
    const { isLoading, showFilters, productsData } = this.state;
    return (
      <>
        <Header />
        {isLoading ? (
          <div className="Loader-container">
            <BallTriangle
              height={50}
              width={50}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </div>
        ) : (
          <>
            <div className="filters-container">
              <>
                <p className="items-no">3452 ITEMS</p>
                <MdKeyboardArrowLeft />
                <p className="filter-text">
                  {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                </p>
              </>
            </div>
            <ul className="list-container">
              {productsData.map((eachItem) => (
                <ProductItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  updateFavouriteValue={this.updateFavouriteValue}
                />
              ))}
            </ul>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Products;
