import React from "react";
import "./App.css";
import { useState } from 'react';
import { MySnackbar } from "../components/Snackbar"

function ControlButton(props) {
    let symbol = ""
    let elClass = "button"
    if (props.type === "addDay") {
        elClass += " button--days"
        symbol = <MySnackbar del={false} addDay={props.countDay}> <i className="far fa-plus-square"></i> </MySnackbar>
        return <div className={elClass} onClick={props.action}>{symbol}</div>
    }
    if (props.type === "addTask") { symbol = <i className="fas fa-marker"></i>; elClass += " button--add_task" }
    if (props.type === "delDay") {
        elClass += " button--task_page"
        symbol = <i className="far fa-trash-alt"></i>
    }
    if (props.type === "delTask") { symbol = <i className="far fa-trash-alt"></i>; elClass += " button--task" }
    if (props.type === "editTask") { symbol = <i className="far fa-edit"></i>; elClass += " button--task" }
    if (props.type === "editSave") { symbol = "OK"; elClass += " button--task" }
    return <button className={elClass} onClick={props.action}>{symbol}</button>
}

function Wrapper(props) {
    let parseList;
    if (localStorage.length > 0) parseList = JSON.parse(localStorage.getItem("days"))
    else parseList = props.list
    const [dayNumber, setDayNumber] = useState(props.countDay)
    const [day, setDay] = useState(1)
    const [deletedDay, setDeletedDay] = useState(null)
    const [page, setPage] = useState(parseList)
    const [index, setIndex] = useState(0)
    const [list, setList] = useState(page[index].page);
    localStorage.setItem("days", JSON.stringify(page))
    function actionAddTask() {
        if (inputValue.length === 0) alert("Type text of new task please")
        else {
            count++
            localStorage.setItem('count', count)
            let o = {
                text: inputValue,
                done: false,
                id: count,
            }
            page[index].page.unshift(o)
            let newList = page[index].page.map((e) => e)
            setList(newList)
        }
    }
    function actionDeleteTask(key) {
        list.forEach(element => {
            if (element.id === key) page[index].page.splice(page[index].page.indexOf(element), 1)
        });
        setList(page[index].page.map((e) => e))
    }
    function click(key) {
        list.forEach(element => {
            if (element.id === key) element.done = !element.done
        });
        setList(list.map((e) => e))
    }
    function actionAddDay() {
        if (localStorage.countDay) setDayNumber(Number(localStorage.countDay) + 2)
        countDay++
        localStorage.setItem('countDay', countDay)
        let o = {
            day: countDay + 1,
            page: []
        }
        page.push(o)
        let newList = page.map((e) => e)
        setPage(newList)
    }
    function actionSetDay(day) {
        let indexOf;
        page.forEach(element => {
            if (element.day === day) {
                indexOf = page.indexOf(element)
                setList(element.page)
            }
        });
        setIndex(indexOf)
        setDay(day)

    }
    function actionDeleteDay() {
        setDeletedDay(day)
        let indexOf; // deleted item
        let newList = []
        page.forEach(element => {
            if (element.day !== day) newList.push(element)
            else indexOf = page.indexOf(element)
        });
        if (indexOf === 0 && page.length === 2) {
            setPage(newList)
            setIndex(0)
            setDay(page[1].day)
            setList(page[1].page)

        }
        if (indexOf === 0 && page.length > 2) {
            setPage(newList)
            setIndex(1)
            setDay(page[1].day)
            setList(page[1].page)

        }
        if (indexOf === page.length - 1 && page.length > 1) {
            setIndex(indexOf - 1)
            setPage(newList)
            setDay(page[indexOf - 1].day)
            setList(page[indexOf - 1].page)
        }
        if (indexOf > 0 && indexOf < page.length - 1) {
            setIndex(indexOf - 1)
            setPage(newList)
            setDay(page[indexOf - 1].day)
            setList(page[indexOf - 1].page)
        }


    }
    function actionEditTask(key, text) {
        page.forEach(element => {
            element.page.forEach(e => {
                if (e.id === key) e.text = text;
            })
        });
        let renderList = page.map((e) => e)
        setPage(renderList)
    }
    return <div className="wrapper">
        <DayList page={page} addDay={actionAddDay} setDay={actionSetDay} day={day} countDay={dayNumber} />
        <TaskPage list={list} del={actionDeleteTask} click={click}
            addTask={actionAddTask} delDay={actionDeleteDay} day={day} edit={actionEditTask} deletedDay={deletedDay} />
    </div>
}

function DayList(props) {
    function setDay(day) {
        props.setDay(day)
    }
    function addDay() {
        props.addDay()
    }

    let renderDay = props.page.map((e) => {
        if (e.day === props.day) return <Day text={e.day} key={e.day} day={e.day} setDay={setDay} active={true} />
        return <Day text={e.day} key={e.day} day={e.day} setDay={setDay} />
    })

    return (
        <div className="day-list">
            <ControlButton type="addDay" action={addDay} countDay={props.countDay} />
            {renderDay}

        </div>

    );
}



function Day(props) {
    let dayClass = "day"
    if (props.active) dayClass += " day--active"
    function setDay(day) {
        props.setDay(props.day)
    }
    return <div className={dayClass} onClick={setDay}>
        <div className="day__line day__line--sub1"></div>
        <div className="day__line day__line--sub2"></div>
        <div className="day__line"></div>
        {props.text} <span className="day__sub">DAY</span>
    </div>
}
function TaskPage(props) {
    function delDay() {
        props.delDay(props.day)
    }
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
    function actionEdit(key, text) {
        props.edit(key, text)
    }
    return <div className="task-page">

        <MySnackbar del={true} delDay={props.deletedDay}><ControlButton type="delDay" action={delDay} /></MySnackbar>
        <div className="task-page__inner">
            <h1 className="task-page__title">Day {props.day}. Task list:</h1>
            <div><input type="text" className="task-page__input" onChange={valueReader} placeholder="What is your focus today?" />
                <ControlButton type="addTask" action={actionAddTask} /> </div>
            <TaskList list={props.list} del={actionDeleteTask} click={click} edit={actionEdit} />
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
    function actionEdit(key, text) {
        props.edit(key, text)
    }
    let renderList = props.list.map((e) => {
        return <Task text={e.text} done={e.done} key={e.id} del={actionDeleteTask} id={e.id} click={click} edit={actionEdit} />
    })
    if (props.list.length === 0) return <div className="task-page__title">Add some tasks!</div>
    else return <div className="task-page__task-list">
        {renderList}
    </div>
}
function Task(props) {
    const [editor, setEditor] = useState(0)
    const [text, setText] = useState(props.text)
    function actionDelete() {
        props.del(props.id)
    }
    function click() {
        props.click(props.id)
    }
    function actionEdit() {
        props.edit(props.id, text)
        setEditor(!editor)
    }
    function actionChangeText(e) {
        setText(e.target.value)
    }
    let checkClass = "task-page__check"
    let elClass = "task-page__task";
    if (props.done) checkClass += " task-page__check--active"
    if (props.done) elClass += " task-page__task--active";
    if (editor && !props.done) {
        return <div className="task-page__task-wrapper">
            <div className={elClass}>
                <div className={checkClass}> </div>
                <input type="text" onChange={actionChangeText} value={text} className="task-page__task-input" />
            </div>
            <div className="button-block">
                <ControlButton type="editSave" action={actionEdit} />
            </div>
        </div>
    }
    else return <div className="task-page__task-wrapper">
        <div className={elClass} onClick={click}>
            <div className={checkClass}> </div>
            {props.text}
        </div>
        <div className="button-block">
            <ControlButton type="editTask" action={actionEdit} />
            <ControlButton type="delTask" action={actionDelete} />
        </div>
    </div>
}
export function App() {
    return <Wrapper list={testList} countDay={countDay} />
}

let testList = [
    {
        day: 1,
        page: [{
            text: "Complete application", done: true, id: "d1_0",
        },
        ]
    },
    {
        day: 2,
        page: []
    },
    {
        day: 3,
        page: []
    }
]
let inputValue = "";

let count;
let countDay;
if (localStorage.getItem("count") === null) count = 2
else count = Number(localStorage.getItem('count'))
if (localStorage.getItem("countDay") === null) countDay = 2
else countDay = Number(localStorage.getItem('countDay'))



