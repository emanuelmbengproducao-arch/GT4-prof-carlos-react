function Greetings({ nome, mensagem = "Seja bem-vindo(a)" }) {
  return (
    <div className="greeting">
      <span className="greeting__eyebrown"> React - Primeiros Passos</span>
      <h1>
        {nome} {mensagem}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut eum non
        accusamus ipsum rem reprehenderit. Animi fuga dolore aperiam quia,
        deleniti a officia fugiat obcaecati hic culpa illum eum?
      </p>
    </div>
  );
}
export default Greetings;
