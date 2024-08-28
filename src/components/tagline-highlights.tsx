export function TaglineHighlights(args: {icon: React.ReactNode, title: string, text: string}) {
    return <div className="flex flex-col gap-1 items-center">
        {args.icon}
        <p className="font-medium text-sm">{args.title}</p>
        <p className="text-xs text-center">{args.text}</p>
    </div>
}
