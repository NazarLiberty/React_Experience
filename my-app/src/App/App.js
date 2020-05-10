import React from "react";
import "./App.css";
import { useState } from 'react';

let inputValue = "";
let count = 2;
function Button(props) {
    let symbol = ""
    let elClass = "button"
    if (props.type === "addDay") {
        elClass += " button--days"
        symbol = <i className="far fa-plus-square"></i>
    }
    if (props.type === "addTask") { symbol = <i className="fas fa-marker"></i>; elClass += " button--add_task" }
    if (props.type === "delDay") {
        elClass += " button--task_page"
        symbol = <i className="far fa-trash-alt"></i>
    }
    if (props.type === "delTask") { symbol = <i className="far fa-trash-alt"></i>; elClass += " button--task" }
    if (props.type === "editTask") { symbol = <i className="far fa-edit"></i>; elClass += " button--task" }
    return <button className={elClass} onClick={props.action}>{symbol}</button>
}
function Wrapper(props) {
    function actionAddTask() {
        if (inputValue.length === 0) alert("Type text of new task please")
        else {
            count++
            let o = {
                text: inputValue,
                done: false,
                id: count,
            }
            list.unshift(o)
            let newList = list.map((e) => e)
            setList(newList)
        }
    }
    function actionDeleteTask(key) {
        list.forEach(element => {
            if (element.id === key) list.splice(list.indexOf(element), 1)
        });
        setList(list.map((e) => e))
    }
    function click(key) {
        list.forEach(element => {
            if (element.id === key) element.done = !element.done
        });
        setList(list.map((e) => e))
    }
    const [list, setList] = useState(props.list[0].page);
    return <div className="wrapper">
        <DayList />
        <TaskPage list={list} del={actionDeleteTask} click={click} addTask={actionAddTask} />
    </div>
}

function DayList(props) {

    return <div className="day-list">
        <Button type="addDay" />
        <Day text="1" />
        <Day text="2" />
        <Day text="3" />
    </div>
}
function Day(props) {
    return <div className="day">
        <div className="day__line day__line--sub1"></div>
        <div className="day__line day__line--sub2"></div>
        <div className="day__line"></div>
        {props.text} <span className="day__sub">DAY</span>
    </div>
}
function TaskPage(props) {
    function actionAddTask(key) {
        props.addTask(key)
    }
    function actionDeleteTask(key) {
        props.del(key)
    }
    function click(key) {
        props.click(key)
    }
    function valueReader(e) {
        inputValue = e.target.value
    }
    return <div className="task-page">
        <Button type="delDay" />
        <div className="task-page__inner">
            <h1 className="task-page__title">Hello World</h1>
            <div><input type="text" className="task-page__input" onChange={valueReader} />
                <Button type="addTask" action={actionAddTask} /> </div>
            <TaskList list={props.list} del={actionDeleteTask} click={click} />
        </div>
    </div>
}
function TaskList(props) {
    function actionDeleteTask(key) {
        props.del(key)
    }
    function click(key) {
        props.click(key)
    }
    let renderList = props.list.map((e) => {
        return <Task text={e.text} done={e.done} key={e.id} del={actionDeleteTask} id={e.id} click={click} />
    })
    return <div className="task-page__task-list">
        {renderList}
        {/* <Task text="test" del={actionDeleteTask} key="2" id="2" /> */}
    </div>
}
function Task(props) {
    function actionDelete() {
        props.del(props.id)
    }
    function click() {
        props.click(props.id)
    }
    let checkClass = "task-page__check"
    let elClass = "task-page__task";
    if (props.done) checkClass += " task-page__check--active"
    if (props.done) elClass += " task-page__task--active";
    return <div className="task-page__task-wrapper">
        <div className={elClass} onClick={click}>
            <div className={checkClass}> </div>
            {props.text}
        </div>
        <div className="button-block">
            <Button type="editTask" />
            <Button type="delTask" action={actionDelete} />
        </div>
    </div>
}
export function App() {

    return <Wrapper list={testList} />

}

let testList = [
    {
        day: 1,
        page: [{
            text: "Work!", done: true, id: 0,
        },
        {
            text: "Pork!", done: false, id: 1,
        }]
    }
]
