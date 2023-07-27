import { Link, Head } from "@inertiajs/react";
import { Pagination } from "@/Components/Pagination";
import Label from "@/Components/UI/Label";
import { PageHeading } from "@/Components/UI/Heading";

export default function Yarns({ yarns = [] }) {
    return (
        <>
            <Head title="Yarns" />

            <div className="flex flex-row justify-between">
                <PageHeading>Yarn List</PageHeading>
                <div>
                    <a
                        href="/yarns/create"
                        className="text-xs bg-gray-700 text-white py-2 px-4 rounded-md uppercase"
                    >
                        Create New Yarn
                    </a>
                </div>
            </div>

            <ul>
                {/* If there don't have any products */}
                {yarns.data.length == 0 && (
                    <p className="text-center text-md text-sky-700">
                        Product not found. Please add any product.
                    </p>
                )}
                {/* Loop products */}
                {yarns.data.map(({ id, sku, grade, colour, supplier }) => (
                    <li
                        key={id}
                        className="flex flex-row mb-3 border border-gray-200 p-4 rounded-md"
                    >
                        <div className="flex-1">
                            <Link href={`/yarns/${id}/edit`}>
                                <p className="font-semibold mb-2">{sku}</p>
                            </Link>
                            <div>
                                <Label label="Grade">{grade}</Label>
                                <Label label="Colour">{colour}</Label>
                                <Label label="Supplier">{supplier}</Label>
                            </div>
                        </div>
                        <div className="buttons flex flex-row space-x-2">
                            <div>
                                <Link
                                    href={`/yarns/${id}/edit`}
                                    className="text-sm"
                                >
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={`/yarns/${id}`}
                                    method="delete"
                                    className="text-sm text-red-600"
                                    as="button"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination className="mt-16" links={yarns.links} />
        </>
    );
}
