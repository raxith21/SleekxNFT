import { useMoralisCloudFunction } from "react-moralis";



const MyItems = () => {
    const { data} = useMoralisCloudFunction("getUserItems");

    (async function loadUserItems(){
        const items=data;
        console.log(items);
    })()
    return (
        <div className="relative h-screen
         bg-gradient-to-r from-primary to-secondary ">
            <h1 className="text-my-black-color text-3xl font-bold px-685 py-10">My Items</h1>  
            <div className="absolute top-130 left-500 bg-my-black-color p-10 rounded-md">
                <div>
                <img src={'/ethbanner1.svg'} alt="your nft" className="h-350 w-350 p-10 pb-0" />
                </div>
                <div>
                    <h3 className="p-3">Title</h3>
                    <p className="p-3">This is the description of the NFT.</p>
                </div>
            </div> 
        </div>
    )
}

export default MyItems
