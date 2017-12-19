import * as actionType from "../constants/getFirstPage";

//默认的state
const defaultState = {
  headlineFetching: false,
  adFetching: false,
  listFetching: false
};
//异步antion处理的reducer
export default function getFirstPage(state = defaultState, action) {
  switch (action.type) {
    case actionType.GET_HEADLINE_START:
      return Object.assign({}, state, {
        headlineFetching: true,
        [action.name]: {
          isFetching: true,
          didInvalidate: false
        }
      });
    //获取数据成功更新state
    case actionType.GET_HEADLINE_SUCCESS:
      return Object.assign({}, state, {
        headlineFetching: false,
        [action.name]: {
          isFetching: false,
          didInvalidate: false,
          data: action.data,
          lastUpdated: action.receiverAt
        }
      });
    //获取数据失败更新state
    case actionType.GET_HEADLINE_FAILD:
      return Object.assign({}, state, {
        headlineFetching: false,
        [action.name]: {
          isFetching: false,
          didInvalidate: false,
          message: action.message,
          lastUpdated: action.receiverAt
        }
      });
    default:
      return state;
  }
}
