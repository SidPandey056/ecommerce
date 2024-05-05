import { TbArrowRight } from "react-icons/tb";
import PropTypes from "prop-types";

const ProductHeader = (props) => {
  const { product } = props;
  return (
    <div className="flex item-center flex-wrap gap-x-2 medium-16 capitalize">
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}
      <TbArrowRight /> {product.name}
    </div>
  );
};

ProductHeader.propTypes = {
  product: PropTypes.any,
};
export default ProductHeader;
