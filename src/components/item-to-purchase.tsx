import { ReactNode } from "react";

export function ItemToPurchase(args: {image: ReactNode, price: string, discount: string}) {
    return <div>
       {args.image}
       <div>
            <p>{args.price}</p>
            <p>{args.discount}</p>
       </div>
    </div>
}
