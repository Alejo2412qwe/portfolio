type NotificationProps = {
    type: 'success' | 'error';
    message: string;
};

export default function Notification({ type, message }: NotificationProps) {
    const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';

    return (
        <div className={`${bgColor} border px-4 py-3 rounded relative mt-4`} role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
}