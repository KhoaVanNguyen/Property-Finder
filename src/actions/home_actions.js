import { FETCH_HOME_SUCCESS, FETCH_HOME_FAIL} from "./type";
import axios from "axios";

export const fetchHome = (onSuccess) => async dispatch => {
  const url =
    "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton";
  try {
    const results = await axios.get(url);
    const data = results.data.response.listings;
    // console.log(data)
    dispatch({ type: FETCH_HOME_SUCCESS, payload: data });
    onSuccess()
  } catch (e) {
    dispatch({ type: FETCH_HOME_FAIL })
  }
};
