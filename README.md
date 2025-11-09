# Next.js API Frontend (Vanilla JS + Tailwind)

A teaching scaffold using **Next.js 15 + React 18 + Tailwind CSS**  
connected to the **Laravel multitenant API** at `http://170.64.222.131/v1`.

---

## 🧱 Features
- `GET /v1/users` – list all users  
- CRUD for `/v1/projects`  
- Shared Axios helper (`lib/api.js`)  
- Two classroom activities in `/activities/`  

---

## ⚙️ Setup

1. Navigate to the frontend project:
   ```bash
   cd /Users/robbozinoz/Documents/code/multitenant-project/nextjs-api-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure .env.local:
   ```
   NEXT_PUBLIC_API_URL=http://170.64.222.131/v1
   NEXT_PUBLIC_API_TOKEN=<your_bearer_token_here>
   NEXT_PUBLIC_WORKSPACE_ID=tenant-pm-001
   NEXT_PUBLIC_INTEGRATION_NAME=NextJS-Client
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

Then visit:
- http://localhost:3000/users
- http://localhost:3000/projects

---

## 🧠 Learning Outcomes
- Connect Next.js to a Laravel API
- Perform GET and CRUD requests with Axios
- Use Tailwind for responsive layouts
- Handle form input and API feedback
- Inspect and understand HTTP requests

---

## 🧑‍🏫 Author

Created by Jamie Robertson (Robbo-lab)  
for NM TAFE – Web Application Development (Laravel + Next.js Integration).
