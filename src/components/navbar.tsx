import { LightText } from "./light-text"
import ecommerceLogo from "../assets/ecommerce-svgrepo-com.svg"
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";

export function Navbar() {
    return <div className="bg-slate-950 flex flex-row justify-center gap-4 items-center py-2">
        <img src={ecommerceLogo} alt="Logo" className="w-52 h-12"/>
        <div className="h-5 w-1/3 bg-slate-50 rounded-3xl p-5 flex flex-row items-center justify-between">
            <p className="text-sm">Search Something</p>
            <div className="px-3 bg-slate-950 rounded-3xl">
                <CiSearch color="white" size={32} strokeWidth={1}/>
            </div>
        </div>
        <div className="flex flex-row gap-1 items-center">
            <CiUser color="white" size={32} strokeWidth={1}/>
            <div className="flex flex-col">
                <LightText text="Welcome" small={true}/>
                <LightText text="Sign in/ Register" small={true}/>
            </div>
        </div>
        <div className="flex flex-row gap-1 items-center">
            <CiShoppingCart color="white" size={32} strokeWidth={1}/>
            <div className="flex flex-col">
                <div className="bg-slate-50 px-1 rounded-3xl flex flex-row justify-center">
                    <p className="text-xs">0</p>
                </div>
                <LightText text="Cart" small={true}/>
            </div>
        </div>
    </div>
}
