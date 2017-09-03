import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform, ListView, Keyboard, AsyncStorage } from 'react-native';

import Footer from './footer';
import Header from './header';
import Row from './row';


const filterItems = (filter, items) => {
    return items.filter((item)=>{
        if( filter === 'ALL' ) return true;
        if( filter === 'ACTIVE' ) return !item.complete;
        if( filter === 'COMPLETED' ) return item.complete;
    });
};


class Todo extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            allComplete: false,
            filter: 'ALL',
            value: '',
            items: [],
            loading: true,
            dataSource: ds.cloneWithRows([]),
        };
        this.setSource = this.setSource.bind(this);
        this.handlerAddItem = this.handlerAddItem.bind(this);
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleFilterItem = this.handleFilterItem.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
        this.handleToggleEditing = this.handleToggleEditing.bind(this);
        this.handleUpdateText = this.handleUpdateText.bind(this);
    }

    setSource(items, itemsDataSource, otherState = {}){
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
            ...otherState,
        });
        AsyncStorage.setItem("items", JSON.stringify(items));
    }

    componentWillMount(){
        AsyncStorage.getItem("items").then((json)=>{
            try {
                const items = JSON.parse(json);
                this.setSource(items, items, {loading: false});
            } catch(e){
                alert(e);
                this.setState({
                    loading: false,
                });
            }

        });
    }
    handleToggleAllComplete() {
        const complete = !this.state.allComplete;
        const newItems = this.state.items.map((item) =>({
            ...item,
            complete,
        }));

        this.setSource(newItems, filterItems(this.state.filter, newItems), { allComplete: complete});
        console.table(newItems);
        /*
        this.setState({
            items: newItems,
            allComplete: complete,
        })
        */
    }

    handleUpdateText(key, text) {
        const newItems = this.state.items.map((item)=>{
            if(item.key !== key ) return item;
            return {
                ...item,
                text,
            }
        });
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleToggleEditing(key, editing){
        const newItems = this.state.items.map((item)=>{
            if(item.key !== key ) return item;
            return {
                ...item,
                editing,
            }
        });
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handlerAddItem() {
        if(!this.state.value) return;

        console.log(this.state.value);
        const newItems = [
            ...this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
                complete: false,
            }
        ];

        this.setSource(newItems, filterItems(this.state.filter, newItems), {value: ''});
        /*
        this.setState ({
            items: newItems,
            value: '',
        });
        */
    }
    handleToggleComplete(key, complete){
        const newItems = this.state.items.map((item)=>{
            if( item.key !== key ) return item;
            return {
                ...item,
                complete
            };
        });
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleClearCompleted(){
        const newItems = filterItems('ACTIVE', this.state.items);
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleRemoveItem(key) {
        const newItems = this.state.items.filter((item) => {
            return item.key !== key;
        });
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    handleFilterItem(filter) {
        this.setSource(this.state.items, filterItems(filter, this.state.items), {filter});

    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handlerAddItem}
                    onChange={(value) => this.setState( {value})}
                    onToggleAllComplete={this.handleToggleAllComplete}
                />
                <View style={styles.content}>
                      <ListView
                          style={styles.list}
                          enableEmptySections
                          dataSource={this.state.dataSource}
                          onScroll={()=>Keyboard.dismiss()}
                          renderRow={( {key, ...value} )=>{
                              return (
                                  <Row
                                      key={key}
                                      { ...value}
                                      onUpdate={(text)=>{this.handleUpdateText(key, text)}}
                                      onToggleEdit={(editing)=>{this.handleToggleEditing(key, editing)}}
                                      onComplete={(complete)=> {this.handleToggleComplete(key, complete)}}
                                      onRemove={()=>{this.handleRemoveItem(key)}}
                                  />
                              );

                          }}
                          renderSeparator={(sectionId, rowId)=>{
                              return <View key={rowId} style={styles.separator}/>
                          }}
                      />
                </View>
                <Footer
                    count={filterItems('ACTIVE', this.state.items).length}
                    filter={this.state.filter}
                    onFilter={this.handleFilterItem}
                    onClearCompleted={this.handleClearCompleted}
                />
                { this.state.loading && <View style={styles.loading}>
                    <ActivityIndicator
                        animating={this.state.loading}
                        size='large'
                    />
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        ...Platform.select({
            ios: { paddingTop: 30}
        })
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0, .2)'
    },

    content: {
        flex: 1,
    },
    separator: {
        borderColor: '#F5F5F5',
        borderWidth: 1,
    },

    list: {
        backgroundColor: '#FFF',
    }

});


export default Todo;