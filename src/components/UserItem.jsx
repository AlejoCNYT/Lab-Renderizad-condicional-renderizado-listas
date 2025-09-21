// src/components/UserItem.jsx
function UserItem({ quantityRequest, isApproved, numCredits, name, date }) {
  // Si el usuario tiene más de 2 créditos, NO mostrar la fila
  return (
    numCredits <= 2 && (
      <tr>
        <td>{numCredits}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{quantityRequest}</td>
        {/* El test espera ✔️ cuando está aprobado */}
        <td>{isApproved ? "✔️" : "❌"}</td>
      </tr>
    )
  );
}

export default UserItem;
