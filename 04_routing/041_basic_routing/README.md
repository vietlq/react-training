# Sample ReactJS + Bootstrap project with List & ListItem

## References

* https://github.com/reactjs/react-router
* https://github.com/reactjs/react-router-tutorial/tree/master/lessons
* https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#no-default-history
* https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router

## Install & serve via webserver

```
npm install -g http-server
http-server -p 3000
```

## Notes

We have to specify history for routing from version 2.0.0 of react-router:

```
// v1.x
<Router/>

// v2.0.0
// hash history
import { hashHistory } from 'react-router'
<Router history={hashHistory} />

Using Browser (HTML5 pushState) History

As already mentioned, you now use the singleton browserHistory exported from react-router.

// v1.x
import createBrowserHistory from 'history/lib/createBrowserHistory'
<Router history={createBrowserHistory()} />

// v2.0.0
import { browserHistory } from 'react-router'
<Router history={browserHistory} />
Using Custom Histories

// v1.x
import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({ queryKey: false })
<Router history={history} />

// v2.0.0
import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
<Router history={appHistory} />
```
