import { describe, expect, it } from 'vitest'
import { render } from '../../test-config/utils'
import fs from 'fs'
import path from 'path'
import { App } from '../App'
import UserItem from '../components/UserItem'

describe('__Ada test: Rendering lists and conditional', () => {
  it('the path components/UserItem.jsx must exist', () => {
    const filePath = path.join(__dirname, '../components/UserItem.jsx')
    expect(fs.existsSync(filePath)).toBeTruthy()

    const fileContents = fs.readFileSync(filePath, 'utf8')

    expect(fileContents).toMatch(/export\s+default\s+UserItem/)
  })

  it(`the 'UserItem' component displays the information correctly when the credit is approved`, () => {
    const { asFragment } = render(
      <UserItem
        quantityRequest={100}
        isApproved={true}
        numCredits={2}
        name={'Erik Hernandez'}
      />
    )

    expect(asFragment()).toMatchInlineSnapshot(
      `
      <DocumentFragment>
        2Erik Hernandez100✔️
      </DocumentFragment>
    `
    )
  })

  it('If the credit is not approved, it is displayed correctly with a ❌', () => {
    const { asFragment } = render(
      <UserItem
        quantityRequest={100}
        isApproved={false}
        numCredits={2}
        name={'Erik Hernandez'}
      />
    )

    expect(asFragment()).toMatchInlineSnapshot(
      `
      <DocumentFragment>
        2Erik Hernandez100❌
      </DocumentFragment>
    `
    )
  })

  it(`the 'UserItem' component does not render if the credit quantity is greater than 2`, () => {
    const { asFragment } = render(
      <UserItem
        quantityRequest={100}
        isApproved={true}
        numCredits={3}
        name={'Erik Hernandez'}
      />
    )

    expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />')
  })

  it(`In the App component, render the list using .map() and don't forget the 'key' prop`, () => {
    const filePath = path.join(__dirname, '../App.jsx')

    const fileContents = fs.readFileSync(filePath, 'utf8')

    expect(fileContents).toMatch(
      /import UserItem from '\.\/components\/UserItem'/
    )
    expect(fileContents).toMatch(/creditRequests.map/)
    expect(fileContents).toMatch(/<UserItem[\s>]/)
    expect(fileContents).toMatch(/key/)
  })

  it('The list renders correctly', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchInlineSnapshot(
      `
      <DocumentFragment>
        <h1>
          Creditos solicitados
        </h1>
        <table>
          <thead>
            <tr>
              <th>
                número de créditos
              </th>
              <th>
                nombre
              </th>
              <th>
                fecha
              </th>
              <th>
                cantidad solicitada
              </th>
              <th>
                aprobado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                Juan Pérez
              </td>
              <td>
                2002-03-05
              </td>
              <td>
                5000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Marta Gómez
              </td>
              <td>
                2002-03-12
              </td>
              <td>
                12000
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Carlos Ruiz
              </td>
              <td>
                2002-03-20
              </td>
              <td>
                8000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Luis Molina
              </td>
              <td>
                2002-03-07
              </td>
              <td>
                7000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Sandra Navarro
              </td>
              <td>
                2002-03-15
              </td>
              <td>
                9500
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Roberto Sánchez
              </td>
              <td>
                2002-03-22
              </td>
              <td>
                4000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Diana López
              </td>
              <td>
                2002-03-30
              </td>
              <td>
                11000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Pedro Jiménez
              </td>
              <td>
                2002-03-09
              </td>
              <td>
                6000
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Jessica Morales
              </td>
              <td>
                2002-03-17
              </td>
              <td>
                13500
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Miguel Ángel Fernández
              </td>
              <td>
                2002-03-25
              </td>
              <td>
                8500
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Carmen Rodríguez
              </td>
              <td>
                2002-03-04
              </td>
              <td>
                3000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Laura Martínez
              </td>
              <td>
                2002-03-19
              </td>
              <td>
                9500
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Sergio Hernández
              </td>
              <td>
                2002-03-27
              </td>
              <td>
                7200
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Andrea González
              </td>
              <td>
                2002-03-06
              </td>
              <td>
                11500
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Raúl Álvarez
              </td>
              <td>
                2002-03-14
              </td>
              <td>
                5000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Patricia Vargas
              </td>
              <td>
                2002-03-21
              </td>
              <td>
                6500
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Verónica Castillo
              </td>
              <td>
                2002-03-08
              </td>
              <td>
                5600
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Diego Romero
              </td>
              <td>
                2002-03-16
              </td>
              <td>
                9000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                Sofía Peralta
              </td>
              <td>
                2002-03-24
              </td>
              <td>
                4000
              </td>
              <td>
                ❌
              </td>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                Jorge Salazar
              </td>
              <td>
                2002-03-03
              </td>
              <td>
                11000
              </td>
              <td>
                ✔️
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                Elena Núñez
              </td>
              <td>
                2002-03-10
              </td>
              <td>
                8500
              </td>
              <td>
                ✔️
              </td>
            </tr>
          </tbody>
        </table>
      </DocumentFragment>
    `
    )
  })
})
