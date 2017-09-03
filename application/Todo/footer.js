import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filter } = this.props;
        return (
            <View style={styles.container}>
                <Text>{this.props.count} count</Text>
                <View style={styles.filters}>
                    <TouchableOpacity
                        style={[styles.filter, filter === 'ALL' && styles.selected ]}
                        onPress={()=>{this.props.onFilter('ALL')}}>
                        <Text>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filter, filter === 'ACTIVE' && styles.selected ]}
                                      onPress={()=>{this.props.onFilter('ACTIVE')}}>
                        <Text>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.filter, filter === 'COMPLETED' && styles.selected ]}
                                      onPress={()=>{this.props.onFilter('COMPLETED')}}>
                        <Text>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filter} onPress={this.props.onClearCompleted}>
                        <Text>Clear Completed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    filters: {
        flexDirection: 'row',
    },

    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'transparent',
    },

    selected: {
        borderColor: 'rgba(175, 47, 47, .2)',
    },

});


export default Footer;