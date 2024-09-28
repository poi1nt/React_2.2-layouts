export const ShopCard = (props) => {
  const { product } = props;

  return (
<div className = "card__container">
      <h2 className = "title__card">
        {product.name}
      </h2>
      <p className = "color__card">
        {product.color}
      </p>
      <img
        className = "img__card"
        src = {product.img}
        alt = {product.name}
      />
      <div className = "price__container">
        <div className = "price__card">
          {'$' + product.price}
        </div>
        <button className = "card__btn">
          add to cart
        </button>
      </div>
    </div>
  );
}
