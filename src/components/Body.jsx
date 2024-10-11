import { RestaurantCard } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import {useState,useEffect} from "react"; 
import { Shimmer } from "./shimmer";


// State Variable ==> Super Powrfull Variable (Which keeps the data Layer and UI Layer.)

//So whenver the State Variable changes React Re-Render the Components.

// Here the State Variable is the "listOfRestaurants"

const Body = () =>
{
    // State Variable // whatever we are passing in the useState is the "Default Variable"

    const [listOfRestaurants,setListOfRestaurants]=useState([]);

    const [allRestaurants, setAllRestaurants] = useState([]); // New state to hold the original data


    //const [count, setCount] = useState(0);

    // The above syntax is Just the array of De-Structuring on The FLY

    // const listOfRestaurants=arr[0]
    // const setListOfRestaurants=arr[1]

     //use Effectt takes the 2 arguments ( arrow function and Array)
     //when body function will be rendered after that the arrow function inside the useEffect will be called.
    // so after the whole body component is rendered then it will rendered the useEffect
     useEffect(()=>{
        fetchData();
     },[])

    const fetchData= async ()=>
    {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3287285&lng=73.17773749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");

        var json=await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);


        // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // Optional Chaining as the code we have written above is not the Good CODE
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> :( 
    <div className="body">
        <div className="search">
        <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants, cuisines, or dishes..."/>
        </div>

        <div className="filter">
            <button className="filter-btn top-rated" onClick={()=>
                {
                    const filterdList=listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4.3
                    );

                    setListOfRestaurants(filterdList);

                }}
                >
                    Top Rated Restaurants
                </button>
        

            <button className="filter-btn show-all" onClick={() => {
                    setListOfRestaurants(allRestaurants);
                }}>
                    Show All Restaurants
            </button>
        </div>

        <div className="res-container">
            {
                listOfRestaurants.map((resturant) => 
                <RestaurantCard key={resturant.info.id} resData={resturant}/>
            )
            }
        </div>
    </div>
    )
}

export default Body;