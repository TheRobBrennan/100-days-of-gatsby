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

### Formik tutorial

First, let's review [The Basics](https://jaredpalmer.com/formik/docs/tutorial#the-basics) tutorial.

#### Simple form with a single field

We'll start by creating a simple form component at creating `app/src/components/forms/simple-form-1.js`

#### Simple form with several fields

Let's add a `firstName` and `lastName` field - we'll build on the previous example by creating `app/src/components/forms/simple-form-1.js`

As the tutorial mentions, we should notice the following patterns and symmetry:

+ We reuse the same exact change handler function `handleChange` for each HTML input.
+ We pass an `id` and `name` HTML attribute that matches the property we defined in `initialValues`
+ We access the field's value using the same name (`email` -> `formik.values.email`).

If you're familiar with building forms with plain React, you can think of Formik's handleChange as working like this:

```js
const [values, setValues] = React.useState({});

const handleChange = event => {
  setValues(prevValues => ({
    ...prevValues,
    // we use the name to tell formik which key of `values` to update.
    [event.target.name]: event.target.value
  });
}
```

#### Simple form with validation

This example is `app/src/components/forms/simple-form-3.js`

Next, we'll want to add some validation to our form. Formik keeps track of not only your form's values, but also its error messages and validation. To add validation with JS, let's specify a custom validation function and pass it as `validate` to the `useFormik()` hook. If an error exists, this custom validation function should produce an error object with a matching shape to our `values`/`initialValues`. Again...symmetry...yes...

`formik.errors` is populated via the custom validation function. By default, Formik will validate after each keystroke (change event), each input's blur event, as well as prior to submission. It will only proceed with executing the `onSubmit` function we passed to `useFormik()` if there are no errors (i.e. if our validation function returned {}).

#### Simple form with visited fields

This example is `app/src/components/forms/simple-form-4.js`

While our form works, and our users see each error, it's not a great user experience for them. Since our validation function runs on **each keystroke** against the entire form's `values`, our `errors` object contains _all_ validation errors at any given moment. In our component, we are just checking if an error exists and then immediately showing it to the user. This is awkward since we're going to show error messages for fields that the user hasn't even visited yet. Most of the time, we only want to show a field's error message after our user is done typing in that field.

Like `errors` and `values`, Formik can keep track of which fields have been visited. It stores this information in an object called `touched` that also mirrors the shape of `values`/`initialValues`, but each key can only be a boolean `true`/`false`.

To take advantage of `touched`, we can pass `formik.handleBlur` to each input's `onBlur` prop. This function works similarly to `formik.handleChange` in that it uses the `name` attribute to figure out which field to update.
