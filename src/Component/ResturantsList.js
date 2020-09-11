import React,{useEffect} from "react"
import ResturantsFinder from "../Apis/ResturantsFinder"

const ResturantsList = ()=>{

    useEffect(()=>{
       const fetchData = async()=>{
        try{
            const response = await ResturantsFinder.get("/")
            console.log(response)
        }catch(err){
            console.log(err)
        }
       }
       fetchData()
    },[])
    return(
        <div className="list-group">
            <table className="table table-dark table-hover">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Resturants</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default ResturantsList