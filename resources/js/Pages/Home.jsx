import { Link, Head, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Home() {
    return (
        <Layout>
            <Head title="Homepage" />
            <div>
                <Link href="products">Products</Link>
            </div>
        </Layout>
    );
}
