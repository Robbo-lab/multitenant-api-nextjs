# Activity 2 – Full CRUD for Projects

**Goal:** Implement Create, Read, Update, and Delete for projects.

## Recap of our implementation
- Built `/app/projects/page.js` with a stacked Tailwind form that handles create/update, validation, and cancel states.
- Rendered projects as responsive cards with edit/delete controls, project-title links, and a post-delete redirect/refresh to keep the list in sync.
- Added `/app/projects/[id]/page.js` plus `generateStaticParams()` to support static exports while still fetching live project data.

## Steps
1. Open `/app/projects/page.js`.
2. Use `api.get("/projects")` to fetch projects.
3. Add a stacked Tailwind form to create (`POST`) and edit (`PUT`) projects.
4. Add delete (`DELETE`) buttons and link each card to `/projects/[id]`.
5. Create `/app/projects/[id]/page.js` (with `generateStaticParams`) to show individual project details and satisfy static builds.
6. Test every action in DevTools → Network and the browser console.
7. Commit:
   ```bash
   git commit -m "feat(projects): completed CRUD for projects route"
   ```
