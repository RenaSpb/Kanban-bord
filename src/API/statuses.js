import axios from "axios";

export const fetchStatuses = () => {
    return (dispatch) => {
        axios.get('https://kanban-server1.vercel.app/statuses')
            .then((response) => {
                const statuses = response.data;
                dispatch({
                    type: 'FETCH_STATUSES',
                    payload: statuses,
                });
            })
            .catch((e) => alert('Something went wrong. Try again later'));
    };
};