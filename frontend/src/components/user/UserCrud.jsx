import React from "react"
import Main from "../template/Main"

const headerProps = {
    icon: "users",
    title: "Usuarios",
    subtitle: "Cadastro de usuarios: Incluir, Listar, Alterar e Excluir!"
}

export default class UserCrud extends React.Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}