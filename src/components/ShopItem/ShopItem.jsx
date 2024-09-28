export const ShopItem = (props) => {
  const { product } = props;

  return (
    <div className = "list__item">
      <img
        className = "img__item"
        src = {product.img}
        alt = {product.name}
      />
      <h2 className = "title__item">
        {product.name}
      </h2>
      <p className = "color__item">
        {product.color}
      </p>
      <div className = "price__item">
        {'$' + product.price}
      </div>
      <button className = "item__btn">
          add to cart
      </button>
    </div>
  );
}
