
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class WatchFace extends Component{
    static propTypes = {
        sectionTime: React.PropTypes.string.isRequired,
        totalTime: React.PropTypes.string.isRequired,
    };

    render() {
        return(
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        )
    }
}


export default WatchFace;
