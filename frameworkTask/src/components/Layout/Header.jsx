import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="bg-amber-300 w-dvw h-10 flex flex-row justify-evenly items-center">
            <Link to="/" className="bg-red-400 p-1">
                Home
            </Link>
            <Link to="/checkout" className="bg-pink-400 p-1">
                Checkout page
            </Link>
        </header>
    );
}
