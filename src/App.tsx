import { Navbar } from "./components/navbar";
import { TagLine } from "./components/tagline";
import { ThingsToBuy } from "./components/things-to-buy";

export default function App() {
    return <>
        <Navbar />
        <main className="px-40 py-6">
            <TagLine />
            <section className="py-6">
                <ThingsToBuy />
            </section>
        </main>
    </>
}
