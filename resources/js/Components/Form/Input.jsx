const formatLabel = (label) => label.replace("_", " ").toUpperCase();

export const TextInput = ({
    name,
    value,
    setData,
    errors,
    required = false,
    type = "text",
    placeholder = "",
    unit = "",
}) => {
    return (
        <div className="flex items-center mb-1">
            <label htmlFor={name} className="mr-4 w-1/3 text-sm">
                {formatLabel(name)}
            </label>
            <div className="flex-1 mb-2 w-2/3 flex flex-col">
                <div className="flex flex-row border border-gray-300 rounded-md items-center pr-2 overflow-hidden">
                    <input
                        type={type}
                        id={name}
                        className="border-0 focus:ring-0 flex-1 focus:bg-slate-50"
                        value={value}
                        onChange={(e) => setData(name, e.target.value)}
                        required={required ? true : null}
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
                    {/* yarns */}
                    {options.map(({ id, sku }) => {
                        return (
                            <option value={id} key={id}>
                                {sku}
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
