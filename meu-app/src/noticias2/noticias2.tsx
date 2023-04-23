import './noticias2';

function Noticias2(){
    const images = ["https://i.pinimg.com/564x/6c/0b/25/6c0b252b8d6c90099f71b49c201c2f60.jpg", "https://i.pinimg.com/originals/69/09/22/6909226b1bfa96ba191c4838a10841e3.jpg", "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png", "https://imgix.ranker.com/user_node_img/50088/1001742669/original/new-era-will-begin-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375", "https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2023/02/sanji-one-piece-1024x683.webp"];
    const perfil = ["Zoro", "Trafalgar", "Luffy", "Doffy ", "Sanji"]
    const content = ["Yo, aqui é o Zoro, o espadachim dos Piratas do Chapéu de Palha. Eu sou um homem de poucas palavras, mas a minha espada fala por mim. Eu tenho um objetivo claro em mente: me tornar o maior espadachim do mundo! Eu não tenho medo de lutar contra os mais fortes, e não me importo quantas vezes eu tenho que treinar para ficar mais forte. Eu sempre mantenho minha palavra e nunca deixo meus companheiros para trás. Eu acredito que a força vem da determinação e da vontade de nunca desistir. Eu sou o braço direito do Capitão Luffy, e vou proteger minha tripulação com minha vida, se for preciso. Então, se você quer uma luta, eu estou pronto para te desafiar!", "Olá, sou Trafalgar Law, o capitão dos Piratas do Coração. Eu sou um estrategista nato, e sempre tento ver além do que está diante dos meus olhos. Não tenho tempo para tolos e não tolero a deslealdade. Minha tripulação é minha família e eu protejo minha família a todo custo. Eu acredito que a verdadeira força vem da confiança e lealdade entre os membros de uma equipe. Eu tenho um objetivo claro em mente, e vou fazer tudo o que for preciso para alcançá-lo. Minha habilidade com a Ope Ope no Mi me dá um grande poder, mas também uma grande responsabilidade. Eu sou um médico e um pirata, e estou sempre procurando maneiras de ajudar as pessoas. É isso que me faz seguir em frente, e nada vai me deter." ,"Yo, pessoal! Sou o Luffy, o homem que vai se tornar o Rei dos Piratas! Eu não tenho medo de nada, nem de ninguém! Se eu tiver um sonho, eu vou lutar por ele até o fim! E eu não vou deixar ninguém me parar! Eu tenho uma tripulação incrível ao meu lado, e juntos vamos enfrentar todos os desafios que o mundo nos apresentar. Acreditem em mim, o futuro pertence àqueles que nunca desistem de seus sonhos! E eu nunca vou desistir do meu sonho de encontrar o One Piece e ser o rei dos piratas!", "Ahaha! Olá, meus caros! Eu sou Donquixote Doflamingo, o governante absoluto do submundo! Eu sou um homem de grande poder e riqueza, e tudo o que eu quero, eu consigo. Eu sou implacável com meus inimigos, e nunca hesito em usar qualquer meio necessário para alcançar meus objetivos. Afinal, a vida é uma luta constante, e os fracos sempre são eliminados. Eu sou um mestre da manipulação, e adoro brincar com as pessoas como se fossem marionetes. Para mim, o mundo é um jogo, e eu sou o mestre do tabuleiro. Então, se você se atrever a se opor a mim, esteja preparado para sofrer as consequências. Ahaha!", "Oi, pessoal! Aqui é Sanji, o cozinheiro e cavalheiro dos Piratas do Chapéu de Palha. Eu sou um homem que aprecia a beleza das coisas, especialmente das mulheres. Eu sempre tento tratar todas com respeito e gentileza, independentemente de quem elas sejam. Eu sou um mestre da culinária e adoro cozinhar para minha tripulação e para qualquer pessoa que precise de um bom prato. Eu sou um combatente habilidoso também, e sempre protejo aqueles que são importantes para mim. Eu acredito que a comida pode unir as pessoas, e que um bom prato pode trazer alegria mesmo nos momentos mais difíceis. Então, se você precisar de um amigo ou de uma boa refeição, pode contar comigo!"]
    const randomNumber = Math.floor(Math.random()*5);
    return(
        <div style={{marginLeft: "10px", marginTop: "10px"}}>
            <div>
                <h1>Publicações</h1>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding:"100px", verticalAlign: "center", alignContent: "center"}}>
                <div>
                    <img  style={{width: "100px", height: "100px", borderRadius: "100%", border: "2px solid black"}} src={images[randomNumber]} alt="Foto de Perfil"  />
                    <figcaption>{perfil[randomNumber]}</figcaption>
                </div>
                <div> 
                    <p>{content[randomNumber]}</p>
                </div>
            </div>
        </div>
    );
}

export default Noticias2;