import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Workspaces-Identifier": process.env.NEXT_PUBLIC_WORKSPACE_ID,
        "X-Integration-Name": process.env.NEXT_PUBLIC_INTEGRATION_NAME,
    },
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const api = async function apiFetch(endpoint, options = {}) {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//         ...options,
//         headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//             "Workspaces-Identifier": process.env.NEXT_PUBLIC_WORKSPACE_ID,
//             "X-Integration-Name": process.env.NEXT_PUBLIC_INTEGRATION_NAME,
//             "Content-Type": "application/json",
//             ...(options.headers || {}),
//         },
//     });

//     if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP ${response.status}: ${errorText}`);
//     }

//     // Automatically parse JSON
//     return response.json();
// };

export default api;
