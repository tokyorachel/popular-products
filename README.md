# Popular Products Mini App

## Local Set-up

Tested on node v12.5.0.

From the project's root directory, run `npm i` to install dependencies.

`npm run start` starts the webpack-dev-server on [localhost:8080](localhost:8080).

`npm run build` will bundle the files into a `dist` folder. From within that folder, you can serve the files using `python -m SimpleHTTPServer` or open the **index.html** file directly in your browser.

`npm run test` will run unit tests using Jest.

## Components

For this project, the UI component hierarchy was intentionally kept relatively simple.

- `<ProductsList>`
    - `<Project>`
        - `<UpvoteButton>`

`<Projects>` could certainly be broken down into smaller pieces -- from the perspective of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), the `<Project>` component is on the order of a molecule, and we could break out some elements and create smaller components closer to the atomic level, like the submitter information for example, or the button and count display.

However, without being certain that those smaller elements would be reused in other places in the app _and_ used in places outside of the `<Product>` component, it seemed an unnecessary abstraction at this stage. As they exist in this project now, these pieces all function together as a conceptual whole and are not reused anywhere.

The `<UpvoteButton>`, however, seemed a sensible abstraction because it has functions as an interactive element and isn't merely presentational.

Likewise, I relied on the `useContext` and `useReducer` hooks to pull state management out of the presentational components. Maintaining strong separation of concerns makes it easier to unit test the application, as well as make it easier to add new functionality without having to spend time refactor a tightly coupled component.
