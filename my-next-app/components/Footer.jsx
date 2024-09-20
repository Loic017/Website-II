import Filepath from "./Filepath";

export default function Footer() {
    return (
        <div className="flex justify-end py-2 text-gray-400 text-14px nav-back border-t border-gray-100 border-opacity-20">
            <span className="self-end px-5 font-mono">
                <Filepath />
            </span>
        </div>
    );
}
