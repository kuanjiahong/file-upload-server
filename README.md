# File Upload Server

A server that receive file uploads

## Getting started

First install packages

```bash
npm install
```

Second, run development server

```bash
npm run dev
```

Visit the server at [http://localhost:8080](http://localhost:8080)

## Deployment

### At your local machine:

1. Compile `.ts` files to `.js` files by running `npm run build`. Built files will be in `dist` folder.

2. Move `package.json` and the `dist` folder to your server machine. You can do it via File Transfer Protocol (FTP), `scp` command or any other way that is feasible.

### At your server machine:

1. Ensure `node` is installed. Refer to [node website](https://nodejs.org/en) on how to install.

2. Set `NODE_ENV=production`

3. Install node modules but ignore `devDependencies`.

```bash
npm install --omit=dev
```

4. Create a `uploads` directory

5. Start server `node index.js`
