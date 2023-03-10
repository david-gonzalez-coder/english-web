
const Table = ({content}) => {
    return (
        <table className=" rounded-lg  neo overflow-hidden w-full mb-[20px]">
            <thead>
                <tr>
                    {content.columns.map(col => 
                        <th key={col} className="bg-[#EEEEEE] text-left p-5 ">{col}</th>
                    )}
                </tr>
            </thead>
            
            <tbody>
                {content.rows.map(row=>
                    <tr key={row} className="p-4 ">
                        {row.map(cell => <td key={cell} className="p-3 px-5 bg-white border border-l-0 border-b-0">{cell}</td>)}
                    </tr>
                )}
            </tbody>
        </table>
    )
}
export default Table

