
    new Vue({
        el: '#app',
        data: {
            playerHealth:100,
            MonsterHealth:100,
            gameIsRunning: false,
            turns:[]
        },
        methods:{
            startGame: function(){
                this.gameIsRunning=true;
                this.playerHealth=100;
                this.MonsterHealth=100;
                
            },
            attack:function(){
                var max=10;
                var min=3;
                var damage= Math.max(Math.floor(Math.random() * max)+1,min);
                var damageM= Math.max(Math.floor(Math.random() * max)+1,min);
                this.MonsterHealth-=damage;
                this.playerHealth-=damageM;
                this.turns.unshift({
                    isPlayer: true,
                    text:'Player hits Monster for ' + damage
                });
                this.turns.unshift({
                    isMonster: true,
                    text:'Monster hits Player for ' + damageM
                });
                if(this.MonsterHealth <=0){
                    alert('Que forte! uau');
                    this.gameIsRunning=false;
                    window.location.reload();
                    return;
                };
                if(this.playerHealth <=0){
                    alert('É BIXÃO MESMU');
                    this.gameIsRunning=false;
                    window.location.reload();
                    return;
                    
                }
            },
            specialAttack:function(){
                var superAtk=this.MonsterHealth-10;
                if(this.playerHealth <=50){
                    alert('Ataque magico!');
                    this.MonsterHealth-=superAtk;
                    

                }
            
            },
            heal:function(){
                if(this.playerHealth <=20){
                    alert('Poção magica do fortnite! glu glu glu');
                    this.playerHealth+=50;
                }

            },
            giveUp:function(){
                this.gameIsRunning=false;
                alert('Não aguento mais!')
                return;

            }
        }
    });
