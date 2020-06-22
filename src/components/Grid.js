import React, { Component } from 'react';
import Single from "./Single"

class Grid extends Component {
    renderList() {
        return this.props.items.map((item, i) => (
            <Single key={ i+1 } item={ item } deleteData={this.deleteData.bind(this)} />
        ));
    }

    deleteData(docID){
        this.props.deleteData(docID);
    }
    render() { 
        return (
            <div>
                <div className="row">
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Grid;