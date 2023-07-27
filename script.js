let score=JSON.parse(localStorage.getItem('score')) || 
            {
            win: 0,
            loose: 0,
            Tie: 0};

            document.querySelector('.js-score').innerHTML=`Win: ${score.win} ~ Tie: ${score.Tie} ~ Loose: ${score.loose}`;
            
            function print(yourMove,computerMove,result){
                if(result=='WIN') score.win++;
                else if(result=='Tie') score.Tie++;
                else score.loose++;

                localStorage.setItem('score',JSON.stringify(score));
                // alert(`You picked ${yourMove} and Computer picked ${computerMove}: \n\n Result: ${result} \n\n Score: "Win: ${score.win}", "Tie: ${score.Tie}" "Loose: ${score.loose}"`);
    
                document.querySelector('.js-comMove').innerHTML=`${computerMove}`;
                document.querySelector('.js-result').innerHTML=`${result}`;
                document.querySelector('.js-score').innerHTML=`Win: ${score.win} ~ Tie: ${score.Tie} ~ Loose: ${score.loose}`;
                
                return;
            }

            function generateMove(){
                let computerMove=Math.random();
                if(computerMove>=0 && computerMove<1/3) computerMove='rock';
                else if(computerMove>=1/3 && computerMove<2/3) computerMove='paper';
                else if(computerMove>=2/3 && computerMove<=1) computerMove='scissor';

                return computerMove;
            }

            function result(yourMove){
                const computerMove=generateMove();
                let result;

                if(yourMove===computerMove){
                    result='TIE';
                    print(yourMove,computerMove,result);
                    return;
                }
                
                if(yourMove=='rock'){
                    if(computerMove=='paper'){
                        result='LOOSE';
                        print(yourMove,computerMove,result);
                    }
                    else if(computerMove=='scissor'){
                        result='WIN';
                        print(yourMove,computerMove,result);
                    }
                }
                else if(yourMove=='paper'){
                    if(computerMove=='rock'){
                        result='WIN';
                        print(yourMove,computerMove,result);
                    }
                    else if(computerMove=='scissor'){
                        result='LOOSE';
                        print(yourMove,computerMove,result);
                    }
                }
                else if(yourMove=='scissor'){
                    if(computerMove=='paper'){
                        result='WIN';
                        print(yourMove,computerMove,result);
                    }
                    else if(computerMove=='rock'){
                        result='LOOSE';
                        print(yourMove,computerMove,result);
                    }
                }

            }