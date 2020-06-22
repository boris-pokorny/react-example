import { connect } from "react-redux";
import PriceChart from "../components/PriceChart";

const mapStateToProps = (state) => {
  return state.prices;
};

export default connect(mapStateToProps, null)(PriceChart);
