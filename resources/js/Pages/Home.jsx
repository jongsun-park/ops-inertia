import { Link, Head, router } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Homepage" />
            <div>
                <Link href="products">Products</Link>
            </div>
        </>
    );
}
