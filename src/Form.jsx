import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Form extends React.Component {
  state = {
    todo: [],
    firstVal: '',
  }
  handleOnChange = (event) => {
    this.setState({
      firstVal: event.target.value,
    })
  }

  arrAdder = () => {
    this.setState({
      todo: [...this.state.todo, this.state.firstVal],
      firstVal: '',
    })
  }
  doRemover = (e) => {
    let x = e.currentTarget.id
    let list = document.getElementsByTagName('li')
    for (let key of list) {
      if (key.id === x) {
        key.remove()
      }
    }
  }
  render() {
    return (
      <div
        className="todo_list"
        style={{
          border: 'solid black 1px',
          width: '300px',
          margin: 'auto',
          marginTop: '150px',
          padding: '20px',
          borderRadius: '30px',
          minHeight: '400px',
        }}
      >
        <h1>To Do React</h1>

        <input
          type="text"
          onChange={this.handleOnChange}
          value={this.state.firstVal}
          onBlur={this.arrAdder}
        />
        <button onClick={this.arrAdder} style={{ marginLeft: '10px' }}>
          Add
        </button>

        <br />
        <ul
          style={{
            listStyleType: 'none',
            textAlign: 'left',
          }}
        >
          {this.state.todo
            .filter((item) => item.length != 0)
            .map((item, i) => (
              <li
                key={'data' + i}
                id={'data' + i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ display: 'block' }}>{item} </span>
                <span
                  style={{
                    display: 'block',
                    marginRight: '50px',
                    cursor: 'pointer',
                  }}
                  onClick={this.doRemover}
                  id={'data' + i}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </li>
            ))}
        </ul>
        <br />
      </div>
    )
  }
}
export { Form }
