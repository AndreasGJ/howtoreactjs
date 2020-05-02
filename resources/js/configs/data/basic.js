import { getPrefilled } from "@/helpers/prefilled";

const configs = getPrefilled("configs");

export default {
    ...(configs || {}),
    cookie_auth: "auth_token"
};
