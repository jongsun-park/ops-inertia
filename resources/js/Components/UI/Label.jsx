const Label = ({ label = "", children = "", unit = "", className = "" }) => {
    if (children == null) {
        return null;
    }

    return (
        <div className="flex flex-row m-0 items-start">
            <span
                className={`label mr-2 text-xs uppercase bg-gray-50 p-2 rounded-md ${className}`}
            >
                {label}
            </span>
            <p className="py-[4px] text-sm">{children}</p>

            {unit != "" && <span className="text-sm ml-2">{unit}</span>}
        </div>
    );
};

export default Label;
