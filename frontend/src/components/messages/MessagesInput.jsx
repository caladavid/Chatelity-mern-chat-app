import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
import LoadingSpinner from "../loading/LoadingSpinner";
const MessagesInput = () => {
    const [message, setMessage] = useState("");
    const { sendMessage, loading } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className="px-4 my-3" onClick={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="Send a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <IoIosSend />
                    )}

                </button>
            </div>
        </form>
    )
}

export default MessagesInput