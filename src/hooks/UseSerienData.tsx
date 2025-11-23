import {useEffect, useState} from "react";
import axios from "axios";
import type ISerie from "../interface/ISerie";

const useSerienData = (url: string) =>{
    const [data, setData] = useState<ISerie[]>([]);

    useEffect(() => {

        axios.get(url)
            .then(res => {
                if(res.data){
                    setData(res.data);
                }
            })
            .catch(err =>{
                console.log("An error occured: " + err);
            })
    }, [url]);

    return {data}
}

export default useSerienData;