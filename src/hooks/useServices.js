import { useEffect, useState } from "react";

const useService = () => {
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/services')
            .then(res => res.json())
            .then(data => setAllServiceData(data))
    }, [])


    return [allServiceData, setAllServiceData];
}
export default useService;