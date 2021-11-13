export default function Login() {
    return (
        <div className="pt-16 bg-gray-100">

            <div className="w-5/6 py-10 justify-right place-items-center">
                <h1 className="pb-2 text-5xl tracking-wide font-dancingScript lg:text-6xl">
                    Discussit
                </h1>
                <h1 className="pb-2 text-5xl tracking-wide font-dancingScript lg:text-6xl">
                    Login
                </h1>
            </div>

            <div className="w-full">
                <input className="bg-white-500 p-2 px-6 h-12 w-52 rounded-3x1 text-x1" type="text" placeholder="Email"/>
                <input className="bg-white-500 p-2 px-6 h-12 w-52 rounded-3x1 text-x1" type="text" placeholder="Password" />
            </div>
            
        </div>
    )
}
