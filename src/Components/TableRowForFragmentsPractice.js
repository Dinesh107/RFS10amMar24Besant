import React, { Component } from 'react'
import TableColumnFragmentsPractice from './TableColumnFragmentsPractice'

class TableRowForFragmentsPractice extends Component {
  render() {
    return (
      <table>
        <tr>
            <TableColumnFragmentsPractice/>
        </tr>
      </table>
    )
  }
}

export default TableRowForFragmentsPractice