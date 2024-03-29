function setData() {
	let contentsBox = document.getElementById("content_card_box");

	let totDiv = document.createElement('div');
	totDiv.setAttribute('id' , 'content_total_div');
	
	for(let data in mydata) {
		let div = document.createElement('div');
		div.setAttribute('class' , 'content_div');
		div.setAttribute('name' , 'content_div');
		let dataId = mydata[data].search;
		div.setAttribute('data-id' , dataId);
		let aTag = document.createElement('a');
		aTag.setAttribute('id' , 'content_a');
	
		let type = document.createElement('span');
		let typeCode = mydata[data].type;
		type.setAttribute('class' , 'content_type');
		let typeStr = '&nbsp;';
	
		if(typeCode=='1') {
			typeStr = 'BEST';
			type.classList.add('content_type_BEST');
		}else if(typeCode=='2') {
			typeStr = 'NEW';
			type.classList.add('content_type_NEW');
		}
			
		type.innerHTML = typeStr;
		
	
		let image = document.createElement('img');
		image.setAttribute('src' , path+(Number(data)+1)+'.png');
		image.setAttribute('class' , 'content_image');
	
		let box = document.createElement('span');
		box.innerHTML = mydata[data].box;
		box.setAttribute('class' , 'content_box');
	
		let category = document.createElement('span');
		category.innerHTML = mydata[data].category;
		category.setAttribute('class' , 'content_category');
	
		let title = document.createElement('h4');
		title.setAttribute('class' , 'content_title');
		title.innerHTML = mydata[data].title;
	
		let tag = document.createElement('h6');
		tag.setAttribute('class' , 'content_tag');
		tag.innerHTML = mydata[data].tag;
	
		//let detail = document.createElement('input');
		//detail.setAttribute('type' , 'hidden');
		//detail.setAttribute('id' , 'detail_'+(Number(data)+1));
		//detail.setAttribute('value' , mydata[data].detail);
	
		let tagStr = mydata[data].tag;
		let tagArr = tagStr.split(" ");
		
		for(let data of tagArr){
			let hashTag = data.replaceAll(' ','');
			if(hashTag !='' && !toolList.includes(hashTag)){
				if(!tagList.includes(hashTag)){
					tagList.push(hashTag);
				}
			}
		}
		let br = document.createElement('br');
		aTag.setAttribute('onclick' , 'getData("'+(Number(data)+1)+'");');
		aTag.appendChild(image);
		aTag.appendChild(br);

		div.appendChild(type);

		div.appendChild(aTag);
		
		div.appendChild(box);
		div.appendChild(category);
		div.appendChild(title);
		div.appendChild(tag);
	
		totDiv.appendChild(div);
		contentsBox.appendChild(totDiv);
	}
}

function searchData() {
	let contentDiv = document.getElementsByName("content_div");
	for(let data of contentDiv){
		data.style.display = 'none';
	}
	
	for(let i=0; i<contentDiv.length; i++){
		contentDiv[i].getAttribute('data-id');

		let dataSearch = mydata[i].search;
		if(dataSearch == undefined) dataSearch='';
		
		let dataType = '';
		try{
			dataType = mydata[i].type;
		}catch{
			dataType = '0';
		}
		
		if(BEST === false && NEW === false){
			if(searchKeyword == ''){
				contentDiv[i].style.display = 'block';
			}else{
				if(dataSearch.split(', ').includes(searchKeyword)){
					contentDiv[i].style.display = 'block';
				}
			}
			
		}else if(BEST === true && NEW === false){
			if(searchKeyword == ''){
				if(dataType == '1')contentDiv[i].style.display = 'block';
			}else {
				if(dataSearch.split(', ').includes(searchKeyword) && dataType == '1'){
					contentDiv[i].style.display = 'block';
				}
			}
			console.log('BEST');
		}else if(BEST === false && NEW === true){
			if(searchKeyword == ''){
				if(dataType == '2')contentDiv[i].style.display = 'block';
			}else {
				if(dataSearch.split(', ').includes(searchKeyword) && dataType == '2'){
					contentDiv[i].style.display = 'block';
				}
			}
			console.log('NEW');
		}
		
	}
}