import Filepath from "./Filepath";

export default function Footer() {
    return (
        <div className="flex justify-center py-4 text-gray-300 text-14px nav-back border-t border-gray-100 border-opacity-20">
            <span className="self-end">
                <Filepath />
            </span>
        </div>
    );
}
