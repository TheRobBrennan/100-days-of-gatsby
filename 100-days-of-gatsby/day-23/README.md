# Day 23 - Thursday, January 23rd, 2020

After experiencing some surprising behavior with writing tests for the simple app I created yesterday, I wanted to really dive into what some of the gotchas were.

Ultimately I'd love to incorporate this into a blog post at some point, but currently there are way too many other pressing priorities to give that draft an estimated timeline.

## Thinking out loud

First, let's verify that our app is in a happy state.

After you have started the application, open a terminal window so that you can run Jest in watch mode:

```sh
$ npm run test:watch
```

Assuming you have started the application, please visit [http://localhost:8000](http://localhost:8000) and inspect the link `View the source`.

You should see something like:

![screenshots/screenshot-00.png](screenshots/screenshot-00.png)
