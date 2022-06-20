# Development

## Tools

You must have the following tools installed:

* [Node.js](http://nodejs.org)
* [Yarn](https://yarnpkg.com) (version `1.5.1` or higher)
* [gulp](http://gulpjs.com/) (version `4.x`)

## Build

```
$ yarn install
```

## Install

In order to authenticate and obtain OAuth access tokens for the Hawtio console be authorized to watch for _hawtio-enabled_ <sup>[1](#f1)</sup> applications deployed in your cluster, you have to create an OAuth client that matches localhost development URLs.

#### Cluster mode

```sh
$ oc create -f oauthclient.yml
```

See [OAuth Clients](https://docs.openshift.com/container-platform/latest/authentication/configuring-oauth-clients.html#oauth-default-clients_configuring-oauth-clients) for more information.

#### Namespace mode

```sh
$ oc create -f serviceaccount.yml
```

See [Service Accounts as OAuth Clients](https://docs.openshift.com/container-platform/latest/authentication/using-service-accounts-as-oauth-client.html) for more information.

## Run

#### Cluster mode

```
$ yarn start --master=`oc whoami --show-server` --mode=cluster
```

#### Namespace mode

```
$ yarn start --master=`oc whoami --show-server` --mode=namespace --namespace=`oc project -q`
```

You can access the console at <http://localhost:2772/>.

## Disable Jolokia authentication for deployments (dev only)

In order for a local hawtio-online to detect the hawtio-enabled applications, each application container needs to be configured with the following environment variables:

```
AB_JOLOKIA_AUTH_OPENSHIFT=false
AB_JOLOKIA_PASSWORD_RANDOM=false
AB_JOLOKIA_OPTS=useSslClientAuthentication=false,protocol=https
```

The following script lets you apply the above environment variables to all the deployments with a label `provider=fabric8` in a batch:

```sh
$ ./scripts/disable-jolokia-auth.sh
```

---
