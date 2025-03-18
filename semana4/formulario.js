class FormularioCadastro {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.campos = {
            nome: this.form.querySelector("#nome"),
            email: this.form.querySelector("#email"),
            dataNascimento: this.form.querySelector("#dataNascimento"),
            telefoneFixo: this.form.querySelector("#telefoneFixo"),
            telefoneCelular: this.form.querySelector("#telefoneCelular"),
            areaCurso: this.form.querySelector("#areaCurso"),
            matricula: this.form.querySelector("#matricula"),
            lattes: this.form.querySelector("#lattes"),
        };
        this.tipoProfessor = this.form.querySelector("#professor");
        this.tipoAluno = this.form.querySelector("#aluno");
        this.areaCursoContainer = document.getElementById("areaCursoContainer");
        this.areaCursoLabel = document.getElementById("areaCursoLabel");
        this.lattesContainer = document.getElementById("lattesContainer");
        this.resultado = document.getElementById("resultado");

        this.initEventos();
    }

    initEventos() {
        this.form.addEventListener("submit", (e) => this.validarFormulario(e));
        this.tipoProfessor.addEventListener("change", () => this.alterarTipo());
        this.tipoAluno.addEventListener("change", () => this.alterarTipo());
    }

    alterarTipo() {
        if (this.tipoProfessor.checked) {
            this.areaCursoLabel.textContent = "Área:";
            this.areaCursoContainer.style.display = "block";
            this.lattesContainer.style.display = "block";
        } else {
            this.areaCursoLabel.textContent = "Curso:";
            this.areaCursoContainer.style.display = "block";
            this.lattesContainer.style.display = "none";
        }
    }

    validarFormulario(e) {
        e.preventDefault();
        let emailValido = this.validarEmail(this.campos.email.value);

        if (!emailValido) {
            document.getElementById("emailErro").textContent = "Email inválido!";
            return;
        }

        this.exibirDados();
    }

    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    exibirDados() {
        this.resultado.innerHTML = `<h3>Dados Cadastrados</h3>
            <p><strong>Nome:</strong> ${this.campos.nome.value}</p>
            <p><strong>Email:</strong> ${this.campos.email.value}</p>
            <p><strong>Data de Nascimento:</strong> ${this.campos.dataNascimento.value}</p>
            <p><strong>Telefone Celular:</strong> ${this.campos.telefoneCelular.value}</p>
            <p><strong>Tipo:</strong> ${this.tipoProfessor.checked ? "Professor" : "Aluno"}</p>
            <p><strong>${this.tipoProfessor.checked ? "Área" : "Curso"}:</strong> ${this.campos.areaCurso.value}</p>
            <p><strong>Matrícula:</strong> ${this.campos.matricula.value}</p>`;
        
        this.resultado.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new FormularioCadastro("formCadastro");
});
