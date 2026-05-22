import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" && repoName.length > 0;

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      poweredByHeader: false,
      output: "export",
      trailingSlash: true,
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
      images: {
        unoptimized: true,
      },
    }
  : {
      poweredByHeader: false,
      async headers() {
        return [
          {
            source: "/(.*)",
            headers: [
              {
                key: "Content-Security-Policy",
                value: [
                  "default-src 'self'",
                  "script-src 'self'",
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: https:",
                  "font-src 'self' https://fonts.gstatic.com",
                  "connect-src 'self'",
                  "frame-ancestors 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "object-src 'none'",
                  "upgrade-insecure-requests",
                ].join("; "),
              },
              {
                key: "Referrer-Policy",
                value: "strict-origin-when-cross-origin",
              },
              {
                key: "X-Content-Type-Options",
                value: "nosniff",
              },
              {
                key: "X-Frame-Options",
                value: "DENY",
              },
              {
                key: "Permissions-Policy",
                value: "camera=(), geolocation=(), microphone=()",
              },
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin",
              },
              {
                key: "Strict-Transport-Security",
                value: "max-age=31536000; includeSubDomains; preload",
              },
            ],
          },
        ];
      },
    };

export default nextConfig;
