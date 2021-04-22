import { format, parseISO } from "date-fns";

export const formatDate = (dateStr, formatStr) => {
    return format(parseISO(dateStr), formatStr);
};

export const displayDefaultDate = (dateStr) => {
    return formatDate(dateStr, "dd.MM.yyyy");
};
