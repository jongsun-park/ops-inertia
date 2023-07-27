import { Head } from "@inertiajs/react";
import Label from "@/Components/UI/Label";
import { Box } from "@/Components/UI/Container";
import { PageHeading } from "@/Components/UI/Heading";
import { DangerLink, PrimaryLink, SecondaryLink } from "@/Components/Button";

const Yarn = ({ label, yarn }) => {
    if (yarn == false) return;

    return (
        <Box>
            <Label label={label} />
            <div className="space-y-2 mt-2">
                <Label
                    className="bg-white border-gray-100 border-2"
                    label="sku"
                >
                    {yarn.sku}
                </Label>
                <Label
                    className="bg-white border-gray-100 border-2"
                    label="colour"
                >
                    {yarn.colour}
                </Label>
                <Label
                    className="bg-white border-gray-100 border-2"
                    label="grade"
                >
                    {yarn.grade}
                </Label>
                <Label
                    className="bg-white border-gray-100 border-2"
                    label="fibre"
                >
                    {yarn.fibre}
                </Label>
                <Label
                    className="bg-white border-gray-100 border-2"
                    label="supplier"
                >
                    {yarn.supplier}
                </Label>
            </div>
        </Box>
    );
};

const Production = ({ production = {} }) => {
    const id = production?.id;
    if (!id) return null;
    return (
        <div className="space-y-2 bg-gray-200/50 p-4 rounded-md relative">
            <div className="right-4 mb-2 space-x-2 absolute">
                <SecondaryLink href={`/productions/${id}/edit`}>
                    Edit
                </SecondaryLink>
                <DangerLink
                    method="delete"
                    as="button"
                    href={`/productions/${id}`}
                >
                    Delete
                </DangerLink>
            </div>
            {Object.entries(production).map(([key, value]) => (
                <Label key={key} label={key}>
                    {value}
                </Label>
            ))}
        </div>
    );
};

export default function Show({
    product,
    warp,
    weft1,
    weft2,
    weft3,
    weft4,
    loom,
    productions,
}) {
    return (
        <>
            <Head title={`Product - ${product.sku}`} />

            <div className="flex justify-between items-cente mb-8">
                <PageHeading>{product.sku}</PageHeading>

                <div className="flex flex-row space-x-1">
                    <SecondaryLink
                        href={`/products/${product.id}/edit`}
                        method="get"
                    >
                        Edit
                    </SecondaryLink>
                    <DangerLink
                        href={`/products/${product.id}`}
                        method="delete"
                        as="button"
                    >
                        Delete
                    </DangerLink>
                </div>
            </div>
            <div className="space-y-4">
                <Label label="sku">{product.sku}</Label>
                <Label label="description">{product.desc}</Label>
                <Label label="tf number">{product.tf_number}</Label>
                <Yarn label="wrap" yarn={warp} />
                <Yarn label="weft 1" yarn={weft1} />
                <Yarn label="weft 2" yarn={weft2} />
                <Yarn label="weft 3" yarn={weft3} />
                <Yarn label="weft 4" yarn={weft4} />
                <Label label="divisors">{product.divs}</Label>
                <Label label="cut length" unit="cm">
                    {product.cut_length}
                </Label>
                <Label label="cut width" unit="cm">
                    {product.cut_width}
                </Label>
                <Label label="finish length" unit="cm">
                    {product.finish_length}
                </Label>
                <Label label="finish width" unit="cm">
                    {product.finish_width}
                </Label>

                <Label label="label">{product.label}</Label>
                <Label label="loom">{loom.name}</Label>

                <Label label="ppcm">{product.ppcm}</Label>
                <Label label="unit">{product.unit}</Label>
                <Label label="hem size" unit="cm">
                    {product.hem_size}
                </Label>
                <Label label="hem type">{product.hem_type}</Label>
            </div>
            <PrimaryLink
                href={`/productions/create/${product.id}`}
                className="w-full text-center mt-10"
                as="button"
            >
                CREATE PRODUCTION ORDER
            </PrimaryLink>
            <Box className="mt-8">
                <PageHeading>Realated Productions</PageHeading>
                <div className="mt-4 space-y-4">
                    {productions?.length > 0 ? (
                        productions.map((production) => (
                            <Production
                                key={production.id}
                                production={production}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-400">
                            Please Add Production
                        </p>
                    )}
                </div>
            </Box>
        </>
    );
}
