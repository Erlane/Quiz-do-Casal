import React, { Component } from 'react';
import styled from 'styled-components';
import Heart from './assets/heart.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, red, transparent, #4a1a10fa); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 40%;
  height: 70vh;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 1024px){
    width: 50%;
  }

  @media(max-width: 768px){
    width: 65%;
  }

  @media(max-width: 475px){
    width: 90%;
  }
`;

const SubConteinerHeader = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: red;
  font-size: 2.5rem;
  font-family: 'Dancing Script', cursive;
  padding: 0 1rem 1.2rem 0;
`;

const Image = styled.img`
  height: 6vh;
  transform: rotate(55deg);
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const SubContent = styled.div`
  width: 100%;
`;

const Paragraph = styled.p`
  color: #424242;
  font-size: 1.1rem;
  font-family: 'Lora', serif;
  text-align: center;
`;

const Span = styled.span`
  width: 100%;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 3px;
  color: #151515;
  font-size: 1.09rem;
  font-family: 'Lora', serif;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0.5rem 0.4rem;

  &:hover {
    background-color: #ECEEF0;
  }
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  width: 20%;
  background-color: red;
  border: 2px solid #8A0808;
  color: #FFFFFF;
  font-size: 1rem;
  font-style: italic;
  font-weight: bold;
  padding: 0.5rem 0;
  margin-top: 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ParagraphScore = styled.p`
  color: red;
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
  font-family: 'Lora', serif;

  @media(max-width: 475px){
    font-size: 1.3rem;
    margin-top: 3rem;
  }
`;

class App extends Component {
  constructor() {
    super()
    this.state = {
      myAnswer: null,
      currentQuestion: 0,
      userResponse: '',
      result: 0,
      respondeu: false,
      lastAnswer: undefined,
      listQuestion: [
        {
          id: 0,
          question: 'Onde conheçaram a se falar ?',
          options: ['Rede Social', 'Praia', 'Trabalho'],
          answer: 'Rede Social'
        },
        {
          id: 1,
          question: 'Primeira vez que ficaram ?',
          options: ['Shopping', 'Casarão', 'Praia'],
          answer: 'Casarão'
        },
        {
          id: 2,
          question: 'Primeiro filme assistido no cinema foi ?',
          options: ['Extraordinário', 'Velozes & Furiosos 6', 'O Rastro'],
          answer: 'O Rastro'
        },
        {
          id: 3,
          question: 'O que gostam de fazer juntos ?',
          options: ['Sair', 'Comer', 'Ver Filmes'],
          answer: 'Comer'
        },
        {
          id: 4,
          question: 'A primeira viagem juntos foi para ?',
          options: ['Cabo Frio', 'Chapada dos Veadeiros', 'Recife'],
          answer: 'Cabo Frio'
        },
        {
          id: 5,
          question: 'Estão juntos há ... ?',
          options: ['1.7meses', '2 anos', '2.8meses'],
          answer: '2.8meses'
        }
      ]
    };
  }

  handleChange = (option) => {
    this.setState({
      userResponse: option,
      respondeu: true,
    });
  }

  nextQuestion = () => {
    let { currentQuestion, result, userResponse, listQuestion } = this.state;
    const correct = listQuestion[currentQuestion].answer === userResponse;
    let isUltima = listQuestion.length - 1 === currentQuestion;
    if (correct) {
      result = result + 1;
      }
         this.setState({
          currentQuestion: currentQuestion + 1,
          result,
          respondeu: false,
          userResponse: '',
          lastAnswer: isUltima,   
        })
  }

  render() {
    const { listQuestion, currentQuestion, userResponse, respondeu, lastAnswer,result } = this.state;
    return (
      <Container>
        <SubContainer>
          <SubConteinerHeader>
            <Title>Quiz do Casal</Title> <Image src={Heart} alt='heart' />
          </SubConteinerHeader>
          <Content>
            {listQuestion.filter(item => item.id === currentQuestion).map(question => (
              <SubContent key={question.id}>
                {console.log()}
                <Paragraph>{question.question}</Paragraph>
                {question.options.map(option => (
                  <Span>
                    <label>
                      <Input
                        type="radio"
                        name="answer"
                        value={userResponse}
                        onChange={() => this.handleChange(option)}
                      />
                      {option}
                    </label>
                  </Span>))}
              </SubContent>
            ))}
          </Content>
          {!lastAnswer && <Button disabled={!respondeu} onClick={this.nextQuestion}>Next</Button>}
          {lastAnswer && <ParagraphScore>Parabéns por terminar o Quiz =)</ParagraphScore>}
          {lastAnswer && <ParagraphScore>Sua pontuação é {result} de {listQuestion.length} !</ParagraphScore>}
        </SubContainer>
      </Container>
    );
  }
}

export default App;
