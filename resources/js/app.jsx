import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { StrictMode } from "react";
import Layout from "./Layouts/Layout";
import Authenticated from "./Layouts/AuthenticatedLayout";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "OPS";

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            // page.default.layout || ((page) => <Layout children={page} />);
            page.default.layout ||
            ((page) => <Authenticated children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: "#3888f6",
        // showSpinner: true,
    },
});
