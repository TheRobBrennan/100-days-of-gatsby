# Day 26 - Sunday, January 26th, 2020

Today's focus is on exploring [Formik](https://jaredpalmer.com/formik) for building forms in React:

![screenshots/screenshot-00.png](screenshots/screenshot-00.png)

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

## Getting started

For this example, we're going to need to install the `formik` module to our app:

```sh
# Navigate to our app
$ cd 100-days-of-gatsby/day-26/app

# Add our formik dependency
$ npm i formik
```

### Formik tutorials

First, let's review [The Basics](https://jaredpalmer.com/formik/docs/tutorial#the-basics) tutorial.

We'll start by creating a simple form component:

```js
// app/src/components/forms/simple-form.js
import React from 'react';
import { useFormik } from 'formik';

const SimpleForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm
```
