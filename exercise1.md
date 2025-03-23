Let's take for instance a `Flutter` project and say that we want to incorporate 
CI into the project. Flutter is a cross-platform frontend framework similar to
`react-native`. The Flutter framework utilizes the `dart` programming language,
and a wide ecosystem of open source packages exist in `pub.dev` for users to
use.

> **Note**\
> I have worked on production level Flutter projects in the past and am writing
> this in retrospect of my past experience, plus a little bit of Googling.

### Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps?
- **linting** : The package `custom_lint` available for the dart programming
language is the official linting library for flutter. It allows users to
set up custom rules to obey and display errors according to the
customized rules. 


- **testing** : The package `flutter_test` for unit and widget testing and
the package `integration_test` for integration testing are the two libraries
officially supported by the flutter team. However due to limitations the
Flutter community has developed third party libraries to test Flutter
projects, and `leancode/patrol` is one of them. Patrol is a supercharged
integration testing library that is built on top of `integration_test`
to provide further control over automated integration and end-to-end tests,
for example interacting with native widgets and etc. 


- **building** : In flutter projects, the `Dart SDK` takes cares of the
build process. It can be invoked from the command line by typing
`flutter build <options>` where some allowed options are `android`,
`ios`, `web` and many more. Depending on the selction of options the
dart SDK selects the underlying compiler to utilze during build according
to the appropriate platform, e.g. `Gradle` for android, `Xcode` for ios,
`Cmake` for desktop, etc. 

### What alternatives are there to set up the CI besides Jenkins and Github Actions?
One alternative that we used in the past was `AWS codepipeline`. It works
on the AWS cloud and seamlessly integrates with various AWS resources such
as EC2, ECS, ECR, S3 and more. Other alternatives exist, for instance
`CircleCI`, `TravisCI`, etc. 

### Would this setup be better in a self-hosted or a cloud-based environment? 
Such decision is always situational based on many factors, such as the size and
working culture of the team, the business domain, importance of security, etc. In
our case, since we were using AWS codepipeline, there was no option to run CI tasks
locally, all of it was bound to run on the cloud.

Since our development team was physically separated into two groups
and each team was working from different nations, we naturally decided to
host our project in the cloud, on AWS to be specific. We were utilizing quite
a lot of key resources from the AWS ecosystem and the ability to seamlessly
interact with those resources during the CI/CD pipeline proved to be very useful.