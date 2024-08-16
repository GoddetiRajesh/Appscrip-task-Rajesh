import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import "./index.css";

const ProductItem = (props) => {
  const { itemDetails, updateFavouriteValue } = props;
  const { id, title, price, image, isFavourite } = itemDetails;
  const onClickIcon = () => {
    updateFavouriteValue(id);
  };

  return (
    <li className="item-container">
      <img className="item-image" src={image} alt={title} />
      <h1 className="title">{title}</h1>
      <div className="details-container">
        <p className="price">{price}</p>
        <button onClick={onClickIcon} className="icon-button">
          {isFavourite ? (
            <IoMdHeart className="favourite-icon red-bg" />
          ) : (
            <IoMdHeartEmpty className="favourite-icon" />
          )}
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
