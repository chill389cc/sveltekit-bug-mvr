To reproduce the bug:

Run the following:
```bash
npm install
```

Note that the node_modules/@sveltejs/kit/postinstall.js script fails to create the `.sveltekit` directory in our package.

To see why, run the postinstall script directly:
```bash
node node_modules/@sveltejs/kit/postinstall.js
```

You should see an error similar to this one:
```
Error: ENOENT: no such file or directory, chdir 'C:\Users\cah34\Code\Personal\sveltekit-bug-mvr' -> 'C:\Users\cah34\Code
\Personal\sveltekit-bug-mvr\.eslintignore'
    at wrappedChdir (node:internal/bootstrap/switches/does_own_process_state:112:14)
    at process.chdir (node:internal/worker:102:5)
    at file:///C:/Users/cah34/Code/Personal/sveltekit-bug-mvr/node_modules/@sveltejs/kit/postinstall.js:28:12 {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'chdir',
  path: 'C:\\Users\\cah34\\Code\\Personal\\sveltekit-bug-mvr',
  dest: 'C:\\Users\\cah34\\Code\\Personal\\sveltekit-bug-mvr\\.eslintignore'
}
```
It's pretty clear what the problem is here. I would love to know what the project structure looked like when this code
was functioning correctly.
