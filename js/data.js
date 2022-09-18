let tagList = [];
let toolList = ['#Photoshop', '#Illustrator', '#Indesign', '#XD'];
let path = './images/product/';
let mydata = JSON.parse(JSON.stringify(data));
let modalIdx = 1;
let modalNum = 1;

let searchKeyword = '';
let BEST = false;
let NEW = false;

function getData(data){
	modalIdx = data;
	getDetail();
}

function setCheckBox(val){
	if(val=='ALL'){
		BEST = false;
		NEW = false;
	}
	if(val=='BEST'){
		BEST = true;
		NEW = false;
	}
	if(val=='NEW'){
		BEST = false;
		NEW = true;
	}
	setSearchData();
}
function viewAll(){
	searchKeyword = '';
	setSearchData();
}
function setCategory(val){
	searchKeyword = val;
	setSearchData();
}

function setSearchData(){
	searchData();
}


function getDetail(){
	modalNum = 1;
	setImg();
	//setSpan();
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

//function setSpan(){
//	let setSpan = document.getElementById('modal_detail_span');
//	let val = document.getElementById('detail_'+modalIdx).value;
//	setSpan.innerHTML = val;
//}

function closeDetail(){
	let modal = document.getElementById('modal');
	modal.classList.remove('active');
}

function getImgPop(){
	let url = "../images/product/images/"+modalIdx+"/"+modalNum+".jpg";
	let name = modalNum+".jpg";

	let _width = window.screen.width ;
	let _height = window.screen.height;
 
	// 팝업을 가운데 위치시키기 위해 아래와 같이 값 구하기
	let _left = Math.ceil(( window.screen.width - _width )/2);
	let _top = Math.ceil(( window.screen.height - _height )/2); 
 
	window.open(url, name, 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top );
}