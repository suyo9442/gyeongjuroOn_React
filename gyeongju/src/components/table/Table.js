import React from 'react';
import './Table.css'

const Table = props => {
    // 머릿말과 tbody내용을 전달해줄거임
    const { headerName, children } = props;
    
    return (
        <table className="common-table">
            <thead>
                {/* 머릿말은 Board.js에서 준비! */}
                <tr>
                    {
                        headerName.map((item, index)=> {
                            return (
                                <td className="common-table-header-column" key={index}>
                                    {item}
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>

            <tbody>
                {
                    children
                }
            </tbody>
        </table>
    )    
}

export default Table;