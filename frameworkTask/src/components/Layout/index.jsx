import { Header } from "./Header";
import { Products } from "./Main";

function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen overflow-x-hidden">
                <Header />

                <main className="grow">
                    <Products />
                </main>
            </div>
        </>
    );
}

export { Layout };
