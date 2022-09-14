function setData(selectedData) {
	let contentsBox = document.getElementById("content_card_box");

	let totDiv = document.createElement('div');
	totDiv.setAttribute('id' , 'content_total_div');
	
	for(let data in mydata) {
		let div = document.createElement('div');
		div.setAttribute('class' , 'content_div');
		div.setAttribute('name' , 'content_div');
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
		
		aTag.setAttribute('onclick' , 'getData("'+(Number(data)+1)+'");');
		aTag.appendChild(image);
		div.appendChild(type);
		div.appendChild(aTag);
		div.appendChild(box);
		div.appendChild(category);
		div.appendChild(title);
		div.appendChild(tag);
	
		totDiv.appendChild(div);
		contentsBox.appendChild(totDiv);
	}
	//total category hashtag
	for(let data of tagList){
		let aTag = document.createElement('a');
		aTag.setAttribute('onclick' , 'getTag("'+data+'");');
		aTag.setAttribute('id' , 'category_contents_hashtag');
		aTag.setAttribute('class' , 'category_contents_hashtag');
		aTag.innerHTML = data;
		document.getElementById('category_contents_tags').appendChild(aTag);
	}

	for(let data of toolList){
		let tool = data;
		let aTag = document.createElement('a');
		aTag.innerHTML = tool;
		aTag.setAttribute('onclick' , 'getTool("'+tool+'");');
		aTag.setAttribute('id' , 'category_contents_tool');
		aTag.setAttribute('class' , 'category_contents_tool');
		document.getElementById('category_contents_tools').appendChild(aTag);
	}
}


function resetData(selectedData) {
	if(selectedData == '#Indesign'){
		alert('작업물이 없습니다.');
		return;
	}
	let contentsBox = document.getElementById("content_card_box");

	let befDiv = document.getElementById("content_total_div");
	befDiv.remove();
	
	let aftDiv = document.createElement('div');
	aftDiv.setAttribute('id' , 'content_total_div');

	for(let data in mydata) {
		let selectedTagArr = mydata[data].tag.split(" ");
		
		for(let selTag of selectedTagArr){
			if(selTag == selectedData){
				
				let div = document.createElement('div');
				div.setAttribute('class' , 'content_div');
				div.setAttribute('name' , 'content_div');
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
				
				aTag.setAttribute('onclick' , 'getData("'+(Number(data)+1)+'");');
				aTag.appendChild(image);
				div.appendChild(type);
				div.appendChild(aTag);
				div.appendChild(box);
				div.appendChild(category);
				div.appendChild(title);
				div.appendChild(tag);
			
				aftDiv.appendChild(div);
				contentsBox.appendChild(aftDiv);
			}
		}
	}
}
