# Panora Documentation

<https://panoratech.github.io/Panora/>

### Installation

```
pnpm install
```

### Build

```
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Local Development

```
pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.