const repoPath = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const repositoryOwner = repoPath[0];
const repositoryName = repoPath[1];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.GITHUB_ACTIONS === "true" &&
  repositoryOwner &&
  repositoryName
    ? `https://${repositoryOwner}.github.io/${repositoryName}`
    : "https://hlchs.example.org");
