# Yammr - Frontend

An anonymous social platform for posting text, pictures, and "vine-style" videos, exclusively for college students. Students sign up for the app using their `.edu` email address and are completely anonymous to each other.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a production system.

### Prerequisites

What things you need to install the software and how to install them

```
Node LTS and above
npm
iOS/Android emulator
```

\*A MacOS system is required for iOS development, check out [the React Native doc](https://facebook.github.io/react-native/docs/getting-started.html) for more information

### Installing

A step by step series of examples that tell you how to get a development env running

`.env` file

```
API_ENDPOINT
```

Follow the steps on the React Native document to get started, [those can be found here](https://facebook.github.io/react-native/docs/getting-started.html)

Install and run using npm

```
npm install
npm start
```

Now install using expo

You should be good to go if you see the following output

```
 › Press a to open Android device or emulator.
 › Press s to send the app URL to your phone number or email address
 › Press q to display QR code.
 › Press r to restart packager, or R to restart packager and clear cache.
 › Press d to toggle development mode. (current mode: development)
```

## Running the tests

We use Jest for our unit tests

There is also CI that needs to be passing before a branch can be merged

Run the tests using `npm test`

### Coding Style

We use Visual Studio Code with the [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) plugins

We also have a dedicated ESLint and Prettier files to automatically conform to our coding styles

There is a pre-hook that will format your documents after they are staged for commiting

## Deployment

We will be using Fastlane when the current feature set is ready

## Built With

- [React Native](https://facebook.github.io/react-native/) - The cross platform framework

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us

## Versioning

We use [SemVer](http://semver.org/) for versioning

## Authors

- **Andrew Henry** - _Initial work_ - [AJHenry](https://github.com/AJHenry)

See also the list of [contributors](https://github.com/yammr/yammr-frontend/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
