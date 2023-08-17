const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrase = document.getElementById('subhanAllahIncrase');
const subhanAllahDecrase = document.getElementById('subhanAllahDecrase');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrase = document.getElementById('alhamdulillahIncrase');
const alhamdulillahDecrase = document.getElementById('alhamdulillahDecrase');

let subhanAllahcount = 0;

          subhanAllahIncrase.addEventListener('click', function () {
          if (subhanAllahcount === 33) {
                    return alert('please add others value');
          }
          subhanAllahcount += 1;
          subhanAllahDisplay.innerText = subhanAllahcount;
          });

          subhanAllahDecrase.addEventListener('click', function () {
          if (subhanAllahcount === 0) {
                    return alert('you can not decarse it to negative value');
          }
          subhanAllahcount -= 1;
          subhanAllahDisplay.innerText = subhanAllahcount;
          });
          
let alhamdulillahcount = 0;

          alhamdulillahIncrase.addEventListener('click', function () {
          if (alhamdulillahcount === 33) {
                    return alert('please add others value');
          }
          alhamdulillahcount += 1;
          alhamdulillahDisplay.innerText = alhamdulillahcount;
          });

          alhamdulillahDecrase.addEventListener('click', function () {
          if (alhamdulillahcount === 0) {
                    return alert('you can not decarse it to negative value');
          }
          alhamdulillahcount -= 1;
          alhamdulillahDisplay.innerText = alhamdulillahcount;
          });


          const allahuakbarDisplay = document.getElementById('allahuakbarDisplay');
          const allahuakbarIncrase = document.getElementById('allahuakbarIncrase');
          const allahuakbarDecrase = document.getElementById('allahuakbarDecrase');
          

          let allahuakbarcount = 0;

          allahuakbarIncrase.addEventListener('click', function () {
                    if (allahuakbarcount === 33) {
                              return alert('please add others value');
                    }
                    allahuakbarcount += 1;
                    allahuakbarDisplay.innerText = allahuakbarcount;
                    });
          
                    allahuakbarDecrase.addEventListener('click', function () {
                    if (allahuakbarcount === 0) {
                              return alert('you can not decarse it to negative value');
                    }
                    allahuakbarcount -= 1;
                    allahuakbarDisplay.innerText = allahuakbarcount;
                    });

                    const resetButton = document.getElementById('resetButton');
          resetButton.addEventListener('click', function() {

                    subhanAllahDisplay.innerText = 0;
                    alhamdulillahDisplay.innerText = 0;
                    allahuakbarDisplay.innerText = 0;

                    subhanAllahcount = 0;
                    alhamdulillahcount = 0;
                    allahuakbarcount= 0;
            });