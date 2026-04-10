import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CardsComponent } from '../components/cards/cards.component';

@Component({
  selector: 'app-pg-principal',
  standalone: true,
  templateUrl: './pg-principal.component.html',
  styleUrl: './pg-principal.component.scss',
  imports: [
    NgIf,
    CardsComponent,
  ],
})
export class PgPrincipalComponent {


  mostrarDiv1 = true;

  texos = [{
      titulo:'',
      lines: [
        "Nem só de neuroses vive o homem, mas, as vezes, para não dizer sempre, nossa autoimagem idealizada conflita com o rio subterrâneo que corre em nós, gerando aquilo que por aqui chamamos assim, neuroses.",
        "Situações onde queremos fazer algo e fazemos um outro algo ou onde não queremos fazer uma determinada coisas e nos comportamos justamente como não queríamos. ",
        "Afetos que não sabemos dar nome, desejos que não sabemos nem mesmo que estão lá, acenam e tomam conta como angústia...   Angústia é o sem nome, mas que dói.",
        "Sem dar a oportunidade para que aquilo que sairá de qualquer forma, saia sem as destruições que não desejamos, e sim com graça e alegria, só se pudermos vir a olhar, olhar e saber, saber e tomar intimidade com esses issos, pois quando visto, o que estava à sombra se fará no mundo em formas novas, mais leves e criativas, pois a luz faz caminho."
      ]
    },
    {
      titulo:'',
      lines: [
        "A título de apresentação, muito ligeira para aqueles sem intimidades maiores com a psicanálise, coloquei queixas que são frequentes de se ouvir nas entrevistas inicias. Com esse apanhado pretendo dar uma noção muito preliminar de com quem a psicanálise pode vir a contribuir.",
        "A lista a seguir não esgota em hipótese alguma todas as variedades de dramas humanos, mas pode servir como orientação e uma forma de aproximação entre aquele que agora lê e está chegando a essa abordagem com suas angústias que são sempre muito particulares. ",
        "Reforço que as dores humanas são singulares, estão a lista tem caracter puramente aproximativo.",
        "1° Dificuldade no amor e no ser amado.",
        "2° Temor da solidão, medo de morrer só.",
        "3° Medo do futuro ",
        "4° Solidão X euforia",
        "5° Ter como necessidade agradar a todos.",
        "6° Não conseguir dizer não ",
        "8° Insatisfação crônica ",
        "9° Enorme sofrimento com términos ",
        "10° Sensação de não pertencimento, como se não se encaixasse em nada",
        "11° Ficar no lugar de um filho que nunca se emancipa",
        "12° Culpa constante, por quase tudo ou tudo",
        "13° Dificuldade em aceitar o éxito ",
        '14° impotência psíquica ( "não consigo, não tenho força" )',
        "15° Autossabotagem",
        "16° Inibições variadas ",
        "17° Rigidez ",
        "18° Infelicidade profissional ",
        "19° Ciúme que inviabiliza relações ",
        "20° Dificuldades com o corpo",
        "21° Vazio, tristeza",
      ]
    }
  ]


}
