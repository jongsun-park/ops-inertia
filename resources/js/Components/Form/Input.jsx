import Select from "react-select";

const formatLabel = (label) => label.replaceAll("_", " ").toUpperCase();

export const TextInput = ({
    name = "",
    value,
    setData,
    errors,
    type = "text",
    placeholder = "",
    unit = "",
    ...props
}) => {
    return (
        <div className="mb-1 flex items-center">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(name)}
            </label>
            <div className="mb-2 flex w-2/3 flex-1 flex-col">
                <div className="flex flex-row items-center overflow-hidden rounded-md border border-gray-300 pr-2">
                    <input
                        {...props}
                        type={type}
                        id={name}
                        className="flex-1 border-0 focus:bg-slate-50 focus:ring-0"
                        value={value}
                        onChange={(e) => setData(name, e.target.value)}
                        placeholder={placeholder}
                    />
                    {unit !== "" && <p className="text-sm">{unit}</p>}
                </div>

                {errors[name] && (
                    <div className="mb-2 text-sm text-red-600">
                        {errors[name]}
                    </div>
                )}
            </div>
        </div>
    );
};

export const SelectInput = ({
    label,
    options,
    name,
    value,
    setData,
    errors,
}) => {
    return (
        <div className="mb-1 flex items-center">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(label)}
            </label>
            <div className="mb-2 flex w-2/3 flex-1 flex-col">
                <select
                    name={name}
                    id={name}
                    onChange={(e) => setData(name, e.target.value)}
                    value={value}
                    className="rounded-md border border-gray-300"
                >
                    <option value="">Please choose an option</option>
                    {/* looms */}
                    {options.map(({ id, sku, name }) => {
                        return (
                            <option value={id} key={id}>
                                {sku ?? name}
                            </option>
                        );
                    })}
                </select>
                {errors[name] && (
                    <div className="mb-2 text-sm text-red-600">
                        {errors[name]}
                    </div>
                )}
            </div>
        </div>
    );
};

export const ReactSelectInput = ({
    label,
    options,
    name,
    value,
    setData,
    errors,
    idKey = "id",
    labelKey = "sku",
}) => {
    const selectOptions = options.map((props) => ({
        value: props[idKey],
        label: props[labelKey],
    }));

    const defaultValue = selectOptions.filter((opt) => opt.value == value)[0];

    return (
        <div className="mb-1 flex items-center">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(label)}
            </label>
            <div className="mb-2 flex w-2/3 flex-1 flex-col">
                <Select
                    options={selectOptions}
                    name={name}
                    noOptionsMessage={() => "Not Selected"}
                    onChange={(e) => setData(name, e?.value)}
                    isClearable={true}
                    isSearchable={true}
                    defaultValue={defaultValue}
                    className="flex-1"
                />

                {errors[name] && (
                    <div className="mb-2 text-sm text-red-600">
                        {errors[name]}
                    </div>
                )}
            </div>
        </div>
    );
};
