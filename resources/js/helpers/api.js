export const getErrorMessages = (response = {}) => {
    let message = response.message || "";

    if (response.errors) {
        if (message) message = `<b>${message}</b><br />`;

        message += Object.keys(response.errors)
            .map(key => {
                return response.errors[key].join(", ");
            })
            .join("<br />");
    }

    return message;
};
