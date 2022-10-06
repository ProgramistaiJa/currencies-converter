import { Inputs } from '../Form/Form'

interface HistoryProps {
    exchanges: Inputs[]|null
}

export default function History({exchanges}: HistoryProps): JSX.Element {
    return (
        <>
            <h1>History</h1>
            {
                exchanges && exchanges.map((item, index) => {
                    const amount = item.amount;
                    const result = item.result;
                    return (
                        <div key={index}>{amount} - {result}</div>
                    )
                })
            }
        </>
    )
}