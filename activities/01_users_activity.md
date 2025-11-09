# Activity 1 – Connecting to the Users API (GET only)

**Goal:** Learn to fetch data from the Laravel API using Axios in Next.js.

## Recap of our implementation
- Wired `/app/users/page.js` to the shared Axios client and rendered responses in a Tailwind table with loading/error states.
- Normalized nested `email` objects, added verified pills, surfaced `created.human` timestamps, and highlighted verification badges.
- Added lightweight client-side pagination (5 per page) plus navigation controls to keep long user lists readable.

## Steps
1. Open `/app/users/page.js`.
2. Import `api` from `/lib/api.js`.
3. Use `useEffect` to fetch all users with `GET /users`.
4. Display them in a Tailwind table (IDs, names, email badges, created time).
5. Add loading, error, and pagination UI states.
6. Observe the headers sent in DevTools → Network.
7. Commit:
   ```bash
   git commit -m "feat(users): implemented GET users route"
   ```
