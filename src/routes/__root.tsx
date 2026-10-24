import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "ARIA";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "ARIA is your friendly voice assistant for older adults. It reminds them about tablets, confirms before calling family, and answers simple questions.",
      },
      { name: "theme-color", content: "#1B4332" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind:wght@500;600;700&family=Noto+Naskh+Arabic:wght@500;600;700&family=Noto+Sans+Bengali:wght@500;600;700&family=Noto+Sans+Devanagari:wght@500;600;700&family=Noto+Sans+Gujarati:wght@500;600;700&family=Noto+Sans+Gurmukhi:wght@500;600;700&family=Noto+Sans+Kannada:wght@500;600;700&family=Noto+Sans+Malayalam:wght@500;600;700&family=Noto+Sans+Oriya:wght@500;600;700&family=Noto+Sans+Tamil:wght@500;600;700&family=Noto+Sans+Telugu:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
