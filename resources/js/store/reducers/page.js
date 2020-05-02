import { getPrefilled } from "@/helpers/prefilled";

const prefilledPage = getPrefilled("page");

const defaultState = {
    items: prefilledPage ? [prefilledPage] : []
};

function page(state = defaultState, { type, payload = {} }) {
    switch (type) {
        case "pages/add": {
            const { page: item = {} } = payload;

            return {
                ...state,
                items: [...state.items, item]
            };
        }
        default:
            break;
    }

    return state;
}

export default page;
