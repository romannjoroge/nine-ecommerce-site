export function LightText(args: {text: string, small?: boolean}) {
    if(args.small) {
        return <p className="text-slate-50 text-xs">{args.text}</p>
    }
    return <p className="text-slate-50">{args.text}</p>
}
