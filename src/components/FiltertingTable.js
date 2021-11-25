import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../data/paciente-data.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'



export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])


  const {
    getTableBodyProps,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter
  )

  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table>
        <thead>
        </thead>
        <tbody >
         <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
       
        </tbody>
        
       
      </table>
    </>
  )
}
