import { Link, Head } from "@inertiajs/react";
import { Pagination } from "@/Components/Pagination";
import Label from "@/Components/UI/Label";
import { Box } from "@/Components/UI/Container";
import { PageHeading } from "@/Components/UI/Heading";
import { DangerLink, PrimaryLink, SecondaryLink } from "@/Components/Button";

const AuthorCard = ({ author }) => {
    const { name, email } = author;
    return (
        <Label label="Written by">
            {" "}
            <Link
                href={`mailto:${email}`}
                target="_blank"
                className="underline"
            >
                {name}
            </Link>
        </Label>
    );
};
const ProductCard = ({ product }) => {
    const { sku, desc, id } = product;
    return (
        <Label label="product">
            {" "}
            <Link href={`/products/${id}`} className="underline">
                {sku} - {desc}
            </Link>
        </Label>
    );
};
const WashOptionCard = ({ wash_option }) => {
    const { id, name } = wash_option;
    return (
        <Label label="Wash Option">
            <Link href="wash-options" className="underline">
                {name}
            </Link>
        </Label>
    );
};

const ProductionCard = ({ production }) => {
    const {
        id,
        product_id,
        order_id,
        customer,
        urgency,
        quantity,
        total_length,
        num_of_repeats,
        user_id,
        note,
        wash_option_id,
        packing,
        created_at,
        updated_at,
        author,
        product,
        wash_option,
    } = production;

    return (
        <Box key={id} className="relative">
            <div className="flex-1 space-y-2">
                <Label label="order_id">{order_id}</Label>
                <Label label="customer">{customer}</Label>
                <Label label="urgency">{urgency}</Label>
                <Label label="quantity">{quantity}</Label>
                <Label label="total_length">{total_length}</Label>
                <Label label="num_of_repeats">{num_of_repeats}</Label>
                <Label label="note">{note}</Label>
                <Label label="packing">{packing}</Label>
                <AuthorCard author={author} />
                <ProductCard product={product} />
                <WashOptionCard wash_option={wash_option} />
            </div>
            <div className="buttons flex flex-row space-x-2 items-start absolute right-4 top-4">
                <SecondaryLink href={`/productions/${id}/edit`} as="button">
                    Edit
                </SecondaryLink>
                <DangerLink
                    href={`/productions/${id}`}
                    method="delete"
                    as="button"
                >
                    Delete
                </DangerLink>
            </div>
        </Box>
    );
};

export default function Productions({ productions = [] }) {
    return (
        <>
            <Head title="Productions" />

            <div className="flex flex-row justify-between">
                <PageHeading>Productions</PageHeading>
                <div>
                    <PrimaryLink href="/productions/create">
                        Create New Production
                    </PrimaryLink>
                </div>
            </div>

            <ul>
                {/* If there don't have any productions */}
                {productions.data.length == 0 && (
                    <p className="text-center text-md text-sky-700">
                        Product not found. Please add any product.
                    </p>
                )}
                {/* Loop products */}
                {productions.data.map((production) => (
                    <ProductionCard
                        key={production.id}
                        production={production}
                    />
                ))}
            </ul>
            <Pagination className="mt-16" links={productions.links} />
        </>
    );
}
