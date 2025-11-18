import "./text.css";
import PropTypes from "prop-types";

const ThreeDTextEffect = ({ title }) => {
  return (
    <div className="relative">
      <div className="threeD text-gray-100 text-2xl sm:text-4xl font-bold text-center whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300">
        {title}
      </div>
    </div>
  );
};

ThreeDTextEffect.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ThreeDTextEffect;
