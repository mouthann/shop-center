import { Card } from "./card";
import PropTypes from 'prop-types';

export function Newarrivals({ items }) {
  return (
  <div className="flex-center mt-20">
<div className="bg-[url('./lines.png')] bg-center text-4xl font-extrabold">
  New Arrivals
</div>
<div className="mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 lg:gris-cols-3 xl:grid-cols-5">
{items.map((item) => (
  <Card key={item.id} item={item} />
))}
</div>
</div>
  );

}

Newarrivals.propTypes = {
  /** An array of card data */
  items: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
};




