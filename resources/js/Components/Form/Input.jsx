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
        <div className="flex items-center mb-1">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(name)}
            </label>
            <div className="flex-1 mb-2 w-2/3 flex flex-col">
                <div className="flex flex-row border border-gray-300 rounded-md items-center pr-2 overflow-hidden">
                    <input
                        {...props}
                        type={type}
                        id={name}
                        className="border-0 focus:ring-0 flex-1 focus:bg-slate-50"
                        value={value}
                        onChange={(e) => setData(name, e.target.value)}
                        placeholder={placeholder}
                    />
                    {unit !== "" && <p className="text-sm">{unit}</p>}
                </div>

                {errors[name] && (
                    <div className="text-sm mb-2 text-red-600">
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
        <div className="flex items-center mb-1">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(label)}
            </label>
            <div className="flex-1 mb-2 w-2/3 flex flex-col">
                <select
                    name={name}
                    id={name}
                    onChange={(e) => setData(name, e.target.value)}
                    value={value}
                    className="border border-gray-300 rounded-md"
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
                    <div className="text-sm mb-2 text-red-600">
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

    const defaultValue = selectOptions.filter((opt) => opt.value === value)[0];

    return (
        <div className="flex items-center mb-1">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(label)}
            </label>
            <div className="flex-1 mb-2 w-2/3 flex flex-col">
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
                    <div className="text-sm mb-2 text-red-600">
                        {errors[name]}
                    </div>
                )}
            </div>
        </div>
    );
};
