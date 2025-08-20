# njs-guy's Astro Template

A nice and simple Astro template to let me (or anyone else)
quickly whip up new projects.

## Features

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [PNPM](https://pnpm.io/) for package management
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
  with some sensible defaults.
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [Vitest](https://vitest.dev/) for testing

## Coding style

This ESLint and Prettier config uses double-quotes and semicolons.

```ts
const msg = "wow";
```

## Installation

You can download this repo as a .zip or clone it with git,
but a cleaner approach is with [degit](https://github.com/Rich-Harris/degit).

```bash
npx degit njs-templates/astro new-project
cd new-project
pnpm i
```

## Recommended IDE

This was meant to be used with VS Code, but it should work with any editor.
You'll be prompted to install any recommended extensions that aren't installed.
If no one on your team is using VS Code, just delete the `.vscode/` folder.

## Next steps

- [ ] Run `pnpm dev` to start Astro and make sure everything's working.
- [ ] Run `pnpm test` to make sure Vitest is working.
- [ ] In `package.json`, change the project name and version.
- [ ] Delete the following: - [ ] `LICENSE.txt` from the root of the directory. - If your project still uses an MIT License, just edit the author and year. - [ ] The boilerplate from `src/components`,
      `src/assets` and `src/scripts`. - [ ] `pnpm-lock.yaml` if you want to use a different package manager. - [ ] The `.git/` folder if you cloned this repo.
- [ ] Run a `git init` to start tracking changes.

After all that, do whatever. This code is yours now.
Credit is appreciated but not needed.
