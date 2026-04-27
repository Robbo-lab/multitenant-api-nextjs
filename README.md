1. Navigate to the frontend project:

2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure .env.local:
    ```
    NEXT_PUBLIC_API_URL=http://myjamjar.com.au/v1
    NEXT_PUBLIC_API_TOKEN=<your_bearer_token_here>
    NEXT_PUBLIC_WORKSPACE_ID=tenant-pm-001
    NEXT_PUBLIC_INTEGRATION_NAME=NextJS-Client
    ```
4. Run the app:
    ```bash
    npm run dev
    ```

Then visit:

-   http://localhost:3000/users
-   http://localhost:3000/projects
