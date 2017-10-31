import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
const routes = [
  { path: '/pageun',
    component: PageUn
  },
  { path: '/pagedeux',
    component: PageDeux,
    routes: [
      { path: '/pagedeux/subpageun',
        component: SubPageUn
      },
      { path: '/pagedeux/subpagedeux',
        component: SubPageDeux
      }
    ]
  }
];
export default function Routes(){

    return (<NativeRouter>
            <View>
                <View>
                    <Link
                        to="/pageun"
                        underlayColor='#f0f4f7'>
                    <Text>page un</Text>
                    </Link>
                    <Link
                        to="/pagedeux"
                        underlayColor='#f0f4f7'>
                    <Text>page deux</Text>
                    </Link>
                </View>
                <Route exact path="/" component={PageUn}/>
      <Route path="/pageun" component={PageUn}/>
      <Route path="/pagedeux" component={PageDeux}/>
            </View>
        </NativeRouter>);
}
