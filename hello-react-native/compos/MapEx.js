import React from 'react'
import { View, Text } from 'react-native'
import {Link, Route} from 'react-router-native'

const MapEx = () => {

    const routes = [
        {
            title : "Home",
          path: "/",
          exact: true,
          sidebar: () => <Text >home!</Text>,
          main: () => <Text >Home</Text>
        },
        {
            title:"Bubblegum",
          path: "/bubblegum",
          sidebar: () => <Text >bubblegum!</Text>,
          main: () => <Text >Bubblegum</Text>
        },
        {
            title:"Shoelace",
          path: "/shoelaces",
          sidebar: () => <Text >shoelaces!</Text>,
          main: () => <Text >Shoelaces</Text>
        }
      ];

    return (
        <View>
            {
                routes.map((element, index)=>{
                    return  <Link    key={index} 
                            to={element.path} underlayColor="#f0f4f7">
                            <Text>{element.title}</Text>
                        </Link>
                })
            }
            <Text>-------------------</Text>
        {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}

        </View>
    )
}

export default MapEx
