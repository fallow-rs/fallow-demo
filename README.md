# fallow demo project

This is the small project that the [fallow tutorials](https://fallow.tools/docs/quickstart/) use. It is a TypeScript shop with 16 files. When you run fallow here, you get the same output as the tutorial pages show.

[fallow](https://github.com/fallow-rs/fallow) is a codebase analyzer for JavaScript and TypeScript. It finds unused code, duplicated code and complex functions.

## Use it

You need Node.js 22 or later.

```bash
git clone https://github.com/fallow-rs/fallow-demo.git
cd fallow-demo
npm install
npx fallow
```

Then follow the tutorials in this order:

1. [First run](https://fallow.tools/docs/quickstart/): read the report.
2. [Fix your first findings](https://fallow.tools/docs/start/first-cleanup/): check a finding, remove it, and run fallow again.
3. [Check each pull request](https://fallow.tools/docs/start/first-ci/): the branch `cart-report` holds the change of the pull request in that tutorial.

## The problems are there on purpose

The project has these problems, so that the report has one finding of each kind:

- a file that no other file imports;
- exports and a dependency that no code uses;
- a package that the code imports and `package.json` does not list;
- two files with a copy of one block;
- one function that is too complex.

Do not send a pull request that fixes them. The tutorials need them.

## License

MIT. See [LICENSE](LICENSE).
