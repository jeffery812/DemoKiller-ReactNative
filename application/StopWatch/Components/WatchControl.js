import React, { Component } from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import styles from '../styles';

class WatchControl extends Component{
    static propTypes = {
        stopWatch: React.PropTypes.func.isRequired,
        clearRecord: React.PropTypes.func.isRequired,
        startWatch: React.PropTypes.func.isRequired,
        addRecord: React.PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            watchOn: false,
            startBtnText: "启动",
            startBtnColor: "#60B644",
            stopBtnText: "计次",
            underlayColor:"#fff",
        };
    }

    _startWatch() {
        if (!this.state.watchOn) {
            this.props.startWatch()
            this.setState({
                startBtnText: "停止",
                startBtnColor: "#ff0044",
                stopBtnText: "计次",
                underlayColor:"#eee",
                watchOn: true
            })
        }else{
            this.props.stopWatch();
            this.setState({
                startBtnText: "启动",
                startBtnColor: "#60B644",
                stopBtnText: "复位",
                underlayColor:"#eee",
                watchOn: false
            })
        }
    }

    _addRecord() {
        if (this.state.watchOn) {
            this.props.addRecord()
        }else{
            this.props.clearRecord();
            this.setState({
                stopBtnText: "计次"
            })
        }
    }

    render() {
        return(
            <View style={styles.watchControlContainer}>
                <View style={{flex:1,alignItems:"flex-start"}}>
                    <TouchableHighlight style={styles.btnStop} underlayColor={this.state.underlayColor} onPress={()=>this._addRecord()}>
                        <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                    <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> this._startWatch()}>
                        <Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default WatchControl;
