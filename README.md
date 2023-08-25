To reproduce the bug:

Run the following:
```bash
npm install
```

Note that the node_modules/@sveltejs/kit/postinstall.js script fails to create the `.sveltekit` directory in our package.
In the `main` branch, this was due to an error. In this case it actually just exits the function early without any runtime
errors because it attempts to find the directory called `packages/*` and fails, and determines that there is no work to
be done.

If you run the postinstall script directly:
```bash
node node_modules/@sveltejs/kit/postinstall.js
```
... you should see no output, showing no errors. If you debug into the file you'll see it skip the body of the code
that is responsible for creating the `.sveltekit` directory.
