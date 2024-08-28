import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { TaglineHighlights } from "./tagline-highlights";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { GoShieldCheck } from "react-icons/go";

export function TagLine() {
    return <div className="flex flex-row item justify-between items-center">
        <div className="w-1/3">
            <p className="text-3xl font-semibold">Better choices,</p>
            <p className="text-3xl font-semibold">better prices</p>
        </div>
        <div className="flex flex-row gap-3">
            <TaglineHighlights icon={<MdOutlineAttachMoney size={32} strokeWidth={1}/>} title="Value For Money" text="We offer competitive prices on millions of items"/>
            <TaglineHighlights icon={<HiOutlineUsers size={32} strokeWidth={1}/>} title="Shoppers World Wide" text="More than 300 millions shoppers from 200+ countries & regions"/>
            <TaglineHighlights icon={<CiDeliveryTruck size={32} strokeWidth={1}/>} title="Fast Delivery" text="Faster delivery on selected items thanks to our improved logistics"/>
            <TaglineHighlights icon={<CiCreditCard1 size={32} strokeWidth={1}/>} title="Safe Payments" text="Safe payment methods preferred by international shoppers"/>
            <TaglineHighlights icon={<GoShieldCheck size={32} strokeWidth={1}/>} title="Buyer Protection" text="Get a refund if items arrive late or not as described"/>
        </div>
    </div>
}
