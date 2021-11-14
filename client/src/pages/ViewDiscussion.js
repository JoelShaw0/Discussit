export default function ViewDiscussion() {
    return (
        <div>
            <div className="flex fixed justify-start items-center flex-col h-5/6 left-10 bg-gray-300 rounded-2xl mt-24 p-12">
                <div className="font-sourceSerifPro text-4xl">
                    <p>Chatrooms</p>
                </div>
                <div className="">
                    <button className="h-10 w-32 text-black rounded-lg bg-white hover:bg-gray-200">Room Name</button>
                </div>
            </div>
            <div className="flex fixed justify-start items-center flex-col h-5/6 left-80 right-10 bg-gray-300 rounded-2xl mt-24 p-12">
                <div className="flex fixed justify-start items-center flex-col h-4/6 right-20 bottom-16 bg-gray-100 rounded-2xl mt-20 p-12">
                    <p font-sourceSerifPro>User online</p>
                </div>
                <div className="flex fixed justify-start flex-col w-1/2 ml-16 h-1 right-72 bottom-16 bg-gray-100 rounded-2xl mt-20 p-6">
                    <textarea className="" className="text-xl" type="text" placeholder="Start typing..."></textarea>
                    <button className="right-72 h-15 w-20 text-black rounded-lg bg-gray-300 hover:bg-gray-200">Send</button>
                </div>
            </div>
        </div>
    )
}
