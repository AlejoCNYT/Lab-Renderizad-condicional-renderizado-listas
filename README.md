# Rendering Lists & Conditional Rendering — Lab (JSX)  
# Laboratorio — Renderizado de Listas y Renderizado Condicional (JSX)

> **International README (EN/ES) — Windows / macOS / Linux**  
> **README Internacional (EN/ES) — Windows / macOS / Linux**

---

## 0) Requirements / Requisitos
- Node.js 18+ and npm  
- Git
- ADA Client (included in the repo) / Cliente ADA (incluido en el repo)
- Your assignment URL from the platform / Tu URL de la asignación desde la plataforma

---

## 1) Clone & Setup / Clonar e instalar

### Windows (PowerShell)
```powershell
git clone https://github.com/ada-school/assignments-micro-course-JSX
cd assignments-micro-course-JSX
git checkout list-and-conditional-rendering
npm install
npm run dev
```

### macOS / Linux (bash)
```bash
git clone https://github.com/ada-school/assignments-micro-course-JSX
cd assignments-micro-course-JSX
git checkout list-and-conditional-rendering
npm install
npm run dev
```

Open the local URL printed by Vite.  
Abre la URL local impresa por Vite.

---

## 2) Start ADA Client / Iniciar ADA Client

Open a **second terminal** at the repo root and run **one** of the following, replacing `<YOUR_ASSIGNMENT_URL>` with the exact URL from the platform.  
Abre una **segunda terminal** en la raíz del repo y ejecuta **uno** de los siguientes, reemplazando `<YOUR_ASSIGNMENT_URL>` con la URL exacta de la plataforma.

### Windows (PowerShell)
```powershell
.\ada-client.exe start <YOUR_ASSIGNMENT_URL>
```

### macOS
```bash
./ada-client start <YOUR_ASSIGNMENT_URL>
```

### Linux
```bash
./ada-client-linux start <YOUR_ASSIGNMENT_URL>
```

Sign in on the browser window and keep it open.  
Inicia sesión en la ventana del navegador y déjala abierta.

---

## 3) Coding Tasks / Tareas de código

### 3.1 Create `UserItem.jsx`
Create folder `src/components` if missing and add the file below.  
Crea la carpeta `src/components` si no existe y agrega el archivo:

```jsx
// src/components/UserItem.jsx
function UserItem({ quantityRequest, isApproved, numCredits, name, date }) {
  // Do not render if user already has more than 2 credits
  // No renderizar si el usuario ya tiene más de 2 créditos
  return (
    numCredits <= 2 && (
      <tr>
        <td>{numCredits}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{quantityRequest}</td>
        {/* Tests expect ✔️ when approved / Las pruebas esperan ✔️ cuando está aprobado */}
        <td>{isApproved ? "✔️" : "❌"}</td>
      </tr>
    )
  );
}

export default UserItem;
```

### 3.2 Update `App.jsx`
Replace the entire file content with:  
Reemplaza todo el contenido del archivo por:

```jsx
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
```

> Notes / Notas  
> - Keep the exact import path and **single quotes**: `import UserItem from './components/UserItem'`.  
> - Title must be **Creditos solicitados** (without accent).  
> - Mantén la ruta de importación exacta y **comillas simples**.  
> - El título debe ser **Creditos solicitados** (sin tilde).

---

## 4) Run Tests / Ejecutar pruebas

```bash
npm run ada-test
```

<img width="1294" height="297" alt="imagen" src="https://github.com/user-attachments/assets/71078c4f-acb0-430d-8d65-4dc7c8e1c877" />

If you see a warning like `<tr> cannot appear as a child of <div>` in tests, it is harmless for this lab.  
Si ves un aviso como `<tr> cannot appear as a child of <div>` en las pruebas, no afecta este laboratorio.

---

## 7) What You Practiced / Qué practicaste
- Creating reusable components and props  
- Conditional rendering with ternary and `&&`  
- Rendering lists with `.map()` and unique `key`  
- Creación de componentes reutilizables y props  
- Renderizado condicional con ternario y `&&`  
- Renderizado de listas con `.map()` y `key`

---

**Good luck! / ¡Éxitos!**  


