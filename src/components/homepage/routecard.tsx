import Link from "next/link"

export type RouteCardProps = {
    title: string,
    route: string
}
const DefaultRouteCardProps: RouteCardProps = {
    title: "Hello World",
    route: "/"
}
const RouteCard = (props: RouteCardProps) => {
    return (<>
        <Link href={props.route}>
            <a>
                <div className="
                bg-primary text-secondary
                h-32 w-32
                flex flex-col
                justify-center
                rounded-sm
                ">

                    {props.title}
                </div>
            </a>
        </Link>

    </>)
}
export default RouteCard