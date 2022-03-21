import logo from './logo.svg';
import './App.css';




function App() {
  const titulo = "Título do vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
 const assistir = "Click para assistir"
  return (
    <div>
      <div class="tela-inteira">
        <header>
            <h1>LabTube</h1>
            <input type="text" placeholder="Pesquisar..." id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr>
                    </hr>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="Media 1"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                   
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="Media 2"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="Media 3"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="Media 4"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="Media 5"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="Media 6"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="Media 7"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="Media 8"></img>
                    <h4>{titulo}</h4>
                    <h5>{assistir}</h5>
               </div>
            </section>
          </main>

        <footer>
            <h4>É muito bom tê-lo por aqui, aproveite o contéudo dos vídeos</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
