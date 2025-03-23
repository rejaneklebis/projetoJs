class Pessoa {
  constructor(
    nome,
    email,
    dataNascimento,
    telefoneFixo,
    telefoneCelular,
    matricula
  ) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
  }

  exibirDados() {
    return `<p><strong>Nome:</strong> ${this.nome}</p>
            <p><strong>Email:</strong> ${this.email}</p>
            <p><strong>Data de Nascimento:</strong> ${this.dataNascimento}</p>
            <p><strong>Telefone Celular:</strong> ${this.telefoneCelular}</p>
            <p><strong>Matrícula:</strong> ${this.matricula}</p>`;
  }
}

class Professor extends Pessoa {
  constructor(
    nome,
    email,
    dataNascimento,
    telefoneFixo,
    telefoneCelular,
    matricula,
    area
  ) {
    super(
      nome,
      email,
      dataNascimento,
      telefoneFixo,
      telefoneCelular,
      matricula
    );
    this.area = area;
  }

  exibirDados() {
    return super.exibirDados() + `<p><strong>Área:</strong> ${this.area}</p>`;
  }
}

class Aluno extends Pessoa {
  constructor(
    nome,
    email,
    dataNascimento,
    telefoneFixo,
    telefoneCelular,
    matricula,
    curso
  ) {
    super(
      nome,
      email,
      dataNascimento,
      telefoneFixo,
      telefoneCelular,
      matricula
    );
    this.curso = curso;
  }

  exibirDados() {
    return super.exibirDados() + `<p><strong>Curso:</strong> ${this.curso}</p>`;
  }
}

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
    const nome = this.campos.nome.value;
    const email = this.campos.email.value;
    const dataNascimento = this.campos.dataNascimento.value;
    const telefoneFixo = this.campos.telefoneFixo.value;
    const telefoneCelular = this.campos.telefoneCelular.value;
    const matricula = this.campos.matricula.value;

    let pessoa;

    if (this.tipoProfessor.checked) {
      const area = this.campos.areaCurso.value;
      pessoa = new Professor(
        nome,
        email,
        dataNascimento,
        telefoneFixo,
        telefoneCelular,
        matricula,
        area
      );
    } else {
      const curso = this.campos.areaCurso.value;
      pessoa = new Aluno(
        nome,
        email,
        dataNascimento,
        telefoneFixo,
        telefoneCelular,
        matricula,
        curso
      );
    }

    this.resultado.innerHTML = `<h3>Dados Cadastrados</h3>${pessoa.exibirDados()}`;
    this.resultado.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new FormularioCadastro("formCadastro");
});
