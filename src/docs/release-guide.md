---
title: "Release Guide"
---

The following walks through how we make a release.

### Prepare for a release

Before releasing a version, update the [changelog](https://github.com/hawtio/hawtio/blob/master/CHANGES.md) with the fixes/enhancements that made it into the release. Also mention any major changes in the changelog.

### Release a Hawtio version

Firstly, pop onto [IRC](/community/index.html) and let folks know you're about to cut a release.

Now pull and make sure things build locally fine first :)

    mvn clean install

Then use the `bin/release` script to release a new version, for example `2.5.0`:

    ./bin/release 2.5.0 2.6-SNAPSHOT

When the script is done without any errors, the release tag (e.g. `hawtio-2.5.0`) should be pushed to the GitHub repo. Go to the GitHub [releases](https://github.com/hawtio/hawtio/releases) page and write a new release note with the published tag (`hawtio-2.5.0`).

Finally, tweet the hawt stuff via [@hawtio](https://twitter.com/hawtio)!

### Update the web site

Now go to [hawtio/website](https://github.com/hawtio/website) and update the web site and documentation for the new release version (e.g. `2.4.0` -> `2.5.0`):

    cd website/
    grep "2[.]4[.]0" -r src/ -l | xargs sed -i 's/2.4.0/2.5.0/g'

Check the batch changes before committing them.

    git add src/
    git commit -m 'docs: upgrade Hawtio version to 2.5.0'

Then publish the web site:

    yarn deploy
    
    git add docs/
    git commit -m 'chore: deploy website'
    git push origin master

