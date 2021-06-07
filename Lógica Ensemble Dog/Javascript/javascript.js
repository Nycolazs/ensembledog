var i = 0;
var cachorro_safado = ['aaaba', 'cbebb', 'bacbb', 'cadba', 'caeba', 'caaba', 'abbaa', 'aacaa', 'abfaa', 'abdaa'];/*[Chihuahua, Golden Retriver, Pitbull, Husky Siberiano, Fila brasileiro, Pastor Alemão, Shi tzu, Pug, Pequinês, Lulu da Pomerania]*/
opcao = "";


function passarInicio() {
    X = document.getElementById('li1');
    X.style.marginLeft = "-100%";
}

function per1Opcc1() {
    opcao += "a";
    document.getElementById('per1').style.marginLeft = "-100%";

}
function per1Opcc2() {
    opcao += "b";
    document.getElementById('per1').style.marginLeft = "-100%";

}
function per1Opcc3() {
    opcao += "c";
    document.getElementById('per1').style.marginLeft = "-100%";
}

function final() {
    switch (opcao) {
        case "aaaba":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/chihuahua.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Chihuahua";
            i1.innerHTML = "México.";
            i2.innerHTML = "04.11.2008.";
            i3.innerHTML = "Grupo 9 - Cães de Companhia.";
            i4.innerHTML = "Tem a forma de um cão compacto. É de grande importância, o fato de seu crânio ter a forma de uma maçã e que sua cauda é moderadamente longa, muito alta, curvada ou formando um semicírculo com a ponta direcionada para a região lombar.";
            i5.innerHTML = "Grandes e redondos, muito expressivos, nunca proeminentes e completamente escuros. Olhos claros são permitidos, mas não desejados.";
            i6.innerHTML = "Grandes, eretas, sem dobras e bastante abertas; largas na inserção, afinando gradualmente em direção às suas pontas ligeiramente arredondadas.";
            i7.innerHTML = "Por ser o cachorro mais pequeno do mundo, é fundamental ter atenção às quantidades de comida que ele ingere. As porções devem ser pequenas, pois temos de pensar no tamanho do seu estômago e distribuí-las em duas refeições diárias. O melhor tipo de alimento é uma ração que se adapte corretamente às necessidades do nosso pet. Hoje em dia existem rações criadas especialmente para esta raça. Algumas marcas que já oferecem este produto incluem Royal Canin e Eukanuba.";
            i8.innerHTML = "Se vive em um local de clima quente e proporcionar sombra, abrigo e água fresca ao cachorro, não tem que se preocupar em regular a sua temperatura corporal, o que acontece de forma natural.            No entanto, se vive em zonas muito frias e com temperaturas baixas, é essencial verificar se o seu companheiro tem frio. Para saber isto de forma segura, basta tocar no cachorro. Algumas pessoas procuram se guiar pelos tremores do cão, o que nem sempre é fiável. Esta raça possui tendência para tremer por outras razões além do frio, como estresse, medo, ansiedade e até mesmo alegria e emoção. Neste caso, deve proporcionar mantas e sítios quentes dentro de casa onde ele possa se aconchegar. Na rua, deve protegê-lo com uma peça de roupa especial para cachorros, sem necessidade de exagerar.";
            break;

        case "cbebb":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/golden-retriever.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Golden Retriever";
            i1.innerHTML = "Grã-Bretanha.";
            i2.innerHTML = "28.07.2009.";
            i3.innerHTML = "Grupo 8 -Retrievers, Levantadores e Cães d’Água.";
            i4.innerHTML = "Simétrico, equilibrado, ativo, poderoso, com movimentação nivelada, sadio, com expressão doce.";
            i5.innerHTML = "Marrom escuros, bem espaçados um do outro; as bordas das pálpebras são escuras.";
            i6.innerHTML = "De tamanho médio, inseridas aproximadamente no nível dos olhos.";
            i7.innerHTML = "Quando falamos dos cuidados do Golden Retriever, sem dúvida que, a primeira coisa que nos vem à cabeça é a sua alimentação. Os filhotes que ainda não tiverem sido desmamados completamente devem ser alimentados pela sua mãe e com os complementos que o veterinário recomendar. A quantidade e a frequência dos seus alimentos dependerão da quantidade e qualidade do leite materno, assim como das recomendações que o veterinário fizer.";
            i8.innerHTML = "O Golden Retriever não precisa de cuidados especiais como cortes de pelo particular, mas precisa de uma escovação frequente porque perde muito pelo. Também precisa de exercício, companhia e afeto. A escovação destes cães deve ser feita com uma escova de cerdas metálicas. Uma vez que tenha a escova, para oferecer o melhor cuidado ao Golden Retriever, o mais recomendável é escovar o pelo do cão uma vez por dia, especialmente durante as épocas de troca, para evitar a acumulação de pelo morto. Você deve dar banho ao Golden Retriever apenas quando estiver sujo e com um xampu para cachorros, visto que o banho frequente prejudica a camada protetora do seu pelo.";
            break;
        case "bacbb":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/pitbull.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "PitBull";
            i1.innerHTML = "Estados Unidos da América.";
            i2.innerHTML = "01.11.2008.";
            i3.innerHTML = "Grupo 11 - Raças Não Reconhecidas pela FCI.";
            i4.innerHTML = "O American Pit Bull Terrier é um cão de porte médio, de construção sólida, pelagem curta, musculatura bem definida. Esta raça é poderosa e atlética. O corpo é levemente mais longo que alto, sendo que as fêmeas podem ser um pouco mais longas que os machos.";
            i5.innerHTML = "De tamanho médio, redondos ou amendoados, inseridos bem afastados entre si, profundos no crânio.";
            i6.innerHTML = "São inseridas altas e podem ou não ser operadas, sem preferência. Se forem deixadas ao natural, semi-eretas ou em rosa são preferíveis.";
            i7.innerHTML = "A quantidade de ração varia de acordo com o peso e o tamanho do animal e pode ser encontrada nas embalagens. Deve-se alimentar o cão de duas a três vezes por dia e manter água à vontade. Cães de grande porte consomem rações large breed.  Quando o cão se tornar adulto, deve-se mudar a ração, que antes era direcionada para filhotes, e a quantidade varia de 350 a 400 gramas/dia.";
            i8.innerHTML = "Como é de se esperar para um cão atleta, o American Pit Bull Terrier precisa de exercícios intensos e diários, não para criar músculos (como muitos tutores gostam de fazer), mas para que gaste a quantidade grandiosa de energia que possui. Além de caminhadas e corridas, que também servem como um momento muito bom para se passar ao lado do seu amigo peludo, brincadeiras são mais do que bem-vindas.";
            break;

        case "cadba":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/husky-siberiano.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Husky Siberiano";
            i1.innerHTML = "Estados Unidos da América.";
            i2.innerHTML = "02.02.1995.";
            i3.innerHTML = "Grupo 5 - Spitz e Tipos Primitivos.";
            i4.innerHTML = "O Husky Siberiano é um cão de trabalho, de porte médio; rápido e ligeiro. Seu movimento é fluente e gracioso. Seu corpo moderadamente compacto com pelagem densa; suas orelhas eretas e a cauda em pincel revelam sua herança nórdica. Seu andar característico é suave e aparentemente sem nenhum esforço.";
            i5.innerHTML = "Amendoados, moderadamente afastados e sutilmente oblíquos. A cor dos olhos pode ser marrom ou azul; aceitam-se os olhos de cores diferentes ou um olho particolorido. A expressão é penetrante, porém amigável, interessada e até um pouco maliciosa.";
            i6.innerHTML = "Tamanho médio, triangulares, de inserção alta e próximas. São espessas e bem revestidas de pelos, levemente arqueadas em sua parte posterior e rigidamente empinadas, com as pontas ligeiramente arredondadas.";
            i7.innerHTML = "A quantidade de ração varia de acordo com o peso e o tamanho do animal e pode ser encontrada nas embalagens. Deve-se alimentar o cão de duas a três vezes por dia e manter água à vontade. Cães de grande porte consomem rações large breed. Até os doze meses, o Husky Siberiano é considerado filhote. Nesta fase, a quantidade de ração varia de 95 a 355 gramas por dia. O alimento indicado são rações específicas para filhotes. A partir de um ano o cão é considerado adulto. Deve-se mudar a ração e a quantidade varia de 160 a 375 gramas/dia.";
            i8.innerHTML = "Um Husky pode viver tranquilamente em países com o clima quente, como o Brasil. Entretanto, no verão ou em dias mais quentes, é necessário tomar alguns cuidados para quem o animal não sofra. Manter água fresca sempre à disposição e colocar o pet em um lugar fresquinho e longe do sol já ajuda bastante. Na clínica veterinária, os Husky Siberianos passam por uma avaliação para verificar o tipo de rotina que levam para que a melhor dieta seja indicada. Em grande parte dos casos, indica-se muita proteína e gordura, principalmente se o cachorro viver em locais onde pode queimar energia, como casas espaçosas e sítios.";
            break;

        case "caeba":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/fila-brasileiro.jpg')";
            imagem.style.backgroundPositionX = "-155px";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Fila Brasileiro";
            i1.innerHTML = "Brasil.";
            i2.innerHTML = "29/09/2016.";
            i3.innerHTML = "Grupo 2 - Pinscher e Schnauzer, Molossóides, Boiadeiros e Montanheses Suíços e raças assemelhadas.";
            i4.innerHTML = "Raça tipicamente molossóide. Poderosa ossatura, figura retangular e compacta, harmoniosa e proporcional. Apresenta, aliada a uma massa muscular, grande agilidade concentrada e facilmente perceptível.";
            i5.innerHTML = "De tamanho médio à grande, em formato amendoado e bem afastados, de inserção média à profunda; a coloração vai, do castanho escuro ao amarelado, sempre de acordo com a pelagem, preferencialmente os olhos mais escuros.";
            i6.innerHTML = "Grandes, grossas, em forma de “V”. Largas na base, estreitando-se na extremidade arredondada. Inserção inclinada, com o bordo anterior mais alto que o posterior, na parte mais posterior do crânio, na altura da linha média dos olhos, quando em repouso.";
            i7.innerHTML = "A quantidade de ração varia de acordo com o peso e o tamanho do animal, e pode ser encontrada nas embalagens. Deve-se alimentar o cão de duas a três vezes por dia e manter água à vontade, Cães de grande porte consomem rações large breed. A qualidade da ração é fundamental para a saúde do animal. As do tipo Premium e Super Premium são as nutricionalmente balanceadas. Até os doze meses, o Fila Brasileiro é considerado filhote. Nesta fase, a quantidade de ração varia de 90 a 465 gramas por dia. O alimento indicado são rações específicas para filhotes. A partir de um ano o cão é considerado adulto. Deve-se mudar a ração e a quantidade varia de 230 a 400 gramas/dia.";
            i8.innerHTML = "A manutenção de um fila brasileiro não é trabalhosa, nem muito diferente de outros cachorros grandes e de pelo curto. O fila brasileiro não precisa de mais do que uma escovação semanal, porque seu pelo é curto e a raça não costuma se sujar muito. O ideal é que ele tome banho mensalmente no verão e, no inverno, a cada dois meses. A unha não pode crescer demais e o ouvido não pode acumular cera e sujeira. Lembre-se de que o fila brasileiro tem propensão a desenvolver otite e mantê-lo limpo facilita a percepção de qualquer problema.";
            break;

        case "caaba":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/pastor-alemão.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Pastor Alemão";
            i1.innerHTML = "Alemanha.";
            i2.innerHTML = "11.08.2010.";
            i3.innerHTML = "Grupo 1 - Cães Pastores e Boiadeiros (Exceto Boiadeiros Suíços).";
            i4.innerHTML = "O Pastor Alemão é de tamanho médio, levemente alongado (em relação à altura), vigoroso, bem musculoso, com ossatura “seca” e construção geral sólida.";
            i5.innerHTML = "De tamanho médio, amendoados, sutilmente oblíquos e não proeminentes. A cor dos olhos deve ser o mais escuro possível. Olhos claros e penetrantes, que alterem a expressão natural do Pastor Alemão, são indesejáveis. ";
            i6.innerHTML = "Eretas, de tamanho médio, portadas elevadas e alinhadas (não inclinadas lateralmente); as extremidades são pontiagudas e com as aurículas voltadas para frente. Orelhas portadas semi-eretas ou caídas são faltas. Orelhas portadas para trás quando em movimento ou em posição relaxada não é considerado falta.";
            i7.innerHTML = "Cães grandes e muito fortes, os pastores alemães precisam de uma alimentação completa para manter sua saúde e estarem sempre prontos para brincar com seus queridos amigos humanos. Como crescem rápido, o ideal é que consumam rações especiais para cães grandes que ajudem a manter os ossos fortes e consigam pular e correr sem sofrer quaisquer problemas com tanta atividade.";
            i8.innerHTML = "Como são muito inteligentes e extremamente ativos, os pastores alemães precisam ter sua mente desafiada constantemente. Quer ver seu amiguinho feliz? Monte jogos mentais onde ele precise, por exemplo, encontrar uma bolinha, um petisco ou seu brinquedo favorito que estejam muito bem escondidos. Muito ativo, o pastor alemão precisa estar sempre se exercitando. Por isso, mesmo que você more em um apartamento e não tenha um quintal muito amplo, é importante garantir que o cãozinho esteja sempre em movimento.";
            break;
        case "abbaa":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/shih-tzu.jpg')";
            imagem.style.backgroundPositionX = "-30px";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Shih-tzu";
            i1.innerHTML = "Tibet (China).";
            i2.innerHTML = "22.08.2017.";
            i3.innerHTML = "Grupo 9 - Cães de Companhia e Toy.";
            i4.innerHTML = "Robusto, pelagem abundante, mas não excessiva, com um distinto porte arrogante e com uma cabeça com aspecto de crisântemo.";
            i5.innerHTML = "Grandes, escuros, redondos, inseridos bem separados, mas não proeminentes. Expressão calorosa. Em cães fígado ou com manchas fígado, olhos mais claros são permitidos.";
            i6.innerHTML = "Grandes, de bom comprimento, portadas pendentes. Inseridas ligeiramente abaixo da linha superior do crânio e com uma pelagem tão abundante que parecem unidas ao pelo do pescoço.";
            i7.innerHTML = "A quantidade de ração varia de acordo com o peso e o tamanho do animal e pode ser encontrada nas embalagens. Deve-se alimentar o cão de duas a três vezes por dia e manter água à vontade. Cães de pequeno porte consomem rações small breed. Até os doze meses, o Shih Tzu é considerado filhote. Nesta fase, a quantidade de ração varia de 95 a 110 gramas por dia. O alimento indicado são rações específicas para filhotes. A partir de um ano o cão é considerado adulto. Deve-se mudar a ração e a quantidade varia de 65 a 95 gramas/dia.";
            i8.innerHTML = "Shih Tzus são cães braquicefálicos (focinho achatado), o que significa que podem ter problemas respiratórios de moderados a graves. Desde roncos e espirros até apnéia e infecções. Eles também podem ter infecções de ouvido, se não forem limpos corretamente. Eles também têm tendência à obesidade e é importante cuidar dos seus dentes para evitar problemas periodontais. É importante escovar o Shih Tzu todos os dias, o que dura em média 15 minutos (considere isso se você não tem tempo ou não gosta dessa atividade antes de adquirir um Shih Tzu).";
            break;
        case "aacaa":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/pug.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Pug";
            i1.innerHTML = "China.";
            i2.innerHTML = "13.10.2010.";
            i3.innerHTML = "Grupo 9 - Cães de Companhia.";
            i4.innerHTML = "Decididamente quadrado e robusto, ele é “multum in parvo” (muito em pouco, ou seja, cão compacto e atarracado), como mostra sua forma compacta, suas bem ajustadas proporções e sua musculatura rija.";
            i5.innerHTML = "Escuros, relativamente grandes, de formato redondo, expressão doce e afetuosa, muito brilhantes e quando o cão está excitado, cheios de fogo. Nunca salientes, exagerados ou mostrando o branco dos olhos quando olhando para a frente.";
            i6.innerHTML = "Finas, pequenas, macias como veludo preto. Há dois tipos:<br>  Orelha em rosa: Pequena, caída, que se dobra para trás e descobre o pavilhão auditivo externo;<br>   Orelha em botão: Caída para frente, a extremidade junto ao crânio, de maneira a cobrir o orifício da orelha.";
            i7.innerHTML = "Uma alimentação balanceada também é importante para que os pugs não apresentem quadros alérgicos, de sobrepeso ou mesmo de subnutrição. Por isso, é essencial realizar uma boa escolha de ração para pug. Uma vez escolhida a ração, a alimentação do pug deve ser feita de acordo com a fase de desenvolvimento e idade do seu amigo. De forma geral, recomenda-se o uso de rações para filhotes até o 10º mês de vida de um pug, quando eles ainda são considerados bebês. A partir desta idade, os pugs já devem trocar de ração e começar a se alimentar com rações para adultos ou mini-adultos. A partir dos 8 anos, esses cãezinhos já devem receber ração sênior. A frequência e quantidade a ser oferecida deve seguida de acordo com a embalagem da ração ou orientação do seu veterinário de confiança.";
            i8.innerHTML = "Deve ter uma cama limpa, confortável e abrigada de correntes de ar e mudanças bruscas de temperatura. Jamais deve ficar na rua. Os Pugs são cães para dentro de casa. Não lidam bem com o calor e no verão é recomendável que se utilize ar condicionado para manter o ambiente sempre com temperatura abaixo dos 25°.Com relação à pelagem, deve ser escovada diariamente, para remoção de pelos mortos que, de outra forma, caem pela casa. Soltam muito pelo, principalmente no outono e na primavera. As escovadelas diárias ajudam neste processo, e evitam a sujeira excessiva da casa. Durante a escovação, pode-se aproveitar para examinar a pele e o pelo do cão, a procura de lesões e ectoparasitas (pulga ou carrapato), que devem ser prontamente combatidos.";
            break;
        case "abfaa":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/pequinês.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Pequinês";
            i1.innerHTML = "China.";
            i2.innerHTML = "26.03.2009.";
            i3.innerHTML = "Grupo 9 - Cães de Companhia.";
            i4.innerHTML = "De aparência leonina, com expressão alerta e inteligente. Pequeno, bem balanceado, moderadamente compacto com grande dignidade e nobreza.";
            i5.innerHTML = "Limpos, redondos, escuros e brilhantes e não tão grandes. Livres de óbvios problemas oculares.";
            i6.innerHTML = "Em forma de coração, inseridas ao nível do crânio e portadas próximas da cabeça e não devem atingir a linha abaixo do focinho. Longas e profusas franjas.";
            i7.innerHTML = "Para que o pequinês receba a nutrição que necessita e, em simultâneo, evitar que tenha excesso de peso no futuro, basta oferecer duas refeições diárias com as porções corretas e calculadas no caso dos cachorros adultos, pois os filhotes necessitam de comer mais vezes. Contudo, os filhotes também devem receber uma quantidade de comida adequada. Em relação à proporção de nutrientes, como todos os cachorros, o pequinês necessita de uma concentração de proteínas elevada, assim como porções moderadas de hidratos de carbono e gorduras saudáveis.";
            i8.innerHTML = "Devido à sua pelagem longa e seu subpelo, a raça precisa de uma boa atenção semanal com relação à escovação e banhos para auxiliar na manutenção dos pelos. Os cachorros dessa raça preferem temperaturas amenas e mais frias, portanto preste maior atenção ao seu pet nos dias mais quentes, assegurando que ele fique em um local fresco. A média de vida deste pet fica entre 12 e 14 anos. Como em todas as raças de face “achatada” (conhecidas como braquicefálicas), a maior preocupação com relação ao pequinês é sua respiração, que pode apresentar problemas e causar desconforto ao pet.";
            break;
        case "abdaa":
            var mostroario = document.getElementById('mostroario');
            var section2 = document.getElementById('final');
            var imagem = document.getElementById('img');
            imagem.style.backgroundImage = "url('img/lulu-da-pomerania.jpg')";
            mostroario.style.display = "block";
            section2.style.display = "none";
            var nomeDoCao = document.getElementById('nomecachorro');
            var i1 = document.getElementById('i1');
            var i2 = document.getElementById('i2');
            var i3 = document.getElementById('i3');
            var i4 = document.getElementById('i4');
            var i5 = document.getElementById('i5');
            var i6 = document.getElementById('i6');
            var i7 = document.getElementById('i7');
            var i8 = document.getElementById('i8');
            nomeDoCao.innerHTML = "Lulu da Pomerânia";
            i1.innerHTML = "Alemanha.";
            i2.innerHTML = "17/01/2013.";
            i3.innerHTML = "Grupo 5 - Spitz e tipos Primitivos.";
            i4.innerHTML = "Os Spitz cativam pela beleza de sua pelagem, feita para ficar externamente ao abundante subpelo. Particularmente impressionante é o forte tipo de juba ao redor do pescoço (“rufo”) e a espessa cauda atrevidamente portada sobre o dorso. A cabeça de raposa com olhos alertas e as pequenas orelhas pontudas, inseridas próximas uma da outra, dão ao Spitz sua característica única, uma aparência atrevida.";
            i5.innerHTML = "São de tamanho médio, de forma alongada, ligeiramente oblíquos e escuros. As pálpebras são pretas em todas as tonalidades de cores; marrom escuras nos Spitz marrons. ";
            i6.innerHTML = "As pequenas orelhas são inseridas altas e relativamente próximas entre si, triangulares e pontudas; elas são sempre portadas eretas, rígidas nas pontas.";
            i7.innerHTML = "O Lulu da Pomerânia é ativo, mas pequeno, precisa de exercícios, mas se satisfaz com brincadeiras dentro de casa ou passeios curtos. Apesar de agasalhado por seu pelo, ele é muito ligado à família e pequeno demais para viver fora de casa. Seu pelo duplo precisa ser escovado duas vezes por semana. Mais vezes na troca de pelos (duas vezes por ano). É recomendada a tosa higiênica, que apara os pelos das patas e das regiões íntimas. A tosa completa não é aconselhada pois não faz parte do padrão da raça. Eduque seu cachorro desde cedo pra não latir por qualquer coisa. Essa raça pode ser muito latidora e incomodar vizinhos ou mesmo as pessoas da família. Talvez o trabalho de um adestrador profissional seja recomendado.";
            i8.innerHTML = "A quantidade de ração varia de acordo com o peso e o tamanho do animal e pode ser encontrada nas embalagens. Deve-se alimentar o cão de duas a três vezes por dia e manter água à vontade. Cães de pequeno porte consomem rações small breed. Até os doze meses, o Pomerânia é considerado filhote. Nesta fase, a quantidade de ração varia de 95 a 115 gramas por dia. O alimento indicado são rações específicas para filhotes. A partir de um ano o cão é considerado adulto. Deve-se mudar a ração e a quantidade varia de 25 a 55 gramas/dia.";
            break;
        case "badbb":
                var mostroario = document.getElementById('mostroario');
                var section2 = document.getElementById('final');
                var imagem = document.getElementById('img');
                imagem.style.backgroundImage = "url('img/Shikoku ken.jpg')";
                mostroario.style.display = "block";
                section2.style.display = "none";
                var nomeDoCao = document.getElementById('nomecachorro');
                var i1 = document.getElementById('i1');
                var i2 = document.getElementById('i2');
                var i3 = document.getElementById('i3');
                var i4 = document.getElementById('i4');
                var i5 = document.getElementById('i5');
                var i6 = document.getElementById('i6');
                var i7 = document.getElementById('i7');
                var i8 = document.getElementById('i8');
                nomeDoCao.innerHTML = "Shikoku inu";
                i1.innerHTML = "Japão.";
                i2.innerHTML = "30/10/2016.";
                i3.innerHTML = "Grupo 5 - Spitz e tipos Primitivos.";
                i4.innerHTML = "Um cão de tamanho médio com bons músculos cortados limpos, equilibrados e bem desenvolvidos. Tem orelhas picadas e uma cauda enrolada em formato de foice.";
                i5.innerHTML = "Quase triangular, não muito pequena e de cor marrom escura. Os cantos externos dos olhos estão ligeiramente virados para cima.";
                i6.innerHTML = "Pequena, triangular, ligeiramente inclinada para a frente e firmemente espetada.";
                i7.innerHTML = "O Shikoku inu requer cuidados relativamente simples, porém essenciais para fazer com que ele se mantenha saudável.Os pelos do animal devem ser penteados ao menos duas vezes por semana e banhos só devem ser dados a cada um ou dois meses, ou quando apresentarem necessidade, já que banhos em excesso podem causar ressecamento do pelo e da pele do cão.Suas unhas devem ser cortadas uma vez ao mês, sempre com muito cuidado para evitar que o cão se machuque. Além disto, é muito importante que o seu cachorro Shikoku inu seja vermifugado e vacinado regularmente, a fim de evitar doenças e manter o seu animal sempre saudável e com uma boa qualidade de vida.";
                i8.innerHTML = "Devem ser oferecidas ao animal, cerca de 3 refeições ao dia, sendo que a quantidade a ser disponibilizada irá variar de acordo com a altura e o peso de seu cachorro. A tabela com a quantidade de gramas por refeição pode ser encontrada na embalagem da própria ração. É importante lembrar que deve estar sempre disponível também uma vasilha com água limpa e fresca.";
        break;
        default:
            var mostroario = document.getElementById('mostroario');
            mostroario.style.display = "block";
            var section2 = document.getElementById('final');
            section2.style.display = "none";
            mostroario.innerHTML = "<h2>Raça ainda não classificada</h2> <br> <a href='html.html' value='Voltar' class='btn btn-red'>Voltar</a>"

            break;
    }
}

