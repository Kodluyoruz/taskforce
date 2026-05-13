# Next.js Documentation

> Reference and guides for Next.js 16.2.6 — the React framework for building full-stack web applications. Sections cover Getting Started, App Router, Architecture, and Community Resources.

@doc-version: 16.2.6
@doc-version-notes: Some features may have extended or refined behavior in minor or patch releases

## [Getting Started](https://nextjs.org/docs/app/getting-started)

Learn how to create full-stack web applications with the Next.js App Router.

- [Installation](https://nextjs.org/docs/app/getting-started/installation): Learn how to create a new Next.js application with the `create-next-app` CLI, and set up TypeScript, ESLint, and Module Path Aliases.
- [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure): Learn the folder and file conventions in Next.js, and how to organize your project.
- [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages): Learn how to create your first pages and layouts, and link between them with the Link component.
- [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating): Learn how the built-in navigation optimizations work, including prefetching, prerendering, and client-side navigation, and how to optimize navigation for dynamic routes and slow networks.
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components): Learn how you can use React Server and Client Components to render parts of your application on the server or the client.
- [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data): Learn how to fetch data and stream content that depends on data.
- [Mutating Data](https://nextjs.org/docs/app/getting-started/mutating-data): Learn how to mutate data using Server Functions and Server Actions in Next.js.
- [Caching](https://nextjs.org/docs/app/getting-started/caching): Learn how to cache data and UI in Next.js
- [Revalidating](https://nextjs.org/docs/app/getting-started/revalidating): Learn how to revalidate cached data using time-based and on-demand strategies.
- [Error Handling](https://nextjs.org/docs/app/getting-started/error-handling): Learn how to display expected errors and handle uncaught exceptions.
- [CSS](https://nextjs.org/docs/app/getting-started/css): Learn about the different ways to add CSS to your application, including Tailwind CSS, CSS Modules, Global CSS, and more.
- [Image Optimization](https://nextjs.org/docs/app/getting-started/images): Learn how to optimize images in Next.js
- [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts): Learn how to optimize fonts in Next.js
- [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images): Learn how to add metadata to your pages and create dynamic OG images.
- [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers): Learn how to use Route Handlers
- [Proxy](https://nextjs.org/docs/app/getting-started/proxy): Learn how to use Proxy
- [Deploying](https://nextjs.org/docs/app/getting-started/deploying): Learn how to deploy your Next.js application.
- [Upgrading](https://nextjs.org/docs/app/getting-started/upgrading): Learn how to upgrade your Next.js application to the latest version or canary.

## [Guides](https://nextjs.org/docs/app/guides)

Learn how to implement common patterns and real-world use cases using Next.js

- [AI Coding Agents](https://nextjs.org/docs/app/guides/ai-agents): Learn how to configure your Next.js project so AI coding agents use up-to-date documentation instead of outdated training data.
- [Analytics](https://nextjs.org/docs/app/guides/analytics): Measure and track page performance using Next.js Speed Insights
- [Authentication](https://nextjs.org/docs/app/guides/authentication): Learn how to implement authentication in your Next.js application.
- [Backend for Frontend](https://nextjs.org/docs/app/guides/backend-for-frontend): Learn how to use Next.js as a backend framework
- [Caching (Previous Model)](https://nextjs.org/docs/app/guides/caching-without-cache-components): Learn how to cache and revalidate data using fetch options, unstable_cache, and route segment configs for projects not using Cache Components.
- [CDN Caching](https://nextjs.org/docs/app/guides/cdn-caching): Learn how CDN caching works with Next.js, including what works today, cache variability, and the direction toward pathname-based cache keying.
- [CI Build Caching](https://nextjs.org/docs/app/guides/ci-build-caching): Learn how to configure CI to cache Next.js builds
- [Content Security Policy](https://nextjs.org/docs/app/guides/content-security-policy): Learn how to set a Content Security Policy (CSP) for your Next.js application.
- [CSS-in-JS](https://nextjs.org/docs/app/guides/css-in-js): Use CSS-in-JS libraries with Next.js
- [Custom Server](https://nextjs.org/docs/app/guides/custom-server): Start a Next.js app programmatically using a custom server.
- [Data Security](https://nextjs.org/docs/app/guides/data-security): Learn the built-in data security features in Next.js and learn best practices for protecting your application's data.
- [Debugging](https://nextjs.org/docs/app/guides/debugging): Learn how to debug your Next.js application with VS Code, Chrome DevTools, or Firefox DevTools.
- [Deploying to Platforms](https://nextjs.org/docs/app/guides/deploying-to-platforms): Understand which Next.js features require specific platform capabilities and how to choose the right deployment target.
- [Draft Mode](https://nextjs.org/docs/app/guides/draft-mode): Next.js has draft mode to toggle between static and dynamic pages. You can learn how it works with App Router here.
- [Environment Variables](https://nextjs.org/docs/app/guides/environment-variables): Learn to add and access environment variables in your Next.js application.
- [Forms](https://nextjs.org/docs/app/guides/forms): Learn how to create forms in Next.js with React Server Actions.
- [How Revalidation Works](https://nextjs.org/docs/app/guides/how-revalidation-works): A deep dive into how Next.js revalidates cached content, including the tag system, cache consistency, and multi-instance coordination.
- [ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration): Learn how to create or update static pages at runtime with Incremental Static Regeneration.
- [Instrumentation](https://nextjs.org/docs/app/guides/instrumentation): Learn how to use instrumentation to run code at server startup in your Next.js app
- [Internationalization](https://nextjs.org/docs/app/guides/internationalization): Add support for multiple languages with internationalized routing and localized content.
- [JSON-LD](https://nextjs.org/docs/app/guides/json-ld): Learn how to add JSON-LD to your Next.js application to describe your content to search engines and AI.
- [Lazy Loading](https://nextjs.org/docs/app/guides/lazy-loading): Lazy load imported libraries and React Components to improve your application's loading performance.
- [Development Environment](https://nextjs.org/docs/app/guides/local-development): Learn how to optimize your local development environment with Next.js.
- [Next.js MCP Server](https://nextjs.org/docs/app/guides/mcp): Learn how to use Next.js MCP support to allow coding agents access to your application state
- [MDX](https://nextjs.org/docs/app/guides/mdx): Learn how to configure MDX and use it in your Next.js apps.
- [Memory Usage](https://nextjs.org/docs/app/guides/memory-usage): Optimize memory used by your application in development and production.
- [Migrating](https://nextjs.org/docs/app/guides/migrating): Learn how to migrate from popular frameworks to Next.js
  - [App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration): Learn how to upgrade your existing Next.js application from the Pages Router to the App Router.
  - [Create React App](https://nextjs.org/docs/app/guides/migrating/from-create-react-app): Learn how to migrate your existing React application from Create React App to Next.js.
  - [Vite](https://nextjs.org/docs/app/guides/migrating/from-vite): Learn how to migrate your existing React application from Vite to Next.js.
- [Migrating to Cache Components](https://nextjs.org/docs/app/guides/migrating-to-cache-components): Learn how to migrate from route segment configs to Cache Components in Next.js.
- [Multi-tenant](https://nextjs.org/docs/app/guides/multi-tenant): Learn how to build multi-tenant apps with the App Router.
- [Multi-zones](https://nextjs.org/docs/app/guides/multi-zones): Learn how to build micro-frontends using Next.js Multi-Zones to deploy multiple Next.js apps under a single domain.
- [OpenTelemetry](https://nextjs.org/docs/app/guides/open-telemetry): Learn how to instrument your Next.js app with OpenTelemetry.
- [Package Bundling](https://nextjs.org/docs/app/guides/package-bundling): Learn how to analyze and optimize your application's server and client bundles with the Next.js Bundle Analyzer for Turbopack, and the `@next/bundle-analyzer` plugin for Webpack.
- [PPR Platform Guide](https://nextjs.org/docs/app/guides/ppr-platform-guide): A guide for platform engineers on implementing PPR support, from basic origin rendering to optimized CDN integration.
- [Prefetching](https://nextjs.org/docs/app/guides/prefetching): Learn how to configure prefetching in Next.js
- [Preserving UI state](https://nextjs.org/docs/app/guides/preserving-ui-state): Learn how to control which UI state is preserved and which resets when navigating between pages.
- [Production](https://nextjs.org/docs/app/guides/production-checklist): Recommendations to ensure the best performance and user experience before taking your Next.js application to production.
- [PWAs](https://nextjs.org/docs/app/guides/progressive-web-apps): Learn how to build a Progressive Web Application (PWA) with Next.js.
- [Public pages](https://nextjs.org/docs/app/guides/public-static-pages): Learn how to build public, "static" pages that share data across users, such as landing pages, list pages (products, blogs, etc.), marketing and news sites.
- [Redirecting](https://nextjs.org/docs/app/guides/redirecting): Learn the different ways to handle redirects in Next.js.
- [Rendering Philosophy](https://nextjs.org/docs/app/guides/rendering-philosophy): Learn how Next.js treats static and dynamic rendering as a spectrum at the component level, and what this means for deployment.
- [Sass](https://nextjs.org/docs/app/guides/sass): Style your Next.js application using Sass.
- [Scripts](https://nextjs.org/docs/app/guides/scripts): Optimize 3rd party scripts with the built-in Script component.
- [Self-Hosting](https://nextjs.org/docs/app/guides/self-hosting): Learn how to self-host your Next.js application on a Node.js server, Docker image, or static HTML files (static exports).
- [SPAs](https://nextjs.org/docs/app/guides/single-page-applications): Next.js fully supports building Single-Page Applications (SPAs).
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports): Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.
- [Streaming](https://nextjs.org/docs/app/guides/streaming): Learn how streaming works in Next.js and how to use it to progressively render UI as data becomes available.
- [Tailwind CSS v3](https://nextjs.org/docs/app/guides/tailwind-v3-css): Style your Next.js Application using Tailwind CSS v3 for broader browser support.
- [Testing](https://nextjs.org/docs/app/guides/testing): Learn how to set up Next.js with four commonly used testing tools — Cypress, Playwright, Vitest, and Jest.
  - [Cypress](https://nextjs.org/docs/app/guides/testing/cypress): Learn how to set up Cypress with Next.js for End-to-End (E2E) and Component Testing.
  - [Jest](https://nextjs.org/docs/app/guides/testing/jest): Learn how to set up Jest with Next.js for Unit Testing and Snapshot Testing.
  - [Playwright](https://nextjs.org/docs/app/guides/testing/playwright): Learn how to set up Playwright with Next.js for End-to-End (E2E) Testing.
  - [Vitest](https://nextjs.org/docs/app/guides/testing/vitest): Learn how to set up Vitest with Next.js for Unit Testing.
- [Third Party Libraries](https://nextjs.org/docs/app/guides/third-party-libraries): Optimize the performance of third-party libraries in your application with the `@next/third-parties` package.
- [Upgrading](https://nextjs.org/docs/app/guides/upgrading): Learn how to upgrade to the latest versions of Next.js.
  - [Codemods](https://nextjs.org/docs/app/guides/upgrading/codemods): Use codemods to upgrade your Next.js codebase when new features are released.
  - [Version 14](https://nextjs.org/docs/app/guides/upgrading/version-14): Upgrade your Next.js Application from Version 13 to 14.
  - [Version 15](https://nextjs.org/docs/app/guides/upgrading/version-15): Upgrade your Next.js Application from Version 14 to 15.
  - [Version 16](https://nextjs.org/docs/app/guides/upgrading/version-16): Upgrade your Next.js Application from Version 15 to 16.
- [Videos](https://nextjs.org/docs/app/guides/videos): Recommendations and best practices for optimizing videos in your Next.js application.
- [View transitions](https://nextjs.org/docs/app/guides/view-transitions): Learn how to use view transitions to communicate meaning during navigation, loading, and content changes in a Next.js app.

## [API Reference](https://nextjs.org/docs/app/api-reference)

Next.js API Reference for the App Router.

- [Directives](https://nextjs.org/docs/app/api-reference/directives): Directives are used to modify the behavior of your Next.js application.
  - [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache): Learn how to use the "use cache" directive to cache data in your Next.js application.
  - [use cache: private](https://nextjs.org/docs/app/api-reference/directives/use-cache-private): Learn how to use the "use cache: private" directive to cache functions that access runtime request APIs.
  - [use cache: remote](https://nextjs.org/docs/app/api-reference/directives/use-cache-remote): Learn how to use the "use cache: remote" directive for persistent, shared caching using remote cache handlers.
  - [use client](https://nextjs.org/docs/app/api-reference/directives/use-client): Learn how to use the use client directive to render a component on the client.
  - [use server](https://nextjs.org/docs/app/api-reference/directives/use-server): Learn how to use the use server directive to execute code on the server.
- [Components](https://nextjs.org/docs/app/api-reference/components): API Reference for Next.js built-in components.
  - [Font](https://nextjs.org/docs/app/api-reference/components/font): Optimizing loading web fonts with the built-in `next/font` loaders.
  - [Form Component](https://nextjs.org/docs/app/api-reference/components/form): Learn how to use the `<Form>` component to handle form submissions and search params updates with client-side navigation.
  - [Image Component](https://nextjs.org/docs/app/api-reference/components/image): Optimize Images in your Next.js Application using the built-in `next/image` Component.
  - [Link Component](https://nextjs.org/docs/app/api-reference/components/link): Enable fast client-side navigation with the built-in `next/link` component.
  - [Script Component](https://nextjs.org/docs/app/api-reference/components/script): Optimize third-party scripts in your Next.js application using the built-in `next/script` Component.
- [File-system conventions](https://nextjs.org/docs/app/api-reference/file-conventions): API Reference for Next.js file-system conventions.
  - [default.js](https://nextjs.org/docs/app/api-reference/file-conventions/default): API Reference for the default.js file.
  - [Dynamic Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes): Dynamic Route Segments can be used to programmatically generate route segments from dynamic data.
  - [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error): API reference for the error.js special file.
  - [forbidden.js](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden): API reference for the forbidden.js special file.
  - [instrumentation.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation): API reference for the instrumentation.js file.
  - [instrumentation-client.js](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client): Learn how to add client-side instrumentation to track and monitor your Next.js application's frontend performance.
  - [Intercepting Routes](https://nextjs.org/docs/app/api-reference/file-conventions/intercepting-routes): Use intercepting routes to load a new route within the current layout while masking the browser URL, useful for advanced routing patterns such as modals.
  - [layout.js](https://nextjs.org/docs/app/api-reference/file-conventions/layout): API reference for the layout.js file.
  - [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading): API reference for the loading.js file.
  - [mdx-components.js](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components): API reference for the mdx-components.js file.
  - [not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found): API reference for the not-found.js file.
  - [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page): API reference for the page.js file.
  - [Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes): Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications.
  - [proxy.js](https://nextjs.org/docs/app/api-reference/file-conventions/proxy): API reference for the proxy.js file.
  - [public](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder): Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here.
  - [route.js](https://nextjs.org/docs/app/api-reference/file-conventions/route): API reference for the route.js special file.
    - [dynamicParams](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/dynamicParams): API reference for the dynamicParams route segment config option.
    - [maxDuration](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/maxDuration): API reference for the maxDuration route segment config option.
    - [preferredRegion](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/preferredRegion): API reference for the preferredRegion route segment config option.
    - [runtime](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/runtime): API reference for the runtime route segment config option.
  - [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups): Route Groups can be used to partition your Next.js application into different sections.
  - [src](https://nextjs.org/docs/app/api-reference/file-conventions/src-folder): Save pages under the `src` folder as an alternative to the root `pages` directory.
  - [template.js](https://nextjs.org/docs/app/api-reference/file-conventions/template): API Reference for the template.js file.
  - [unauthorized.js](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized): API reference for the unauthorized.js special file.
  - [Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata): API documentation for the metadata file conventions.
    - [favicon, icon, and apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons): API Reference for the Favicon, Icon and Apple Icon file conventions.
    - [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest): API Reference for manifest.json file.
    - [opengraph-image and twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image): API Reference for the Open Graph Image and Twitter Image file conventions.
    - [robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots): API Reference for robots.txt file.
    - [sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap): API Reference for the sitemap.xml file.
  - [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config): Learn about how to configure options for Next.js route segments.
    - [dynamicParams](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/dynamicParams): API reference for the dynamicParams route segment config option.
    - [maxDuration](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/maxDuration): API reference for the maxDuration route segment config option.
    - [preferredRegion](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/preferredRegion): API reference for the preferredRegion route segment config option.
    - [runtime](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/runtime): API reference for the runtime route segment config option.
- [Functions](https://nextjs.org/docs/app/api-reference/functions): API Reference for Next.js Functions and Hooks.
  - [after](https://nextjs.org/docs/app/api-reference/functions/after): API Reference for the after function.
  - [cacheLife](https://nextjs.org/docs/app/api-reference/functions/cacheLife): Learn how to use the cacheLife function to set the cache expiration time for a cached function or component.
  - [cacheTag](https://nextjs.org/docs/app/api-reference/functions/cacheTag): Learn how to use the cacheTag function to manage cache invalidation in your Next.js application.
  - [unstable_catchError](https://nextjs.org/docs/app/api-reference/functions/catchError): API Reference for the unstable_catchError function.
  - [connection](https://nextjs.org/docs/app/api-reference/functions/connection): API Reference for the connection function.
  - [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies): API Reference for the cookies function.
  - [draftMode](https://nextjs.org/docs/app/api-reference/functions/draft-mode): API Reference for the draftMode function.
  - [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch): API reference for the extended fetch function.
  - [forbidden](https://nextjs.org/docs/app/api-reference/functions/forbidden): API Reference for the forbidden function.
  - [generateImageMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata): Learn how to generate multiple images in a single Metadata API special file.
  - [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata): Learn how to add Metadata to your Next.js application for improved search engine optimization (SEO) and web shareability.
  - [generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps): Learn how to use the generateSiteMaps function to create multiple sitemaps for your application.
  - [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params): API reference for the generateStaticParams function.
  - [generateViewport](https://nextjs.org/docs/app/api-reference/functions/generate-viewport): API Reference for the generateViewport function.
  - [headers](https://nextjs.org/docs/app/api-reference/functions/headers): API reference for the headers function.
  - [ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response): API Reference for the ImageResponse constructor.
  - [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request): API Reference for NextRequest.
  - [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response): API Reference for NextResponse.
  - [notFound](https://nextjs.org/docs/app/api-reference/functions/not-found): API Reference for the notFound function.
  - [permanentRedirect](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect): API Reference for the permanentRedirect function.
  - [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect): API Reference for the redirect function.
  - [refresh](https://nextjs.org/docs/app/api-reference/functions/refresh): API Reference for the refresh function.
  - [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath): API Reference for the revalidatePath function.
  - [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag): API Reference for the revalidateTag function.
  - [unauthorized](https://nextjs.org/docs/app/api-reference/functions/unauthorized): API Reference for the unauthorized function.
  - [unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache): API Reference for the unstable_cache function.
  - [unstable_noStore](https://nextjs.org/docs/app/api-reference/functions/unstable_noStore): API Reference for the unstable_noStore function.
  - [unstable_rethrow](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow): API Reference for the unstable_rethrow function.
  - [updateTag](https://nextjs.org/docs/app/api-reference/functions/updateTag): API Reference for the updateTag function.
  - [useLinkStatus](https://nextjs.org/docs/app/api-reference/functions/use-link-status): API Reference for the useLinkStatus hook.
  - [useParams](https://nextjs.org/docs/app/api-reference/functions/use-params): API Reference for the useParams hook.
  - [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname): API Reference for the usePathname hook.
  - [useReportWebVitals](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals): API Reference for the useReportWebVitals function.
  - [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router): API reference for the useRouter hook.
  - [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params): API Reference for the useSearchParams hook.
  - [useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment): API Reference for the useSelectedLayoutSegment hook.
  - [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments): API Reference for the useSelectedLayoutSegments hook.
  - [userAgent](https://nextjs.org/docs/app/api-reference/functions/userAgent): The userAgent helper extends the Web Request API with additional properties and methods to interact with the user agent object from the request.
- [Configuration](https://nextjs.org/docs/app/api-reference/config): Learn how to configure Next.js applications.
  - [next.config.js](https://nextjs.org/docs/app/api-reference/config/next-config-js): Learn how to configure your application with next.config.js.
    - [adapterPath](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath): Configure a custom adapter for Next.js to hook into the build process.
    - [allowedDevOrigins](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins): Use `allowedDevOrigins` to configure additional origins that can request the dev server.
    - [appDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/appDir): Enable the App Router to use layouts, streaming, and more.
    - [assetPrefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix): Learn how to use the assetPrefix config option to configure your CDN.
    - [authInterrupts](https://nextjs.org/docs/app/api-reference/config/next-config-js/authInterrupts): Learn how to enable the experimental `authInterrupts` configuration option to use `forbidden` and `unauthorized`.
    - [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath): Use `basePath` to deploy a Next.js application under a sub-path of a domain.
    - [cacheComponents](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents): Learn how to enable the cacheComponents flag in Next.js.
    - [cacheHandlers](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheHandlers): Configure custom cache handlers for use cache directives in Next.js.
    - [cacheLife](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife): Learn how to set up cacheLife configurations in Next.js.
    - [compress](https://nextjs.org/docs/app/api-reference/config/next-config-js/compress): Next.js provides gzip compression to compress rendered content and static files, it only works with the server target. Learn more about it here.
    - [crossOrigin](https://nextjs.org/docs/app/api-reference/config/next-config-js/crossOrigin): Use the `crossOrigin` option to add a crossOrigin tag on the `script` tags generated by `next/script`.
    - [cssChunking](https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking): Use the `cssChunking` option to control how CSS files are chunked in your Next.js application.
    - [deploymentId](https://nextjs.org/docs/app/api-reference/config/next-config-js/deploymentId): Configure a deployment identifier used for version skew protection and cache busting.
    - [devIndicators](https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators): Configuration options for the on-screen indicator that gives context about the current route you're viewing during development.
    - [distDir](https://nextjs.org/docs/app/api-reference/config/next-config-js/distDir): Set a custom build directory to use instead of the default .next directory.
    - [env](https://nextjs.org/docs/app/api-reference/config/next-config-js/env): Learn to add and access environment variables in your Next.js application at build time.
    - [expireTime](https://nextjs.org/docs/app/api-reference/config/next-config-js/expireTime): Customize stale-while-revalidate expire time for ISR enabled pages.
    - [exportPathMap](https://nextjs.org/docs/app/api-reference/config/next-config-js/exportPathMap): Customize the pages that will be exported as HTML files when using `next export`.
    - [generateBuildId](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateBuildId): Configure the build id, which is used to identify the current build in which your application is being served.
    - [generateEtags](https://nextjs.org/docs/app/api-reference/config/next-config-js/generateEtags): Next.js will generate etags for every page by default. Learn more about how to disable etag generation here.
    - [headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers): Add custom HTTP headers to your Next.js app.
    - [htmlLimitedBots](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots): Specify a list of user agents that should receive blocking metadata.
    - [httpAgentOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/httpAgentOptions): Next.js will automatically use HTTP Keep-Alive by default. Learn more about how to disable HTTP Keep-Alive here.
    - [images](https://nextjs.org/docs/app/api-reference/config/next-config-js/images): Custom configuration for the next/image loader
    - [cacheHandler](https://nextjs.org/docs/app/api-reference/config/next-config-js/incrementalCacheHandlerPath): Configure the Next.js cache used for storing and revalidating data to use any external service like Redis, Memcached, or others.
    - [inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss): Enable inline CSS support.
    - [logging](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging): Configure logging behavior in the terminal when running Next.js in development mode, including fetch logging, incoming requests, and forwarding browser console logs to the terminal.
    - [mdxRs](https://nextjs.org/docs/app/api-reference/config/next-config-js/mdxRs): Use the new Rust compiler to compile MDX files in the App Router.
    - [onDemandEntries](https://nextjs.org/docs/app/api-reference/config/next-config-js/onDemandEntries): Configure how Next.js will dispose and keep in memory pages created in development.
    - [optimizePackageImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports): API Reference for optimizePackageImports Next.js Config Option
    - [output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output): Next.js automatically traces which files are needed by each page to allow for easy deployment of your application. Learn how it works here.
    - [pageExtensions](https://nextjs.org/docs/app/api-reference/config/next-config-js/pageExtensions): Extend the default page extensions used by Next.js when resolving pages in the Pages Router.
    - [poweredByHeader](https://nextjs.org/docs/app/api-reference/config/next-config-js/poweredByHeader): Next.js will add the `x-powered-by` header by default. Learn to opt-out of it here.
    - [productionBrowserSourceMaps](https://nextjs.org/docs/app/api-reference/config/next-config-js/productionBrowserSourceMaps): Enables browser source map generation during the production build.
    - [proxyClientMaxBodySize](https://nextjs.org/docs/app/api-reference/config/next-config-js/proxyClientMaxBodySize): Configure the maximum request body size when using proxy.
    - [reactCompiler](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler): Enable the React Compiler to automatically optimize component rendering.
    - [reactMaxHeadersLength](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactMaxHeadersLength): The maximum length of the headers that are emitted by React and added to the response.
    - [reactStrictMode](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactStrictMode): The complete Next.js runtime is now Strict Mode-compliant, learn how to opt-in
    - [redirects](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects): Add redirects to your Next.js app.
    - [rewrites](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites): Add rewrites to your Next.js app.
    - [sassOptions](https://nextjs.org/docs/app/api-reference/config/next-config-js/sassOptions): Configure Sass options.
    - [serverActions](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions): Configure Server Actions behavior in your Next.js application.
    - [serverComponentsHmrCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache): Configure whether fetch responses in Server Components are cached across HMR refresh requests.
    - [serverExternalPackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/serverExternalPackages): Opt-out specific dependencies from the Server Components bundling and use native Node.js `require`.
    - [staleTimes](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes): Learn how to override the invalidation time of the client cache.
    - [staticGeneration\*](https://nextjs.org/docs/app/api-reference/config/next-config-js/staticGeneration): Learn how to configure static generation in your Next.js application.
    - [taint](https://nextjs.org/docs/app/api-reference/config/next-config-js/taint): Enable tainting Objects and Values.
    - [trailingSlash](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash): Configure Next.js pages to resolve with or without a trailing slash.
    - [transpilePackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages): Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`).
    - [turbopack](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack): Configure Next.js with Turbopack-specific options
    - [turbopackFileSystemCache](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackFileSystemCache): Learn how to enable FileSystem Caching for Turbopack builds
    - [turbopack.ignoreIssue](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue): Suppress specific Turbopack errors and warnings from the CLI output and error overlay.
    - [typedRoutes](https://nextjs.org/docs/app/api-reference/config/next-config-js/typedRoutes): Enable support for statically typed links.
    - [typescript](https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript): Configure how Next.js handles TypeScript errors during production builds and specify a custom tsconfig file.
    - [urlImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/urlImports): Configure Next.js to allow importing modules from external URLs.
    - [useLightningcss](https://nextjs.org/docs/app/api-reference/config/next-config-js/useLightningcss): Enable experimental support for Lightning CSS.
    - [viewTransition](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition): Enable ViewTransition API from React in App Router
    - [webpack](https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack): Learn how to customize the webpack config used by Next.js
    - [webVitalsAttribution](https://nextjs.org/docs/app/api-reference/config/next-config-js/webVitalsAttribution): Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues.
  - [TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript): Next.js provides a TypeScript-first development experience for building your React application.
  - [ESLint](https://nextjs.org/docs/app/api-reference/config/eslint): Learn how to use and configure the ESLint plugin to catch common issues and problems in a Next.js application.
- [CLI](https://nextjs.org/docs/app/api-reference/cli): API Reference for the Next.js Command Line Interface (CLI) tools.
  - [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app): Create Next.js apps using one command with the create-next-app CLI.
  - [next CLI](https://nextjs.org/docs/app/api-reference/cli/next): Learn how to run and build your application with the Next.js CLI.
- [Adapters](https://nextjs.org/docs/app/api-reference/adapters): Build deployment adapters for Next.js platforms and infrastructure.
  - [Configuration](https://nextjs.org/docs/app/api-reference/adapters/configuration): Configure `adapterPath` or `NEXT_ADAPTER_PATH` to use a custom deployment adapter.
  - [Creating an Adapter](https://nextjs.org/docs/app/api-reference/adapters/creating-an-adapter): Create an adapter module that implements the `NextAdapter` interface.
  - [API Reference](https://nextjs.org/docs/app/api-reference/adapters/api-reference): Reference for `modifyConfig` and `onBuildComplete` in the `NextAdapter` interface.
  - [Testing Adapters](https://nextjs.org/docs/app/api-reference/adapters/testing-adapters): Validate adapters with the Next.js compatibility test harness and custom lifecycle scripts.
  - [Routing with @next/routing](https://nextjs.org/docs/app/api-reference/adapters/routing-with-next-routing): Use `@next/routing` to apply Next.js route matching behavior in adapters.
  - [Implementing PPR in an Adapter](https://nextjs.org/docs/app/api-reference/adapters/implementing-ppr-in-an-adapter): Implement Partial Prerendering support in an adapter using fallback output and cache hooks.
  - [Runtime Integration](https://nextjs.org/docs/app/api-reference/adapters/runtime-integration): Understand how build-time adapters and runtime cache interfaces work together.
  - [Invoking Entrypoints](https://nextjs.org/docs/app/api-reference/adapters/invoking-entrypoints): Invoke Node.js and Edge build entrypoints with adapter runtime context.
  - [Output Types](https://nextjs.org/docs/app/api-reference/adapters/output-types): Reference for all build output types exposed to adapters.
  - [Routing Information](https://nextjs.org/docs/app/api-reference/adapters/routing-information): Reference for routing phases and route fields exposed in `onBuildComplete`.
  - [Use Cases](https://nextjs.org/docs/app/api-reference/adapters/use-cases): Common patterns and examples for deployment adapter implementations.
- [Edge Runtime](https://nextjs.org/docs/app/api-reference/edge): API Reference for the Edge Runtime.
- [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack): Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.

## [Glossary](https://nextjs.org/docs/app/glossary)

A glossary of common terms used in Next.js.

## [Architecture](https://nextjs.org/docs/architecture)

How Next.js Works

- [Accessibility](https://nextjs.org/docs/architecture/accessibility): The built-in accessibility features of Next.js.
- [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh): Fast Refresh is a hot module reloading experience that gives you instantaneous feedback on edits made to your React components.
- [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler): Next.js Compiler, written in Rust, which transforms and minifies your Next.js application.
- [Supported Browsers](https://nextjs.org/docs/architecture/supported-browsers): Browser support and which JavaScript features are supported by Next.js.

## [Community](https://nextjs.org/docs/community)

Get involved in the Next.js community.

- [Contribution Guide](https://nextjs.org/docs/community/contribution-guide): Learn how to contribute to Next.js Documentation
- [Rspack](https://nextjs.org/docs/community/rspack): Use the `next-rspack` plugin to bundle your Next.js with Rspack.

## Optional

- [Pages Router](https://nextjs.org/docs/pages/llms.txt): Index of all Pages Router documentation
