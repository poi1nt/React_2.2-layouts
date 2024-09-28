import { ShopCard } from '../ShopCard';

export const CardsView = (props) => {
  const { products } = props;

  return (
    <div className = "card__view">
      {products.map((product, index) => {
        return (
          <ShopCard key = { index } product = { product } />
        );
      })}
    </div>
  );
}
