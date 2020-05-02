import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import pageApi from "@/api/page";

const usePage = () => {
    const [notFound, setNotFound] = useState(false);
    const page = useSelector(({ page: { items = [] } = {} }) => {
        return items.find(item => item.slug === location.pathname);
    });
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!page || page.slug != pathname) {
            console.log("page", page, pathname);
            pageApi
                .getPage(location.pathname)
                .then(({ data: { data = {} } = {} }) => {
                    if (data && data.id) {
                        setNotFound(false);
                        dispatch({
                            type: "pages/add",
                            payload: {
                                page: data
                            }
                        });
                    } else {
                        setNotFound(true);
                    }
                })
                .catch(() => {
                    setNotFound(true);
                });
        }
    }, [pathname]);

    return useMemo(() => (notFound ? false : page), [page, notFound]);
};

export default usePage;
