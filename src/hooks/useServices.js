import { useEffect, useState } from "react";

const useServices = () => {
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(() => {
        fetch('https://fast-savannah-23296.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAllServiceData(data))
    }, [])


    return [allServiceData, setAllServiceData];
}
export default useServices;