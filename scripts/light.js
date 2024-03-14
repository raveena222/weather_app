const butts = document.getElementById('lightMode');


butts.addEventListener('click', function () {

    if (!this.dataset.clicked) {

        this.setAttribute('data-clicked', 'true');

        document.getElementById('button1').style.backgroundColor = '#007FFF';

        document.querySelector('.sidebar').style.backgroundColor = 'white';

        document.querySelector('.main').style.backgroundColor = '#ECF3F9';

        document.querySelector('.icon').style.backgroundColor = '#007FFF';

        document.querySelector('.temp').style.color = 'gray';

        document.querySelector('.loca').style.color = 'red';

        document.getElementById('num5').style.color = 'black';

        document.getElementById('header').style.color = '#007FFF';

        document.getElementById('idea1').style.backgroundColor = 'white';

        document.getElementById('idea2').style.backgroundColor = 'white';

        document.getElementById('idea3').style.backgroundColor = 'white';

        document.getElementById('idea4').style.backgroundColor = 'white';

        document.getElementById('idea5').style.backgroundColor = 'white';

        document.getElementById('bl1').style.backgroundColor = 'white';

        document.getElementById('bl2').style.backgroundColor = 'white';

        document.getElementById('bl3').style.backgroundColor = 'white';

        document.getElementById('bl4').style.backgroundColor = 'white';

        document.getElementById('bl5').style.backgroundColor = 'white';

        document.getElementById('bl6').style.backgroundColor = 'white';

        document.getElementById('day1').style.color = 'gray';

        document.getElementById('day2').style.color = 'gray';

        document.getElementById('day3').style.color = 'gray';

        document.getElementById('day4').style.color = 'gray';

        document.getElementById('day5').style.color = 'gray';

        document.getElementById('bl1').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('bl2').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('bl3').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('bl4').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('bl5').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('bl6').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('idea1').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('idea2').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('idea3').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('idea4').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('idea5').style.boxShadow = ' 0 4px 8px 0 rgba(0, 127, 255, 0.2), 0 4px 8px 0 rgba(0, 127, 255, 0.19)';

        document.getElementById('al1').style.color = 'gray';

        document.getElementById('al2').style.color = 'gray';

        document.getElementById('al3').style.color = 'gray';

        document.getElementById('al4').style.color = 'gray';

        document.getElementById('al5').style.color = 'gray';

        document.getElementById('al6').style.color = 'gray';

        document.getElementById('num1').style.color = 'gray';

        document.getElementById('cl1').style.color = 'gray';

        document.getElementById('num2').style.color = 'gray';

        document.getElementById('cl2').style.color = 'gray';

        document.getElementById('num3').style.color = 'gray';

        document.getElementById('cl3').style.color = 'gray';

        document.getElementById('num4').style.color = 'gray';

        document.getElementById('cl4').style.color = 'gray';

        document.getElementById('num7').style.color = 'gray';

        document.getElementById('cl5').style.color = 'gray';

        document.getElementById('num9').style.color = 'gray';

        document.getElementById('cl6').style.color = 'gray';

        document.getElementById('sidebar1').style.backgroundColor = 'white';

        document.querySelector('.cross').style.color = '#007FFF';

        document.getElementById('button2').style.backgroundColor = "#007FFF";

        document.getElementById('text').style.backgroundColor = 'white';

        document.getElementById('text').style.borderColor = '#E7E7EB';

        document.querySelector('.glass').style.color = 'black';

        document.querySelector('.areas').style.color = "black";

        document.getElementById('text').style.color = 'black';

        document.querySelector('.dabba').style.backgroundColor='#ECF3F9'

        document.querySelector('.header').style.backgroundColor='#ECF3F9';

        document.body.style.backgroundColor='#ECF3F9';

    }
    else {
        this.removeAttribute('data-clicked');

        this.removeAttribute('style');

        document.getElementById('button1').style.backgroundColor = '#6E707A';

        document.querySelector('.sidebar').style.backgroundColor = '#1E213A';

        document.querySelector('.main').style.backgroundColor = '#100E1D';

        document.querySelector('.icon').style.backgroundColor = '#6E707A';

        document.querySelector('.temp').style.color = 'white';

        document.querySelector('.loca').style.color = 'red';

        document.getElementById('num5').style.color = 'white';

        document.getElementById('header').style.color = 'white';

        document.getElementById('idea1').style.backgroundColor = '#1E213A';

        document.getElementById('idea2').style.backgroundColor = '#1E213A';

        document.getElementById('idea3').style.backgroundColor = '#1E213A';

        document.getElementById('idea4').style.backgroundColor = '#1E213A';

        document.getElementById('idea5').style.backgroundColor = '#1E213A';

        document.getElementById('bl1').style.backgroundColor = '#1E213A';

        document.getElementById('bl2').style.backgroundColor = '#1E213A';

        document.getElementById('bl3').style.backgroundColor = '#1E213A';

        document.getElementById('bl4').style.backgroundColor = '#1E213A';

        document.getElementById('bl5').style.backgroundColor = '#1E213A';

        document.getElementById('bl6').style.backgroundColor = '#1E213A';

        document.getElementById('day1').style.color = 'white';

        document.getElementById('day2').style.color = 'white';

        document.getElementById('day3').style.color = 'white';

        document.getElementById('day4').style.color = 'white';

        document.getElementById('day5').style.color = 'white';

        document.getElementById('bl1').style.boxShadow = 'none';

        document.getElementById('bl2').style.boxShadow = ' none';

        document.getElementById('bl3').style.boxShadow = 'none';

        document.getElementById('bl4').style.boxShadow = 'none';

        document.getElementById('bl5').style.boxShadow = 'none';

        document.getElementById('bl6').style.boxShadow = 'none';

        document.getElementById('idea1').style.boxShadow = 'none';

        document.getElementById('idea2').style.boxShadow = 'none';

        document.getElementById('idea3').style.boxShadow = 'none';

        document.getElementById('idea4').style.boxShadow = 'none';

        document.getElementById('idea5').style.boxShadow = 'none';

        document.getElementById('al1').style.color = '#E7E7EB';

        document.getElementById('al2').style.color = '#E7E7EB';

        document.getElementById('al3').style.color = '#E7E7EB';

        document.getElementById('al4').style.color = '#E7E7EB';

        document.getElementById('al5').style.color = '#E7E7EB';

        document.getElementById('al6').style.color = '#E7E7EB';

        document.getElementById('num1').style.color = '#E7E7EB';

        document.getElementById('cl1').style.color = '#E7E7EB';

        document.getElementById('num2').style.color = '#E7E7EB';

        document.getElementById('cl2').style.color = '#E7E7EB';

        document.getElementById('num3').style.color = '#E7E7EB';

        document.getElementById('cl3').style.color = '#E7E7EB';

        document.getElementById('num4').style.color = '#E7E7EB';

        document.getElementById('cl4').style.color = '#E7E7EB';

        document.getElementById('num7').style.color = '#E7E7EB';

        document.getElementById('cl5').style.color = '#E7E7EB';

        document.getElementById('num9').style.color = '#E7E7EB';

        document.getElementById('cl6').style.color = '#E7E7EB';

        document.getElementById('sidebar1').style.backgroundColor = '#1E213A';

        document.querySelector('.cross').style.color = '#6E707A';

        document.getElementById('button2').style.backgroundColor = "#3C47E9";

        document.getElementById('text').style.backgroundColor = '#1E213A';

        document.getElementById('text').style.borderColor = '#6E707A';

        document.querySelector('.glass').style.color = 'white';

        document.querySelector('.areas').style.color = "white";

        document.getElementById('text').style.color = 'white';

        document.querySelector('.dabba').style.backgroundColor='#100E1D';

        document.querySelector('.header').style.backgroundColor='#100E1D';

        document.body.style.backgroundColor='#100E1D';

    }
})