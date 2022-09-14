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
	//console.log(data);
}

function getTool(data){
	resetData(data);
	//alert(data);
}


function getDetail(){
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