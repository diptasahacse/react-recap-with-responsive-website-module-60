import { useEffect, useState } from "react"

const useService = (id) =>{
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://fast-savannah-23296.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service)

    return [service, setService] ;
}
export default useService;