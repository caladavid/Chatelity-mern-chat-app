import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._Id;
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shoulShake ? "shake" : "";

    return (
        <div className="flex w-full flex-col gap-4 py-2">
            {fromMe ? (
                <div className="flex items-end gap-2">
                    <span className="mr-auto text-xs">{formattedTime}</span>
                    <div className={`ml-auto flex max-w-[70%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-[#ffe4b5] p-4 text-sm text-black md:max-w-[60%] ${shakeClass}`}>
                        {message.message}
                    </div>
                    <img className="size-8 rounded-full object-cover" src={profilePic} alt="avatar" />
                </div>


            ) : (
                <div className="flex items-end gap-2 ">
                    <img className="size-8 rounded-full object-cover" src={profilePic} alt="avatar" />
                    <div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md bg-neutral-100 p-4 text-neutral-600 md:max-w-[60%] ">
                        <div className={`text-sm ${shakeClass}`}>
                            {message.message}
                        </div>
                    </div>
                    <span className="ml-auto text-xs">{formattedTime}</span>
                </div>
            )}

        </div>
        /*         <div className={`flex items-start gap ${chatClassName}`}>
                    <div className='flex flex-row-reverse'>
                        <div className='w-10 rounded-full'>
                            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                        </div>
                    </div>
                    <div className={`rounded-lg  ${bubbleBgColor}  pb-2`}>{message.message}</div>
                    <div className='opacity-50 text-xs flex '>{formattedTime}</div>
                </div> */
    )
}

export default Message

{/* <div className="flex w-full flex-col gap-4 py-2">
<div className="flex items-end gap-2 ">
    <img className="size-8 rounded-full object-cover" src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp" alt="avatar" />
    <div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md bg-neutral-50 p-4 text-neutral-600 md:max-w-[60%] dark:bg-neutral-900 dark:text-neutral-300">
        <div className="text-sm">
            Hi there! How can I assist you today?
        </div>
        <span className="ml-auto text-xs">11:32 AM</span>
    </div>
</div>
<div className="flex items-end gap-2">
    <div className="ml-auto flex max-w-[70%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-black p-4 text-sm text-neutral-100 md:max-w-[60%] dark:bg-white dark:text-black">
        I accidentally deleted some important files. Can they be recovered?
        <span className="ml-auto text-xs">11:34 AM</span>
    </div>
    <span className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-neutral-300 bg-neutral-50 text-sm font-bold tracking-wider text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">JS</span>
</div>

<div className="flex items-end gap-2">
    <img className="size-8 rounded-full object-cover" src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp" alt="avatar" />
    <div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md bg-neutral-50 p-4 text-neutral-600 md:max-w-[60%] dark:bg-neutral-900 dark:text-neutral-300">
        <div className="text-sm">
            I'm sorry to hear that. Let me guide you through the process to resolve it. Could you please provide your username?
        </div>
        <span className="ml-auto text-xs">11:32 AM</span>
    </div>
</div>
</div> */}