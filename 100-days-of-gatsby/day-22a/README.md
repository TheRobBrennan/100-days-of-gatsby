# Day 22a - Wednesday, January 22nd, 2020

Now that we have added TypeScript to our Gatsby app in Day 22, let's see how easy it is to add testing capabilities with [Jest](https://jestjs.io).

I did find a great resource - [Testing Components with GraphQL](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/testing-components-with-graphql.md) - which talks about ways to im

## Scratchpad

To create a new Gatsby app, I will use `npx` to create a new [Gatsby](https://www.gatsbyjs.com) app using the latest version of the [Gatsby CLI](https://www.gatsbyjs.com):

```sh
# Generate a new app using the latest version of the Gatsby CLI
$ npx gatsby new app
  # OPTIONAL: Copy the Dockerized Gatsby CLI example to an appropriate folder for a faster starting point
  $ cp -r 100-days-of-gatsby/default-gatsby-cli-app-dockerized 100-days-of-gatsby/day-##

# Navigate to the appropriate example directory
$ cd 100-days-of-gatsby/day-##

# Navigate to the app directory
$ cd app
```

## Add Jest

Using the official example from Gatsby as a guide, we can see we need to install the following dev dependencies:

```json
  "devDependencies": {
    "@testing-library/jest-dom": "^4.0.0",
    "@testing-library/react": "^9.1.1",
    "babel-jest": "^24.0.0",
    "babel-preset-gatsby": "^0.1.6",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.0.0"
  },
```

I'm going to see what happens installing the latest versions of these `devDependencies`.

```sh
# Install Jest
$ npm i -D jest

# Install Babel dependencies
$ npm i -D babel-jest babel-preset-gatsby

# Install the testing library dependencies
$ npm i -D @testing-library/jest-dom @testing-library/react

# Install the identity object proxy
$ npm i -D identity-obj-proxy
```

In order to configure Jest for the project, we need to:

+ Add a `__mocks__` folder that we can use for our unit tests
+ Add the following configuration files in the root of the Gatsby project
  + jest-preprocess.js
  + jest.config.js
  + jest.setup.js
  + loadershim.js

To add enhancements specific for TypeScript, we will follow the [guide](https://www.gatsbyjs.org/docs/unit-testing/#using-typescript) at [https://www.gatsbyjs.org/docs/unit-testing/#using-typescript](https://www.gatsbyjs.org/docs/unit-testing/#using-typescript)

First, we will update `jest.config.js` to run `jest-preprocess` on files in your project’s root directory:

```sh
"^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
```

Second, we will update `jest-preprocess.js` so that `babelOptions` will specify the two presets we need.

```sh
const babelOptions = {
  presets: [`babel-preset-gatsby`, `@babel/preset-typescript`],
}
...
```

At this point, we have Jest configured as advised by the example Gatsby repo. Let's add our `test`, `test:coverage`, and `test:watch` scripts to `package.json` and give it a whirl:

```sh
rob@rb app % npm test

> gatsby-starter-default@0.1.0 test /Users/rob/repos/100-days-of-gatsby/100-days-of-gatsby/day-22a/app
> jest

 PASS  src/pages/index.test.tsx
  Index
    ✓ should have tests written (3ms)
    ✓ contains a greeting (53ms)

  console.log node_modules/@testing-library/react/dist/pure.js:94
    <body>
      <div>
        <div
          style="margin: 1.5px auto 1.5px auto; max-width: 650px; padding-left: 0.75px; padding-right: 0.75px;"
        >
          <h1>
            Hello
             TypeScript world!
          </h1>
          <p>
            This site is named 
            <strong>
              My site
            </strong>
          </p>
          <p>
            Interested in details of this site?
             
            <br />
             
            <a
              href="https://myfakesite.com"
              target="__blank"
            >
              View the source
            </a>
          </p>
        </div>
      </div>
    </body>

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        4.098s
Ran all test suites.
```

Success. Jest has been configured for our project and we have passing tests 💯
