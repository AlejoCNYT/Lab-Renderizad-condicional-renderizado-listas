// src/App.jsx
import { creditRequests } from './data'
import UserItem from './components/UserItem'

export function App() {
  return (
    <>
      <h1>Creditos solicitados</h1>

      <table>
        <thead>
          <tr>
            <th>número de créditos</th>
            <th>nombre</th>
            <th>fecha</th>
            <th>cantidad solicitada</th>
            <th>aprobado</th>
          </tr>
        </thead>

        <tbody>
          {creditRequests.map((u, idx) => (
            <UserItem
              key={idx}
              quantityRequest={u.quantityRequest}
              isApproved={u.isApproved}
              numCredits={u.numCredits}
              name={u.name}
              date={u.date}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
