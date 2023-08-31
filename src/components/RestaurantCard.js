import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;
    
    return (
        <div className="m-4 p-4 w-52 bg-slate-300 rounded-md hover:bg-gray-500">
        <img className="rounded-lg" 
        alt="res-logo" 
        src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4 className="py-4">{cuisines.join(" , ")}</h4>
            <h4 className="py-4">{costForTwo}</h4>
            <h4 className="py-4">{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;