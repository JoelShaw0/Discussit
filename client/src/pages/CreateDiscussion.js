export default function CreateDiscussion() {
    return (
        <div className="pt-16 bg-gray-100">

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
                    Create Discussion
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </div>

            <div class="flex items-center justify-center pt-10 ">

                <div class="grid md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">

                    <div className="w-full">
                        <input className="bg-gray-500 p-2 px-6 text-white h-12 w-1/2 rounded-3xl text-xl" type="text" placeholder="Room name" />

                        <div className="flex items-left w-full justify-left my-4">
                            <button className="h-10 w-20 mr-8 text-white rounded-lg bg-red-500 hover:bg-red-600">Tags</button>
                            <button className="h-10 w-20 mx-8 text-white rounded-lg bg-red-500 hover:bg-red-600">Tags</button>
                            <button className="h-10 w-20 mx-8 text-white rounded-lg bg-red-500 hover:bg-red-600">Tags</button>
                        </div>

                        <div className="flex items-left w-full justify-left my-4">
                            <button className="h-10 w-52 mr-8 text-white rounded-lg bg-red-500 hover:bg-red-600">Categories</button>
                        </div>

                        <div className="flex items-left w-full justify-left my-4">
                            <input className="bg-gray-500 p-2 px-6 text-white h-12 w-52 rounded-3xl text-xl" type="number" placeholder="Room size" />
                        </div>

                    </div>

                    <div class="flex flex-col justify-start">
                        <div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
                            style={{ minHeigth: "320px" }}>
                            <img class="w-full h-full object-cover" src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='nike shoes' />
                        </div>
                    </div>

                </div>

            </div>

            <div className="grid place-items-center px-60 py-5">
                <textarea className="bg-gray-500 p-2 px-6 text-white h-56 w-full rounded-3xl text-xl" type="text" placeholder="Description" />
            </div>

        </div>
    )
}
