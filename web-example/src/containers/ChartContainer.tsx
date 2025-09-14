import { connect } from "react-redux";
import PriceChart from "../components/PriceChart";
import { RootState, PricesState } from "../types";

const mapStateToProps = (state: RootState): PricesState => {
  return state.prices;
};

export default connect(mapStateToProps, null)(PriceChart);
