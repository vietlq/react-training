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
```
