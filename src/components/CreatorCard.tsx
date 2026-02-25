import { Avatar } from "./Avatar";

export const CreatorCard = ({ name, date, avatar }: { name: string; date: Date | null; avatar?: string }) => {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    
    return (
        <div className="border w-fit px-4 py-2 rounded-[7px]">
            <div className="flex items-center space-x-4">
                {avatar ? (
                    <>
                        <Avatar src={avatar} alt={name} className="w-12 h-12" />
                        <div>
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <p className="text-sm">{date ? dateFormatter.format(new Date(date)) : 'N/A'}</p>
                        </div>
                    </>
                ) : (
                    <div>
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <p className="text-sm">{date ? dateFormatter.format(new Date(date)) : 'N/A'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
