import React from "react"

export default function Login() {
    return (
        <div className="pt-32">

            <div className="border-solid border-4 border-blue-600 p-6 max-w-3xl mx-auto bg-white rounded-3xl shadow-md flex items-center space-x-4">

                <img class="w-1/2 h-full object-cover" src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='nike shoes' />

                <div>
                    <div className="w-full py-10 place-items-center">
                        <h1 className="pb-2 text-5xl tracking-wide font-dancingScript lg:text-6xl">
                            Discussit<br/>
                            Login
                        </h1>
                    </div>

                    <div className="flex w-full">
                        <div className="p-2">
                            <input class="border-solid border border-gray-400 rounded px-2 py-3" type="email" placeholder="Email address" />
                        </div>
                        <div className="p-2">
                            <input class="border-solid border border-gray-400 rounded px-2 py-3" type="password" placeholder="Password" />
                        </div>
                        <div className="p-2">
                            <button class="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3" type="submit">Sign in</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
