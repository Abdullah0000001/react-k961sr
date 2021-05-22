import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const items = [
    { text: 'Home', selected: true, route: '/' },
    { text: 'Products', route: '/products' },
    { text: 'About', route: '/about' }
];
class DrawerContainer extends React.Component {
    state = { expanded: true }

    handleClick = () => {
        this.setState(e => ({ expanded: !e.expanded }));
    };

    onSelect = (e) => {
        this.props.history.push(e.itemTarget.props.route);
    }

    setSelectedItem = (pathName) => {
        let currentPath = items.find(item => item.route === pathName);
        if (currentPath.text) {
            return currentPath.text;
        }
    }

    render() {
        let selected = this.setSelectedItem(this.props.location.pathname);
        return (
          <div>
            <div className="custom-toolbar">
              <Button icon="menu" look="flat" onClick={this.handleClick} />
              <span className="title">Navigational drawer</span>
            </div>
            <Drawer
              expanded={this.state.expanded}
              position={'start'}
              mode={'push'}
              width={120}
              items={items.map(
                        (item) => ({ ...item, selected: item.text === selected }))}
              onSelect={this.onSelect}
                >
              <DrawerContent>
                {this.props.children}
              </DrawerContent>
            </Drawer>
          </div>
        );
    }
}

export default withRouter(DrawerContainer);
