import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";

export const useFetchgif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGif(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                }
                )
            });
    }, [category])

    return state;
}
