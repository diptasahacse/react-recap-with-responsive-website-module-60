import { useEffect, useState } from "react"

const useService = (id) =>{
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:7000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service)

    return [service, setService] ;
}
export default useService;