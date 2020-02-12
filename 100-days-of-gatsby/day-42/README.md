# Day 42 - Tuesday, February 11th, 2020

[Stripe](https://stripe.com) will be the payment processor of choice I want to use for my projects. One piece I was curious about was evaluating possible options for off-the-shelf shopping carts that could integrate with [Stripe](https://stripe.com).

## Snipcart

One option that popped up was [Snipcart](https://snipcart.com) - offering the ability to add a shopping cart to any website - as mentioned in [E-Commerce for React Developers [w/ Gatsby Tutorial]](https://snipcart.com/blog/react-ecommerce-gatsby-tutorial)

While this does work as expected, I am not too thrilled that it requires jQuery as a dependency. This is functional, and a great way to get started quickly and easily - but I'm not sure this is the path I want to go down for my production sites.

### Scratchpad

To create a new Gatsby app, I will use `npx` to create a new [Gatsby](https://www.gatsbyjs.com) app using the latest version of the [Gatsby CLI](https://www.gatsbyjs.com):

```sh
# Generate a new app using the latest version of the Gatsby CLI and the Gatsby Starter Blog template
$ npx gatsby new app https://github.com/gatsbyjs/gatsby-starter-blog

# Navigate to the app directory
$ cd app

# Start our site in development mode
$ npm run start
```
