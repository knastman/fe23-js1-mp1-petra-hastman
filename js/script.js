/******* JavaScript 1 - Miniprojekt 1:DOM och Flow *****/

//Rubriker som ökar storlek & ändrar bgfärg
for (let i=1; i<6; i++){
  const h2 = document.createElement('h2');
  document.body.append(h2);
  h2.innerText = 'Rad' + ' ' + i;

  h2.style.color = '#6e6eee';
  h2.style.textAlign = 'Center';

  const fontSize = i*54;
  h2.style.fontSize = fontSize + '%';

  const bgColorHue = 90 + i*20;
  h2.style.backgroundColor = `hsl(${bgColorHue} 83% 86%)`;
}

//Box med tre boxar

//Ytterboxen
const outerDiv = document.createElement('div');
document.body.append(outerDiv);

outerDiv.style.border = '1px solid #ccc';
outerDiv.style.padding = '50px';
outerDiv.style.display = 'flex';
outerDiv.style.justifyContent = 'center';
outerDiv.style.gap = '25%';

//De tre innerboxarna
for(let i=0; i<3; i++){
  const innerDiv = document.createElement('div');
  outerDiv.append(innerDiv);
  innerDiv.style.border = '6px solid #a8a8eb';

  const ul = document.createElement('ul');
  innerDiv.append(ul);
  ul.style.listStyleType ='none';
  ul.style.margin ='0';
  ul.style.padding ='0';

  const li = document.createElement('li');
  ul.append(li);
  ul.style.width ='40px';

  //Första boxen
  if (i == 0) {
    for(let i=0; i<10; i++){
      const li = document.createElement('li');
      ul.append(li);
      li.innerText = i;
      if(i%2 == 0){
        li.style.backgroundColor ='#000';
        li.style.color ='#fff';
      }
      if(i == 4){
        li.style.backgroundColor ='#a8a8eb';
      }
    }
  }

  //Andra boxen
  if (i == 1) {
    innerDiv.style.textAlign = 'center';
    for(let i=9; i>=0; i--){
      const li = document.createElement('li');
      ul.append(li);
      li.innerText = i;
      if(i%2 == 0){
        li.style.backgroundColor ='#000';
        li.style.color ='#fff';
      }
       if(i == 8){
        li.style.backgroundColor ='#a8a8eb';
      }
    }
  }

  //Tredje boxen
  const liText = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']; 
  if (i == 2) {
    innerDiv.style.textAlign = 'right';
    for(let i=0; i<10; i++){
      const li = document.createElement('li');
      ul.append(li);
      li.innerText = liText[i];
      if(i%2 == 0){
        li.style.backgroundColor ='#000';
        li.style.color ='#fff';
      }
      if(i == 5){
        li.style.backgroundColor ='#a8a8eb';
      }
    }
  }
}