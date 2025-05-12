## Nextjs


Protecting Routes in 4 different ways

1. Client-side with useLayoutEffect

Redirects unauthenticated users after the component mounts.
May briefly show protected content before redirecting (not secure for sensitive data).

2. Client-side with Higher-Order Component (HOC)

Wraps protected components in reusable auth logic.
Still runs on the client, so not suitable for hiding secure data.

3. Server-side Protection (getServerSideProps or auth() in App Router)

Blocks access to protected routes before rendering anything.
Secure and recommended for sensitive pages or server-rendered data.

4. Middleware (Edge Runtime)

Intercepts requests globally before they reach routes.
Best for global route protection, redirects, or geolocation logic.


![localhost_3000_ (3)](https://github.com/user-attachments/assets/eb427267-9bf1-476f-9192-afe5449f7268)
![localhost_3000_ (4)](https://github.com/user-attachments/assets/854aa2a2-93a9-46df-9ea5-5c3f7307bc93)
![localhost_3000_ (6)](https://github.com/user-attachments/assets/cb8744a4-fd5e-4dd1-ad58-480928352827)

