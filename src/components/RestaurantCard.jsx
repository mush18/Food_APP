const getDynamicImageUrl = (dynamicPart) => {
    // Base URL for the structured case (case 1)
    const baseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/";

    // Check if the dynamic part has "/IMAGES/VENDOR/" (case 1)
    if (dynamicPart.includes("/IMAGES/VENDOR/")) {
        // Extract and append only the dynamic part after "/IMAGES/VENDOR/"
        return `${baseURL}${dynamicPart.split('/IMAGES/VENDOR/')[1]}`;
    }

    // For other cases (case 2), return the full URL directly
    return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dynamicPart}`;
};

export const RestaurantCard = ({resData})=>
{
    const {cloudinaryImageId,name,cuisines,avgRating,slaString,costForTwo}=resData?.info;

    const imageUrl = getDynamicImageUrl(cloudinaryImageId);

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={imageUrl} />

            <div className="res-card-body">
                <h3>{name}</h3>
                <h4>Cuisines : {cuisines.join(" , ")}</h4>
                <h4 className="rating">Rating : {avgRating}</h4>
                <h4>DeliveryTime : {slaString}</h4>
                <h4>Cost for Two : {costForTwo}</h4>
            </div>
        </div>
    )
}