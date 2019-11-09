let button = document.querySelector('.add');
        let input = document.querySelector('#inpt');
        let M_block = document.querySelector('.M_block');
        let txt = document.querySelector('#t');
        let Container = document.querySelector('.Container');
        let button2 = document.querySelector('.hide_all');

        button.addEventListener('click', () => {
           let text = input.value;
           let all_blocks = document.querySelectorAll('.block');
           let one_block = document.querySelector('.block');
           
           if(input.value == "") {
           	  Message('Вы не можете добавить заметку, так как поле ввода пустое', 'red');
           }

           else {
           	  let quest = prompt('Является ли эта заметка важной для вас?');

           	  Add(text, quest);

           	  $('.Container').css({height:'+=170px'});

           	  Message('Была добавлена новая заметка', 'green');

           	  input.value = "";
           }

           switch(all_blocks.length) {
              case 15:
                 if(confirm('Больше 16 элементов добавить нельзя, хотите удалить?')) {
           	  	    all_blocks.forEach((al_b) => {
                       al_b.classList.add('hide2');

                        Message('Вы удалили все свои заметки', 'red');

                        $('.Container').css({height:'-=2380px'});
           	  	    });
           	     } else {
           	     	alert('Тогда, вы просто не можете добавлять больше элементов. Вы все равно должны всех их удалить!');

           	     	all_blocks.forEach((al_b) => {
                       al_b.classList.add('hide2');

                        Message('Вы удалили все свои заметки', 'red');

                        $('.Container').css({height:'-=2380px'});
           	  	    });
           	     }
           	     break;
           }
        });

        input.addEventListener('keyup', () => {
           input.style.boxShadow = '0 0 25px blue';

           switch(input.value.length) {
           	  case 30:
           	    Message('Вы не можете добавить заметку с более чем 30-ю символами', 'red');
           	    break;
           	  case 0:
           	    input.style.boxShadow = '0 0 0 white';
           	    break;
           }
        });

        button2.addEventListener('click', () => {
           let blocks = document.querySelectorAll('.block');  

           if(blocks.length == 0) Message('Вам нечего удалять, так как заметок нет', 'red');

           else {
           	  blocks.forEach((bl) => {
                 bl.classList.add('hide2');

                 Message('Вы удалили все свои заметки', 'red');

                 switch(blocks.length) {
                 	case 1:
                 	    $('.Container').css({height:'-=170px'});
                 	    break;
                 	case 2:
                 	    $('.Container').css({height:'-=340px'});
                 	    break;
                 	case 3:
                        $('.Container').css({height:'-=510px'});
                        break;
                    case 4:
                        $('.Container').css({height:'-=680px'});
                        break;
                    case 5:
                        $('.Container').css({height:'-=850px'});
                        break;
                    case 6: 
                        $('.Container').css({height:'-=1020px'});
                        break;
                    case 7:
                        $('.Container').css({height:'-=1190px'});
                        break;
                    case 8:
                        $('.Container').css({height:'-=1360px'});
                        break;
                    case 9:
                        $('.Container').css({height:'-=1360px'});
                        break;
                    case 10:
                        $('.Container').css({height:'-=1530px'});
                        break;
                    case 11: 
                        $('.Container').css({height:'-=1700px'});
                        break;
                    case 12:
                        $('.Container').css({height:'-=1870px'});
                        break;
                    case 13:
                        $('.Container').css({height:'-=2040px'});
                        break;
                    case 14:
                        $('.Container').css({height:'-=2210px'});
                        break;
                    case 15:
                        $('.Container').css({height:'-=2380px'});
                        break;
                 }
           	  });
           }
        });

        function Message(tx, clr) {
           M_block.classList.add('show_m');

           txt.textContent = tx;

           M_block.style.background = clr;

           setTimeout(() => {
              M_block.classList.remove('show_m');
           }, 3500); 
        }

        function Add(arg, arg2) {
        	let block = document.createElement('div');
        	let face_str = document.createElement('div');
        	let Span = document.createElement('span');
        	let busket_b = document.createElement('div');
        	let busket = document.createElement('i');
        	let plus_block = document.createElement('div');
        	let plus = document.createElement('i');
        	let status = document.createElement('span');
        	let Time_b = document.createElement('div');
        	let time = document.createElement('span');
        	let st = 'Статус:';

        	block.className = 'block';
        	Span.className = 'Span';
        	busket_b.className = 'busket_b';
        	busket.className = 'fab fa-bitbucket busket';
        	status.className = 'status';
        	Time_b.className = 'Time_b';
        	time.className = 'time';
        	plus_block.className = 'plus_block';
        	plus.className = 'fas fa-plus plus';

            Container.appendChild(block);
            block.appendChild(Span);
            block.appendChild(busket_b);
            busket_b.appendChild(busket);
            block.appendChild(status);
            block.appendChild(Time_b);
            Time_b.appendChild(time);
            Time_b.appendChild(plus_block);
            plus_block.appendChild(plus);

            Span.textContent = arg;

            let date = new Date();

            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            time.innerHTML = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;

            switch(arg2) {
            	case 'Да':
            	case 'ДА':
            	case 'Конечно':
            	case 'да':
            	case 'Однозначно':
            	case 'Очень':
            	case 'Вне совмения':
            	case 'Очень важно':
            	case 'Важно':
            	   status.textContent = `${st} Важное`;
            	   block.style.background = 'rgb(0, 255, 0)';
            	   break;
            	case 'Не совсем':
            	case 'Не очень':
            	case 'Сделаю завтра':
            	case 'Сделаю потом':
            	case 'Можно отложить':
            	   status.textContent = `${st} Можно отложить`;
            	   block.style.background = 'rgb(255,255,51)';
            	   break;
            	case 'Нет':
            	case 'НЕТ':
            	case 'нет':
            	case 'Не важно':
            	case 'Вообще не важно':
            	case 'Плевать':
            	   status.textContent = `${st} Не важно`;
            	   block.style.background = 'white';
            	   break;
            	default: 
            	   status.textContent = `${st} отсутствует`;
            	   block.style.background = 'white';
            	   break; 
            }

            block.addEventListener('mouseover', () => {
               Time_b.classList.add('show2');
            });

            block.addEventListener('mouseout', () => {
               Time_b.classList.remove('show2');
            }); 

            plus.addEventListener('click', (e) => {
               plus.classList.add('rot');

               Span.classList.toggle('cherk');

               Message('Вы выполнили свою задачу, теперь вы можете её удалить))', 'green'); 

               Time_b.classList.remove('show2');

               status.textContent = `${st} задача выполнена`;

               setTimeout(() => {
                  plus.classList.remove('rot');
               }, 250);
            }); 

            busket.addEventListener('click', () => {
                  block.classList.add('hide2');

                  $('.Container').css({height:'-=170px'}); //Уменьшаем контейнер в размере

                  Message('Вы удалили вашу задачу', 'red');
            });
        }