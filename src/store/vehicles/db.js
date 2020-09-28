import axios from 'axios';
import * as actions from './actions';

let url = "https://client-jobs.xyz/api/v1/online-auto/vehicle";


//fetching vehicles
export const fetchVehicles = ()  => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch`)

    .then(res => dispatch(actions.setVehicles(res.data.message)))

    .catch(console.log);
};

//fetching a vehicle
export const fetchVehicle = slug => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch/${slug}`)

    .then(res => dispatch(actions.setVehicle(res.data.message)))

    .catch(console.log);
}