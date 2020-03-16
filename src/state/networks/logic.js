import { createLogic } from "redux-logic";

import { REQUEST_NETWORKS, SET_NETWORKS, REQUEST_FAILED } from "./reducers";

const fetchNetworks = createLogic({
  type: REQUEST_NETWORKS,
  processOptions: {
    successType: SET_NETWORKS,
    failType: REQUEST_FAILED,
  },
  process(deps) {
      const {
        firestore,
    } = deps;
        return firestore.collection('mutual_aid_networks').get()
          .then((snapshot) => {
              const allNetworks = snapshot.docs.map(doc => doc.data());
              return allNetworks;
          })
        }
  })


export default [
  fetchNetworks,
];