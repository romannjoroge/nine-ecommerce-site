import superDeal1 from "../assets/super_deal_1.avif";
import { ItemToPurchase } from "./item-to-purchase";
// import superDeal2 from "../assets/super_deal_2.avif";
// import superDeal3 from "../assets/super_deal_3.avif";

export function ThingsToBuy() {
    return <div className="h-4/5 flex flex-row justify-between gap-5">
        <div className="bg-orange-100 flex-1 rounded-lg p-4">
            <p className="text-xl font-medium text-rose-500">Welcome Deal</p>
            <p>Your exclusive price</p>
            <ItemToPurchase image={<img src={superDeal1} alt="Autumn Boots" className="h-56 rounded-lg"/>} price="860" discount="50%"/>
        </div>
        <div className="bg-rose-200 flex-1 rounded-lg p-4">
            <div className="flex flex-row gap-1">
                <p className="text-xl font-medium italic">Super</p>
                <p className="text-xl font-medium text-rose-500 italic">Deals</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 flex-1">
            <div className="bg-gray-200 flex-1 rounded-lg p-4">
                <p className="text-xl font-medium">New</p>
            </div>
            <div className="bg-gray-200 flex-1 rounded-lg p-4">
                <p className="text-xl font-medium">Plus</p>
            </div>
        </div>
    </div>
}
