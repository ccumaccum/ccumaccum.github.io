let tagList = [];
let toolList = ['#Photoshop', '#Illustrator', '#Indesign', '#XD'];
let path = './images/product/';
let mydata = JSON.parse(JSON.stringify(data));
let modalIdx = 1;
let modalNum = 1;

function getData(data){
	modalIdx = data;
	getDetail();
}

function getTag(data){
	resetData(data);
}

function getTool(data){
	resetData(data);
}


function getDetail(){
	modalNum = 1;
	setImg();
	setSpan();
	let modal = document.getElementById('modal');
	modal.classList.add('active');
}

function modalImgChange(val){
	modalNum += val;
	setImg();
}

function onErrorImage() {
	modalNum = 1;
	setImg();
}

function setImg(){
	let loc = 'images/product/images/'+modalIdx+'/'+modalNum+'.jpg';
	let img = document.getElementById('modal_img');
	img.setAttribute('src' , loc);
}

function setSpan(){
	let setSpan = document.getElementById('modal_detail_span');
	let val = document.getElementById('detail_'+modalIdx).value;
	setSpan.innerHTML = val;
}

function closeDetail(){
	let modal = document.getElementById('modal');
	modal.classList.remove('active');
}

function getImgPop(){
	let url = "../images/product/images/"+modalIdx+"/"+modalNum+".jpg";
	let name = modalNum+".jpg";

	let _width = '1200';
	let _height = '900';
 
	// 팝업을 가운데 위치시키기 위해 아래와 같이 값 구하기
	let _left = Math.ceil(( window.screen.width - _width )/2);
	let _top = Math.ceil(( window.screen.height - _height )/2); 
 
	window.open(url, name, 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top );
}