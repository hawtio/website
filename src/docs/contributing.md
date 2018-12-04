---
title: "Contributor Guide"
---

## What do I need to know to help?

If you are looking to help to with a code contribution our project uses Typescript, AngularJS, and Java. If you don't feel ready to make a code contribution yet, no problem! You can also check out the [documentation issues](https://github.com/hawtio/website/issues).

If you are interested in making a code contribution and would like to learn more about the technologies that we use, check out the list below:

- [PatternFly](https://www.patternfly.org/)
- [Angular PatternFly](https://www.patternfly.org/angular-patternfly)
- [UI Bootstrap](https://angular-ui.github.io/bootstrap)
- [AngularJS Styleguide](https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript)
- [Jolokia](https://jolokia.org)
- [JMX](https://docs.oracle.com/en/java/javase/11/jmx/java-management-extensions-jmx-user-guide.html)

## How do I make a contribution?

Never made an open source contribution before? Wondering how contributions work in the in our project? Here's a quick rundown:

1. Find an issue that you are interested in addressing or a feature that you would like to add.
1. Fork the repository associated with the issue to your local GitHub account.
1. Clone your fork to your local machine using `git clone git://github.com/<your username>/<repository name>.git`.
1. Add the Hawtio remote repository using `git remote add upstream git://github.com/hawtio/<repository name>.git`.
1. Create a new branch for your fix using `git checkout -b <branch-name>`.
1. Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
1. Commit your changes using a descriptive commit message that follows AngularJS [commit message conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).
1. Push the changes to the remote repository using `git push origin <branch-name>`.
1. Submit a pull request to the upstream repository.
1. Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Added more log outputting to resolve #4352".
1. In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
1. Wait for the pull request to be reviewed by a maintainer.
1. Make changes to the pull request if the reviewing maintainer recommends them.
1. Celebrate your success after your pull request is merged!
