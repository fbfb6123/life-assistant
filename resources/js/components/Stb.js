import React, { Component } from 'react';


//RenderRowsの機能実装
function RenderRows(props){
    //mapでループしている（for相当）
    return props.people.map(person => {
        return (
            <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
                <td><button className="btn btn-secondary">完了</button></td>
            </tr>
        );
    });
}

class Stb extends Component {

    //コンストラクタ内でstateにtodosを宣言
    constructor(){
        super();
        this.state = {
            people: []
        }
    }

    //コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount(){
        axios
            .get('api/budget/getTodos')
            .then((res) => {
                //todosを更新（描画がかかる）
                this.setState({
                    people: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    //テーブルの骨組みを描画し、行の描画はRenderRowsに任せる（その際、todosを渡す）
    render() {
        return (
            <React.Fragment>
                <table className="table mt-5">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>タスク</th>
                        <th>完了</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* 行の描画 */}
                    <RenderRows
                        people={this.state.people}
                    />
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Stb;
